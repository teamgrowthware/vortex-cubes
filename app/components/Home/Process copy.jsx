// "use client";

// import { Lightbulb, ListChecks, Rocket } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// export default function Process() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const containerRef = useRef(null);

//   const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

//   // Disable animation on mobile
//   useEffect(() => {
//     if (isMobile) return; 

//     const handleScroll = () => {
//       if (!containerRef.current) return;
      
//       const container = containerRef.current;
//       const rect = container.getBoundingClientRect();
//       const scrollStart = window.innerHeight * 0.5;
//       const scrollRange = rect.height - window.innerHeight;
      
//       if (rect.top > scrollStart) {
//         setScrollProgress(0);
//       } else if (rect.bottom < window.innerHeight) {
//         setScrollProgress(1);
//       } else {
//         const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / scrollRange));
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [isMobile]);

//   const cards = [
//     {
//       step: 1,
//       title: "Understand the Problem",
//       icon : Lightbulb,
//       description: "We start by understanding your business challenges..."
//     },
//     {
//       step: 2,
//       title: "Build with Precision",
//       icon: ListChecks,
//       description: "From architecture to UI/UX to full stack development..."
//     },
//     {
//       step: 3,
//       title: "Deploy, Support & Scale",
//       icon : Rocket,
//       description: "Once everything is tested and production-ready..."
//     }
//   ];

//   // Desktop transform
//   const getCardTransform = (index) => {
//     if (isMobile) {
//       return { transform: 'translateY(0)', opacity: 1, position: 'relative' };
//     }

//     if (index === 0) {
//       return { transform: 'translateY(0)', opacity: 1, zIndex: 1 };
//     }

//     const cardsCount = cards.length;

//     // const progressPerCard = 1 / cardsCount;
//      const progressPerCard = 0.50 / cardsCount;
//     const start = index * progressPerCard;

//     if (scrollProgress <= start) {
//       return {
//         transform: 'translateY(150%)',
//         opacity: 0,
//         zIndex: index + 1
//       };
//     }

//     const cardProgress = Math.max(0, Math.min(1, (scrollProgress - start) / progressPerCard));

//     const translateY = 150 - (cardProgress * 150);
//     const opacity = Math.min(1, cardProgress * 2);

//     return {
//       transform: `translateY(${translateY}%)`,
//       opacity,
//       zIndex: index + 1
//     };
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-[200vh] md:min-h-[300vh] relative rounded-[30px] md:rounded-[40px]
//                  border-t border-l border-r border-zinc-900 bg-black"
//     >
//       <div className="md:sticky top-0 md:h-screen flex items-center overflow-visible">
        
//         <div className="max-w-[1400px] mx-auto w-full px-6 md:px-8 flex flex-col md:flex-row gap-10">

//           {/* LEFT CONTENT */}
//           <div className="flex-1 flex flex-col justify-center pt-10 md:pt-0">
//             <div className="mb-4">
//               <span className="text-white bg-neutral-900 px-4 py-2 rounded-full text-sm md:text-base">
//                 ⊛ Project Process
//               </span>
//             </div>

//             <h1 className="text-white font-light mb-4 text-5xl md:text-8xl">
//               Process
//             </h1>

//             <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8">
//               crafting bold visuals that inspire and elevate brands with thought process.
//             </p>

//             {/* <button className="px-6 py-3 text-white text-base font-semibold rounded-xl
//                                border border-white/50 bg-black/20 backdrop-blur-md
//                                shadow-[0_0_30px_rgba(255,255,255,0.3)]
//                                hover:shadow-[0_0_50px_rgba(255,255,255,0.5)]
//                                transition-all duration-300 self-start">
//               See Projects
//             </button> */}
            
//           </div>

//           {/* RIGHT - CARDS */}
//           <div 
//             className="flex-1 flex flex-col md:flex-row items-center justify-center relative"
//           >
//             <div 
//               className="relative w-full md:w-[750px] space-y-6 md:space-y-0"
//               style={{ height: isMobile ? "auto" : "400px" }}
//             >
//               {cards.map((card, index) => {
//                 const IconComponent = card.icon;
//                 const style = getCardTransform(index);

