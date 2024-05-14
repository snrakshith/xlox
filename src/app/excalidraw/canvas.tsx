import { useEffect, useState } from "react";
import { Excalidraw, MainMenu, WelcomeScreen } from "@excalidraw/excalidraw";

export function CanvasContainer({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: any;
}) {
  const [whiteBoardData, setWhiteBoardData] = useState<any>();

  //   const updateWhiteboard = useMutation(api.files.updateWhiteboard);
  useEffect(() => {
    onSaveTrigger && saveWhiteboard();
  }, [onSaveTrigger]);
  const saveWhiteboard = () => {
    // updateWhiteboard({
    //   _id: fileId,
    //   whiteboard: JSON.stringify(whiteBoardData),
    // }).then((resp) => console.log(resp));
    // console.log("whiteboards", whiteBoardData);
  };
  return (
    <div style={{ height: "670px" }}>
      {fileData && (
        <Excalidraw
          theme="light"
          initialData={{
            elements: fileData?.whiteboard && JSON.parse(fileData?.whiteboard),
          }}
          onChange={(excalidrawElements, appState, files) =>
            setWhiteBoardData(excalidrawElements)
          }
          UIOptions={{
            canvasActions: {
              saveToActiveFile: false,
              loadScene: false,
              export: false,
              toggleTheme: false,
            },
          }}
        >
          <MainMenu>
            <MainMenu.DefaultItems.ClearCanvas />
            <MainMenu.DefaultItems.SaveAsImage />
            <MainMenu.DefaultItems.ChangeCanvasBackground />
          </MainMenu>
          <WelcomeScreen>
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.MenuHint />
            <WelcomeScreen.Hints.ToolbarHint />
            <WelcomeScreen.Center>
              <WelcomeScreen.Center.MenuItemHelp />
            </WelcomeScreen.Center>
          </WelcomeScreen>
        </Excalidraw>
      )}
    </div>
  );
}
