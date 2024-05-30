import { Allotment } from "allotment";
import "allotment/dist/style.css";

import { EditorApp } from "./app/editor";
import { ExcalidrawApp } from "./app/excalidraw";

export function BoardApp() {
  const isEditorVisible = true;
  return (
    <>
      <Allotment className="w-5 flex !h-[calc(100vh-0rem)] justify-between">
        {/* {isEditorVisible && (
          <Allotment.Pane preferredSize={650} maxSize={800} minSize={300}>
            <EditorApp />
          </Allotment.Pane>
        )} */}
        {/* <EditorApp /> */}
        {/* <Allotment.Pane>
        </Allotment.Pane> */}
        <ExcalidrawApp />
      </Allotment>
    </>
  );
}
