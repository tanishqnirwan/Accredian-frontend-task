import Navbar from "../components/Navbar";
import Tabs from "../components/Tabs";
import InfoBanner from "../components/InfoBanner";
import Refer_Sec from "../components/Refer";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const ReferEarnPage = () => {
  return (
    <div className="w-full relative bg-homeaccrediancom-nero overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[0.1px] box-border leading-normal tracking-normal text-left text-base-9 text-homeaccrediancom-mine-shaft1 font-inter">
      <InfoBanner />
      <Navbar />
      <Tabs />
      <Refer_Sec />
      <Faq />
      <Footer />
    </div>
  );
};

export default ReferEarnPage;