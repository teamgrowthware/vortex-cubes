"use client";

import React, { useState } from "react";
import { Asterisk, CircleDashed, Mountain, Droplet } from "lucide-react";

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const brands = [
    { name: "Asterisk", icon: <Asterisk size={40} color="#c6bebe" /> },
    { name: "Oasis", icon: <Droplet size={36} color="#c6bebe" /> },
    { name: "Eooks", icon: null, underline: true },
    { name: "Opal", icon: <CircleDashed size={36} color="#c6bebe" /> },
    { name: "Dune", icon: <Mountain size={36} color="#c6bebe" /> },
  ];

  const NeonButton = ({ label }) => (
    <button
      onMouseEnter={() => setHoveredButton(label)}
      onMouseLeave={() => setHoveredButton(null)}
      className="glow-button             
    bg-black text-white 
    px-6 py-2 
    rounded-2xl 
    border border-white/60  
    transition duration-300
    hover:border-white relative lg:mb-3"
    >
      <div
        className="
          absolute inset-0 rounded-xl
          opacity-40 bg-gradient-to-b from-white/20 to-transparent
          blur-xl pointer-events-none
        "
      />
      <span className="relative z-10">{label}</span>
    </button>
  );

  return (
    <div className="relative min-h-[110vh] bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4 mb-6 pb-14">
      {/* Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-90 contrast-125 grayscale"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="relative z-20 w-full max-w-4xl text-center flex flex-col items-center mt-28 sm:mt-32 md:mt-44 px-2">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-200/10 to-black/90 backdrop-blur-md rounded-full border border-white/50 mb-5 text-xs sm:text-sm">
          <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.95)]"></span>
          <span className="text-gray-100">
            Crafting Unique Brand Identities
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-medium mb-4">
          Branding that you <br /> need Indeed
        </h1>

        {/* Paragraph */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-2 leading-relaxed">
          We specialize in creating innovative technology solutions that drive
          business <br className="hidden md:inline" /> growth. From custom software development to AI integration,
          we help <br className="hidden md:inline" /> companies stay ahead of the curve.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center mt-4 sm:mt-6">
          <NeonButton label="Contact Us" />
          <NeonButton label="See Projects" />
        </div>

        {/* Brand Slider */}
        <div className="relative w-full overflow-hidden mt-10 sm:mt-12 md:mt-20 mb-6">
          <div
            className="flex items-center gap-6 sm:gap-10 whitespace-nowrap animate-scrollSlow"
          >
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-4 opacity-70 hover:opacity-100 transition"
              >
                {brand.icon}
                <span
                  className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold tracking-wide ${
                    brand.underline ? "border-b-2 pb-1" : ""
                  }`}
                >
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind animation for slider */}
      <style jsx>{`
        @keyframes scrollSlow {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-scrollSlow {
          animation: scrollSlow 10s linear infinite;
        }
      `}</style>
    </div>
  );
}
