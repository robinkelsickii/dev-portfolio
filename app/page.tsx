"use client";
import { useState } from "react";
import Navbar from "./components/NavBar";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // State for hamburger menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle the menu open/close state
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <div className="navbar bg-transparent fixed top-0 left-0 right-0 z-10 px-4 lg:px-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-white">daisyUI</a>
        </div>
        <div className="flex-none lg:hidden">
          <button
            className="btn btn-square btn-ghost"
            onClick={toggleMenu} // Toggle menu visibility
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
        </div>

        {/* Menu Items - Spread across the navbar */}
        <div
          className={`flex-1 justify-between items-center space-x-4 ${
            menuOpen ? "block" : "hidden"
          } lg:flex`}
        >
          <a href="#home" className="btn btn-ghost text-white hover:underline">
            Home
          </a>
          <a href="#about" className="btn btn-ghost text-white hover:underline">
            About
          </a>
          <a
            href="#portfolio"
            className="btn btn-ghost text-white hover:underline"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="btn btn-ghost text-white hover:underline"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Hero Section with Background Image */}
      <div
        className="hero min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: "url(/img/fur-babies.png)", // Path to your collage image
        }}
      >
        <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>{" "}
        {/* Dark overlay */}
        <div className="hero-content text-neutral-content text-center z-20 relative">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
}
