import { Allotment } from "allotment";
import "allotment/dist/style.css";

import { EditorApp } from "./app/editor";
import { ExcalidrawApp } from "./app/excalidraw";
import { YLens } from "./app/yaml-view/ylens";

import { Toaster } from "./components/ui/toaster";

import PublicRouter from "./routes/public";

function App() {
  const isEditorVisible = true;
  return (
    <>
      {/* <PublicRouter /> */}
      {/* <YLens /> */}

      <Allotment className="w-5 flex !h-[calc(100vh-0rem)] justify-between">
        {isEditorVisible && (
          <Allotment.Pane preferredSize={650} maxSize={800} minSize={300}>
            <EditorApp />
          </Allotment.Pane>
        )}
        <Allotment.Pane>
          <ExcalidrawApp />
        </Allotment.Pane>
      </Allotment>

      <Toaster />
    </>
  );
}

export default App;
