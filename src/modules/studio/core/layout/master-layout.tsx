import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import SiteFooter from "../footer";
import SiteToolbar from "../toolbar";
import SiteNavbar from "../navbar";
import SiteSidebar from "../siderbar";

function MasterLayout({ children }: any) {
  return (
    <>
      <SiteNavbar />
      <SiteToolbar />
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[200px] max-w-md rounded-lg border"
      >
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full w-full items-center justify-center p-6">
            <SiteSidebar />
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={100}>
          <div className="flex h-full w-full items-center justify-center p-6">
            {children}
          </div>
          <SiteFooter />
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
}

export default MasterLayout;
