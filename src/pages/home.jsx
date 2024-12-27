import React from "react";
import Navbar from "../components/FirstPage/navbar.jsx";
import Hero from "../components/FirstPage/hero.jsx";
import About from "../components/FirstPage/about.jsx";
import Executives from "../components/FirstPage/executives.jsx";
import BLOG from "../components/FirstPage/blogg.jsx";
import Footer from "../components/FirstPage/footer.jsx";
import Internet from "../components/AboutPage/partners.jsx";

const Home = () => {
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
      <Footer />
    </div>
  );
};

export default Home;
