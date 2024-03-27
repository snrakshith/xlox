import PublicLayout from "./core/layout";
import Team from "./components/team";
import WinsonLogo from "../../assets/overview.png";
import TestimonialsPage from "./components/testimonials";
import TrustedBy from "./components/trusted-by";
import TutorialPage from "./components/tutorial";

function XloxLandingPage() {
  return (
    <>
      <PublicLayout>
        <p>LandingPage</p>
        <TestimonialsPage />
        <TrustedBy />

        <TutorialPage />
        <div className="flex flex-col items-center w-full">
          <div className="flex w-full h-1/6 p-5 bg-slate-100">
            <div className="w-6/12 flex justify-center items-center">
              <img
                src={WinsonLogo}
                alt="Login Logo"
                className="w-full h-full"
              />
            </div>
            <div className="w-6/12 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bolder text-black">
                Complete metrics
              </h1>
              <p className="mt-2 text-md font-medium text-slate-700">
                Every data point you may need
              </p>
            </div>
          </div>
          {/* 2nd Product */}
          <div className="w-full h-3 bg-white" />
          <div className="flex w-full h-1/6 p-5 bg-slate-100">
            <div className="w-6/12 flex flex-col justify-center items-center">
              <h1 className="text-5xl font-bolder">Complete metrics</h1>
              <p className="text-md font-medium text-slate-700">
                Every data point you may need
              </p>
            </div>
            <div className="w-6/12 flex justify-center items-center">
              <img
                src={WinsonLogo}
                alt="Login Logo"
                className="w-full h-full"
              />
            </div>
          </div>
          <Team />
        </div>
      </PublicLayout>
    </>
  );
}

export default XloxLandingPage;
