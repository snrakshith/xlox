import SiteLogo from "./site-logo";
import { NavItems } from "./nav-items";
import { Button } from "@/components/ui/button";

export default function XloxNavbar() {
  return (
    <div className="flex items-center justify-between w-full p-5 pb-0">
      {/* <Announcments /> */}
      <SiteLogo />
      <div className="flex">
        <span className="me-5">
          <NavItems />
        </span>
        <Button variant="outline" className="me-5">
          Schedule a Demo
        </Button>
        <Button variant="xlox">Try it out!</Button>
      </div>
    </div>
  );
}
