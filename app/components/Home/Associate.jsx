"use client";
import React, { useState, useEffect, useRef } from "react";

export default function Associate() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 4,
    }));
    setParticles(newParticles);
  }, []);

  /* ---------------- CARD 3D ---------------- */
  const Card3D = ({ children, className = "" }) => {
    const cardRef = useRef(null);

    const handleMouseMove = (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = (y - rect.height / 2) / 10;
      const rotateY = (rect.width / 2 - x) / 10;

      cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    };

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => (cardRef.current.style.transform = "")}
        className={className}
        style={{ transition: "transform 0.1s ease-out" }}
      >
        {children}
      </div>
    );
  };

  /* ---------------- TESTIMONIAL DATA ---------------- */
  const testimonials = [
    {
      text: "Very great job. Reactive and professional.",
      flag: "🇫🇷",
      name: "Tresor B.",
      title: "Maxéville, France",
    },
    {
      text: "Very fast, prompt response and great follow up, thumbs up!",
      flag: "🇸🇬",
      name: "Haidhir R.",
      title: "Singapore",
    },
    {
      text: "I couldn't recommend this guy enough. Awesome to work with.",
      flag: "🇬🇧",
      name: "Daniel B.",
      title: "United Kingdom",
    },
    {
      text: "Manish is very serious freelancer, perfect communication.",
      flag: "🇫🇷",
      name: "Ali S.",
      title: "France",
    },
    {
      text: "Very responsive and quick to communicate.",
      flag: "🇸🇦",
      name: "Abdullah A.",
      title: "Saudi Arabia",
    },
    {
      text: "Good communication and did everything like I wanted.",
      flag: "🇹🇷",
      name: "Seif Eddine B.",
      title: "Turkey",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
      <style>{`
        @keyframes float {
          0%,100%{transform:translateY(0);opacity:0}
          50%{opacity:1}
          100%{transform:translateY(-100vh);opacity:0}
        }
        .particle{animation:float 6s infinite}

        @keyframes sliderRTL {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes sliderLTR {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .testimonial-wrapper { overflow:hidden; width:100%; }
        .testimonial-row { display:flex; width:max-content; }
        .rtl { animation: sliderRTL 35s linear infinite; }
        .ltr { animation: sliderLTR 35s linear infinite; }
        .testimonial-wrapper:hover .testimonial-row {
          animation-play-state: paused;
        }
      `}</style>

      {/* FLOATING PARTICLES */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {particles.map((p) => (
          <div
            key={p.id}
            className="particle absolute w-1 h-1 bg-white/60 rounded-full"
            style={{
              left: `${p.left}%`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 md:px-8 py-12">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Vortexcubes <span className="text-gray-400">Associate Partners</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm">
            Proudly counting a decade of innovation, dedication, and success
          </p>
        </div>

        {/* PARTNERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24">
          {["Chavi interprises", "Opinio", "Marshall Private limited", "Fionor"].map((p) => (
            <Card3D
              key={p}
              className="bg-white/5 border border-white/10 rounded-3xl p-10 text-center hover:bg-white/10"
            >
              <div className="text-3xl font-bold">{p}</div>
            </Card3D>
          ))}
        </div>

        {/* ================= TESTIMONIALS ================= */}
        <div className="max-w-6xl mx-auto mb-28 space-y-10">

          {/* ROW 1 */}
          <div className="testimonial-wrapper">
            <div className="testimonial-row rtl gap-8">
              {[...testimonials, ...testimonials].map((t, i) => (
                <Card3D
                  key={`rtl-${i}`}
                  className="min-w-[340px] md:min-w-[420px] min-h-[180px]
                  bg-white/[0.04] backdrop-blur-xl border border-white/10
                  rounded-3xl p-8 flex flex-col justify-between"
                >
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4 pt-6">
                    <div className="text-2xl">{t.flag}</div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.title}</div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="testimonial-wrapper">
            <div className="testimonial-row ltr gap-8">
              {[...testimonials, ...testimonials].map((t, i) => (
                <Card3D
                  key={`ltr-${i}`}
                  className="min-w-[340px] md:min-w-[420px] min-h-[180px]
                  bg-white/[0.04] backdrop-blur-xl border border-white/10
                  rounded-3xl p-8 flex flex-col justify-between"
                >
                  <p className="text-gray-200 text-sm leading-relaxed">
                    {t.text}
                  </p>
                  <div className="flex items-center gap-4 pt-6">
                    <div className="text-2xl">{t.flag}</div>
                    <div>
                      <div className="font-semibold">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.title}</div>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>

        </div>

        {/* GLOBAL PRESENCE */}
        {/* <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-12 max-w-6xl mx-auto">
  <h2 className="text-3xl font-bold text-center mb-12">
    Our Global Presence
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
    
    
    <div className="text-gray-300">
      <div className="text-6xl mb-4 grayscale hover:grayscale-0 transition-all duration-500">
        🏢
      </div>
      <div className="text-lg font-bold mb-1">INDIA</div>
      <p className="text-sm text-gray-400 leading-relaxed">
        106, Navrang Plaza, Sapna Sangeera Road<br />
        Indore, Madhya Pradesh 452010
      </p>
    </div>

    
    <div className="text-gray-300">
      <div className="text-6xl mb-4 grayscale hover:grayscale-0 transition-all duration-500">
        🗽
      </div>
      <div className="text-lg font-bold mb-1">USA</div>
      <p className="text-sm text-gray-400 leading-relaxed">
        <br />
        Los Angeles, CA 90069
      </p>
    </div>

  
    <div className="text-gray-300">
      <div className="text-6xl mb-4 grayscale hover:grayscale-0 transition-all duration-500">
        🍁
      </div>
      <div className="text-lg font-bold mb-1">CANADA</div>
      <p className="text-sm text-gray-400 leading-relaxed">
        <br />
        AB T8H 0A5, Canada
      </p>
    </div>

  </div>
</div> */}

      </div>
    </div>
  );
}
