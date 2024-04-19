import { BlogGrid } from "./blog-grid";
import { BlogHero } from "./blog-hero";
import Newsletter from "@/components/misc/newsletter";
import { SearchRecruit } from "./search-recruit";

export function BlogHome() {
  return (
    <>
      <BlogHero />
      <SearchRecruit />
      <BlogGrid title="Blogs." />
      <Newsletter />
    </>
  );
}
