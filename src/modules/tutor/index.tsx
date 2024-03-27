import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { About } from "./about";
import { Settings } from "./settings";
import Media from "./media";
import { Comunity } from "./comunity";

// https://www.npmjs.com/package/react-markdown
// https://www.npmjs.com/package/marked
export function TutorModule() {
  return (
    <>
      <Tabs defaultValue="scope" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="1">About</TabsTrigger>
          <TabsTrigger value="2">Comunity</TabsTrigger>
          <TabsTrigger value="3">Media</TabsTrigger>
          <TabsTrigger value="4">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="1">
          <About />
        </TabsContent>
        <TabsContent value="2">
          <Comunity />
        </TabsContent>
        <TabsContent value="3">
          <Media />
        </TabsContent>
        <TabsContent value="4">
          <Settings />
        </TabsContent>
      </Tabs>
    </>
  );
}
