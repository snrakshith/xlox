import { useDroppable } from "@dnd-kit/core";

export function Droppable({ children }: any) {
  // Handle drop event
  const handleDrop = (event: any) => {
    const droppedItem = event.dataTransfer.getData("text/plain");
    console.log("Item dropped:", droppedItem);
    // Perform actions based on the dropped item
  };

  // Use useDroppable hook to make the section droppable
  const { setNodeRef, isOver } = useDroppable({
    id: "droppable-area",
  });

  // Style for the droppable area
  const droppableStyle = {
    width: "100%",
    height: "100%",
    border: "2px dashed black",
    backgroundColor: isOver ? "lightblue" : "transparent",
  };

  return (
    <div className="flex max-w-screen h-screen w-full gap-4">
      <section
        ref={setNodeRef}
        style={droppableStyle}
        onDrop={(event) => {
          event.preventDefault();
          handleDrop(event);
        }}
        onDragOver={(event) => event.preventDefault()}
      >
        {children}
      </section>
    </div>
  );
}
