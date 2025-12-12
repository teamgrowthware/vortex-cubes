'use client';
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../Navbar';

const ProjectOverviewPage = ({ params = {} }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const router = useRouter();
  const { slug } = params || {};

  console.log('ProjectOverviewPage params:', params);
  console.log('Slug:', slug);

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  const allProjects = [
    {
      id: 1,
      title: "Simpler Host",
      description: "Creating a secure and user-friendly online marketplace for NFTs requires advanced technology and unique features.",
      date: "July 15, 2023",
      // client: "CryptoPunks",
      category: "Web Development",
      tags: ["Research", "Strategy", "Design", "Development"],
      image: "/images/simplerhosthotel.png"
    },
    {
      id: 2,
      title: "FASCO",
      description: "FASCO – A modern e-commerce web platform for trendy fashion shopping with a fast, smooth, and user-friendly experience.VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
     
      category: "Web Development",
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      image: "/images/fasco1.png"
    },
    {
      id: 3,
      title: "WORZO",
      description: "Worzo – A smart e-commerce website for renting and managing electric scooters with easy booking and seamless rides.VorteX is a platform that connects developers with clients.",
      date: "August 1, 2023-2024",
      
      category: "Web Development",
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      image: "/images/worzo1.jpeg"
    },

{
      id: 4,
      title: "FUTURE TECH",
      description: "An AI-focused podcast platform to explore, learn, and stay updated with the latest trends in artificial intelligence through expert-led episodes.",
      date: "August 8, 2024",
      
      category: "Web Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/podacastmockup.png"
    },

    {
      id: 5,
      title: "SERVICE APP",
      description: "A nearby service–booking app that helps users discover, compare, and book trusted fitness and sports trainers in their area.",
      date: "Oct 1, 2022-2023",
     
      category: "Web Development",
      tags:  ["React Native", "iOS", "Node.js","Express", "MongoDB"],
      image: "/images/home screen.png"
    },

    //    {
    //   id: 7,
    //   title: "VorteX CRM",
    //   description: "VorteX is a platform that connects developers with clients.",
    //   date: "August 1, 2024",
    //   client: "VorteX",
    //   category: "Web Development",
    //   tags: ["Research", "Strategy", "Design", "Development"],
    //   image: "/images/home screen.png"
    // }, 

 {
      id: 6,
      title: "Music & Series",
      description: "A music and series streaming platform for discovering and enjoying entertainment content.Stream music and binge your favorite series in one app.",
      date: "june 5, 2023",
      
      category: "Web Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/music.png"
    },

    {
      id: 7,
      title: "Girls Gone Social",
      description: "A lifestyle & social platform enabling users to express themselves and connect through shared interests.",
      date: "August 16, 2024",
    
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/On-boarding.png"
    },

{
      id: 8,
      title: "FVRD ",
      description: "A responsive streaming platform UI with movie details and instant play options.A cinematic streaming app design for discovering and watching movies instantly.",
      date: "August 12, 2025",
     
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/FVRD eco.png"
    },


{
      id: 9,
      title: "NimbusApp",
      description: "A wellness dashboard that tracks vital health metrics like heart rate, blood pressure, and sleep quality.",
      date: "August 1, 2024",
    
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/NimbusApp.png"
    },

{
      id: 10,
      title: "Moodtracking",
      description: "A mental health app that helps users track moods, identify patterns, and improve emotional well-being.",
      date: "sep 6, 2024",
     
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/Moodtracking.png"
    },

{
      id: 11,
      title: "TriveApp",
      description: "A location-based fitness app for discovering trainers, gyms, and wellness providers.A mobile platform for discovering and booking fitness and health services",
      date: "desc, 2024",
    
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "/images/triveappservice.png"
    },



{
      id: 12,
      title: "NovaCRM",
      description: "An analytics-powered CRM dashboard for tracking sales performance and customer activity.A centralized CRM dashboard for customer and sales management.",
      date: "feb 23, 2024",
      
      category: "CRM Solutions",
      tags: ["Android", "CRM", "Analytics"],
      image: "/images/CRMdash.png"
    },

{
      id: 13,
      title: "CardSnap",
      date: 2024,
      description: "CardSnap is an AI-powered app for scanning, organizing, and managing business contacts effortlessly.",
       
      category: "CRM Solutions",
      tags: ["CRM", "Analytics", "Androide","Admin Panel",
  "SaaS",
  "Customer Management",
  "Sales"],
      image: "/images/cardscanning-app.jpg"
    },

     {
      id: 14,
      title: "Tacking Habbit",
      description: "A habit tracking app to build consistency and improve daily routines.A wellness app that helps users develop healthy habits and stay disciplined.",
    
      category: "CRM Solutions",
      tags: ["AI", "NLP", "Chatbot","Customer Management"],
      image: "/images/habit Tracking .png"
    },
     {
      id: 15,
      title: "Dashboard",
      description: "A personal dashboard for tracking daily habits, tasks, and wellness insights in one place.A smart personal dashboard that combines habit tracking, reminders, and analytics.",
    
      category: "CRM Solutions",
      tags: ["AI", "NLP", "Chatbot","Customer Management"],
      image: "/images/habit trcking.png"
    },
    

    {
      id: 16,
      title: "Kaiteki.ai",
      description: "App helps users track daily activity, steps, calories, and fitness progress.visual goals, progress rings, and simple daily insights.",
    
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot"],
      image: "/images/home screen mockup.png"
    },
  
 {
      id: 17,
      title: "Fasco",
      description: "This fashion e-commerce website presents a clean, modern shopping experience with highlighted collections and brand-focused layouts.",
    
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot"],
      image: "/images/checkout mockup.png"
    },
    {
      id: 18,
      title: "Poadcast",
      description: "This fashion e-commerce website presents a clean, modern shopping experience with highlighted collections and brand-focused layouts.",
     
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot"],
      image: "/images/Poadcast.png"
    },



  {
      id: 19,
      title: "Reclaim App",
      description: "This fashion e-commerce website presents a clean, modern shopping experience with highlighted collections and brand-focused layouts.",
     
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot","Computer Vision","Automation",],
      image: "/images/ReclaimeApp.png"
    },


    {
      id: 20,
      title: "Online Gaming",
      description: "This fashion e-commerce website presents a clean, modern shopping experience with highlighted collections and brand-focused layouts.",
     
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot","Smart System","Intelligent System","Computer Vision"],
      image: "/images/Onlinegaming.png"
    },






{
      id: 21,
      title: "ERP CardSnap",
      description: "A mobile AI application for accurate business card scanning and contact management.A smart AI-based app that scans, organizes, and exports business card data effortlessly.",
      date: "May 10, 2024",
     
      category: "ERP Solutions",
      // tags: ["ERP", "Manufacturing", "Development", "Integration"],
      tags: [
  "ERP",
  "Enterprise Software",
  "Business",
  "SaaS",
  "Dashboard",
  "Management System"
],

      image: "/images/Cardsnap.png"
    },

    {
      id: 22,
      title: "Fitness ",
      description: "A platform for discovering and booking certified fitness coaches and training programs.Find and connect with expert fitness coaches near you.",
      date: "sep 10, 2024",
      
      category: "ERP Solutions",
      tags: [
  "ERP",
  "Enterprise Software",
  "Business",
  "SaaS",
  "Dashboard",
  "Management System"
],
      image: "/images/fitnessproviderserviceapp.png"
    },

{
      id: 23,
      title: "Evidence Management ",
      description: "A data investigation dashboard designed to analyze connections and uncover insights.Enterprise resource planning system for manufacturing company.",
      date: "March 10, 2023",
     
      category: "ERP Solutions",
      tags: [
  "ERP",
  "Enterprise Software",
  "Business",
  "SaaS",
  "Dashboard",
  "Management System"
],
      image: "/images/Evidancemanag.png"
    },

    {
      id: 24,
      title: "Property Business",
      description: "A property business focused on buying, selling, and managing residential and commercial real estate.",
      date: "May 15, 2024",
      
      category: "ERP Solutions",
      tags: [
  "ERP",
  "Enterprise Software",
  "Business",
  "SaaS",
  "Dashboard",
  "Management System"
],

      image: "/images/Property.png"
    },

{
      id: 25,
      title: "Habbit tracker",
      description: "A habit tracking app designed to help users manage daily goals and build consistent routines.Track habits, set goals, and stay consistent every day.",
      date: "May 26, 2024",
      
      category: "ERP Solutions",
     tags: ["ERP","Enterprise Software","Business", "SaaS", "Dashboard", "Management System"
],

      image: "/images/habbittracker.PNG"
    },

    {
      id: 26,
      title: "Health ",
      description: "A medical healthcare application designed to support patient care and health management.A modern medical platform delivering accessible healthcare solutions.",
      date: "May 10, 2024",
      
      category: "Medical & Health",
      tags: [
  "HealthTech",
  "Healthcare",
  "Wellness",
  "Medical",
  "Patient Management",
  "Health Analytics"
],

      image: "/images/1600w-PdjF3CCiHLs.webp"
    },

    {
      id: 27,
      title: "Kinaura Health",
      description: "An all-in-one healthcare app for doctor discovery, consultations, and medical shopping.A modern HealthTech app combining doctor services and medical e-commerce.",
      date: "April 4, 2024",
      
      category: "Medical & Health",
       tags: [
  "HealthTech",
  "Healthcare",
  "Wellness",
  "Medical",
  "Patient Management",
  "Health Analytics"
],
      image: "/images/kinauraHlt.png"
    },

{
      id: 28,
      title: "skin Gel",
      description: "A digital skincare platform offering treatments, consultations, and curated skin products.A skincare healthcare app focused on skin treatments, consultations, and dermatology solutions.",
      date: "Feb 2, 2024",
      
      category: "Medical & Health",
      tags: [
  "HealthTech",
  "Healthcare",
  "Wellness",
  "Medical",
  "Patient Management",
  "Health Analytics"
],
      image: "/images/gel.png"
    },

    {
      id: 29,
      title: "Medicine & Surgery",
      description: "A medical and surgery management platform for patient care, treatments, and clinical workflows.A HealthTech platform for streamlining medical and surgical care processes.",
      date: "May 10, 2024",
     
      category: "Medical & Health",
       tags: [
  "HealthTech",
  "Healthcare",
  "Wellness",
  "Medical",
  "Patient Management",
  "Health Analytics"
],
      image: "/images/surgery_surgeon_medicine.jpg"
    },

    {
      id: 30,
      title: "Habit tracking App",
      description: "A wellness app that helps users develop healthy habits and stay disciplined.Track habits, set goals, and stay consistent every day.",
      date: "desc 21, 2024",
      
      category: "Medical & Health",
      tags: [
  "HealthTech",
  "Healthcare",
  "Wellness",
  "Medical",
  "Patient Management",
  "Health Analytics"
],
      image: "/images/Longevity.png"
    },

   ];

  // Check if selectedCategory is valid (not URL encoded or invalid)
  const isValidCategory = slug &&
    !slug.includes('%5B') &&
    !slug.includes('%5D') &&
    allProjects.some(project => createSlug(project.category) === slug);

  const filteredProjects = isValidCategory
    ? allProjects.filter(project => createSlug(project.category) === slug)
    : allProjects;

  const projects = filteredProjects.length > 0 ? filteredProjects : allProjects;

  // Get display title from the first project's category if available, otherwise fallback
  const displayTitle = isValidCategory && projects.length > 0
    ? projects[0].category
    : (slug ? slug.replace(/-/g, ' ') : 'All Projects');

  const onBack = () => {
    router.push('/AllProjects');
  };

  return (
    <div className="relative min-h-screen bg-black text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-90 contrast-125 grayscale"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 max-w-7xl mx-auto px-6 pb-12">
          {isValidCategory && (
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">{displayTitle}</h1>
              <p className="text-gray-400">Explore our projects in this category.</p>
            </div>
          )}

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="mb-16 group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative overflow-hidden transition-all duration-500 ${hoveredProject === project.id ? 'scale-105' : 'scale-100'
                  }`}>
                  <div className={`w-96 h-72 bg-gray-900 relative group cursor-pointer overflow-hidden transition-all duration-500 rounded-2xl ${hoveredProject === project.id ? 'shadow-2xl shadow-cyan-500/50 border-2 border-cyan-400/50' : 'border-2 border-transparent'
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 rounded-2xl ${hoveredProject === project.id ? 'grayscale-0 scale-110 brightness-110' : 'grayscale scale-100 brightness-100'
                        }`}
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent transition-opacity duration-500 rounded-2xl ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                  </div>
                </div>

                

                
                <div
  className={`space-y-6 transition-all duration-500 ${
    hoveredProject === project.id
      ? 'translate-x-3 opacity-100'
      : 'translate-x-0 opacity-90'
  }`}
>
  {/* Category Badge */}
  <div className="inline-flex px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs uppercase tracking-widest">
    {project.category}
  </div>

  {/* Title */}
  <h2
    className={`text-3xl md:text-4xl font-semibold leading-tight transition-all duration-500 ${
      hoveredProject === project.id ? 'text-cyan-300 glow-text' : 'text-white'
    }`}
  >
    {project.title}
  </h2>

  {/* Accent line */}
  <div
    className={`h-[2px] bg-gradient-to-r from-cyan-400 to-transparent transition-all duration-500 ${
      hoveredProject === project.id ? 'w-40' : 'w-24'
    }`}
  />

  {/* Description */}
  <p className="text-gray-400 leading-relaxed text-base max-w-xl">
    {project.description}
  </p>

  {/* Meta Info Cards */}
  <div className="grid grid-cols-2 gap-4 pt-2 max-w-md">
    <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur">
      <div className="text-xs text-gray-500 mb-1">Project Date</div>
      <div className="text-sm text-white">{project.date}</div>
    </div>

    <div className="p-4 rounded-xl border border-gray-800 bg-gray-900/60 backdrop-blur">
      <div className="text-xs text-gray-500 mb-1">Category</div>
      <div className="text-sm text-white">{project.category}</div>
    </div>
  </div>

  {/* Tags */}
  <div className="flex flex-wrap gap-3 pt-4 max-w-xl">
    {project.tags.map((tag, i) => (
      <span
        key={i}
        className={`px-4 py-2 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer backdrop-blur ${
          hoveredProject === project.id
            ? 'border-cyan-400/40 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/20 -translate-y-1'
            : 'border-gray-700 bg-gray-900/40 text-gray-400 hover:border-gray-600 hover:text-gray-300'
        }`}
        style={{ transitionDelay: `${i * 40}ms` }}
      >
        #{tag}
      </span>
    ))}
  </div>
</div>

              </div>

              {index < projects.length - 1 && (
                <div className="mt-20 mb-4 h-px bg-gray-800/50"></div>
              )}
            </div>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
};


export default ProjectOverviewPage;