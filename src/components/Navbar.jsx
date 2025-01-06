import { useState, useEffect } from "react";

import { close, menu, tremorguard } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);  // State to track navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0);   // Track the last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling up
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
        // Scrolling down
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`w-[75%] py-4 px-10 flex justify-between items-center navbar fixed top-12 left-1/2 transform -translate-x-1/2 z-50 bg-black/40 backdrop-blur-lg rounded-xl shadow-xl transition-all duration-300 ${
        showNavbar ? "top-12" : "-top-24"  // Show or hide navbar based on scroll
      }`}
    >
      <img src={tremorguard} alt="hoobank" className="w-[200px] h-[65px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
