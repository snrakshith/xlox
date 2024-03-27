import CardLinks from "./components/card-links";
import FAQWithDropdown from "./components/faq-with-dropdown";
import HorizontalImageContent from "./components/features/horizontal-image-content";
import FeatureList from "./components/features/feature-list";
import ImageContent from "./components/features/image-content";
import Segments from "./components/segments";
import Services from "./components/services";
import SpringLayout from "./core/layout";

function SpringLandingPage() {
  return (
    <div className="">
      <SpringLayout>
        <CardLinks />
        <FeatureList />
        <ImageContent />
        <HorizontalImageContent />
        <Segments />
        <Services />
        <FAQWithDropdown />
      </SpringLayout>
    </div>
  );
}

export default SpringLandingPage;
