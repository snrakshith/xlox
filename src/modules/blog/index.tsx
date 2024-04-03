import { BlogDetails } from "./components/blog-details";
import { BlogHome } from "./components/blog-home";
import BlogLayout from "./core/layout";

export default function BlogModule() {
  return (
    <>
      <BlogLayout>
        <BlogHome />
        <BlogDetails />
      </BlogLayout>
    </>
  );
}
