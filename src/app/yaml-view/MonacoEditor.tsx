import Editor, { useMonaco } from "@monaco-editor/react";
import { useCallback, useEffect, useRef } from "react";
// import { debounce, useCustomTheme, useFile } from "@jsonlens/json-parts";

const editorOptions = {
  formatOnPaste: true,
  formatOnType: true,
  minimap: {
    enabled: false,
  },
};

const MonacoEditor = () => {
  //   const { isDarkMode } = useCustomTheme();

  const setIsLoading = false;
  const theme = true ? "vs-dark" : "light";
  //   const format = useFile((state) => state.format);

  const monaco = useMonaco();
  //   const [contents, setContents] = useFile((state) => [
  //     state.contents,
  //     state.setContents,
  //   ]);

  //   const debouncedSetContents = debounce((contents) => {
  //     setContents(contents);
  //   }, 800);

  useEffect(() => {
    monaco?.languages.json.jsonDefaults.setDiagnosticsOptions({
      validate: true,
      allowComments: true,
    });
  }, [monaco?.languages.json.jsonDefaults]);

  // const handleGraphChange = useCallback(
  //   (contents: string | undefined) => {
  //     if (contents === undefined) return;

  //     debouncedSetContents(contents);
  //   },
  //   [setContents]
  // );
  function handleEditorChange(value: any, event: any) {
    console.log("here is the current model value:", value);
  }
  const editorRef = useRef(null);

  function handleEditorDidMount(editor: any) {
    // here is the editor instance
    // you can store it in `useRef` for further usage
    editorRef.current = editor;
  }
  return (
    // <Editor
    //   //   theme={theme}
    //   height="100%"
    //   //   language={"json"}
    //   //   options={editorOptions}
    //   //   onMount={false}
    //   //   value={""}
    //   onMount={handleEditorDidMount}
    //   onChange={handleEditorChange}
    //   defaultLanguage="javascript"
    //   defaultValue="// some comment"
    // />
    <Editor
      height="100vh"
      defaultLanguage="javascript"
      defaultValue="// some comment"
    />
  );
};

export default MonacoEditor;
