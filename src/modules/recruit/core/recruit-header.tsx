import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import { RecruitLogo } from "../components/recruit-logo";
import { Button } from "@/components/ui/button";

export default function RecruitHeader() {
  return (
    <>
      <div className="bg-white flex items-center justify-between p-3">
        <div className="flex items-center ms-5">
          <RecruitLogo />
          <span className="font-bold text-lg ms-3">recruit</span>
        </div>
        <div className="flex items-center gap-6">
          <Link to={"/"} className="flex">
            <Home size={16} />
            <span className="font-medium text-gray-500 text-xs ms-2">Home</span>
          </Link>
          <Link to={"/jobs"} className="flex">
            <Home size={16} />
            <span className="font-medium text-gray-500 text-xs ms-2">Jobs</span>
          </Link>
          <Link to={"/matches"} className="flex">
            <Home size={16} />
            <span className="font-medium text-gray-500 text-xs ms-2">
              Matches
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <input
            className="p-3 rounded-full h-8 bg-slate-100"
            type="text"
            name=""
            id=""
            placeholder="Search here..."
          />
          <Button variant="xlox" className="rounded-full h-8">
            Post Jobs
          </Button>
          <span className="me-5">
            <RecruitLogo />
          </span>
        </div>
      </div>
    </>
  );
}
