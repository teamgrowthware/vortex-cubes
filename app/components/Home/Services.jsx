// "use client";

// import React from "react";
// import { Laptop, CloudCog, PenTool, Cpu } from "lucide-react";

// export default function Services() {
//   const services = [
//     {
//       icon: <Laptop size={26} />,
//       title: "Web & App Development",
//       description:
//         "Crafting fast, scalable web and mobile applications designed for real-world performance — ensuring your product remains reliable as your business grows.",
//     },
//     {
//       icon: <CloudCog size={26} />,
//       title: "Cloud Infrastructure & DevOps",
//       description:
//         "Building secure, cost-efficient cloud environments with automated CI/CD pipelines — giving you smooth deployments, zero-downtime updates, and modern scalability.",
//     },
//     {
//       icon: <PenTool size={26} />,
//       title: "UI/UX & Product Design",
//       description:
//         "Designing intuitive, conversion-focused interfaces that elevate user experience — blending aesthetics with functional clarity for higher engagement.",
//     },
//     {
//       icon: <Cpu size={26} />,
//       title: "AI Integrations",
//       description:
//         "Integrating AI models, automation, and ML capabilities to enhance decision-making, improve workflows, and unlock intelligent product features.",
//     },
//   ];

//   const tags = [
//     "Brand Migration",
//     "Package Design",
//     "Branding",
//     "Slide Decks",
//     "Copywriting",
//     "Brand Graphics",
//     "Brand Landing Pages",
//     "Social Media",
//     "Icons",
//     "Brand Visibility",
//     "Brand Integrations",
//     "Optimization",
//   ];

//   return (
//     <div className="w-full bg-black text-white px-4 sm:px-6 lg:px-12 py-12 md:py-16 -mt-10 md:-mt-16">
//       {/* ANIMATION CSS */}
//       <style jsx>{`
//         @keyframes scroll-row {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .scroll-animation {
//           white-space: nowrap;
//           display: flex;
//           animation: scroll-row 10s linear infinite;
//         }
//       `}</style>

//      {/* Header Badge */}
// <div className="inline-flex items-center gap-3 px-6 py-2 mb-4 bg-white/5 backdrop-blur-md rounded-full border border-white/20 text-sm sm:text-base md:text-lg">
//   <span className="w-3 h-3 bg-white rounded-full"></span>
//   <span>Our Services</span>
// </div>

//       {/* Title */}
//       <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-light leading-tight mb-4">
//         Services
//       </h1>

//       <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-4xl mb-14">
//         Empowering businesses with robust digital solutions—from engineering to cloud to intelligent automation.
//       </p>

//       {/* Service Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-10 mb-16">
//         {services.map((service, index) => (
//           <div
//             key={index}
//             className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-white/10 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-[0px_0px_30px_rgba(255,255,255,0.06)]"
//           >
//             <div className="flex items-center gap-3 text-white font-semibold text-lg sm:text-xl">
//               <span className="opacity-80">{service.icon}</span>
//               {service.title}
//             </div>

//             <div className="border-b border-white/10 my-4"></div>

//             <p className="text-gray-400 text-sm sm:text-[15px] leading-relaxed">
//               {service.description}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Scrolling Tags */}
//       <div className="w-full overflow-hidden select-none space-y-4">
//         {/* Row 1 */}
//         <div className="scroll-animation gap-6">
//           {[...tags, ...tags].map((tag, i) => (
//             <span
//               key={i}
//               className="px-5 py-2 bg-[#111]/60 border border-white/10 text-white/70 rounded-full text-sm hover:bg-white/10 hover:text-white transition cursor-pointer"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Row 2 with delay */}
//         <div className="scroll-animation gap-6" style={{ animationDelay: "-7.5s" }}>
//           {[...tags, ...tags].map((tag, i) => (
//             <span
//               key={i}
//               className="px-5 py-2 bg-[#111]/60 border border-white/10 text-white/70 rounded-full text-sm hover:bg-white/10 hover:text-white transition cursor-pointer"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
