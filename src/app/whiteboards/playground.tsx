import React, { useState } from "react";

interface DraggableButtonProps {
  id: string;
  text: string;
}

const DraggableButton: React.FC<DraggableButtonProps> = ({ id, text }) => {
  const handleDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
    event.dataTransfer.setData("text/plain", id);
  };

  return (
    <button draggable onDragStart={handleDragStart}>
      {text}
    </button>
  );
};

const DropZone: React.FC = () => {
  const [buttons, setButtons] = useState<
    { id: string; left: number; top: number }[]
  >([]);
  const [draggedButton, setDraggedButton] = useState<{
    id: string;
    offsetX: number;
    offsetY: number;
  } | null>(null);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const buttonId = event.dataTransfer.getData("text/plain");
    const button = document.getElementById(buttonId);
    if (button) {
      const rect = event.currentTarget.getBoundingClientRect();
      const left = event.clientX - rect.left - button.offsetWidth / 2;
      const top = event.clientY - rect.top - button.offsetHeight / 2;
      setButtons((prevButtons) => [
        ...prevButtons,
        { id: buttonId, left, top },
      ]);
    }
  };

  const handleDragStart = (event: React.DragEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id;
    const offsetX =
      event.clientX - event.currentTarget.getBoundingClientRect().left;
    const offsetY =
      event.clientY - event.currentTarget.getBoundingClientRect().top;
    setDraggedButton({ id: buttonId, offsetX, offsetY });
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (draggedButton) {
      const rect = event.currentTarget.getBoundingClientRect();
      const left = event.clientX - rect.left - draggedButton.offsetX;
      const top = event.clientY - rect.top - draggedButton.offsetY;
      setButtons((prevButtons) =>
        prevButtons.map((button) =>
          button.id === draggedButton.id ? { ...button, left, top } : button
        )
      );
    }
  };

  const handleDragEnd = () => {
    setDraggedButton(null);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        border: "1px solid black",
        position: "relative",
      }}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onMouseMove={handleMouseMove}
    >
      <h2 style={{ textAlign: "center", margin: 0 }}>Drop Zone</h2>
      {buttons.map(({ id, left, top }) => (
        <button
          key={id}
          style={{ position: "absolute", left: `${left}px`, top: `${top}px` }}
          draggable="false"
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {id}
        </button>
      ))}
    </div>
  );
};

const Playground: React.FC = () => {
  return (
    <div>
      <DraggableButton id="button1" text="Button 1" />
      <DraggableButton id="button2" text="Button 2" />
      <DropZone />
    </div>
  );
};

export { Playground };
