// "use client";
// import React, { useState, useEffect, useRef } from 'react';

// export default function Associate() {
//   const [particles, setParticles] = useState([]);

//   useEffect(() => {
//     // Generate particles
//     const newParticles = Array.from({ length: 30 }, (_, i) => ({
//       id: i,
//       left: Math.random() * 100,
//       delay: Math.random() * 6,
//       duration: Math.random() * 4 + 4
//     }));
//     setParticles(newParticles);
//   }, []);

//   const Card3D = ({ children, className = '' }) => {
//     const cardRef = useRef(null);

//     const handleMouseMove = (e) => {
//       if (!cardRef.current) return;
//       const rect = cardRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
      
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;
      
//       const rotateX = (y - centerY) / 10;
//       const rotateY = (centerX - x) / 10;
      
//       cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
//     };
    
//     const handleMouseLeave = () => {
//       if (cardRef.current) {
//         cardRef.current.style.transform = '';
//       }
//     };

//     return (
//       <div
//         ref={cardRef}
//         className={className}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         style={{ transition: 'transform 0.1s ease-out' }}
//       >
//         {children}
//       </div>
//     );
//   };

//   return (
//     <div className="relative min-h-screen bg-black text-white overflow-x-hidden font-sans">
//       <style>{`
//         @keyframes fadeInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes fadeInUp {
//           from {
//             opacity: 0;
//             transform: translateY(50px) rotateX(-10deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) rotateX(0);
//           }
//         }

//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(-50px) rotateY(-10deg);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0) rotateY(0);
//           }
//         }

//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0) scale(1);
//             opacity: 0;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-100vh) translateX(50px) scale(0.5);
//             opacity: 0;
//           }
//         }

//         .animate-fadeInDown {
//           animation: fadeInDown 1s ease forwards;
//         }

//         .animate-fadeInUp {
//           animation: fadeInUp 0.8s ease forwards;
//         }

//         .animate-slideIn {
//           animation: slideIn 0.8s ease forwards;
//         }

//         .particle {
//           animation: float 6s infinite ease-in-out;
//         }
          

//         @keyframes slideRTL {
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// }

// @keyframes slideLTR {
//   0% { transform: translateX(-50%); }
//   100% { transform: translateX(0); }
// }

// .testimonial-wrapper {
//   overflow: hidden;
//   width: 100%;
// }

// .testimonial-row-rtl {
//   display: flex;
//   width: max-content;
//   animation: slideRTL 30s linear infinite;
// }

// .testimonial-row-ltr {
//   display: flex;
//   width: max-content;
//   animation: slideLTR 30s linear infinite;
// }

// .testimonial-wrapper:hover
// .testimonial-row-rtl,
// .testimonial-wrapper:hover
// .testimonial-row-ltr {
//   animation-play-state: paused;
// }

// @keyframes testimonialRTL {
//   0% {
//     transform: translateX(0);
//   }
//   100% {
//     transform: translateX(-50%);
//   }
// }

// .testimonial-wrapper {
//   width: 100%;
//   overflow: hidden;
// }

// .testimonial-slider {
//   display: flex;
//   width: max-content;
//   animation: testimonialRTL 25s linear infinite;
// }

// .testimonial-wrapper:hover .testimonial-slider {
//   animation-play-state: paused;
// }

//       `}</style>

//       {/* Floating Particles */}
//       <div className="fixed inset-0 pointer-events-none z-0">
//         {particles.map(particle => (
//           <div
//             key={particle.id}
//             className="particle absolute w-1 h-1 bg-white/60 rounded-full"
//             style={{
//               left: `${particle.left}%`,
//               animationDelay: `${particle.delay}s`,
//               animationDuration: `${particle.duration}s`
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 px-5 py-10">
//         {/* Header */}
//         <div className="text-center mb-16 opacity-0 animate-fadeInDown">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}>
//             Vortexcubes <span>Associate Partners</span>
//           </h1>
//           <p className="text-gray-400 text-sm max-w-3xl mx-auto">
//             Proudly counting a decade of innovation, dedication, and success | Ready to run amazing team clients, and partners who've fueled our journey from startup to analytics
//           </p>
//         </div>

//         {/* Partners Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-20">
//           {[
//             { name: 'THiNK', subtitle: 'AiBLE', delay: '0.1s' },
//             { name: 'pinio', subtitle: null, delay: '0.2s' },
//             { name: 'knowella', subtitle: null, delay: '0.3s' },
//             { name: 'TRUCKING', subtitle: 'FRONT', delay: '0.4s' }
//           ].map((partner, idx) => (
//             <Card3D
//               key={idx}
//               className="opacity-0 animate-fadeInUp bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center cursor-pointer hover:bg-white/10 hover:border-white/30 hover:shadow-2xl transition-all duration-500"
//               style={{ animationDelay: partner.delay }}
//             >
//               <div className="h-20 flex flex-col items-center justify-center mb-5">
//                 <div className="text-3xl font-bold text-white">{partner.name}</div>
//                 {partner.subtitle && (
//                   <div className="text-lg text-gray-400 mt-1">{partner.subtitle}</div>
//                 )}
//               </div>
//             </Card3D>
//           ))}
//         </div>


