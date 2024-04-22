import { Route, Routes } from "react-router-dom";
import { TutorDetails } from "./components/tutor-details";
import { TutorHome } from "./components/tutor-home";
import { TutorLayout } from "./core/tutor-layout";
import { NotFoundPage } from "@/pages/errors/error-page";

export function TutorModule() {
  return (
    <TutorLayout>
      <Routes>
        <Route path="/" element={<TutorHome />} />
        <Route path="/jobs/:tutorId" element={<TutorDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </TutorLayout>
  );
}
