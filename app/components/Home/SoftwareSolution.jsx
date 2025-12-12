// "use client";

// import React, { useState, useEffect, useRef } from 'react';

// import { 
//   Truck,
//   Package,
//   ShoppingCart,
//   Warehouse,
//   GraduationCap,
//   Building,
//   Gem,
//   Landmark,
//   Factory,
//   Home,
//   Stethoscope,
//   Droplet,
//   Car,
//   Store,
//   Code,
//   Rocket,
//   Building2
// } from "lucide-react";


// export default function SoftwareSolutions() {
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const canvasRef = useRef(null);

//   const getInitials = (name) => {
//     return name
//       .split(' ')
//       .map(word => word[0])
//       .join('')
//       .toUpperCase()
//       .slice(0, 2);
//   };

//   const getAvatarGradient = (name) => {
//     const gradients = [
//       'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
//       'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
//       'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//       'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
//       'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
//       'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
//       'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
//       'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
//       'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
//       'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
//     ];
//     const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
//     return gradients[index % gradients.length];
//   };

//   const teamMembers = [
//     { name: "CLIENTS1", role: "DIRECTOR" },
//     { name: "CLIENTS2", role: "DIRECTOR" },
//     { name: "Tanisha", role: "HR" },
//     { name: "Piyush Hansari", role: "SALES MANAGER" },
//     { name: "Varun Kumar", role: "SENIOUR FULLSTACK DEVELOPER" },
//     { name: "Pragya Gupta", role: "BUSINESS DEVELOPMENT MANAGER" },
//     { name: "MANSIDEVI", role: "HR" },
//     { name: "NISHA YADAV", role: "REACT NATIVE DEVELOPER" },
//     { name: "DIKSHIKA LOHAR", role: "FULLSTACK DEVELOPER" },
//     { name: "NANDANI JULANIYA ", role: "UI&UX DESIGNER" },
//     { name: "ANUSHKA MEENA", role: "FULLSTACK DEVELPOER" },
//     { name: "UMASHANKAR", role: "MERNSTACK DEVELOPER" },
//     { name: "KANHEYA", role: "FRONTEND DEVELOPER" },
//   ];

//   // Smoke Animation Effect
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = canvas.height + Math.random() * 100;
//         this.size = Math.random() * 80 + 40;
//         this.speedY = -Math.random() * 0.5 - 0.3;
//         this.speedX = (Math.random() - 0.5) * 0.5;
//         this.opacity = Math.random() * 0.3 + 0.1;
//         this.life = 0;
//         this.maxLife = Math.random() * 200 + 200;
//       }

//       update() {
//         this.y += this.speedY;
//         this.x += this.speedX;
//         this.life++;
//         this.opacity = Math.max(0, this.opacity - 0.001);
//         this.size += 0.1;

//         if (this.y < -this.size || this.life > this.maxLife || this.opacity <= 0) {
//           this.reset();
//         }
//       }

//       draw() {
//         ctx.save();
//         ctx.globalAlpha = this.opacity;
        
//         const gradient = ctx.createRadialGradient(
//           this.x, this.y, 0,
//           this.x, this.y, this.size
//         );
//         gradient.addColorStop(0, 'rgba(100, 100, 120, 0.4)');
//         gradient.addColorStop(0.5, 'rgba(60, 60, 80, 0.2)');
//         gradient.addColorStop(1, 'rgba(30, 30, 50, 0)');

//         ctx.fillStyle = gradient;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//         ctx.restore();
//       }
//     }

//     const particles = [];
//     for (let i = 0; i < 30; i++) {
//       particles.push(new Particle());
//     }

//     function animate() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
      
