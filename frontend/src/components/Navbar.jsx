import React, { useEffect, useState } from "react";
import { MENU_LINKS } from "../utils/data";
import { Link } from "react-router-dom";
import LOGO from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setIsOpen(true); // Show menu on large screens
      } else {
        setIsOpen(false); // Hide menu on small screens
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-10">
      <div className="flex items-center justify-between rounded-full bg-white bg-opacity-25 border border-[#203a43] backdrop-blur-xl m-5 p-3 xl:p-0">
        {/* Logo */}
        <img className="h-7 ml-6 -mb-1" src={LOGO} alt="logo" />

        {/* Mobile Menu Button */}
        <button className="block xl:hidden text-primary mr-6 focus:outline-none" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Nav Links */}
        <ul className={` ${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <Link
                activeClass="active"
                to={item.to}
                smooth
                spy
                offset={item.offset}
                className="menu-item text-blue hover:text-gray-300 transition"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button */}
        {/* <button className="bg-gradient-to-r from-[#203a43] to-[#2c5364] text-white px-4 py-2 rounded-lg hidden xl:block hover:from-[#2c5364] hover:to-[#203a43]"> */}
        <button className="hidden xl:block h-12 text-white px-4 py-2 bg-gradient-to-r from-[#203a43] to-[#2c5364] 
                          rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105">
                            Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;