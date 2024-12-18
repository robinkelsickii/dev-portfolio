"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct Swiper import for React
import "swiper/swiper-bundle.min.css"; // Make sure the styles are included

// Import the necessary Swiper modules
import { Navigation, Pagination } from "swiper";

// Define your projects data
const projects = [
  {
    id: 1,
    name: "Project One",
    description: "This is a brief description of Project One.",
    demoLink: "https://fakelink2.com",
    githubLink: "https://fakelink.com",
  },
  {
    id: 2,
    name: "Project Two",
    description: "This is a brief description of Project Two.",
    demoLink: "https://fakelink3.com",
    githubLink: "https://fakelink4.com",
  },
  {
    id: 3,
    name: "Project Three",
    description: "This is a brief description of Project Two.",
    demoLink: "https://fakelink5.com",
    githubLink: "https://fakelink6.com",
  },
];

const PortfolioPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl text-center my-8">My Projects</h1>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination]} // Pass modules as an array
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="mySwiper mt-16"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="w-full p-4">
            <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
              {/* Image Preview */}
              <div className="w-full h-48 relative rounded-md overflow-hidden mb-4">
                <img
                  src={`/images/${project.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}.png`} // Dynamic image source
                  alt={project.name}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Project Details */}
              <h2 className="text-lg font-bold mt-4">{project.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                {project.description}
              </p>

              <div className="flex justify-between mt-4 w-full">
                {/* Demo Link */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Live Demo
                </a>
                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  View Code
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioPage;
