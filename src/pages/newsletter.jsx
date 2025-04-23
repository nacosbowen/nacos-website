import { useEffect } from "react";
import { scrollToTop } from "../utils/utils";
import Navbar from "../components/FirstPage/navbar";
import NewsHero from "../components/NewsLetter/NewsHero";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Footer from "../components/FirstPage/footer";
import TheBlogs from "../components/BlogsPage/TheBlogs";
import Partner from "../components/AboutPage/partners";


const Newsletter = () => {
   useEffect(() => {
      scrollToTop();
    }, []);
  return (
    <div>
      <Navbar />
      <NewsHero />
      <NewsLetter />
      <TheBlogs header="Blogs" link="/blogs" />
      <Partner />
      <Footer />
    </div>
  );
}

export default Newsletter