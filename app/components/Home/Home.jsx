"use client";

import React, { useState } from "react";
import { Asterisk, CircleDashed, Mountain, Droplet } from "lucide-react";

export default function Home() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const brands = [
    { name: "Asterisk", icon: <Asterisk size={60} color="#c6bebe" /> },
    { name: "Oasis", icon: <Droplet size={48} color="#c6bebe" /> },
    { name: "Eooks", icon: null, underline: true },
    { name: "Opal", icon: <CircleDashed size={40} color="#c6bebe" /> },
    { name: "Dune", icon: <Mountain size={44} color="#c6bebe" /> },
  ];

  const NeonButton = ({ label }) => (
    <button
      onMouseEnter={() => setHoveredButton(label)}
      onMouseLeave={() => setHoveredButton(null)}
      className="
        relative px-10 py-3
        text-white text-sm font-medium
        rounded-xl bg-black
        border border-white/30
        shadow-[inset_0_0_2px_1px_rgba(255,255,255,0.3)]
        transition-all duration-300
        hover:border-white hover:shadow-[0_0_18px_rgba(255,255,255,0.5)]
        active:scale-95
      "
    >
      <div
        className="
          absolute bottom-0 left-0 w-full h-full rounded-xl
          opacity-40 bg-gradient-to-tr from-white/40 to-transparent
          blur-xl pointer-events-none
        "
      />
      <span className="relative z-10">{label}</span>
    </button>
  );

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Background Blurs */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-20 right-1/4 w-[500px] h-[500px] bg-gray-600 rounded-full blur-[150px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-[450px] h-[450px] bg-gray-500 rounded-full blur-[150px] opacity-20 animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-40">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black/10 backdrop-blur-md rounded-full border border-white/20">
          <span className="w-2 h-2 bg-white rounded-full"></span>
          <span className="text-[1.5rem] text-gray-300">
            Crafting Unique Brand Identities
          </span>
        </div>

        <h1 className="text-[10rem] md:text-[6rem] font-medium mb-8">
          Branding that you <br /> need Indeed
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-12">
          We specialize in creating innovative technology solutions that drive
          business growth. From custom software development to AI integration,
          we help companies stay ahead of the curve.
        </p>

        {/* Buttons */}
        <div className="flex gap-6 justify-center mt-10">
          <button
            className="group relative px-9 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              transform: "perspective(500px) rotateX(0deg)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(-5deg) translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(0deg)")
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              }}
            />
            <span className="relative z-10 font-semibold text-white flex items-center gap-2 text-base">
              Contact Us
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow:
                  "0 0 30px rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255,0.1)",
              }}
            />
          </button>

          <button
            className="group relative px-9 py-4 rounded-xl overflow-hidden transition-all duration-500 hover:scale-110"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
              boxShadow:
                "0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.3)",
              border: "1px solid rgba(255,255,255,0.2)",
              transform: "perspective(500px) rotateX(0deg)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(-5deg) translateY(-5px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform =
                "perspective(500px) rotateX(0deg)")
            }
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.2) 0%, transparent 50%)",
              }}
            />
            <span className="relative z-10 font-semibold text-white flex items-center gap-2 text-base">
              See Projects
              <svg
                className="w-5 h-5 transform group-hover:translate-x-2 group-hover:rotate-45 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                boxShadow:
                  "0 0 30px rgba(255,255,255,0.2), inset 0 0 20px rgba(255,255,255,0.1)",
              }}
            />
          </button>
        </div>

        {/* Brand Slider */}
        <div className="relative w-full overflow-hidden mt-20">
          <div
            className="flex items-center gap-16 whitespace-nowrap"
            style={{ animation: "scrollSlow 18s linear infinite" }}
          >
            {brands.concat(brands).map((brand, index) => (
              <div
                key={index}
                className="flex items-center opacity-70 hover:opacity-100 transition"
              >
                {brand.icon}
                <span
                  className={`text-xl font-semibold tracking-wide ${
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
    </div>
  );
}
