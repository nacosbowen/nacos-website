import React, { useEffect } from "react";
import Navbar from "../components/FirstPage/navbar";
import Abouthero from "../components/AboutPage/abouthero";
import Whoweare from "../components/AboutPage/whoweare";
import Executives from "../components/FirstPage/executives.jsx";
import Internet from "../components/AboutPage/partners";
import OurDepartments from "../components/AboutPage/ourDepartments";
import Footer from "../components/FirstPage/footer";
import ScrollToTop from "../ui/ScrollToTop";
import { scrollToTop } from "../utils/utils.js";

const About = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div>
      <Navbar />
      <Abouthero />
      <Whoweare />
      <OurDepartments />
      <Executives />
      <ScrollToTop/>
      <Internet />
      <Footer />
    </div>
  );
};

export default About;
