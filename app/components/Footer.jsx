"use client";

import { Instagram, Linkedin, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="relative w-full h-screen bg-black overflow-hidden flex flex-col pt-16">
      
      {/* Background Video */}
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

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-8 bg-black backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-white text-base tracking-wide">
            Available For Work
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-white text-3xl md:text-4xl font-normal text-center mb-8 max-w-4xl leading-tight">
          Curious about what we can create together?
          <br />
          Let's bring something extraordinary to life!
        </h2>

        {/* Contact Button */}
        <button
          onClick={() => router.push("/contact")}
          className="px-6 py-3 text-white text-base font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300"
        >
          Contact Us
        </button>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-6 mt-6 text-white justify-center">
          
          <a
            href="https://www.instagram.com/_vortexcube_?igsh=MTRobjFvYTA4eTRhcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://www.linkedin.com/company/vortexcubes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://wa.me/9301946303"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
          >
            {/* WhatsApp SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.68 0 .48 5.19.48 11.57a11.51 11.51 0 0 0 1.63 5.93L0 24l6.7-2.18a11.74 11.74 0 0 0 5.37 1.33h.02c6.39 0 11.59-5.19 11.59-11.57a11.48 11.48 0 0 0-3.16-7.1Z" />
            </svg>
          </a>

          <a
            href="mailto:info@vortexcubes.com"
            className="hover:text-red-500 transition-colors"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-6 text-white/60 text-sm mb-20">
        <span>info@vortexcubes.com</span>
        <span className="text-center my-4 md:my-0">
          106, Navrang Plaza, Sapna Sangeera Road, Indore, M.P
        </span>
        <span>All rights reserved, ©2025</span>
      </div>
    </footer>
  );
}
