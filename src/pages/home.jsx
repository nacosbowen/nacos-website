import React, { useEffect } from "react";
import Navbar from "../components/FirstPage/navbar.jsx";
import Hero from "../components/FirstPage/hero.jsx";
import About from "../components/FirstPage/about.jsx";
import Executives from "../components/FirstPage/executives.jsx";
import BLOG from "../components/FirstPage/blogg.jsx";
import Footer from "../components/FirstPage/footer.jsx";
import Internet from "../components/AboutPage/partners.jsx";
import { scrollToTop } from "../utils/utils.js";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Internet />

      <Executives />
      {/* <BLOG /> */}
      <BLOG header="Blog" link="/blogs" />
      {/* <Subscribe/> */}
      {/* <div>
        <Link
          to="/EDITION-3-INFOBITS.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Newsletter
        </Link>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
