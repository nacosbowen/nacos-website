import Navbar from "../components/FirstPage/navbar.jsx";
import ExecutivesDetails from "../components/ExecutivesPage/executivesDetails";
import Internet from "../components/AboutPage/partners.jsx";
import Footer from "../components/FirstPage/footer.jsx";
import ScrollToTop from "../ui/ScrollToTop.jsx";

const NacosExecutives = () => {
  return (
    <div>
      <Navbar />
      <ExecutivesDetails />
      <Internet />
      <ScrollToTop/>
      <Footer />
    </div>
  );
};

export default NacosExecutives;
