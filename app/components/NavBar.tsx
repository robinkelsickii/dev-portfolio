"use client";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the dropdown menu on mobile
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative">
      <div className="navbar bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">My Portfolio</a>
        </div>

        {/* Desktop Navigation Links */}
        <div className="flex-none hidden lg:flex space-x-4">
          <a href="#home" className="btn btn-ghost text-base">
            Home
          </a>
          <a href="#about" className="btn btn-ghost text-base">
            About Me
          </a>
          <a href="#portfolio" className="btn btn-ghost text-base">
            Portfolio
          </a>
          <a href="#contact" className="btn btn-ghost text-base">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex-none lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleMenu} // Toggle dropdown visibility on mobile
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Background Overlay for Darkening/Blurring (only when menu is open) */}
      {menuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0"></div>
      )}

      {/* Mobile Dropdown Menu (Slide-in from the left) */}
      <div
        className={`lg:hidden fixed top-0 left-0 bottom-0 w-64 bg-white shadow-md transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`} // z-50 ensures it's above everything
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-xl">
            &times;
          </button>
        </div>
        <a href="#home" className="block px-4 py-2 text-base">
          Home
        </a>
        <a href="#about" className="block px-4 py-2 text-base">
          About Me
        </a>
        <a href="#portfolio" className="block px-4 py-2 text-base">
          Portfolio
        </a>
        <a href="#contact" className="block px-4 py-2 text-base">
          Contact
        </a>
      </div>

      {/* Dark Overlay between the menu and background */}
      {menuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"></div>
      )}
    </div>
  );
};

export default NavBar;
