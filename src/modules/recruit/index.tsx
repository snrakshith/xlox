import { Route, Routes } from "react-router-dom";
import { RecruitDetails } from "./components/recruit-details";
import { BlogHome } from "./components/blog-home";
import RecruitLayout from "./core/layout";
import { NotFoundPage } from "@/pages/errors/error-page";

export default function RecruitModule() {
  return (
    <RecruitLayout>
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/:recruitId" element={<RecruitDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </RecruitLayout>
  );
}