//                 return (
//                   <div
//                     key={index}
//                     className={`rounded-[2rem] transition-all duration-300 
//                                ${isMobile ? "relative w-full" : "absolute"}`}
//                     style={{
//                       ...style,
//                       left: 0,
//                       top: 0,
//                     }}
//                   >
//                     <div 
//                       className="bg-black rounded-[2rem] p-6 md:p-10 
//                                  w-full md:w-[750px] h-auto md:h-[350px] relative"
//                       style={{
//                         border: '2px solid rgba(255, 255, 255, 0.2)',
//                         boxShadow:
//                           '0 0 25px rgba(255, 255, 255, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.05)',
//                       }}
//                     >
                      
//                       <div className='absolute top-4 right-4 md:top-6 md:right-6 
//                                       w-8 h-8 md:w-10 md:h-10 rounded-full border 
//                                       bg-neutral-900 border-neutral-500 text-neutral-400 
//                                       flex items-center justify-center text-sm md:text-lg'>
//                         {card.step}
//                       </div>

//                       <div className='flex items-center gap-4 mb-4 md:mb-6'>
//                       <IconComponent className="text-white w-8 h-8 md:w-10 md:h-10" />
//                 </div>


//                       <h3 className='text-white text-2xl md:text-4xl font-medium mb-4 md:mb-6'>
//                         {card.title}
//                       </h3>

//                       <div className='w-full h-px bg-neutral-700 mb-4 md:mb-6' />

//                       <p className='text-gray-400 text-base md:text-lg leading-relaxed'>
//                         {card.description}
//                       </p>

//                     </div>

//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }


// "use client";
// import { Lightbulb, ListChecks, Rocket } from 'lucide-react';
// import { useState, useEffect, useRef } from 'react';

// export default function Process() {
//   const containerRef = useRef(null);
//   const cardRefs = useRef([]);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [isMobile, setIsMobile] = useState(false);

//   const cards = [
//     {
//       step: 1,
//       title: "Understand the Problem",
//       icon: Lightbulb,
//       description: "We start by understanding your business challenges..."
//     },
//     {
//       step: 2,
//       title: "Build with Precision",
//       icon: ListChecks,
//       description: "From architecture to UI/UX to full stack development..."
//     },
//     {
//       step: 3,
//       title: "Deploy, Support & Scale",
//       icon: Rocket,
//       description: "Once everything is tested and production-ready..."
//     }
//   ];

//   // Detect mobile
//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Scroll progress for desktop stacking animation
//   useEffect(() => {
//     if (isMobile) return;

//     const handleScroll = () => {
//       if (!containerRef.current) return;
      
//       const rect = containerRef.current.getBoundingClientRect();
//       const scrollStart = window.innerHeight * 0.5;
//       const scrollRange = rect.height - window.innerHeight;

//       if (rect.top > scrollStart) {
//         setScrollProgress(0);
//       } else if (rect.bottom < window.innerHeight) {
//         setScrollProgress(1);
//       } else {
//         const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / scrollRange));
//         setScrollProgress(progress);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [isMobile]);

//   const getCardTransform = (index) => {
//     if (isMobile) {
//       return { transform: 'translateY(0)', opacity: 1, position: 'relative' };
//     }

//     const cardsCount = cards.length;
//     const progressPerCard = 0.5 / cardsCount;
//     const start = index * progressPerCard;

//     if (scrollProgress <= start) {
//       return { transform: 'translateY(150%)', opacity: 0, zIndex: index + 1 };
//     }

//     const cardProgress = Math.max(0, Math.min(1, (scrollProgress - start) / progressPerCard));
//     const translateY = 150 - (cardProgress * 150);
//     const opacity = Math.min(1, cardProgress * 2);

//     return { transform: `translateY(${translateY}%)`, opacity, zIndex: index + 1 };
//   };

//   const scrollToCard = (index) => {
//     if (cardRefs.current[index]) {
//       cardRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   return (
//     <div 
//       ref={containerRef}
//       className="min-h-[200vh] md:min-h-[300vh] relative rounded-[30px] md:rounded-[40px]
//                  border-t border-l border-r border-zinc-900 bg-black"
//     >
//       <div className="md:sticky top-0 md:h-screen flex items-center overflow-visible">
//         <div className="max-w-[1400px] mx-auto w-full px-6 md:px-8 flex flex-col md:flex-row gap-10">

//           {/* LEFT CONTENT */}
//           <div className="flex-1 flex flex-col justify-center pt-10 md:pt-0">
//             <div className="mb-4">
//               <span className="text-white bg-neutral-900 px-4 py-2 rounded-full text-sm md:text-base">
//                 ⊛ Project Process
//               </span>
//             </div>

