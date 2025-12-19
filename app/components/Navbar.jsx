"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-black/60" : "bg-black/30"
      }`}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Brand Logo"
          width={140}
          height={40}
          className="w-32 sm:w-36 h-auto object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-base tracking-wide">
          <Link href="/#home" className="text-gray-400 hover:text-white">
            Home
          </Link>
          <Link href="/services" className="text-gray-400 hover:text-white">
            Services
          </Link>
          

          {/* ✅ Correct Portfolio Desktop Link */}
          <Link href="/AllProjects" className="text-gray-400 hover:text-white">
            Portfolio
          </Link>


          <Link href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black/90 backdrop-blur-xl flex flex-col items-center justify-center gap-6 text-xl transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <Link onClick={closeMenu} href="/#home" className="text-white hover:text-gray-300 transition">
          Home
        </Link>

         <Link onClick={closeMenu} href="/services" className="text-white hover:text-gray-300 transition">
          Services
        </Link>
  
        {/* ✅ FIXED Portfolio Mobile Link */}
        <Link onClick={closeMenu} href="/AllProjects" className="text-white hover:text-gray-300 transition">
          Portfolio
        </Link>

        <Link onClick={closeMenu} href="/contact" className="text-white hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}