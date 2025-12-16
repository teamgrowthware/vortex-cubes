// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';

// // const ExpertiseSection = () => {
//     export default function ExpertiseSection(){
//     const [hoveredTag, setHoveredTag] = useState(null);

//     const tags = [
//         'Software Development',
//         'Cloud & DevOps',
//         'UX Design',
//         'Cloud & DevOps',
//         'Cybersecurity & Compliance',
//         'Figma',
//         'Photoshop',
//         'Application Development',
//         'Web Development'
//     ];

    
//     return (
//         <div className="text-white flex items-center justify-center">
//             {/* ANIMATION CSS */}
      
//             <div
//                 className="
//                 w-full
//                 grid lg:grid-cols-2 gap-10 lg:gap-16
//                 rounded-[30px] md:rounded-[40px]
//                 p-6 sm:p-10 md:p-14 lg:pt-20 
//                 border-t border-l border-r border-zinc-900
//                 bg-black
//                 "
//             >

//                 {/* LEFT CONTENT */}
//                 <div className="space-y-6 sm:space-y-8 animate-fadeIn">
//                     <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
//                         OUR<br />EXPERTISE
//                     </h1>

//                     <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
//                         We design, build and operate software that moves businesses forward. 
//                         We're a full-stack IT studio specializing in cloud-native architectures, 
//                         secure integrations, and data-driven products. From rapid MVPs to scalable 
//                         production systems — we combine engineering craft with product thinking 
//                         to deliver reliable, high-impact results.
//                     </p>

//                     {/* TAGS */}
//                     <div className="flex flex-wrap gap-3 p-4 border-t border-b border-[#1a1a1a]">
//                         {tags.map((tag, idx) => (
//                             <button
//                                 key={idx}
//                                 onMouseEnter={() => setHoveredTag(idx)}
//                                 onMouseLeave={() => setHoveredTag(null)}
//                                 className="
//                                     px-4 sm:px-5 py-2 sm:py-2.5 
//                                     bg-[#0d0d0d] hover:bg-zinc-800 
//                                     rounded-md text-xs sm:text-sm 
//                                     transition-all duration-300 ease-out 
//                                     hover:scale-105 hover:shadow-lg 
//                                     hover:shadow-zinc-700/30  
//                                     text-[#a5a5a5]
//                                 "
//                                 style={{
//                                     animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
//                                 }}
//                             >
//                                 {tag}
//                             </button>
//                         ))}
//                     </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="relative flex items-start justify-center w-full">
//                     <div
//                         className="relative animate-fadeIn h-full w-full"
//                         style={{ animationDelay: '0.3s' }}
//                     >
//                         {/* Glow Background */}
//                         <div
//                             className="
//                                 absolute inset-0 bg-gradient-to-br 
//                                 from-gray-200/20 to-white-500/20 
//                                 blur-3xl rounded animate-pulse
//                             "
//                             style={{ animationDuration: '3s' }}
//                         />

//                         {/* Image Container */}
//                         <div className="relative rounded-xl overflow-hidden shadow-2xl w-full h-auto">
//                             <Image
//                                 src="https://framerusercontent.com/images/FKoaSftNu2lxr33yxA3X4xgsBg.png?scale-down-to=2048&width=2436&height=1664"
//                                 alt="Professional"
//                                 width={1000}
//                                 height={800}
//                                 className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover"
//                             />

//                             {/* Gradient Overlay */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                         </div>
//                     </div>
//                 </div>

//             </div>
            
//         </div>
//     );
// };


// import React from 'react';
// import { Briefcase, Award, Code, Palette } from 'lucide-react';