//             <h1 className="text-white font-light mb-4 text-5xl md:text-8xl">
//               Process
//             </h1>

//             <p className="text-gray-400 text-base md:text-lg max-w-lg mb-8">
//               crafting bold visuals that inspire and elevate brands with thought process.
//             </p>

//             {/* Card jump buttons */}
//             <div className="flex gap-4">
//               {cards.map((card, i) => (
//                 <button
//                   key={i}
//                   onClick={() => scrollToCard(i)}
//                   className="px-4 py-2 text-white border rounded-lg hover:bg-white/10 transition"
//                 >
//                   {card.step}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT - CARDS */}
//           <div className="flex-1 flex flex-col md:flex-row items-center justify-center relative">
//             <div className="relative w-full md:w-[750px] space-y-6 md:space-y-0" style={{ height: isMobile ? "auto" : "400px" }}>
//               {cards.map((card, index) => {
//                 const IconComponent = card.icon;
//                 const style = getCardTransform(index);

//                 return (
//                   <div
//                     key={index}
//                     ref={el => cardRefs.current[index] = el}
//                     className={`rounded-[2rem] transition-all duration-300 ${isMobile ? "relative w-full" : "absolute"}`}
//                     style={{ ...style, left: 0, top: 0 }}
//                   >
//                     <div className="bg-black rounded-[2rem] p-6 md:p-10 w-full md:w-[750px] h-auto md:h-[350px] relative"
//                          style={{ border: '2px solid rgba(255, 255, 255, 0.2)', boxShadow: '0 0 25px rgba(255,255,255,0.25), inset 0 0 20px rgba(255,255,255,0.05)' }}>
                      
//                       <div className='absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full border 
//                                       bg-neutral-900 border-neutral-500 text-neutral-400 flex items-center justify-center text-sm md:text-lg'>
//                         {card.step}
//                       </div>

//                       <div className='flex items-center gap-4 mb-4 md:mb-6'>
//                         <IconComponent className="text-white w-8 h-8 md:w-10 md:h-10" />
//                       </div>

//                       <h3 className='text-white text-2xl md:text-4xl font-medium mb-4 md:mb-6'>
//                         {card.title}
//                       </h3>

//                       <div className='w-full h-px bg-neutral-700 mb-4 md:mb-6' />

//                       <p className='text-gray-400 text-base md:text-lg leading-relaxed'>
//                         {card.description}
//                       </p>

//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import { Lightbulb, Map, Pencil, CheckCircle, Headphones } from 'lucide-react';

// export default function Process() {
//   const [lineHeight, setLineHeight] = useState(0);
//   const timelineRef = useRef(null);
//   const [visibleCards, setVisibleCards] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (timelineRef.current) {
//         const rect = timelineRef.current.getBoundingClientRect();
//         const timelineTop = rect.top + window.scrollY;
//         const scrollProgress = Math.max(0, window.scrollY - timelineTop + window.innerHeight / 2);
//         const totalHeight = timelineRef.current.offsetHeight;
        
//         const progress = Math.min(100, (scrollProgress / totalHeight) * 100);
//         setLineHeight(progress);

//         // Check which cards are visible
//         const cards = document.querySelectorAll('.timeline-card');
//         const visible = [];
//         cards.forEach((card, index) => {
//           const cardRect = card.getBoundingClientRect();
//           if (cardRect.top < window.innerHeight * 0.8) {
//             visible.push(index);
//           }
//         });
//         setVisibleCards(visible);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const phases = [
//     {
//       icon: Lightbulb,
//       title: "Discovery & Contribution",
//       side: "right"
//     },
//     {
//       icon: Map,
//       title: "Planning & Strategy",
//       side: "left"
//     },
//     {
//       icon: Pencil,
//       title: "Design & Development",
//       side: "right"
//     },
//     {
//       icon: CheckCircle,
//       title: "Testing & Quality Assurance",
//       side: "left"
//     },
//     {
//       icon: Headphones,
//       title: "Delivery & Support",
//       side: "right"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-20">
//           <div className="inline-block px-4 py-1 border border-white rounded-full text-white text-sm mb-6">
//             Dacula Group
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">
//             Our Simple <span className="text-gray-400">Philosophy</span>
//           </h1>
//           <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed">
//             Our simple philosophy centers on collaboration, innovation, and dedication, driving success through strong partnerships with our team, clients, and partners to foster growth and excellence.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div ref={timelineRef} className="relative">
//           {/* Vertical line background */}
//           <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-800 h-full"></div>
          