// {/* Testimonials Slider – Right to Left */}
// <div className="max-w-7xl mx-auto mb-20 testimonial-wrapper">
//   <div className="testimonial-slider gap-6 px-4">
//     {[...[ // ✅ 12 testimonials (6 + duplicate 6)
//       {
//         text: "I consulted numerous agencies and ultimately reached here for an explanation. They're efficient and provide services perfectly within time.",
//         flag: "🇬🇧",
//         name: "Daniel A.",
//         title: "Director, ThinkAble",
//       },
//       {
//         text: "Blended is very serious freelancer, definitely recommend for anyone looking to get their work done.",
//         flag: "🇫🇷",
//         name: "Ali S.",
//         title: "Pinio Investment France",
//       },
//       {
//         text: "The project had potential, although we faced some surprises, the delivery exceeded expectations.",
//         flag: "🇹🇷",
//         name: "Mevliyah Rumen T.",
//         title: "TurkeyBook",
//       },
//       {
//         text: "Expertise in the field and timely delivery. Would recommend for further projects.",
//         flag: "🇮🇳",
//         name: "Kushal J.",
//         title: "Knowella",
//       },
//       {
//         text: "Very responsive and professional in communication. Excellent experience.",
//         flag: "🇳🇬",
//         name: "Abiodaku A.",
//         title: "Nigeria",
//       },
//       {
//         text: "Good communication and delivered everything exactly as wanted.",
//         flag: "🇹🇷",
//         name: "Seif Eddine A.",
//         title: "Shipping Company",
//       }
//     ],
//     ...[
//       {
//         text: "I consulted numerous agencies and ultimately reached here for an explanation. They're efficient and provide services perfectly within time.",
//         flag: "🇬🇧",
//         name: "Daniel A.",
//         title: "Director, ThinkAble",
//       },
//       {
//         text: "Blended is very serious freelancer, definitely recommend for anyone looking to get their work done.",
//         flag: "🇫🇷",
//         name: "Ali S.",
//         title: "Pinio Investment France",
//       },
//       {
//         text: "The project had potential, although we faced some surprises, the delivery exceeded expectations.",
//         flag: "🇹🇷",
//         name: "Mevliyah Rumen T.",
//         title: "TurkeyBook",
//       },
//       {
//         text: "Expertise in the field and timely delivery. Would recommend for further projects.",
//         flag: "🇮🇳",
//         name: "Kushal J.",
//         title: "Knowella",
//       },
//       {
//         text: "Very responsive and professional in communication. Excellent experience.",
//         flag: "🇳🇬",
//         name: "Abiodaku A.",
//         title: "Nigeria",
//       },
//       {
//         text: "Good communication and delivered everything exactly as wanted.",
//         flag: "🇹🇷",
//         name: "Seif Eddine A.",
//         title: "Shipping Company",
//       }
//     ]].map((t, idx) => (
//       <Card3D
//         key={idx}
//         className="
//           min-w-[280px] md:min-w-[320px]
//           bg-white/[0.03] backdrop-blur-md
//           border border-white/[0.08]
//           rounded-2xl p-6 md:p-8
//           hover:bg-white/[0.08]
//           hover:border-white/20
//           hover:shadow-xl
//           transition-all duration-500
//         "
//       >
//         <p className="text-gray-300 text-sm leading-relaxed mb-6">
//           {t.text}
//         </p>

//         <div className="flex items-center gap-4">
//           <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl">
//             {t.flag}
//           </div>
//           <div>
//             <div className="font-semibold text-base">{t.name}</div>
//             <div className="text-gray-500 text-sm">{t.title}</div>
//           </div>
//         </div>
//       </Card3D>
//     ))}
//   </div>
// </div>

//         {/* Global Presence */}
//         <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-10 md:p-16 max-w-7xl mx-auto">
//           <h2 className="text-center text-4xl font-bold mb-16" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.3)' }}>
//             Our Global Presence
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {[
//               {
//                 icon: '🏢',
//                 country: 'INDIA',
//                 address: 'Apollo Premier, 201, 4th Floor Vijay Nagar,\nIndore, Vijay Nagar 452010, Madhya Pradesh'
//               },
//               {
//                 icon: '🗽',
//                 country: 'USA',
//                 address: '3 (245 Santa Monica Street, Los Angeles, CA,\n90069, United States'
//               },
//               {
//                 icon: '🍁',
//                 country: 'CANADA',
//                 address: '105 Doncaster Unit, 9525 Willowcroft Park,\nAB T8H 0A5, Canada'
//               }
//             ].map((location, idx) => (
//               <Card3D
//                 key={idx}
//                 className="text-center cursor-pointer hover:scale-105 transition-all duration-500"
//               >
//                 <div className="text-6xl mb-6 inline-block grayscale hover:grayscale-0 transition-all duration-500">
//                   {location.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-5 tracking-widest">{location.country}</h3>
//                 <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">
//                   {location.address}
//                 </p>
//               </Card3D>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


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
