"use client";

import { Instagram, Linkedin, Mail, Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  return (
    <footer className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
      
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>

      {/* Main Content */}
      <div className="relative z-20 flex-1 flex flex-col items-center justify-center px-4 pt-16 pb-8">
        
        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-8 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
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
          className="px-6 py-3 text-white text-base font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300 mb-8"
        >
          Contact Us
        </button>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center gap-6 text-white justify-center">
          <a
            href="https://www.instagram.com/_vortexcube_?igsh=MTRobjFvYTA4eTRhcQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram size={22} />
          </a>

          <a
            href="https://www.linkedin.com/company/vortexcubes/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors"
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin size={22} />
          </a>

          <a
            href="https://wa.me/8878177904"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-500 transition-colors"
            aria-label="Chat with us on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </a>

          <a
            href="mailto:info@vortexcubes.com"
            className="hover:text-red-500 transition-colors"
            aria-label="Send us an email"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="relative z-20 w-full px-8 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">VC</span>
              </div>
              <h3 className="text-white text-xl font-bold">VORTEXCUBES</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Your trusted partner for comprehensive IT solutions and product development. We build custom software that drives business growth.
            </p>
            {/* <div className="flex gap-4 pt-2">
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Web Development', 'App Development', 'ERP Solutions', 'CRM Solutions', 'AI & Automation', 'Cloud & Security'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Portfolio', 'Contact','Services'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-white/60 mt-1 flex-shrink-0" />
                <a href="mailto:info@vortexcubes.com" className="text-white/60 hover:text-white transition-colors text-sm">
                  info@vortexcubes.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mt-1 flex-shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="text-white/60 text-sm">
                  <a href="tel:+919301946303" className="hover:text-white transition-colors block">+91 7049820057</a>
                  <a href="tel:+919301946303" className="hover:text-white transition-colors block">+91 6265259661</a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60 mt-1 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-white/60 text-sm">
                  106, Navrang Plaza,Tower Squre Sapna Sangeeta Rd, Indore, M.P- 452010
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-20 px-8 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white/60 text-sm">
          <span>© 2025 VORTEXCUBES. All rights reserved.</span>
          
        </div>
      </div>
    </footer>
  );
}
