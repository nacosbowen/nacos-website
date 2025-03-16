import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/public/images/navbar/NACOS LOGO.svg";
import arrowdown from "../../../src/public/icons/arrowdown.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showMobile, setShowMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const togglenav = () => setShowMobile(!showMobile);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
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
    { title: "Past Questions", link: "/pastQuestions" },
  ];

  return (
    <div
      className={`w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0 shadow-lg" : "relative"
      }`}
    >
      <div className="flex px-4 py-3 lg:px-[4rem] lg:py-4 justify-between items-center relative">
        {/* Logo */}
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-12">
          <NavLink to="/" label="Home" />

          {/* About Us Dropdown */}
          <DropdownMenu
            label="About Us"
            items={[
              { label: "NACOS Bowen", to: "/about" },
              { label: "Our Executives", to: "/executives" },
              { label: "Level Advisers & PCs", to: "/level-advisers" },
            ]}
            isActive={activeDropdown === "about"}
            toggle={() => toggleDropdown("about")}
            dropdownRef={dropdownRef}
          />

          {/* More Dropdown */}
          <DropdownMenu
            label="More"
            items={[
              { label: "Blogs", to: "/blogs" },
              { label: "Past Questions", to: "/pastQuestions" },
            ]}
            isActive={activeDropdown === "more"}
            toggle={() => toggleDropdown("more")}
            dropdownRef={dropdownRef}
          />
        </div>

        {/* Mobile Menu Button */}
        <button onClick={togglenav} className="lg:hidden flex cursor-pointer">
          {showMobile ? (
            <FaTimes className="z-50 fixed right-[2.5%] top-[3%] text-black w-[1.5rem] h-[1.5rem]  mx-2" />
          ) : (
            <FaBars className="text-black h-[2rem] cursor-pointer w-[1.5rem]" />
          )}
        </button>
        {/* Mobile Menu */}
        {showMobile && <MobileMenu navLinks={mobileNavLinks} />}
      </div>
    </div>
  );
};

/* NavLink Component */
const NavLink = ({ to, label }) => (
  <Link className="font-Poppins text-base font-medium text-navdark" to={to}>
    {label}
  </Link>
);

/* Dropdown Menu Component */
const DropdownMenu = ({ label, items, isActive, toggle, dropdownRef }) => (
  <div className="relative" ref={dropdownRef}>
    <button
      className="font-Poppins text-base font-medium text-navdark flex items-center gap-2 cursor-pointer"
      onClick={toggle}
      aria-expanded={isActive}
    >
      {label} <img src={arrowdown} alt="" />
    </button>

    {isActive && (
      <div className="absolute bg-white w-[200%] rounded-lg shadow-xl pt-4 top-[100%] left-0 transition-all duration-200 scale-100">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.to}
            className="block text-navDrop py-2 px-4 hover:bg-grey"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

/* Mobile Menu Component */
const MobileMenu = ({ navLinks }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-white z-40 flex flex-col items-center py-14">
    <ul className="flex flex-col gap-6 text-center">
      {navLinks.map((link, index) => (
        <li key={index} className="hover:bg-grey p-2 w-screen">
          <Link to={link.link} className="text-black text-lg px-[auto]">
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navbar;
