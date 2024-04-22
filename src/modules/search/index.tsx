import SchoolAds from "./ads/school";
import VerticalAds from "./ads/vertical";
import { Search } from "./components/search";

export function SearchPage({ term }: any) {
  return (
    <>
      <Search term={term} />
      <SchoolAds />
      <VerticalAds />
    </>
  );
}
