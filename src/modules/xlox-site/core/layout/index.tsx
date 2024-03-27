import XloxNavbar from "../navbar";
import XloxFooter from "../footer";
import XloxHero from "../../components/hero";

function PublicLayout({ children }: any) {
  return (
    <div>
      <XloxNavbar />
      <XloxHero />
      {children}
      <XloxFooter />
    </div>
  );
}

export default PublicLayout;