// export default function AboutSection() {
//   const team = [
//     {
//       name: "Dinesh Birla",
//       role: "Director & Founder",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
//       description: "Passionate about transforming ideas into scalable digital solutions with innovative technology.",
//       resume: "#",
//       stats: [
//         { value: "10+", label: "Years Exp" },
//         { value: "50+", label: "Projects" },
//         { value: "30+", label: "Clients" }
//       ],
//       expertise: ["Leadership", "Strategy", "Business Development", "Project Management"]
//     },
//     {
//       name: "Pratyaksh Lutare",
//       role: "Director & Founder",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
//       description: "Creative technologist dedicated to building future-ready solutions that make a real impact.",
//       resume: "#",
//       stats: [
//         { value: "8+", label: "Years Exp" },
//         { value: "45+", label: "Projects" },
//         { value: "25+", label: "Clients" }
//       ],
//       expertise: ["Full Stack", "UI/UX Design", "Cloud Architecture", "Innovation"]
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black py-12 px-4">
//       {/* Header */}
//       <div className="max-w-6xl mx-auto text-center mb-10">
//         <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Meet Our Team</h1>
//         <p className="text-lg text-gray-400 max-w-2xl mx-auto">
//           Created by two brothers with one mission — Dinesh and Pratyaksh built VortexCube to deliver meaningful, future-ready IT solutions.
//         </p>
//       </div>

//       {/* Team Cards */}
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
//         {team.map((member, idx) => (
//           <div
//             key={idx}
//             className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-white transition-all duration-300 hover:scale-[1.02]"
//           >
//             {/* Profile Section */}
//             <div className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 border-b border-zinc-800">
//               <div className="flex items-center gap-4">
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-24 h-24 rounded-full border-4 border-zinc-700 object-cover grayscale"
//                 />
//                 <div>
//                   <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">
//                     {member.role.split("&")[0]}
//                   </span>
//                   <h2 className="text-2xl font-bold text-white mt-1">{member.name}</h2>
//                   <p className="text-gray-400 text-sm">{member.role}</p>
//                 </div>
//               </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//               {/* Description */}
//               <p className="text-gray-400 text-sm mb-4">{member.description}</p>

//               {/* Stats */}
//               <div className="grid grid-cols-3 gap-2 mb-4">
//                 {member.stats.map((stat, i) => (
//                   <div key={i} className="text-center p-3 bg-zinc-800 rounded-lg border border-zinc-700 hover:border-white transition-colors">
//                     <div className="text-xl font-bold text-white">{stat.value}</div>
//                     <div className="text-xs text-gray-400">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>

//               {/* Expertise Section */}
//               {member.expertise && member.expertise.length > 0 && (
//                 <div className="flex flex-wrap gap-2 mb-4">
//                   {member.expertise.map((skill, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-white text-black text-xs rounded-full font-medium hover:bg-gray-200 transition-colors"
//                     >
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               )}

//               {/* Resume Button */}
//               <a
//                 href={member.resume}
//                 className="block w-full text-center px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-all"
//               >
//                 View Portfolio
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import React from 'react';

// export default function AboutSection() {
//   const team = [
//     {
//       name: "Dinesh Birla",
//       role: "Co-Founder & Director",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
//     },
//     {
//       name: "Pratyaksh Lutare",
//       role: "Co-Founder & Director",
//       image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-black flex items-center px-4 py-12">
//       <div className="max-w-7xl mx-auto w-full">
//         <div className="grid lg:grid-cols-2 gap-8 items-center">
//           {/* Left Side - Text Content */}
//           <div className="text-white space-y-6">
//             <div className="border-t border-gray-800 pt-8">
//               <h1 className="text-5xl md:text-6xl font-bold mb-4">
//                 Built by <span className="text-blue-500">Brothers</span>,
//               </h1>
//               <h2 className="text-5xl md:text-6xl font-bold mb-6">
//                 Driven by Purpose
//               </h2>
//               <p className="text-gray-400 text-lg max-w-xl">
//                 Dinesh & Pratyaksh, both brothers, started VortexCube Technologies with a vision to deliver meaningful, future-ready IT solutions.
//               </p>
//             </div>
//           </div>

//           {/* Right Side - Team Cards */}
//           <div className="flex gap-6 justify-center lg:justify-end">
//             {team.map((member, idx) => (
//               <div
//                 key={idx}
//                 className="relative group w-64 h-80 rounded-2xl overflow-hidden border border-gray-800 hover:border-white transition-all duration-300"
//               >
//                 {/* Background Image */}
//                 <img
//                   src={member.image}
//                   alt={member.name}
//                   className="w-full h-full object-cover"
//                 />
                
