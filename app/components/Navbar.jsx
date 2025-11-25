"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav
      className={`fixed top-0 left-0 w-full px-6 py-0.5 flex items-center justify-between z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/40" : "bg-black/20"
      }`}
    >
      {/* Logo */}
      <div>
        <Image
          src="/logo.png"
          alt="Brand Logo"
          width={140}
          height={40}
          className="w-36 h-auto object-contain ml-4 sm:ml-12"
        />
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-base tracking-wide pr-16">
     
<a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
<a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>


<a href="#portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
<a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
<a href="#institute" className="text-gray-400 hover:text-white transition-colors">Institute</a>
<a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>



      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-4 md:hidden">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Institute</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
        </div>
      )}
    </nav>
  );
}


