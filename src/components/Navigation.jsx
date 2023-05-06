import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleMobileClick = () => setNav(false); // Add this line

  return (
    <>
      {/* menu */}
      <div className="fixed flex justify-between items-center right-0 h-[80px] px-4">
        <ul className="hidden md:flex">
          <li>
            <Link
              to="/aboutme"
              className={`${
                location.pathname === "/AboutMe" ? "text-yellow-500" : "text-white"
              }`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/portfolio"
              className={`${
                location.pathname === "/portfolio"
                  ? "text-yellow-500"
                  : "text-white"
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-yellow-500"
                  : "text-white"
              }`}
            >
              Contact
            </Link>
          </li>
          {/* <li>
            <Link
              to="/resume"
              className={`${
                location.pathname === "/resume"
                  ? "text-yellow-500"
                  : "text-white"
              }`}
            >
              Resume
            </Link>
          </li> */}
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div onClick={handleClick} className="absolute top-7 right-5 md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="/aboutme"
            onClick={handleMobileClick} // Add this line
            className={`${
              location.pathname === "/" ? "text-yellow-500" : "text-white"
            }`}
          >
            About Me
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="/portfolio"
            onClick={handleMobileClick} // Add this line
            className={`${
              location.pathname === "/portfolio"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            Portfolio
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="/contact"
            onClick={handleMobileClick} // Add this line
            className={`${
              location.pathname === "/contact"
                ? "text-yellow-500"
                : "text-white"
            }`}
          >
            Contact
          </Link>
        </li>
        {/* <li className="py-6 text-4xl">
          <Link
            to="/resume"
            onClick={handleMobileClick} // Add this line
            className={`${
              location.pathname === "/resume" ? "text-yellow-500" : "text-white"
            }`}
          >
            Resume
          </Link>
        </li> */}
      </ul>
    </>
  );
};


export default Navigation;
