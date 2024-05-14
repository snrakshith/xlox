import { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Button } from "@/components/ui/button";

export function EditorApp() {
  const [triggerSave, setTriggerSave] = useState(false);

  const [fileData, setFileData] = useState<File | any>();
  useEffect(() => {
    1 && getFileData();
  }, []);

  const getFileData = async () => {
    // const result = await convex.query(api.files.getFileById, {
    //   _id: params.fileId,
    // });
    const result = 1;
    setFileData(result);
  };
  return (
    <div className="flex flex-col m-5 p-4 relative">
      <div className="absolute top-0 right-5">
        <Button onClick={() => setTriggerSave(true)}>Save</Button>
      </div>
      <div className="w-full h-full">
        <Editor onSaveTrigger={triggerSave} fileId={1} fileData={fileData} />
      </div>
    </div>
  );
}
