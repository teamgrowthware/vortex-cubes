import { Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative w-full h-screen bg-black overflow-hidden flex flex-col pt-16">
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
        <div className="flex items-center gap-2 mb-8 bg-black backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          <span className="text-white text-base tracking-wide">Available For Work</span>
        </div>

        <h2 className="text-white text-3xl md:text-4xl font-normal text-center mb-8 max-w-4xl leading-tight">
          Curious about what we can create together?<br />
          Let's bring something extraordinary to life!
        </h2>

        <button className="px-6 py-3 text-white text-base font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
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
            {/* WhatsApp SVG Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.78 11.78 0 0 0 12.07 0C5.68 0 .48 5.19.48 11.57a11.51 11.51 0 0 0 1.63 5.93L0 24l6.7-2.18a11.74 11.74 0 0 0 5.37 1.33h.02c6.39 0 11.59-5.19 11.59-11.57a11.48 11.48 0 0 0-3.16-7.1ZM12.07 21.3h-.01a9.51 9.51 0 0 1-4.84-1.33l-.35-.21-4 1.3 1.33-3.87-.23-.4a9.43 9.43 0 0 1-1.42-4.97c0-5.24 4.28-9.51 9.56-9.51a9.43 9.43 0 0 1 6.73 2.79 9.41 9.41 0 0 1 2.81 6.71c0 5.24-4.28 9.49-9.58 9.49Zm5.36-7.12c-.29-.15-1.71-.84-1.98-.93s-.46-.15-.65.15c-.19.29-.75.93-.92 1.12-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.49.1-.19.05-.37-.02-.52-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.49-.17 0-.37-.02-.56-.02-.19 0-.52.07-.79.37-.27.29-1.04 1.02-1.04 2.49s1.06 2.88 1.21 3.07c.15.19 2.08 3.18 5.04 4.46.7.3 1.25.48 1.67.61.7.22 1.34.19 1.85.12.56-.08 1.71-.7 1.95-1.38.24-.68.24-1.27.17-1.38-.07-.12-.26-.19-.54-.34Z" />
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

      {/* Footer bottom */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-6 text-white/60 text-sm mb-20">
        <span>info@vortexcubes.com</span>
        <span className="text-center my-4 md:my-0">
          106, Navrang Plaza, Sapna Sangeera Road, Indore, Indore, M.P
        </span>
        <span>All rights reserved, ©2025</span>
      </div>
    </footer>
  );
}
