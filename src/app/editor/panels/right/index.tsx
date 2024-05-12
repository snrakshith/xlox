// RightPanel.js
import React from "react";
import { withDraggable } from "../../core/draggable";

export default function RightPanel({ onDragStart }: any) {
  // Example draggable components
  const DraggableButton = withDraggable("button");
  const DraggableImage = withDraggable("img");
  const DraggableParagraph = withDraggable("p");

  return (
    <div>
      <h1>RightPanel</h1>
      <DraggableButton
        id="draggable-button"
        style={{ backgroundColor: "blue" }}
        draggable
        onDragStart={onDragStart}
      >
        Draggable Button
      </DraggableButton>
      <DraggableImage
        id="draggable-image"
        src="image.jpg"
        alt="Image"
        style={{ border: "2px solid red" }}
        draggable
        onDragStart={onDragStart}
      />
      <DraggableParagraph
        id="draggable-text"
        style={{ fontStyle: "italic" }}
        draggable
        onDragStart={onDragStart}
      >
        This text is draggable
      </DraggableParagraph>
    </div>
  );
}
