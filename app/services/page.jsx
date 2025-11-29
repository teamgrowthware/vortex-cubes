"use client";
import React from "react";
import Navbar from "../components/Navbar";
import { Laptop, CloudCog, PenTool, Cpu } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Laptop size={26} />,
      title: "Web & App Development",
      description:
        "Crafting fast, scalable web and mobile applications designed for real-world performance — ensuring your product remains reliable as your business grows.",
    }, 
    
    {
      icon: <CloudCog size={26} />,
      title: "Cloud Infrastructure & DevOps",
      description:
        "Building secure, cost-efficient cloud environments with automated CI/CD pipelines — giving you smooth deployments, zero-downtime updates, and modern scalability.",
    },
    {
      icon: <PenTool size={26} />,
      title: "UI/UX & Product Design",
      description:
        "Designing intuitive, conversion-focused interfaces that elevate user experience — blending aesthetics with functional clarity for higher engagement.",
    },
    {
      icon: <Cpu size={26} />,
      title: "AI Integrations",
      description:
        "Integrating AI models, automation, and ML capabilities to enhance decision-making, improve workflows, and unlock intelligent product features.",
    },
  ];

  const tags = [
    "Brand Migration",
    "Package Design",
    "Branding",
    "Slide Decks",
    "Copywriting",
    "Brand Graphics",
    "Brand Landing Pages",
    "Social Media",
    "Icons",
    "Brand Visibility",
    "Brand Integrations",
    "Optimization",
  ];

  return (
    <div className="w-full bg-black text-white px-4 sm:px-6 lg:px-12 py-12 md:py-16">

       {/* <Navbar /> */}
         <Navbar />

      {/* ANIMATION CSS */}
      <style jsx>{`
        @keyframes scroll-row {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .scroll-animation {
          white-space: nowrap;
          display: flex;
          animation: scroll-row 10s linear infinite;
        }
      `}</style>

     {/* Header Badge */}
<div className="w-full flex flex-col items-center text-center mb-16">

  {/* Header Badge */}
  <div className="inline-flex items-center gap-3 px-7 py-3 mb-6 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-md rounded-full border border-white/30 text-sm sm:text-base md:text-lg shadow-[0px_0px_20px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_30px_rgba(255,255,255,0.2)] transition-all duration-300">
    <span className="w-3 h-3 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></span>
    <span className="font-medium">Our Services</span>
  </div>

  {/* Description */}
  <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed">
    Empowering businesses with robust digital solutions—from engineering to cloud to intelligent
    automation. Helping organizations achieve sustainable growth through  technology.
  </p>

</div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 mb-16 w-full">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative p-12 sm:p-14 md:p-16 rounded-[32px] bg-gradient-to-br from-[#0f0f0f] to-[#050505] border border-white/10 hover:border-white/30 transition-all duration-500 cursor-pointer shadow-[0px_0px_40px_rgba(255,255,255,0.03)] hover:shadow-[0px_0px_60px_rgba(255,255,255,0.15)] hover:scale-[1.02] overflow-hidden min-h-[320px] md:min-h-[360px] flex flex-col"
          >
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-500 rounded-[32px]"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center gap-5 text-white font-semibold text-2xl sm:text-3xl mb-8">
                <div className="p-5 rounded-2xl bg-white/5 group-hover:bg-white/10 transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <span className="opacity-90">{service.icon}</span>
                </div>
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </span>
              </div>

              <div className="border-b border-white/10 group-hover:border-white/20 mb-8 transition-all duration-300"></div>

              <p className="text-gray-400 group-hover:text-gray-300 text-lg sm:text-xl leading-relaxed transition-all duration-300">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Scrolling Tags */}
      <div className="w-full overflow-hidden select-none space-y-5">
        {/* Row 1 */}
        <div className="scroll-animation gap-6">
          {[...tags, ...tags].map((tag, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-gradient-to-r from-[#111]/80 to-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 text-white/80 rounded-full text-sm font-medium hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-white/30 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Row 2 with delay */}
        <div className="scroll-animation gap-6" style={{ animationDelay: "-7.5s" }}>
          {[...tags, ...tags].map((tag, i) => (
            <span
              key={i}
              className="px-6 py-3 bg-gradient-to-r from-[#111]/80 to-[#1a1a1a]/80 backdrop-blur-sm border border-white/10 text-white/80 rounded-full text-sm font-medium hover:from-purple-500/20 hover:to-cyan-500/20 hover:border-white/30 hover:text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}



