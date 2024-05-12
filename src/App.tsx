import DraftEditor from "./app/editor";
import Whiteboards from "./app/whiteboards";
import { Toaster } from "./components/ui/toaster";

import PublicRouter from "./routes/public";

function App() {
  return (
    <div className="w-full h-full flex-col">
      {/* <PublicRouter /> */}
      <DraftEditor />
      {/* <Whiteboards /> */}
      <Toaster />
    </div>
  );
}

export default App;