//       particles.forEach(particle => {
//         particle.update();
//         particle.draw();
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setScrollPosition((prev) => {
//         const maxScroll = teamMembers.length * 180;
//         return (prev + 4) % maxScroll;
//       });
//     }, 10);

//     return () => clearInterval(interval);
//   }, [teamMembers.length]);

//   const duplicatedMembers = [...teamMembers, ...teamMembers];
//   const solutions = [
//     {
//       icon: <Truck className="w-8 h-8" />,
//       title: "Transport & Logistic Management Software",
//       description: "Streamlining operations and optimizing efficiency in logistics management.",
//     },
//     {
//       icon: <Package className="w-8 h-8" />,
//       title: "Inventory POS Solution",
//       description: "Efficient inventory tracking and seamless point-of-sale management system.",
//     },
//     {
//       icon: <ShoppingCart className="w-8 h-8" />,
//       title: "Ecommerce Solution",
//       description: "Comprehensive eCommerce platform for seamless shopping and management.",
//     },
//     {
//       icon: <GraduationCap className="w-8 h-8" />,
//       title: "EdTech Solution & School Management Software",
//       description: "Empowering education with streamlined management and digital learning tools.",
//     },
//   ];



// const industries = [
//   { icon: <Code className="w-8 h-8" />, name: "IT & Software" },
//   { icon: <ShoppingCart className="w-8 h-8" />, name: "E-Commerce" },
//   { icon: <Landmark className="w-8 h-8" />, name: "Finance & FinTech" },
//   { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare" },


//   { icon: <GraduationCap className="w-8 h-8" />, name: "Education & EdTech" },
//   { icon: <Rocket className="w-8 h-8" />, name: "Startups & SaaS" },
//   { icon: <Building2 className="w-8 h-8" />, name: "Enterprises" },
//   { icon: <Home className="w-8 h-8" />, name: "Real Estate Tech" },
//   { icon: <Truck className="w-8 h-8" />, name: "Logistics Tech" },
//   { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare" }

// ];

//   return (
//     <div className="min-h-screen bg-black text-white relative overflow-hidden">
//       {/* Animated Smoke Background */}
//       <canvas
//         ref={canvasRef}
//         className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
//         style={{ opacity: 0.20 }}
//       />

//       {/* Content */}
//       <div className="relative z-10">
//         {/* Solutions Section */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-0">
//           {/* Header */}
//           <div className="text-center mb-8 sm:mb-12 lg:mb-16">
//             <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4 backdrop-blur-sm">
//               Effortless Tech
//             </span>
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
//               <span className="text-white">Software </span>
//               <span className="text-white">Solution</span>
//             </h1>
//             <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4">
//               Empowering businesses with innovative, scalable, and user-friendly software solutions, crafted to streamline
//               operations, enhance productivity, and drive digital transformation.
//             </p>
//           </div>

//           {/* Solutions Cards */}
//           <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-24">
//             {solutions.map((solution, index) => (
//               <div
//                 key={index}
//                 className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
//               >
//                 <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
//                   <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg text-white group-hover:bg-white/20 transition-colors flex-shrink-0">
//                     {React.cloneElement(solution.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
//                       {solution.title}
//                     </h3>
//                     <p className="text-gray-300 text-xs sm:text-sm">
//                       {solution.description}
//                     </p>
//                   </div>
//                 </div>
//                 <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm sm:text-base w-full sm:w-auto flex-shrink-0">
//                   View
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Industries Section */}
//           <div className="text-center mb-8 sm:mb-10 lg:mb-12">
//             <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4">
//               Universal Solutions
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
//               For <span className="text-white">Every Industry</span> We have Solution
//             </h2>
//             <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4">
//               We deliver custom software solutions for every industry, enhancing productivity, streamlining operations, and driving growth with
//               innovative, reliable, and scalable technology, meticulously crafted to meet your unique business requirements.
//             </p>
//           </div>

//           {/* Industries Grid */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pb-8 sm:pb-12 lg:pb-16">
//             {industries.map((industry, index) => (
//               <div
//                 key={index}
//                 className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer min-h-[120px] sm:min-h-[140px]"
//               >
//                 <div className="text-gray-300 group-hover:text-white transition-colors">
//                   {React.cloneElement(industry.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
//                 </div>
//                 <span className="text-gray-300 font-medium text-center group-hover:text-white transition-colors text-xs sm:text-sm">
//                   {industry.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Celebration Section */}
//         <div className="w-full overflow-hidden bg-black/50 backdrop-blur-sm py-12 sm:py-16 lg:py-20">
//           <div className="text-center mb-8 sm:mb-12 px-4">
//             <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4">
//               Better Stories
//             </span>
//             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
//               Celebrating Our Growth and Success!
//             </h2>
//             <p className="text-gray-300 max-w-4xl mx-auto text-xs sm:text-sm lg:text-base px-4">
//               Proudly celebrating a decade of innovation, dedication, and success - thanks to our exceptional team, clients, and partners who have fueled our journey from startup to industry leader.
//             </p>
//           </div>

//           {/* Sliding Team Members with 3D Avatars */}
//           <div className="relative">
//             <div 
//               className="flex gap-4 sm:gap-6 transition-transform duration-100 ease-linear"
//               style={{ transform: `translateX(-${scrollPosition}px)` }}
//             >
//               {duplicatedMembers.map((member, index) => (
//                 <div
//                   key={index}
//                   className="flex-shrink-0 w-32 sm:w-40 lg:w-44 group cursor-pointer"
//                 >
//                   <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3 perspective-1000">
//                     <div 
//                       className="w-full h-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-all duration-500 relative"
//                       style={{
//                         background: getAvatarGradient(member.name),
//                         boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)',
//                         transform: 'translateZ(0)',
//                       }}
//                     >
//                       {/* 3D Effect Layers */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
//                       <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent opacity-30"></div>
                      
//                       {/* Shine Effect */}
//                       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease-in-out' }}></div>
                      
//                       {/* Initials */}
//                       <span className="relative z-10 drop-shadow-2xl" style={{ 
//                         textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
//                         transform: 'translateZ(20px)'
//                       }}>
//                         {getInitials(member.name)}
//                       </span>
                      
//                       {/* Bottom Glow */}
//                       <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
//                     </div>
                    
//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   </div>
//                   <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 text-center uppercase">
//                     {member.name}
//                   </h3>
//                   <p className="text-gray-400 text-xs text-center uppercase tracking-wide">
//                     {member.role}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from 'react';
import { 
  Truck,
  Package,
  ShoppingCart,
  Warehouse,
  GraduationCap,
  Building,
  Gem,
  Landmark,
  Factory,
  Home,
  Stethoscope,
  Droplet,
  Car,
  Store,
  Code,
  Rocket,
  Building2
} from "lucide-react";


export default function SoftwareSolutions() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const canvasRef = useRef(null);

  const getInitials = (name) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const getAvatarGradient = (name) => {
    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a56 0%, #ff6a88 100%)',
      'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
      'linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
    ];
    const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return gradients[index % gradients.length];
  };

  const teamMembers = [
    { name: "CLIENTS1", role: "DIRECTOR" },
    { name: "CLIENTS2", role: "DIRECTOR" },
    { name: "Tanisha", role: "HR" },
    { name: "Piyush Hansari", role: "SALES MANAGER" },
    { name: "Varun Kumar", role: "SENIOUR FULLSTACK DEVELOPER" },
    { name: "Pragya Gupta", role: "BUSINESS DEVELOPMENT MANAGER" },
    { name: "MANSIDEVI", role: "HR" },
    { name: "NISHA YADAV", role: "REACT NATIVE DEVELOPER" },
    { name: "DIKSHIKA LOHAR", role: "FULLSTACK DEVELOPER" },
    { name: "NANDANI JULANIYA ", role: "UI&UX DESIGNER" },
    { name: "ANUSHKA MEENA", role: "FULLSTACK DEVELPOER" },
    { name: "UMASHANKAR", role: "MERNSTACK DEVELOPER" },
    { name: "KANHEYA", role: "FRONTEND DEVELOPER" },
  ];

  // Smoke Animation Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.size = Math.random() * 80 + 40;
        this.speedY = -Math.random() * 0.5 - 0.3;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.life = 0;
        this.maxLife = Math.random() * 200 + 200;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.life++;
        this.opacity = Math.max(0, this.opacity - 0.001);
        this.size += 0.1;

        if (this.y < -this.size || this.life > this.maxLife || this.opacity <= 0) {
          this.reset();
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, 'rgba(100, 100, 120, 0.4)');
        gradient.addColorStop(0.5, 'rgba(60, 60, 80, 0.2)');
        gradient.addColorStop(1, 'rgba(30, 30, 50, 0)');

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const particles = [];
    for (let i = 0; i < 30; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



useEffect(() => {
  let animationId;

  const baseSpeed = 0.0030; 
  // 🔥 increase this if you want even more fast (0.0045 / 0.005)

  const animate = () => {
    setScrollPosition((prev) => {
      const maxScroll = teamMembers.length * 180;

      // 👇 universal speed calc
      const speed = window.innerWidth * baseSpeed;

      return prev >= maxScroll ? 0 : prev + speed;
    });

    animationId = requestAnimationFrame(animate);
  };

  animationId = requestAnimationFrame(animate);

  return () => cancelAnimationFrame(animationId);
}, [teamMembers.length]);


  const duplicatedMembers = [...teamMembers, ...teamMembers];
  const solutions = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Health & Managment",
      description: "Streamlining operations and optimizing efficiency in logistics management.",
    },

    {
      icon: <Package className="w-8 h-8" />,
      title: " Business & Shopping ",
      description: "Efficient inventory tracking and seamless point-of-sale management system.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Ecommerce Solution",
      description: "Comprehensive eCommerce platform for seamless shopping and management.",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "EdTech Solution & School Management Software",
      description: "Empowering education with streamlined management and digital learning tools.",
    },
  ];



