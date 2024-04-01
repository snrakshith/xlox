import { Toaster } from "./components/ui/toaster";
import PublicRouter from "./routes/public";

function App() {
  return (
    <div className="w-full h-full flex-col">
      <PublicRouter />
      <Toaster />
    </div>
  );
}

export default App;
