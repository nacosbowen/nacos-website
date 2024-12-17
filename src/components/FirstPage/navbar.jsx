// /* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../../../src/public/images/navbar/NACOS LOGO.png";
import arrowdown from "../../../src/public/icons/arrowdown.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };
  const toggleMore = () => {
    setShowMore(!showMore);
  };

  const togglenav = () => {
    setShowMobile(!showMobile);
  };

  useEffect(() => {
    // eslint-disable-  next-line @typescript-eslint/no-explicit-any
    const handleOutsideClick = (event) => {
      const dropdownElement = document.querySelectorAll(".About");
      dropdownElement.forEach((el) => {
        if (showAbout && el && !el.contains(event.target)) {
          setShowAbout(false);
        }
      });
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showAbout]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleOutsideClick = (event) => {
      const dropdownElement = document.querySelectorAll(".More");
      dropdownElement.forEach((el) => {
        if (showMore && el && !el.contains(event.target)) {
          setShowMore(false);
        }
      });
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMore]);

  const navLinks = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "NACOS Bowen",
      link: "/about"
    },
    {
      name: "Executives",
      link: "/executives"
    },
    {
      name: "Advisers and Coordinators",
      link: "/level-advisers"
    },
    {
      name: "Blogs",
      link: "/blogs"
    },
    {
      name: "Past Questions",
      link: "/pastQuestions"
    },
    {
      name: "Events",
      link: "/events"
    }
  ]

  return (
    <div>
      <div className="flex px-2 py-2 lg:px-[4rem] lg:py-4 flex-row justify-between items-center relative  shadow-lg shadow-black-500/50 ">
        <div>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>

        <div className="lg:block hidden">
          <ul className="flex gap-2 lg:gap-12">
            <li>
              <a
                className="font-Poppins text-base font-medium text-navdark"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <div
                className="flex items-center gap-2 relative  About"
                onClick={toggleAbout}
              >
                <div className="flex items-center cursor-pointer gap-2">
                  <div
                    className="font-Poppins text-base font-medium text-navdark
                  cursor-pointer"
                    href="/about"
                  >
                    About Us
                  </div>

                  <img src={arrowdown} alt="" />
                </div>

                {showAbout && (
                  <div className="flex justify-start items-start bg-[white] gap-[0.9rem] flex-col w-[200%] rounded-[0.5rem] pr-0  px-4 py-4 absolute shadow-xl top-[100%] ">
                    <a href="/About" className="text-navDrop ">
                      NACOS Bowen
                    </a>
                    <a href="executives" className="text-navDrop ">
                      Our Executives
                    </a>
                    <a href="/level-advisers" className="text-navDrop ">
                      Level Advisers & PCs
                    </a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 relative More">
                <div className="flex items-center gap-2" onClick={toggleMore}>
                  <Link
                    className="font-Poppins text-base font-medium text-navdark"
                    href="#"
                  >
                    More
                  </Link>
                  <img src={arrowdown} alt="" />
                </div>
                {showMore && (
                  <div className="flex justify-start items-start bg-[white] gap-[0.9rem] flex-col w-[250%] rounded-[0.5rem] pr-0  px-4 py-4 absolute shadow-xl top-[100%] right-[-4rem]">
                    <a href="/Blogs" className="text-navDrop ">
                      Blogs
                    </a>
                    <a href="/PastQuestions" className="text-navDrop ">
                      Past Questions
                    </a>
                  </div>
                )}
              </div>
            </li>
            {/* <li>
              <a
                className="font-Poppins text-base font-medium text-navdark"
                href="/Events"
              >
                Events
              </a>
            </li> */}
          </ul>
        </div>
        <button onClick={togglenav} className="lg:hidden flex cursor-pointer">
          {showMobile ? (
            <FaTimes className="z-50 fixed right-[2.5%] top-[3%] text-black w-[1.5rem] h-[1.5rem]" />
          ) : (
            <FaBars className="text-black h-[2rem] cursor-pointer w-[1.5rem]" />
          )}
        </button>

        {showMobile ? (
          <div className="px-2 py-2 lg:px-[4rem] lg:py-4 h-[100vh] fixed top-0 left-0 w-full lg:hidden block items-center bg-[white] z-40">
            <div className="w-fit">
              <a href="/">
                <img src={logo} alt="logo" />
              </a>
            </div>

            <div className="w-full flex flex-col sm:w-[100%] gap-[3rem] absolute top-[60px]">
              <ul className="flex flex-col lg:hidden gap-[1rem] relative">
                <hr className="w-full" />
                {
                  navLinks.map((linkItem) => (
                    <li key={linkItem.name}>
                      <a href={linkItem.link} className="text-black text-lg">
                        {linkItem.name}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
