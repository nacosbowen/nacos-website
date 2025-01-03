/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import nacoslogo from "../../public/icons/NACOS LOGO 1.svg";
import bowenLogo from "../../public/icons/BOWEN LOGO 1.svg";
import { FaXTwitter, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../utils/utils";

const Footer = () => {
  const aboutUs = {
    title: "About Us",
    items: [
      { name: "Home", href: "/" },
      { name: "Bowen Nacos", href: "/about" },
      { name: "Executives", href: "/executives" },
      { name: "Level Advisers", href: "/level-advisers" },
    ],
  };

  const event = {
    title: "More",
    items: [
      { name: "Blog", href: "/blogs" },
      { name: "Past Questions", href: "/pastQuestions" },
      { name: "Events", href: "/events" },
    ],
  };

  const socialLinks = [
    {
      link: "https://www.tiktok.com/@nacosbowen",
      icon: <FaTiktok />,
    },
    {
      link: "https://www.instagram.com/nacosbowen",
      icon: <FaInstagram />,
    },
    {
      link: "https://twitter.com/nacosbu",
      icon: <FaXTwitter />,
    },
    {
      link: "https://www.linkedin.com/in/nacos-bowen-chapter-614a2625b/",
      icon: <FaLinkedin />,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-between items-center sm:items-start bg-darkorange py-4 md:px-[2.5rem] md:pt-8 md:pb-4 px-4 z-10">
      <div className="w-full flex flex-col sm:flex-row flex-wrap gap-8 justify-between items-center sm:items-start sm:gap-16">
        {/* Footer Logo */}
        <div className="w-max h-fit min-w-[90px] flex flex-col justify-center items-center p-3 sm:p-5 bg-white rounded-2xl cursor-pointer">
          <Link to={"/"}>
            <div className="flex justify-center items-center">
              <img src={nacoslogo} alt="" />
              <img src={bowenLogo} alt="" />
            </div>
            <h1 className="text-[20px] md:text-[25px] font-black text-[#A71E1E] uppercase whitespace-nowrap">
              Nacos Bowen
            </h1>
          </Link>
        </div>

        {/* Footer navlinks */}
        <div className="w-[100%] sm:w-[50%] text-left flex flex-wrap justify-between">
          <ul className="flex flex-col gap-3">
            <li className="text-white font-bold text-[1.2rem]">
              {aboutUs.title}
            </li>
            {aboutUs.items.map((item, index) => (
              <li
                key={index}
                className="text-[1rem] text-[#ddd] hover:text-white font-normal cursor-pointer hover:underline"
              >
                <Link to={item.href} className="">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            <li className="text-white font-bold text-[1.2rem]">
              {event.title}
            </li>
            {event.items.map((item, index) => (
              <li
                key={index}
                className="text-[1rem] text-[#ddd] hover:text-white font-normal cursor-pointer  hover:underline"
              >
                <Link to={item.href} onClick={scrollToTop}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer contact section*/}
      </div>
      <div className="flex flex-col justify-center items-center gap-2 sm:items-start mt-8">
        <h5 className="text-white font-bold text-[1.1rem]">Contact</h5>
        <a
          className="text-[#ddd] font-normal text-[.98rem] mb-3"
          href="mailto:nacosbowen@gmail.com"
        >
          nacosbowen@gmail.com
        </a>

        {/* Social links */}
        <div className="flex justify-start gap-4 items-center">
          {socialLinks.map((linkItem) => (
            <a
              href={linkItem.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl p-2 md:p-3 bg-white rounded-full"
              key={linkItem.link}
            >
              {linkItem.icon}
            </a>
          ))}
        </div>

        <p className="text-white text-[12px] font-normal text-center sm:text-[14px] md:text-[16px] lg:text-[18px]">
          Iwo, Osun State
        </p>
      </div>

      <hr className="w-full border border-white my-5 md:my-5" />

      <div className="w-full flex justify-center items-center">
        <p className="text-white text-[8px] font-normal text-center sm:text-[14px] md:text-[16px] lg:text-[18px]">
          NACOS BOWEN is a registered trademark of Bowen University. &copy;
          2021-{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
