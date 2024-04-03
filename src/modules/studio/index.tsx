import AuthPage from "@/pages/auth";
import { StudioLayout } from "./core/layout";
import RootLayout from "./core/_/layouts/RootLayout";
import { Route, Routes } from "react-router-dom";
import AllApps from "./pages/AllApps";
import Authentication from "./pages/Authentication";
import Stroage from "./pages/Stroage";
import { Settings } from "../tutor/settings";
import Build from "./pages/Build";
import Analytics from "./pages/Analytics";
import "./core/_/index.css";
import SimpleRootLayout from "./simple/app/layout";
import Home from "./simple/app/home";
import ProjectsPage from "./simple/app/projects";
import WebDesignPage from "./simple/app/projects/web-design";
import { NotFoundPage } from "@/pages/errors/error-page";
import MessagesPage from "./simple/app/messages";
import AccountPage from "./simple/app/settings/account";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";
import { Breadcrumbs } from "./simple/components/breadcrumbs";

export default function StudioModule() {
  const loggedIn = false;
  return (
    <div>
      {loggedIn ? (
        <>
          <AuthPage />
        </>
      ) : (
        // <StudioLayout>
        // <RootLayout>
        //   <Routes>
        //     <Route path="/" element={<AllApps />} />
        //     <Route path="/authentication" element={<Authentication />} />
        //     <Route path="/stroage" element={<Stroage />} />
        //     <Route path="/settings" element={<Settings />} />
        //     <Route path="/build/:bID" element={<Build />} />
        //     <Route path="/analytics/:aID" element={<Analytics />} />
        //   </Routes>
        // </RootLayout>
        <SimpleRootLayout>
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/web-design" element={<WebDesignPage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/settings/account" element={<AccountPage />} />
            <Route path="/analytics/:aID" element={<Analytics />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <ScrollToTopButton />
        </SimpleRootLayout>
        // </StudioLayout>
      )}
    </div>
  );
}
