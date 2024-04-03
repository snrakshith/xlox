import ExclusiveOffer from "@/components/banners/exclusive-offer";
import PricingPlan from "@/components/pricing-plans";
import { BlogGrid } from "./blog-grid";
import { BlogHero } from "./blog-hero";

export function BlogHome() {
  return (
    <>
      <BlogHero />
      <BlogGrid title="Blogs." />
      <PricingPlan />
      <ExclusiveOffer />
    </>
  );
}