//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
//                   <p className="text-gray-300 text-sm">{member.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ExpertiseSection() {
  const team = [
    {
      name: "Dinesh Birla",
      role: "Founder & Director",
     
      image: "/images/dineshsir.png",
      portfolio: null,
    },
    {
      name: "Pratyaksh Lutare",
      role: "Founder & Director",
      image:
        "/images/pratyksh.png",
      portfolio: "https://pratyaksh.vortexcubes.com/",
    },
  ];

  const tags = [
    "Software Development",
    "Cloud & DevOps",
    "UX Design",
    "Figma",
    "Photoshop",
    "Application Development",
    "Web Development",
  ];

  return (
    <div className="bg-black">

      
      {/* SECTION 1 — EXPERTISE */}
      
      <div className="text-white flex items-center justify-center py-10 px-4 sm:px-6">
        <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-10 lg:gap-16 rounded-[20px] md:rounded-[30px] p-6 sm:p-10 md:p-14 border border-zinc-900 bg-black">

          {/* LEFT TEXT */}
          <div className="space-y-6 sm:space-y-8 animate-fadeIn text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
              OUR <br className="hidden lg:block" /> EXPERTISE
            </h1>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              We design, build and operate software that moves businesses forward.
              We specialize in cloud-native architectures, secure integrations,
              and data-driven digital products.
            </p>

            {/* TAGS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 p-4 border-t border-b border-[#1a1a1a]">
              {tags.map((tag, idx) => (
                <button
                  key={idx}
                  className="px-4 py-2 bg-[#0d0d0d] hover:bg-zinc-800 rounded-md text-xs sm:text-sm transition-all duration-300 hover:scale-105 text-[#a5a5a5]"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center w-full animate-fadeIn px-2">
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl rounded-xl overflow-hidden">
              <Image
                src="https://framerusercontent.com/images/FKoaSftNu2lxr33yxA3X4xgsBg.png"
                alt="Professional"
                width={1000}
                height={800}
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl" />
            </div>
          </div>
        </div>
      </div>

     
      {/* SECTION 2 — BROTHERS */}
    

      <div className="bg-black px-4 sm:px-6 py-10">
        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT TEXT */}
            <div className="text-white space-y-4 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Crafted by, <span className="text-gray-500">Brothers</span>,
              </h1>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                Powered by Vision
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
                Dinesh & Pratyaksh started VortexCube Technologies to deliver
                meaningful, future-ready IT solutions.
              </p>
            </div>

            {/* RIGHT PROFILES */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-end">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  className="
                    relative group 
                    w-52 sm:w-60 md:w-64 
                    h-72 sm:h-80 md:h-96 
                    rounded-2xl overflow-hidden 
                    border border-gray-700 
                    hover:border-white/60
                    transition-all duration-500 
                    shadow-[0_0_25px_rgba(255,255,255,0.06)] 
                    hover:shadow-[0_0_40px_rgba(255,255,255,0.18)] 
                    hover:scale-[1.03]
                    bg-[#0a0a0a]
                  "
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="
                      w-full h-full object-cover 
                      transition-all duration-700 
                      grayscale group-hover:grayscale-0 
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  {/* Name & Role */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white text-center sm:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 drop-shadow-lg">
                      {member.name}
                    </h3>
                    <p className="text-gray-300 text-sm drop-shadow-md">
                      {member.role}
                    </p>

                    {/* Portfolio Button */}
                    {member.portfolio && (
                      <a
                        href={member.portfolio}
                        target="_blank"
                        className="
                          mt-3 inline-block 
                          px-4 py-2 text-xs sm:text-sm font-semibold
                          bg-white/10 backdrop-blur-md border border-white/20 rounded-full
                          hover:bg-white/20 hover:scale-105 transition-all
                        "
                      >
                        View Portfolio →
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}



