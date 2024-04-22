import { ReactNode } from "react";
import { TutorFooter } from "./tutor-footer";
import { TutorHeader } from "./tutor-header";
import { ScrollToTopButton } from "@/components/misc/scroll-to-top";

export function TutorLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TutorHeader />
      {children}
      <ScrollToTopButton />
      <TutorFooter />
    </>
  );
}