//           {/* Animated vertical line */}
//           <div 
//             className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white to-gray-400 transition-all duration-200 ease-out shadow-lg shadow-white/50"
//             style={{ height: `${lineHeight}%` }}
//           ></div>

//           {/* Timeline items */}
//           <div className="space-y-24">
//             {phases.map((phase, index) => {
//               const Icon = phase.icon;
//               const isVisible = visibleCards.includes(index);
//               return (
//                 <div key={index} className="relative timeline-card">
//                   {/* Center dot */}
//                   <div 
//                     className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 transition-all duration-500 ${
//                       isVisible 
//                         ? 'bg-white scale-100 shadow-lg shadow-white/50' 
//                         : 'bg-gray-600 scale-75'
//                     }`}
//                   ></div>

//                   {/* Content card */}
//                   <div className={`flex ${phase.side === 'right' ? 'justify-end' : 'justify-start'} ${phase.side === 'left' ? 'pr-[52%]' : 'pl-[52%]'}`}>
//                     <div 
//                       className={`bg-gradient-to-br from-gray-900 to-gray-950 border border-gray-800 rounded-xl p-8 w-96 cursor-pointer transition-all duration-500 ${
//                         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
//                       } hover:scale-105 hover:shadow-2xl hover:shadow-white/10 hover:border-white/30 hover:-translate-y-2`}
//                       style={{
//                         transformStyle: 'preserve-3d',
//                         perspective: '1000px'
//                       }}
//                     >
//                       <div className="flex items-center gap-5">
//                         <div className="bg-white rounded-full p-4 flex-shrink-0 transition-all duration-300 hover:bg-gray-200 hover:rotate-12 hover:scale-110">
//                           <Icon className="w-7 h-7 text-black" />
//                         </div>
//                         <h3 className="text-xl font-semibold">{phase.title}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom CTA */}
//         <div className="text-center mt-32">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50">
//             Learn More
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }










// "use client";
// import React, { useEffect, useRef, useState } from 'react';
// import { Lightbulb, Map, Pencil, CheckCircle, Headphones } from 'lucide-react';

// export default function Process() {
//   const [lineHeight, setLineHeight] = useState(0);
//   const timelineRef = useRef(null);
//   const [visibleCards, setVisibleCards] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (timelineRef.current) {
//         const rect = timelineRef.current.getBoundingClientRect();
//         const timelineTop = rect.top + window.scrollY;
//         const scrollProgress = Math.max(0, window.scrollY - timelineTop + window.innerHeight / 2);
//         const totalHeight = timelineRef.current.offsetHeight;
        
//         const progress = Math.min(100, (scrollProgress / totalHeight) * 100);
//         setLineHeight(progress);

//         // Check which cards are visible
//         const cards = document.querySelectorAll('.timeline-card');
//         const visible = [];
//         cards.forEach((card, index) => {
//           const cardRect = card.getBoundingClientRect();
//           if (cardRect.top < window.innerHeight * 0.8) {
//             visible.push(index);
//           }
//         });
//         setVisibleCards(visible);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const phases = [
//     {
//       icon: Lightbulb,
//       title: "Build with Precision",
//       side: "right"
//     },
//     {
//       icon: Map,
//       title: "Deploy, Support & Scale",
//       side: "left"
//     },
//     {
//       icon: Pencil,
//       title: "Design & Development",
//       side: "right"
//     },
//     {
//       icon: CheckCircle,
//       title: "Testing & Quality",
//       side: "left"
//     },
//     {
//       icon: Headphones,
//       title: "understand the problem",
//       side: "right"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white py-8 md:py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="text-center mb-12 md:mb-20">
//           <div className="inline-block px-4 py-1 border border-white rounded-full text-white text-xs md:text-sm mb-4 md:mb-6">
//            ⊛ Project Process
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
//             Our Simple <span className="text-gray-400">Process</span>
//           </h1>
//           <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
//             crafting bold visuals that inspire and elevate brands with thought process.
//           </p>
//         </div>

//         {/* Timeline */}
//         <div ref={timelineRef} className="relative">
//           {/* Vertical line background - Desktop */}
//           <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-800 h-full"></div>
          
