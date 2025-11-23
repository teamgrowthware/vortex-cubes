"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const AlllProjects = () => {
  const [hovered, setHovered] = useState(null);

  const designs = [
    { id: 1, img: "https://framerusercontent.com/images/aS6TUjI9YxlGwDeky4ti5lNhvk.png?width=2044&height=1522", height: "h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px]" },
    { id: 2, img: "https://framerusercontent.com/images/rllHGSR2FRWtiwbcY2zXr5yYNA.png?width=2002&height=1536", height: "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]" },
    { id: 3, img: "https://framerusercontent.com/images/hD7JZ9vucYI8VhWUTe0pi4jg5Y.png?width=2038&height=1526", height: "h-[200px] sm:h-[280px] md:h-[360px] lg:h-[420px]" },
    { id: 4, img: "https://framerusercontent.com/images/BNh4Rkd4JEoDgLZABP9OKo7Sy4.png", height: "h-[180px] sm:h-[260px] md:h-[330px] lg:h-[420px]" },
    { id: 5, img: "https://framerusercontent.com/images/3jtfoIPkVupyufKucCL3NyFG8z4.png", height: "h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px]" },
    { id: 6, img: "https://framerusercontent.com/images/NV5p6eKDrGW41PVOW3GrNinbmyU.png", height: "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]" },
    { id: 7, img: "https://framerusercontent.com/images/KuxlTruapDVuNEiqiX4dI6yimk.png", height: "h-[180px] sm:h-[260px] md:h-[340px] lg:h-[420px]" },
    { id: 8, img: "https://framerusercontent.com/images/cEbaENKevmIihxZIS81LrdgwMrw.png", height: "h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]" },
    { id: 9, img: "https://framerusercontent.com/images/h12MgV7lyIcTclpZXYSKOxqgI.png", height: "h-[200px] sm:h-[280px] md:h-[350px] lg:h-[420px]" },
  ];

  return (
    <div className="min-h-screen bg-black p-6 sm:p-8">
      <div className="max-w-[1400px] mx-auto">

        {/* MASONRY GRID */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
          {designs.map((item, index) => (
            <div
              key={item.id}
              className="relative group break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              <Image
                src={item.img}
                width={500}
                height={700}
                className={`w-full rounded object-cover ${item.height} grayscale hover:grayscale-0 transition-all duration-700 ${hovered === index ? "scale-110" : "scale-100"}`}
                alt="Project"
              />

              <button
                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20
                  w-[90%] sm:w-80 md:w-72 
                  border border-white text-white 
                  bg-white/20 backdrop-blur-md  
                  px-4 py-2 rounded-full 
                  font-semibold text-xs sm:text-sm 
                  shadow-lg flex items-center justify-center gap-2 
                  transition-all duration-300"
              >
                VIEW PROJECT
                <ArrowUpRight
                  className={`transition-all duration-300 ${hovered === index ? "scale-125 -translate-y-1 rotate-12" : ""}`}
                />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Buttons */}
        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <button className="text-white font-semibold text-base border-b border-white/70 hover:border-white transition-all duration-300">
            All Projects
          </button>

          <button className="px-6 py-3 text-white text-base font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
            View All Projects
          </button>
        </div>

      </div>
    </div>
  );
};

export default AlllProjects;
