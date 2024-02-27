import BuilderCards from "../src/components/builderCards/BuilderCards";
import SpecialDeals from "./components/SpecialDeals";
import RelatedBuilderCards from "./components/relatedBuilderCard/RelatedBuilderCards";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import TopHeader from "./components/topHeader/TopHeader";
const Page = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1024px] mx-auto px-6">
        <TopHeader />
        <BuilderCards />
        <RelatedBuilderCards />
        <SpecialDeals />
      </div>
      <Footer />
    </div>
  );
};

export default Page;