//           {/* Animated vertical line - Desktop */}
//           <div 
//             className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-500 transition-all duration-200 ease-out shadow-lg shadow-white/50"
//             style={{ height: `${lineHeight}%` }}
//           ></div>

//           {/* Vertical line for mobile - left aligned */}
//           <div className="md:hidden absolute left-6 w-0.5 bg-gray-800 h-full"></div>
//           <div 
//             className="md:hidden absolute left-6 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-500 transition-all duration-200 ease-out"
//             style={{ height: `${lineHeight}%` }}
//           ></div>

//           {/* Timeline items */}
//           <div className="space-y-12 md:space-y-24">
//             {phases.map((phase, index) => {
//               const Icon = phase.icon;
//               const isVisible = visibleCards.includes(index);
//               return (
//                 <div key={index} className="relative timeline-card">
//                   {/* Center dot - Desktop */}
//                   <div 
//                     className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 transition-all duration-500 ${
//                       isVisible 
//                         ? 'bg-white scale-100 shadow-lg shadow-white/50 animate-pulse' 
//                         : 'bg-gray-700 scale-75'
//                     }`}
//                   ></div>

//                   {/* Center dot - Mobile */}
//                   <div 
//                     className={`md:hidden absolute left-6 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 transition-all duration-500 ${
//                       isVisible 
//                         ? 'bg-white scale-100' 
//                         : 'bg-gray-700 scale-75'
//                     }`}
//                   ></div>

//               {/* Content card */}
//                   <div className={`
//                     flex 
//                     justify-start md:${phase.side === 'right' ? 'justify-start' : 'justify-end'} 
//                     ${phase.side === 'right' ? 'md:pl-[52%]' : 'md:pr-[52%]'}
//                     pl-12 md:pl-0 md:pr-0
//                   `}>
//                     <div 
//                       className={`
//                         ${isVisible ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/30' : 'bg-gradient-to-br from-gray-900 to-black border-gray-800'}
//                         border-2
//                         rounded-xl md:rounded-2xl 
//                         p-6 md:p-10 
//                         w-full md:w-[450px] 
//                         cursor-pointer 
//                         transition-all duration-700 ease-out
//                         ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}
//                         hover:scale-105 
//                         hover:shadow-2xl 
//                         hover:shadow-white/20
//                         hover:border-white/50 
//                         hover:-translate-y-2
//                         backdrop-blur-sm
//                       `}
//                       style={{
//                         transformStyle: 'preserve-3d',
//                         perspective: '1000px'
//                       }}
//                     >
//                       <div className="flex items-center gap-4 md:gap-6">
//                         <div className={`rounded-full p-3 md:p-5 flex-shrink-0 transition-all duration-500 ${
//                           isVisible 
//                             ? 'bg-white shadow-lg shadow-white/50' 
//                             : 'bg-gray-700'
//                         } hover:rotate-12 hover:scale-110`}>
//                           <Icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${
//                             isVisible ? 'text-black' : 'text-gray-400'
//                           }`} />
//                         </div>
//                         <h3 className={`text-lg md:text-2xl font-semibold transition-colors duration-500 ${
//                           isVisible ? 'text-white' : 'text-gray-500'
//                         }`}>
//                           {phase.title}
//                         </h3>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

        
//       </div>
      
//     </div>
//   );
// }


// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import {
//   Lightbulb,
//   Map,
//   Pencil,
//   CheckCircle,
//   Headphones,
// } from "lucide-react";

// export default function Process() {
//   const [lineHeight, setLineHeight] = useState(0);
//   const timelineRef = useRef(null);
//   const [visibleCards, setVisibleCards] = useState([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (!timelineRef.current) return;

//       const rect = timelineRef.current.getBoundingClientRect();
//       const timelineTop = rect.top + window.scrollY;
//       const scrollProgress =
//         window.scrollY - timelineTop + window.innerHeight / 2;
//       const totalHeight = timelineRef.current.offsetHeight;

//       const progress = Math.min(
//         100,
//         Math.max(0, (scrollProgress / totalHeight) * 100)
//       );
//       setLineHeight(progress);

