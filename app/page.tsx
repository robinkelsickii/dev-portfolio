"use client";
import NavBar from "./components/NavBar"; // Import the NavBar component
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative">
      {/* Importing NavBar and passing the state as props */}
      <div>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>

      {/* Hero Section with Background Image */}
      <div
        className={`hero min-h-screen bg-cover bg-center relative ${
          menuOpen ? "backdrop-blur-sm" : "" // Apply blur when menu is open
        }`}
        style={{
          backgroundImage: "url(/img/fur-babies.png)", // Path to your collage image
        }}
      >
        {/* Dark overlay that darkens everything behind the hero text (only when menu is open) */}
        {menuOpen && (
          <div
            className={`absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-10`}
          ></div>
        )}

        {/* Hero Content */}
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
