import { useEffect } from "react";
import { scrollToTop } from "../utils/utils.js";
import Navbar from "../components/FirstPage/navbar.jsx";
import ExecutivesDetails from "../components/ExecutivesPage/executivesDetails";
import Internet from "../components/AboutPage/partners.jsx";
import Footer from "../components/FirstPage/footer.jsx";
import ScrollToTop from "../ui/ScrollToTop.jsx";
import ExecutivesHero from "../components/ExecutivesPage/ExecutiveHero.jsx";

const NacosExecutives = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Navbar />
      <ExecutivesHero />
      <ExecutivesDetails />
      <Internet />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default NacosExecutives;