//       const cards = document.querySelectorAll(".timeline-card");
//       const visible = [];
//       cards.forEach((card, index) => {
//         if (card.getBoundingClientRect().top < window.innerHeight * 0.8) {
//           visible.push(index);
//         }
//       });
//       setVisibleCards(visible);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const phases = [
//     { icon: Lightbulb, title: "Build with Precision", side: "right" },
//     { icon: Map, title: "Deploy, Support & Scale", side: "left" },
//     { icon: Pencil, title: "Design & Development", side: "right" },
//     { icon: CheckCircle, title: "Testing & Quality", side: "left" },
//     { icon: Headphones, title: "Understand the Problem", side: "right" },
//   ];

//   const members = [
// { name: "DINESH BIRLA", role: "DIRECTOR", initial: "DB" },
//     { name: "PRATYAKSH LUTARE", role: "DIRECTOR", initial: "PL" },
// { name: "TANISHA", role: "HR", initial: "T" },
//     { name: "PIYUSH HANSARI", role: "SALES MANAGER", initial: "PH" },
//     { name: "VARUN KUMAR", role: "FULLSTACK DEV", initial: "VK" },
//     { name: "PRAGYA GUPTA", role: "BUSINESS DEV", initial: "PG" },
//     { name: "MANSIDEVI", role: "HR", initial: "M" },
//      { name: "NISHA YADAV", role: "REACT NATIVE DEVELOPER",initial: "NY"},
//     { name: "DIKSHIKA LOHAR", role: "FULLSTACK DEVELOPER",initial: "DL"},
//     { name: "NANDANI JULANIYA ", role: "UI&UX DESIGNER",initial: "NJ" },
//     { name: "ANUSHKA MEENA", role: "FULLSTACK DEVELPOER",initial: "AM" },
    
//     { name: "UMASHANKAR", role: "MERN STACK DEV", initial: "U" },
//     { name: "KANHEYA", role: "FRONTEND DEV", initial: "K" },
    
    
//   ];

//   return (
//     <>
//       {/* ✅ INLINE ANIMATION CSS */}
//       <style jsx global>{`
//         @keyframes marquee {
//           from {
//             transform: translateX(0);
//           }
//           to {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 15s linear infinite;
//         }
//         .animate-marquee:hover {
//           animation-play-state: paused;
//         }
//       `}</style>

//       <div className="bg-black text-white">
//         {/* ================= PROCESS ================= */}
//         <div className="min-h-screen py-16 px-4">
//           <div className="max-w-6xl mx-auto">
//             {/* Header */}
//             <div className="text-center mb-20">
//               <div className="inline-block px-4 py-1 border border-white rounded-full text-xs mb-6">
//                 ⊛ Project Process
//               </div>
//               <h1 className="text-4xl md:text-5xl font-bold mb-4">
//                 Our Simple <span className="text-gray-400">Process</span>
//               </h1>
//               <p className="text-gray-400 max-w-3xl mx-auto">
//                 Crafting bold visuals that inspire and elevate brands.
//               </p>
//             </div>

//             {/* Timeline */}
//             <div ref={timelineRef} className="relative">
//               <div className="hidden md:block absolute left-1/2 w-0.5 bg-gray-800 h-full -translate-x-1/2" />
//               <div
//                 className="hidden md:block absolute left-1/2 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-500 -translate-x-1/2"
//                 style={{ height: `${lineHeight}%` }}
//               />

//               <div className="space-y-24">
//                 {phases.map((phase, index) => {
//                   const Icon = phase.icon;
//                   const isVisible = visibleCards.includes(index);

//                   return (
//                     <div key={index} className="relative timeline-card">
//                       <div
//                         className={`hidden md:block absolute left-1/2 w-4 h-4 rounded-full -translate-x-1/2 ${
//                           isVisible ? "bg-white animate-pulse" : "bg-gray-700"
//                         }`}
//                       />

