"use client";

import React from "react";
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
    <div className="w-full bg-black text-white px-6 ">

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-xs">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        <span>Our Services</span>
      </div>

      <h1 className="text-[72px] font-light leading-tight mb-4">Services</h1>

      <p className="text-lg text-gray-400 max-w-4xl mb-14">
        Empowering businesses with robust digital solutions—from engineering to cloud to intelligent automation.
      </p>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0px_0px_30px_rgba(255,255,255,0.06)]"
          >
            <div className="flex items-center gap-3 text-white font-semibold text-[20px]">
              <span className="opacity-80">{service.icon}</span>
              {service.title}
            </div>

            <div className="border-b border-white/10 my-4"></div>

            <p className="text-gray-400 text-[15px] leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Auto-Scrolling Tag Slider */}
      <div className="w-full overflow-hidden select-none pt-8">
        <div className="flex gap-6 whitespace-nowrap tag-scroll">
          {[...tags, ...tags].map((tag, index) => (
            <span
              key={index}
              className="px-5 py-2 bg-[#111]/60 border border-white/10 text-white/70 rounded-full text-sm hover:bg-white/10 hover:text-white cursor-pointer transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

