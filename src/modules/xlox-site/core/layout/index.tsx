import XloxNavbar from "../navbar";
import XloxFooter from "../footer";
import CTA from "../../components/cta";

export function XloxLayout({ children }: any) {
  return (
    <>
      <XloxNavbar />
      {children}
      <CTA />
      <XloxFooter />
    </>
  );
}
