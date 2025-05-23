import React from "react";
import about2 from "../../public/images/Home-Page/nacos-about-us.webp";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const About = () => {
  return (
    <div className="bg-grey home-about-container">
      <div className="py-12 md:px-[3rem] px-4 md:py-16 lg:py-24 z-50">
        <div className="text-center ">
          {/* About section on mobile screens */}
          <div>
            <h1 className="text-dark text-[2rem] font-semibold leading-[150%] lg:hidden ">
              About Us
            </h1>
            <div className="lg:hidden my-[24px] flex justify-center items-center border-grey p-3 shadow-md">
              <img src={about2} alt="nacos bowen" />
            </div>
            <p className="text-dark md:text-[1.2rem] xl:text-center text-center text-base font-normal leading-[217%]  lg:hidden px-[.5rem] w-fit">
              The{" "}
              <strong>
                Nigeria Association of Computing Students (BOWEN Chapter)
              </strong>{" "}
              is a student body dedicated to fostering academic excellence among
              computing students in various departments, providing resources and
              support systems to enhance learning. We are committed to
              facilitating professional development through skill-building,
              networking opportunities
            </p>
            <button className="lg:hidden mt-[22px]">
              <Link
                to={"/about"}
                className="text-[#fff] bg-[#7D1515] flex mx-auto px-2 justify-center items-center rounded-[24px]"
              >
                <p className="text-[.9rem] p-[10px]">Learn More</p>
                <BsArrowRight />
              </Link>
            </button>

            {/* Home page about section large screens */}
            <div className="h-[500px] hidden lg:flex gap-[50px] mx-[5em] justify-center items-center">
              <div className="shadow p-[1rem] flex-1 min-w-[400px] z-50">
                <div className="h-full">
                  <img src={about2} alt="nacos bowen" />
                </div>
              </div>
              <div className="flex-1 text-left bg-gradient-to-tl from-[#0c1a3e] via-[#2b3d6a] to-[#0c1a3e] text-white shadow-xl p-[2rem] min-w-[500px]">
                <p className="font-bold text-3xl">About Us</p>
                {/* <p className="mb-2">Bowen Nacos</p> */}
                <br />
                <p className="leading-[250%]">
                  The{" "}
                  <strong>
                    Nigeria Association of Computing Students (BOWEN Chapter)
                  </strong>{" "}
                  is a student body dedicated to fostering academic excellence
                  among computing students in various departments, providing
                  resources and support systems to enhance learning. We are
                  committed to facilitating professional development through
                  skill-building, networking opportunities, and exposure to
                  industry trends. Our mission extends to building a supportive
                  community, where students can connect, collaborate, and share
                  experiences.
                </p>
                <br />
                <br />
                <Link to={"/about"} className=" mt-4 py-4 ">
                  <button className="border-2 border-white hover:bg-[#A71E1E] hover:translate-y-[-5px] transition-all ease-linear duration-300 flex gap-2 items-center p-[10px]">
                    <p className="text-[.9rem] text-[#fff] uppercase font-bold">
                      Learn More
                    </p>
                    <BsArrowRight />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
