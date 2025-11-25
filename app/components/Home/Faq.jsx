"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqList = [
    {
      q: "What services do you provide?",
      a: "I specialize in brand identity and package design, with experience in web design, UI/UX, and to create brand experiences.",
    },
    {
      q: "How do I start working with you?",
      a: "You can get started by contacting me through the website. After discussing your requirements, I'll share a detailed proposal, estimated timeline, and pricing.",
    },
    {
      q: "What design tools do you use?",
      a: "I use Figma, Adobe Photoshop, Illustrator, After Effects, and additional tools depending on the project needs.",
    },
    {
      q: "How long does a project take?",
      a: "Branding projects usually take 1–2 weeks, while UI/UX and website projects take 2–4 weeks depending on complexity.",
    },
    {
      q: "Do you provide revisions?",
      a: "Yes, revisions are included in all design packages. I ensure the final design fits your brand and expectations perfectly.",
    },
    {
      q: "What industries do you work with?",
      a: "I work with startups, tech companies, fashion brands, e-commerce stores, and businesses from multiple industries.",
    },
    {
      q: "Do you offer development services?",
      a: "Yes, I provide front-end development using React, TailwindCSS, and modern frameworks. I also collaborate with developers for complete solutions.",
    },
    {
      q: "What is your pricing structure?",
      a: "Pricing is based on the project scope, deliverables, and timeline. After understanding your needs, I provide a transparent quote.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes, I can completely redesign your existing website to improve UI/UX, upgrade visual design, and enhance user experience.",
    },
  ];

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white px-4 sm:px-6 md:px-16 lg:px-24 pt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* FAQ Badge */}
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/30 text-sm sm:text-base md:text-lg font-semibold select-none w-max">
            <span className="w-3 h-3 bg-white rounded-full"></span>
            <span>FAQ'S</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-[64px] lg:text-[72px] font-light leading-tight">
            Answers
          </h1>

          {/* Sub Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            Find answers to common questions about my design <br />
            process, services etc...
          </p>

          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
            <Image
              src="/FAQ.jpg"
              alt="FAQ"
              width={800}
              height={520}
              className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[520px] object-cover grayscale "
            />
          </div>

          {/* Tags */}
          <div className="flex gap-2 sm:gap-4 flex-wrap">
            {["Product Design", "Brand Identity Design", "Branding"].map(
              (tag, index) => (
                <div
                  key={index}
                  className="px-3 sm:px-5 py-1.5 sm:py-2 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm md:text-[14px] font-medium select-none"
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {faqList.map((item, index) => (
            <div
              key={index}
              className="bg-[#1c1c1c] p-4 sm:p-6 md:p-6 border border-white/20 rounded-2xl"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left cursor-pointer select-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-sm sm:text-[17px] md:text-[18px] font-semibold">
                  {item.q}
                </span>
                <span className="text-xl sm:text-2xl font-bold">
                  {openIndex === index ? "×" : "+"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  aria-labelledby={`faq-question-${index}`}
                  className="mt-3 sm:mt-4 text-gray-300 text-sm sm:text-[16px] md:text-[16px] leading-relaxed"
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
