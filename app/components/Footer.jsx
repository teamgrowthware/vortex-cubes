export default function Footer() {
  return (
    <footer className="relative w-full h-screen bg-black overflow-hidden flex flex-col">
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
      {/* Horizontal Smoke Waves Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full" viewBox="0 0 1400 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="blur1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="20" />
            </filter>
            <filter id="blur2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="35" />
            </filter>
            <filter id="blur3" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="50" />
            </filter>
            <linearGradient id="smokeH1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="20%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="50%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="80%" stopColor="rgba(255,255,255,0.2)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="smokeH2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0)" />
              <stop offset="30%" stopColor="rgba(200,200,200,0.12)" />
              <stop offset="70%" stopColor="rgba(200,200,200,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          
          {/* Top horizontal smoke wave */}
          <path
            d="M-100,120 Q200,80 400,130 Q600,180 800,100 Q1000,20 1200,90 Q1400,160 1600,100 L1600,200 Q1400,280 1200,200 Q1000,120 800,200 Q600,280 400,220 Q200,160 -100,220 Z"
            fill="url(#smokeH1)"
            filter="url(#blur2)"
            opacity="0.6"
          />
          
          {/* Upper middle horizontal smoke wave */}
          <path
            d="M-100,280 Q150,220 350,290 Q550,360 750,280 Q950,200 1150,270 Q1350,340 1550,280 L1550,380 Q1350,460 1150,380 Q950,300 750,380 Q550,460 350,400 Q150,340 -100,400 Z"
            fill="url(#smokeH2)"
            filter="url(#blur3)"
            opacity="0.5"
          />
          
          {/* Center horizontal smoke wave - main */}
          <path
            d="M-100,420 Q200,350 450,430 Q700,510 950,420 Q1200,330 1500,410 L1500,520 Q1200,610 950,520 Q700,430 450,530 Q200,630 -100,540 Z"
            fill="url(#smokeH1)"
            filter="url(#blur1)"
            opacity="0.7"
          />
          
          {/* Lower middle horizontal smoke wave */}
          <path
            d="M-100,560 Q250,500 500,580 Q750,660 1000,570 Q1250,480 1550,560 L1550,660 Q1250,750 1000,660 Q750,570 500,670 Q250,770 -100,680 Z"
            fill="url(#smokeH2)"
            filter="url(#blur2)"
            opacity="0.5"
          />
          
          {/* Bottom horizontal smoke wave */}
          <path
            d="M-100,700 Q200,640 400,720 Q600,800 850,710 Q1100,620 1350,700 Q1500,750 1600,700 L1600,850 Q1350,900 1100,850 Q850,800 600,880 Q400,940 200,880 Q-100,820 -100,850 Z"
            fill="url(#smokeH1)"
            filter="url(#blur3)"
            opacity="0.6"
          />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4">
        <div className="flex items-center gap-2 mb-8 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          <span className="text-white text-sm tracking-wide">Available For Work</span>
        </div>

        <h2 className="text-white text-3xl md:text-5xl font-light text-center mb-2 max-w-4xl leading-tight">
          Curious about what we can create together?
        </h2>
        <h2 className="text-white text-3xl md:text-5xl font-light text-center mb-10 max-w-4xl leading-tight">
         Let's,  bring something extraordinary to life!
        </h2>

        <button className="px-8 py-3 border border-white/40 rounded-lg text-white hover:bg-white/10 transition-all duration-300 mb-10 backdrop-blur-sm">
          Contact Us
        </button>

        <div className="flex items-center gap-6">
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

