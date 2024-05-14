import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from "@editorjs/checklist";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Warning from "@editorjs/warning";

const rawDocument = {
  time: 1550476186479,
  blocks: [
    {
      data: {
        text: "Document Name",
        level: 2,
      },
      id: "123",
      type: "header",
    },
    {
      data: {
        level: 4,
      },
      id: "1234",
      type: "header",
    },
  ],
  version: "2.8.1",
};

export function Editor({
  onSaveTrigger,
  fileId,
  fileData,
}: {
  onSaveTrigger: any;
  fileId: any;
  fileData: any;
}) {
  const ref = useRef<EditorJS>();
  useEffect(() => {
    fileData && initEditor();
  }, [fileData]);

  useEffect(() => {
    console.log("triiger Value:", onSaveTrigger);
    onSaveTrigger && onSaveDocument();
  }, [onSaveTrigger]);

  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */

      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
          config: {
            placeholder: "Enter a Header",
          },
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
        checklist: {
          class: Checklist,
          inlineToolbar: true,
        },
        paragraph: {
          class: Paragraph,
          inlineToolbar: true,
        },
        warning: Warning,
      },

      holder: "editorjs",
      data: fileData?.document ? JSON.parse(fileData.document) : null,
    });
    ref.current = editor;
  };

  const onSaveDocument = () => {
    if (ref.current) {
      ref.current
        .save()
        .then((outputData) => {
          console.log("Article data: ", outputData);
          // call the api here pass body as
          /**
           *  _id: fileId
           *  document: JSON.stringify(outputData)
           */
        })
        .catch((error) => {
          console.log("Saving failed: ", error);
        });
    }
  };
  return (
    <div>
      <h1 className="text-center font-bold text-4xl">Your docs here!</h1>
      <div id="editorjs" className="bg-slate-400 h-screen"></div>
    </div>
  );
}
