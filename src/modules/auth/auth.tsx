import CardAds from "./components/card-ads";
import { RegisterForm } from "./pages/register";

export function AuthPage() {
  return (
    <div className="w-full h-full flex-col bg-slate-100">
      <div className="flex">
        <CardAds />
        <div className="rounded-sm w-8/12 h-screen flex justify-center items-center ">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
