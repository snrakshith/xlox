import { DndContext } from "@dnd-kit/core";
import { Droppable } from "./core/droppable";
import EditorLayout from "./core/layout";
import LeftPanel from "./panels/left";
import RightPanel from "./panels/right";
import { useState } from "react";

export default function DraftEditor() {
  const [droppedComponent, setDroppedComponent] = useState(null);

  const handleDragStart = (event: any) => {
    // Set the dragged component's ID as the dropped component
    setDroppedComponent(event.currentTarget.id);
    console.log("event", event);
  };
  const handleDragEnd = (event: any) => {
    // Check if the dragged component is dropped outside of the droppable area
    if (!event.over && event.over.id === "droppable") {
      setDroppedComponent(null);
    }
  };
  console.log("Dropped component:", droppedComponent); // Log dropped component for debugging
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <EditorLayout>
        <div className="bg-gray-200 p-4 w-[275px]">
          <RightPanel onDragStart={handleDragStart} />
        </div>
        <div className="bg-gray-200 p-4 w-[950px]">
          <Droppable>
            {droppedComponent && (
              <div>Dropped Component: {droppedComponent}</div>
            )}
          </Droppable>
        </div>
        <div className="bg-gray-500 p-4 w-[275px]">
          <LeftPanel />
        </div>
      </EditorLayout>
    </DndContext>
  );
  // function handleDragEnd(event: any) {
  //   if (event.over && event.over.id === "droppable") {
  //     setIsDropped(true);
  //   }
  // }
}
