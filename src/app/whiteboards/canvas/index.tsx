import React, { useCallback, useEffect, useRef, useState } from "react";
import { SketchPicker } from "react-color";

interface CanvasProps {
  width: number;
  height: number;
}

type Coordinate = {
  x: number;
  y: number;
};

// const Canvas: React.FC<CanvasProps> = ({ width, height }) => {
const Canvas = ({ width, height }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPainting, setIsPainting] = useState(false);
  const [mousePosition, setMousePosition] = useState<Coordinate | undefined>(
    undefined
  );
  const [strokeColor, setStrokeColor] = useState("#000000");
  const [undoStack, setUndoStack] = useState<any[]>([]);
  const [redoStack, setRedoStack] = useState<any[]>([]);
  const [isLocked, setIsLocked] = useState(false);
  const [zoom, setZoom] = useState(1);

  const startPaint = useCallback(
    (event: MouseEvent) => {
      if (!isLocked) {
        const coordinates = getCoordinates(event);
        if (coordinates) {
          setMousePosition(coordinates);
          setIsPainting(true);
          setUndoStack([...undoStack, canvasRef.current?.toDataURL()]);
        }
      }
    },
    [undoStack, isLocked]
  );

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousedown", startPaint);
    return () => {
      canvas.removeEventListener("mousedown", startPaint);
    };
  }, [startPaint]);

  const paint = useCallback(
    (event: MouseEvent) => {
      if (isPainting) {
        const newMousePosition = getCoordinates(event);
        if (mousePosition && newMousePosition) {
          drawLine(mousePosition, newMousePosition);
          setMousePosition(newMousePosition);
        }
      }
    },
    [isPainting, mousePosition]
  );

  const drawLine = (
    originalMousePosition: Coordinate,
    newMousePosition: Coordinate
  ) => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext("2d");
    if (context) {
      context.strokeStyle = strokeColor; // Set stroke color;
      context.lineJoin = "round";
      context.lineWidth = 5;

      context.beginPath();
      context.moveTo(originalMousePosition.x, originalMousePosition.y);
      context.lineTo(newMousePosition.x, newMousePosition.y);
      context.closePath();

      context.stroke();
    }
  };
  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mousemove", paint);
    return () => {
      canvas.removeEventListener("mousemove", paint);
    };
  }, [paint]);

  const exitPaint = useCallback(() => {
    setIsPainting(false);
    setMousePosition(undefined);
    setRedoStack([]);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    canvas.addEventListener("mouseup", exitPaint);
    canvas.addEventListener("mouseleave", exitPaint);
    return () => {
      canvas.removeEventListener("mouseup", exitPaint);
      canvas.removeEventListener("mouseleave", exitPaint);
    };
  }, [exitPaint]);

  const getCoordinates = (event: MouseEvent): Coordinate | undefined => {
    if (!canvasRef.current) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    return {
      x: (event.clientX - rect.left) / zoom,
      y: (event.clientY - rect.top) / zoom,
    };
  };

  const undo = () => {
    if (undoStack.length > 1) {
      const lastState = undoStack[undoStack.length - 2];
      setRedoStack([...redoStack, undoStack.pop()]);
      const image = new Image();
      image.src = lastState;
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        image.onload = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(image, 0, 0, width, height);
        };
      }
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const redoState = redoStack[redoStack.length - 1];
      setUndoStack([...undoStack, redoStack.pop()]);
      const image = new Image();
      image.src = redoState;
      const ctx = canvasRef.current?.getContext("2d");
      if (ctx) {
        image.onload = () => {
          ctx.clearRect(0, 0, width, height);
          ctx.drawImage(image, 0, 0, width, height);
        };
      }
    }
  };

  const exportAsSVG = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <img src="${canvas.toDataURL("image/png")}" alt="canvas" />
        </div>
      </foreignObject>
    </svg>`;

    const svgBlob = new Blob([svgContent], { type: "image/svg+xml" });
    const svgUrl = URL.createObjectURL(svgBlob);

    const link = document.createElement("a");
    link.href = svgUrl;
    link.download = "canvas_image.svg";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(svgUrl);
  };

  const clearCanvas = () => {
    // @ts-ignore
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (ctx) {
      ctx.clearRect(0, 0, width, height);
      setUndoStack([canvas.toDataURL()]);
      setRedoStack([]);
    }
  };

  // color pallete functionlities of the canvas
  const handleColorChange = (color: any) => {
    if (!isLocked) {
      setStrokeColor(color.hex);
    }
  };

  // Zoom Functionlities of the canvas
  const zoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const zoomOut = () => {
    if (zoom > 0.1) {
      setZoom(zoom - 0.1);
    }
  };

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.scale(zoom, zoom);
    }

    return () => {
      if (ctx) {
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform
      }
    };
  }, [zoom]);

  const canvasStyle = {
    transform: `scale(${zoom})`,
  };

  //   Locking the canvas
  const toggleLock = () => {
    setIsLocked(!isLocked);
  };

  return (
    <div className="relative flex h-screen w-full">
      <canvas
        ref={canvasRef}
        height={height}
        width={width}
        style={{ border: "1px solid black", ...canvasStyle }}
      />
      <div className="absolute top-0 left-0">
        <SketchPicker color={strokeColor} onChange={handleColorChange} />
      </div>
      <div className="absolute top-0 right-0">
        <button onClick={toggleLock}>{isLocked ? "Unlock" : "Lock"}</button>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        <button onClick={exportAsSVG}>Export as SVG</button>
        <button onClick={clearCanvas}>Clear</button>
      </div>
    </div>
  );
};

Canvas.defaultProps = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export default Canvas;
