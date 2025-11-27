// "use client";

// import Image from "next/image";
// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);

//   // Detect scroll
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => setIsOpen(!isOpen);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full px-6 py-0.5 flex items-center justify-between z-50 transition-all duration-300 ${
//         scrolled ? "backdrop-blur-md bg-black/40" : "bg-black/20"
//       }`}
//     >
//       {/* Logo */}
//       <div>
//         <Image
//           src="/logo.png"
//           alt="Brand Logo"
//           width={140}
//           height={40}
//           className="w-36 h-auto object-contain ml-4 sm:ml-12"
//         />
//       </div>

//       {/* ✅ Desktop Links */}
//       <div className="hidden md:flex items-center gap-8 text-base tracking-wide pr-16">
//         <Link href="/#home" className="text-gray-400 hover:text-white">Home</Link>
//         <Link href="/#about" className="text-gray-400 hover:text-white">About Us</Link>
//         <Link href="/#portfolio" className="text-gray-400 hover:text-white">Portfolio</Link>
//         <Link href="/#services" className="text-gray-400 hover:text-white">Services</Link>
//         <Link href="/institute" className="text-gray-400 hover:text-white">Institute</Link>
//         <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
//       </div>

//       {/* Mobile Hamburger */}
//       <div className="md:hidden">
//         <button
//           onClick={toggleMenu}
//           className="text-gray-400 hover:text-white focus:outline-none"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* ✅ Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col items-center gap-4 py-4 md:hidden">
//           <Link onClick={() => setIsOpen(false)} href="/#home">Home</Link>
//           <Link onClick={() => setIsOpen(false)} href="/#about">About Us</Link>
//           <Link onClick={() => setIsOpen(false)} href="/#portfolio">Portfolio</Link>
//           <Link onClick={() => setIsOpen(false)} href="/#services">Services</Link>
//           <Link onClick={() => setIsOpen(false)} href="/institude">Institute</Link>
//           <Link onClick={() => setIsOpen(false)} href="/contact">Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

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
          <Link href="/#about" className="text-gray-400 hover:text-white">
            About Us
          </Link>
          <Link href="/#portfolio" className="text-gray-400 hover:text-white">
            Portfolio
          </Link>
          <Link href="/#services" className="text-gray-400 hover:text-white">
            Services
          </Link>
          <Link href="/institute" className="text-gray-400 hover:text-white">
            Institute
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
        <Link onClick={closeMenu} href="/#home" className="text-white hover:text-gray-300 transition">Home</Link>
        <Link onClick={closeMenu} href="/#about" className="text-white hover:text-gray-300 transition">About Us</Link>
        <Link onClick={closeMenu} href="/#portfolio" className="text-white hover:text-gray-300 transition">Portfolio</Link>
        <Link onClick={closeMenu} href="/#services" className="text-white hover:text-gray-300 transition">Services</Link>
        <Link onClick={closeMenu} href="/institute" className="text-white hover:text-gray-300 transition">Institute</Link>
        <Link onClick={closeMenu} href="/contact" className="text-white hover:text-gray-300 transition">Contact</Link>
      </div>
    </nav>
  );
}
