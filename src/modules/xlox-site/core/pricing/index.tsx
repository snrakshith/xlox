import PricingPlan from "./components/pricing-plans";
import ExclusiveOffer from "./components/banners/exclusive-offer";

export default function PricingPage() {
  return (
    <div>
      <h1 className="p-8 pb-2 text-pretty text-center text-gray-700 font-medium text-6xl">
        Pricing Page
      </h1>
      {/* Pricing Plans */}
      <PricingPlan />
      {/* Exclusive Offers */}
      <ExclusiveOffer />
    </div>
  );
}
