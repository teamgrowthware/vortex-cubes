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
          Curious about what we can create together?<br/> 
         Let's, bring something extraordinary to life!
        </h2>

        <button className="px-6 py-3 text-white text-base font-semibold rounded-xl border border-white/50 bg-black/20 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300">
            Contact Us
          </button>

        <div className="flex items-center gap-6 mt-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <span className="text-xl font-bold">Bē</span>
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <span className="text-white/30">|</span>
          <a href="#" className="text-white hover:text-gray-300 transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="12" cy="12" r="4" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-8 py-6 text-white/60 text-sm mb-20">
        <span>info@vortexcubes.com</span>
        <span className="text-center my-4 md:my-0">106, Navrang Plaza, Sapna Sangeera Road, Indore, Indore, M.P</span>
        <span>All rights reserved, ©2025</span>
      </div>
    </footer>
  );
}

