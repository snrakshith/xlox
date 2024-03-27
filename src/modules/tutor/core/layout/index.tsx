import TutorNavbar from "../navbar";
import TutorFooter from "../footer";

export default function TutorLayout({ children }: any) {
  return (
    <div>
      <TutorNavbar />
      {children}
      <TutorFooter />
    </div>
  );
}
