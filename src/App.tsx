import { BoardApp } from "./BoardApp";
import { SampleApp } from "./app/react-joyride-&-confetti";
import MonacoEditor from "./app/yaml-view/MonacoEditor";
import { YLens } from "./app/yaml-view/ylens";

import { Toaster } from "./components/ui/toaster";

import PublicRouter from "./routes/public";

function App() {
  return (
    <>
      {/* <PublicRouter /> */}
      {/* <YLens /> */}

      {/* <BoardApp /> */}

      <SampleApp />
      {/* <MonacoEditor /> */}
      <Toaster />
    </>
  );
}

export default App;