const industries = [
  { icon: <Code className="w-8 h-8" />, name: "IT & Software" },
  { icon: <ShoppingCart className="w-8 h-8" />, name: "E-Commerce" },
  { icon: <Landmark className="w-8 h-8" />, name: "Finance & FinTech" },
  { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare" },


  { icon: <GraduationCap className="w-8 h-8" />, name: "Education & EdTech" },
  { icon: <Rocket className="w-8 h-8" />, name: "Startups & SaaS" },
  { icon: <Building2 className="w-8 h-8" />, name: "Enterprises" },
  { icon: <Home className="w-8 h-8" />, name: "Real Estate Tech" },
  { icon: <Truck className="w-8 h-8" />, name: "Logistics Tech" },
  { icon: <Stethoscope className="w-8 h-8" />, name: "Healthcare" }

];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Smoke Background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
        style={{ opacity: 0.20 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Solutions Section */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-16 pb-0">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4 backdrop-blur-sm">
              Effortless Tech
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-4">
              <span className="text-white">Software </span>
              <span className="text-white">Solution</span>
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4">
              Empowering businesses with innovative, scalable, and user-friendly software solutions, crafted to streamline
              operations, enhance productivity, and drive digital transformation.
            </p>
          </div>

          {/* Solutions Cards */}
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16 lg:mb-24">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:border-white transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
              >
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-3 sm:p-4 rounded-lg text-white group-hover:bg-white/20 transition-colors flex-shrink-0">
                    {React.cloneElement(solution.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-xl font-semibold mb-1 sm:mb-2 text-white">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {solution.description}
                    </p>
                  </div>
                </div>
                {/* <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-white text-black hover:bg-gray-200 rounded-lg transition-colors font-medium text-sm sm:text-base w-full sm:w-auto flex-shrink-0">
                  View
                </button> */}
              </div>
            ))}
          </div>

          {/* Industries Section */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4">
              Universal Solutions
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
              For <span className="text-white">Every Industry</span> We have Solution
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base px-4">
              We deliver custom software solutions for every industry, enhancing productivity, streamlining operations, and driving growth with
              innovative, reliable, and scalable technology, meticulously crafted to meet your unique business requirements.
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pb-8 sm:pb-12 lg:pb-16">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-8 flex flex-col items-center justify-center gap-3 sm:gap-4 hover:border-white hover:shadow-lg hover:shadow-white/10 transition-all duration-300 cursor-pointer min-h-[120px] sm:min-h-[140px]"
              >
                <div className="text-gray-300 group-hover:text-white transition-colors">
                  {React.cloneElement(industry.icon, { className: 'w-6 h-6 sm:w-8 sm:h-8' })}
                </div>
                <span className="text-gray-300 font-medium text-center group-hover:text-white transition-colors text-xs sm:text-sm">
                  {industry.name}
                </span>
              </div>
            ))}
          </div>
        </div>


        {/* Celebration Section */}
        <div className="w-full overflow-hidden bg-black/50 backdrop-blur-sm py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-8 sm:mb-12 px-4">
            <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full text-white text-xs sm:text-sm mb-3 sm:mb-4">
              Better Stories
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
              Celebrating Our Growth and Success!
            </h2>
            <p className="text-gray-300 max-w-4xl mx-auto text-xs sm:text-sm lg:text-base px-4">
              Proudly celebrating a decade of innovation, dedication, and success - thanks to our exceptional team, clients, and partners who have fueled our journey from startup to industry leader.
            </p>
          </div>

          {/* Sliding Team Members with 3D Avatars */}
          <div className="relative">
            <div
  className="flex gap-4 sm:gap-6 will-change-transform"
  style={{ transform: `translateX(-${scrollPosition}px)` }}
>


              {duplicatedMembers.map((member, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-32 sm:w-40 lg:w-44 group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-3 perspective-1000">
                    <div 
                      className="w-full h-full flex items-center justify-center text-white text-2xl sm:text-3xl lg:text-4xl font-bold group-hover:scale-110 transition-all duration-500 relative"
                      style={{
                        background: getAvatarGradient(member.name),
                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.1)',
                        transform: 'translateZ(0)',
                      }}
                    >
                      {/* 3D Effect Layers */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-black/20 to-transparent opacity-30"></div>
                      
                      {/* Shine Effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full" style={{ transition: 'transform 0.8s ease-in-out' }}></div>
                      
                      {/* Initials */}
                      <span className="relative z-10 drop-shadow-2xl" style={{ 
                        textShadow: '0 2px 10px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
                        transform: 'translateZ(20px)'
                      }}>
                        {getInitials(member.name)}
                      </span>
                      
                      {/* Bottom Glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-white font-semibold text-xs sm:text-sm mb-1 text-center uppercase">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-xs text-center uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}

