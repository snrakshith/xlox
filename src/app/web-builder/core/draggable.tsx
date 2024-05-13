import { useDraggable } from "@dnd-kit/core";

// Higher-order component to make any child component draggable
export function withDraggable(Component: any) {
  return function DraggableWrapper(props: any) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
      id: props.id,
    });

    const style = transform
      ? {
          ...props.style, // Merge with existing styles
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        }
      : props.style; // Preserve original styles if no transform applied

    // Merge provided props with draggable props
    const childProps = {
      ...props,
      ref: setNodeRef,
      style: style,
      ...listeners,
      ...attributes,
    };

    // Render the child component with the provided props
    return <Component {...childProps} />;
  };
}