//                       <div
//                         className={`flex ${
//                           phase.side === "right"
//                             ? "md:pl-[52%]"
//                             : "md:pr-[52%] md:justify-end"
//                         } pl-12`}
//                       >
//                         <div
//                           className={`md:w-[450px] p-8 border-2 rounded-2xl transition-all duration-700 ${
//                             isVisible
//                               ? "bg-white/10 border-white/30"
//                               : "bg-gray-900 border-gray-800 opacity-70"
//                           }`}
//                         >
//                           <div className="flex items-center gap-6">
//                             <div
//                               className={`p-4 rounded-full ${
//                                 isVisible ? "bg-white" : "bg-gray-700"
//                               }`}
//                             >
//                               <Icon
//                                 className={`w-7 h-7 ${
//                                   isVisible ? "text-black" : "text-gray-400"
//                                 }`}
//                               />
//                             </div>
//                             <h3 className="text-2xl font-semibold">
//                               {phase.title}
//                             </h3>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ================= SLIDER ================= */}
//         <div className="py-24 overflow-hidden">
//           <div className="text-center mb-16">
//             <span className="px-4 py-1 text-xs rounded-full border border-white/30">
//               Team Exellence
//             </span>
//             <h2 className="text-4xl md:text-5xl font-bold mt-6">
//               Top Talent at VortexCubes
//             </h2>
//             <p className="text-gray-400 max-w-3xl mx-auto mt-4">
//              Meet the brilliant minds driving innovation, excellence, and growth at  - our dedicated team of experts committed to delivering impactful solutions, fostering creativity, and exceeding client expectations at every step.
//             </p>
//           </div>

//           <div className="flex gap-6 animate-marquee px-6">
//             {[...members, ...members].map((item, index) => (
//               <div
//                 key={index}
//                 className="min-w-[220px] h-[260px] rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-6 flex flex-col justify-end"
//               >
//                 <div className="text-5xl font-bold mb-auto">
//                   {item.initial}
//                 </div>
//                 <h4 className="font-semibold">{item.name}</h4>
//                 <p className="text-xs text-gray-300">{item.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
























"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Map,
  Pencil,
  CheckCircle,
  Headphones,
} from "lucide-react";

export default function Process() {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const timelineTop = rect.top + window.scrollY;
      const scrollProgress =
        window.scrollY - timelineTop + window.innerHeight / 2;
      const totalHeight = timelineRef.current.offsetHeight;

      const progress = Math.min(
        100,
        Math.max(0, (scrollProgress / totalHeight) * 100)
      );
      setLineHeight(progress);

      const cards = document.querySelectorAll(".timeline-card");
      const visible = [];
      cards.forEach((card, index) => {
        if (card.getBoundingClientRect().top < window.innerHeight * 0.85) {
          visible.push(index);
        }
      });
      setVisibleCards(visible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const phases = [
    { icon: Lightbulb, title: "Discovery & Consultation", side: "right" },
    { icon: Map, title: "Planning & Strategy", side: "left" },
    { icon: Pencil, title: "Design & Development", side: "right" },
    { icon: CheckCircle, title: "Testing & Quality Assurance", side: "left" },
    { icon: Headphones, title: "Delivery & Support", side: "right" },
  ];

  return (
    <section className="bg-black text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="px-4 py-1 border border-white/40 rounded-full text-xs">
            ⊛ Project Process
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-6">
            Our Simple <span className="text-gray-400">Process</span>
          </h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* ✅ Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-gray-800 h-full" />
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[2px] bg-blue-500"
            style={{ height: `${lineHeight}%` }}
          />

          {/* ✅ Mobile Left Line (IMAGE LIKE) */}
          <div className="md:hidden absolute left-6 w-[2px] bg-gray-700 h-full" />
          <div
            className="md:hidden absolute left-6 w-[2px] bg-blue-500"
            style={{ height: `${lineHeight}%` }}
          />

          <div className="space-y-16 md:space-y-24">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  className="relative timeline-card flex items-center"
                >
                  {/* ✅ Dot */}
                  <span
                    className={`absolute left-6 md:left-1/2 
                    -translate-x-1/2 w-3 h-3 rounded-full
                    ${isVisible ? "bg-blue-500" : "bg-gray-600"}`}
                  />

                  {/* ✅ Card Wrapper */}
                  <div
                    className={`
                      w-full flex
                      justify-center md:justify-start
                      pl-12 md:pl-0
                      ${
                        phase.side === "right"
                          ? "md:pl-[52%]"
                          : "md:justify-end md:pr-[52%]"
                      }
                    `}
                  >
                    {/* ✅ Card */}
                    <div
                      className="
                        w-full max-w-[280px] md:max-w-[440px]
                        bg-gradient-to-br from-[#151525] to-[#0f0f1a]
                        border border-white/10
                        rounded-xl md:rounded-2xl
                        px-5 py-6 md:p-8
                        text-center md:text-left
                        transition-all duration-500
                      "
                    >
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <div className="p-3 rounded-full bg-blue-500/20">
                          <Icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <h3 className="text-sm md:text-xl font-semibold">
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
