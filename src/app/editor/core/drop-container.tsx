import React from "react";
import { Droppable } from "./droppable";

export default function DropContainer({ children }: any) {
  return (
    <div>
      <Droppable>{children}</Droppable>
    </div>
  );
}
