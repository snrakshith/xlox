import ExclusiveOffer from "@/modules/xlox-site/core/pricing/components/banners/exclusive-offer";
import PricingPlan from "@/modules/xlox-site/core/pricing/components/pricing-plans";
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
