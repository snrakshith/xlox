import { TutorPage } from "@/pages/tutor";
import { WinsonPage } from "@/pages/winson";
import { StudioPage } from "@/pages/studio";
import { ZenPage } from "@/pages/zen";
import { XloxPage } from "@/pages/xlox";

import {
  studioCondition,
  schoolCondition,
  schoolNotFound,
  schoolSearchPage,
  siteCondition,
  tutorCondition,
  tutorNotFound,
  tutorSearchPage,
  zenCondition,
  blogCondition,
} from "../route-map";
import Search from "@/modules/fallback/search";
import { NotFoundPage } from "@/pages/errors/error-page";
import NotFound from "@/modules/fallback/not-found";
import { BrowserRouter } from "react-router-dom";
import BlogModule from "@/modules/blog";

export default function PublicRouter() {
  const getTemplate = () => {
    // school not found page
    if (schoolNotFound) {
      return <NotFound term="School" />;
    } else if (schoolCondition) {
      return <WinsonPage />;
      // Search school page
    } else if (schoolSearchPage) {
      return (
        <>
          <Search term="school" />
        </>
      );
    } else if (tutorNotFound) {
      return <NotFound term="Tutor" />;
      // Search tutor page
    } else if (tutorSearchPage) {
      return <Search term="tutor" />;
    } else if (tutorCondition) {
      return <TutorPage />;
    } else if (siteCondition) {
      return <XloxPage />;
    } else if (zenCondition) {
      return <ZenPage />;
    } else if (blogCondition) {
      return <BlogModule />;
    }
    // Show studio app for xlox platform
    else if (studioCondition) {
      return <StudioPage />;
    } else {
      return <NotFoundPage />;
    }
  };
  return (
    <>
      <BrowserRouter>{getTemplate()}</BrowserRouter>
    </>
  );
}
