import { Toaster } from "./components/ui/toaster";
import TutorPage from "@/pages/tutor/TutorPage";
import XloxLandingPage from "@/modules/xlox-site/landing-page";
import AuthPage from "./pages/auth";
import WinsonPage from "./pages/winson/WinsonPage";

function App() {
  return (
    <div className="w-full h-full flex-col">
      {/* <AuthPage /> */}
      {/* <TutorPage /> */}
      <WinsonPage />
      {/* <XloxLandingPage /> */}
      <Toaster />
    </div>
  );
}

export default App;
