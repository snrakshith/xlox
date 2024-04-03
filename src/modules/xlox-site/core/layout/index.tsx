import XloxNavbar from "../navbar";
import XloxFooter from "../footer";

export function XloxLayout({ children }: any) {
  return (
    <>
      <XloxNavbar />
      {children}
      <XloxFooter />
    </>
  );
}
