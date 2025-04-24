import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/FirstPage/navbar";
import NewsHero from "../components/NewsLetter/NewsHero";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/FirstPage/footer";
import BLOG from "../components/FirstPage/blogg.jsx";
import Partner from "../components/AboutPage/partners";


const Newsletter = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div>
      <ToastContainer position="top-center" hideProgressBar closeButton={false} toastStyle={{maxWidth: '85%', borderRadius: '10px', marginTop: '4.5rem'}} />
      <Navbar />
      <NewsHero />
      <NewsLetter />
      {/* <TheBlogs header="Blogs" link="/blogs" /> */}
      <BLOG header="BLOGS" link="/blogs" headerColor="secondary" />
      <Partner />
      <Footer />
    </div>
  );
}

export default Newsletter