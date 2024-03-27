import { AuthForm } from "./auth-form";
import LoginLogo from "../../assets/illustrations/tablet-login.svg";

function AuthPage() {
  return (
    <div className="w-full h-full flex-col">
      <div className="flex">
        <div className="rounded-sm w-6/12 h-screen flex justify-center items-center bg-slate-100">
          <img src={LoginLogo} alt="Login Logo" className="w-4/6 h-4/6" />
        </div>
        <div className="rounded-sm w-6/12 h-screen flex justify-center items-center bg-slate-300">
          <AuthForm />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
