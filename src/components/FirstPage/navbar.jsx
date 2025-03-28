import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../src/public/images/navbar/NACOS LOGO.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { scrollToTop } from "../../utils/utils";

/* NavLink Component */
const NavBarLink = ({ to, label }) => (
  <NavLink className="font-Poppins text-base font-medium text-navdark" to={to}>
    {label}
  </NavLink>
);

/* Dropdown Menu Component */
const DropdownMenu = ({ label, items, isActive, toggle }) => (
  <div className="relative">
    <button
      className="font-Poppins text-base font-medium text-navdark flex items-center gap-2 cursor-pointer"
      onClick={toggle}
      aria-expanded={isActive}
    >
      {label}{" "}
      <MdKeyboardArrowDown className={`${isActive ? "rotate-180 transition-all" : ""} text-xl`} />
    </button>

    {isActive && (
      <div className="absolute bg-white w-max rounded-lg shadow-xl pt-4 top-[100%] right-0 transition-all duration-200">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className="block text-navDrop py-2 px-4 hover:bg-grey active:bg-grey text-nowrap"
            onClick={toggle} // Close dropdown when clicking a link
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    )}
  </div>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobile, setShowMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRefs = useRef({});

  // Toggle dropdown function (Ensures only one dropdown is open at a time)
  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileNavLinks = [
    { title: "Home", link: "/" },
    { title: "NACOS Bowen", link: "/about" },
    { title: "Executives", link: "/executives" },
    { title: "Level Advisers", link: "/level-advisers" },
    { title: "Blogs", link: "/blogs" },
    { title: "Past Questions", link: "/past-questions" },
  ];

  return (
    <div className={`w-full bg-white z-[1000] transition-all duration-300 shadow-md ${ "fixed"}`}>
      <div className="flex px-4 py-3 lg:px-10 lg:py-4 justify-between items-center relative">
        {/* Logo */}
        <Link to={"/"} onClick={scrollToTop}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-12">
          <NavBarLink to="/" label="Home" />

          {/* About Us Dropdown */}
          <div ref={(el) => (dropdownRefs.current["about"] = el)}>
            <DropdownMenu
              label="About Us"
              items={[
                { label: "NACOS Bowen", to: "/about" },
                { label: "Our Executives", to: "/executives" },
                { label: "Level Advisers & PCs", to: "/level-advisers" },
              ]}
              isActive={activeDropdown === "about"}
              toggle={() => toggleDropdown("about")}
            />
          </div>

          {/* More Dropdown */}
          <div ref={(el) => (dropdownRefs.current["more"] = el)}>
            <DropdownMenu
              label="More"
              items={[
                { label: "Blogs", to: "/blogs" },
                { label: "Past Questions", to: "/past-questions" },
              ]}
              isActive={activeDropdown === "more"}
              toggle={() => toggleDropdown("more")}
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setShowMobile(!showMobile)} className="lg:hidden flex cursor-pointer">
          {showMobile ? (
            <FaTimes className="z-50 fixed right-[2.5%] top-[3%] text-black w-[1.5rem] h-[1.5rem]  mx-2" />
          ) : (
            <FaBars className="text-black h-[2rem] cursor-pointer w-[1.5rem]" />
          )}
        </button>

        {/* Mobile Menu */}
        {showMobile && <MobileMenu navLinks={mobileNavLinks} closeMenu={() => setShowMobile(false)} />}
      </div>
    </div>
  );
};

/* Mobile Menu Component */
const MobileMenu = ({ navLinks, closeMenu }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center py-14 overflow-y-auto">
    <ul className="flex flex-col gap-6 text-center">
      {navLinks.map((link, index) => (
        <li key={index} className="hover:bg-grey p-2 w-screen">
          <NavLink to={link.link} onClick={closeMenu} className="text-black text-lg px-[auto]">
            {link.title}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
