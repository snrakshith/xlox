import { BlogGrid } from "./blog-grid";
import { BlogHero } from "./blog-hero";
import Newsletter from "@/components/misc/newsletter";
import { TutorSearch } from "./tutor-search";
import Stats from "./home/stats";
import OSC from "./home/our-services-component";
import CTABlock from "./home/cta-block";
import UserAvatar from "./home/user-avatar";

export function TutorHome() {
  return (
    <>
      <BlogHero />
      <TutorSearch />
      <BlogGrid title="Blogs." />
      <Stats />
      <CTABlock />
      <OSC />
      <UserAvatar />
      <Newsletter />
    </>
  );
}
