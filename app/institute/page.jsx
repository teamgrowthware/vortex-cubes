"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Link from "next/link";
import Footer from "../components/Footer";

// Lucide Icons (SINGLE IMPORT ✅)
import {
  TrendingUp,
  Share2,
  Target,
  BarChart,
  ShieldCheck,
  Rocket,
  Award,
  MessageCircle,
  X,
  Phone,


  Code as CodeIcon,
  Users as UsersIcon,
  Layers,
  Navigation,
  Plug,
  Bell,
  Cloud,
  Upload,
  Server,
  Lock,
  Database,
} from "lucide-react";

// React Icons
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaFigma,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiNetlify,
  SiRender,
  SiAngular,
  SiTypescript,
  SiDart,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

import { Code,Users } from "lucide-react";



export default function Institute() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const PHONE_NUMBER = "919301946303";

  const handleApplyClick = (course) => {
    setSelectedCourse(course);
    setShowApplyModal(true);
  };

  const handleWhatsApp = () => {
    if (!selectedCourse) return;
    const message = `Hi! I'm interested in applying for the ${selectedCourse.title} course.`;
    window.open(
      `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const handlePhone = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  /* ===== COURSES DATA ===== */
  const courses = [
    {
      slug: "mern-stack",
      title: "Full Stack Development (MERN)",
      desc:
        "Master the MERN stack to build powerful, scalable, and modern full-stack web applications from front end to back end.",
      duration: "12 month learning + 6 month practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "HTML", icon: <FaHtml5 /> },
        { label: "CSS", icon: <FaCss3Alt /> },
        { label: "JavaScript", icon: <FaJs /> },
        { label: "React.js", icon: <FaReact /> },
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Express.js", icon: <SiExpress /> },
        { label: "JWT Authentication", icon: <Lock /> },
        { label: "MongoDB", icon: <SiMongodb /> },
        { label: "APIs", icon: <Server /> },
        {label: "Deployment",icon: <FaGitAlt />},
        {label: "Git",icon: <FaGitAlt />},
          {label: "Netlify", icon:<SiNetlify />},
          {label: "Render", icon:<SiRender />},
          {label: "Aws", icon:<FaAws />},
      ],
    },

    {
       slug: "mean-stack",
      title: "Full Stack Development (MEAN)",
      desc:
        "Master the MEAN stack and learn to build fast, scalable, and dynamic full-stack applications.",
      duration: "12 month learning + 6 month practice",
      level: "Beginner to Advanced",
      topics: [
        { label: "HTML", icon: <FaHtml5 /> },
        { label: "CSS", icon: <FaCss3Alt /> },
        { label: "JavaScript", icon: <FaJs /> },
        { label: "Angular", icon: <SiAngular /> },
        { label: "TypeScript", icon: <SiTypescript /> },
        { label: "Node.js", icon: <FaNodeJs /> },
        { label: "Express.js", icon: <SiExpress /> },
        { label: "JWT Authentication", icon: <Lock /> },
        { label: "MongoDB", icon: <SiMongodb /> },
        { label: "APIs", icon: <Server /> },
      
        {label: "Git",icon: <FaGitAlt />},
          {label: "Netlify", icon:<SiNetlify />},
          {label: "Render", icon:<SiRender />},
          {label: "Aws", icon:<FaAws />},
      ],
    },
    

    {
      slug: "react-native",
    title: "Mobile App Development (React Native)",
    desc: "Build high-performance Android & iOS apps using React Native.",
    duration: "12 month learning + 6 month practice",
    level: "Beginner to Advanced",
    topics: [
      { label: "JavaScript", icon: <CodeIcon /> },
      { label: "React Native", icon: <Layers /> },
      { label: "Components & Hooks", icon: <CodeIcon /> },
      { label: "Navigation", icon: <Navigation /> },
      { label: "API Integration", icon: <Plug /> },
      { label: "State Management", icon: <Layers /> },
      { label: "Push Notifications", icon: <Bell /> },
      { label: "Firebase", icon: <Cloud /> },
      { label: "App Publishing", icon: <Upload /> },
    ],
  },

  {
slug: "digital-marketing",
  title: "Digital Marketing",
  desc: "Master SEO, social media, paid ads, and conversion-driven marketing strategies.",
  duration: "12 month learning + 6 month practice",
  level: "All Levels",
  topics: [
    { label: "SEO (On-Page & Off-Page)", icon: <TrendingUp /> },
    { label: "Content Marketing", icon: <CodeIcon /> },
    { label: "Social Media Marketing (SMM)", icon: <Share2 /> },
    { label: "Google Ads (PPC)", icon: <Target /> },
    { label: "Facebook & Instagram Ads", icon: <Target /> },
    { label: "Email Marketing", icon: <MessageCircle /> },
    { label: "Affiliate Marketing", icon: <UsersIcon /> },
    { label: "Influencer Marketing", icon: <UsersIcon /> },
    { label: "Analytics & Reporting", icon: <BarChart /> },
    { label: "Conversion Rate Optimization (CRO)", icon: <TrendingUp /> },
    { label: "Online Reputation Management (ORM)", icon: <ShieldCheck /> },
    { label: "Marketing Automation", icon: <Rocket /> },
    { label: "Lead Generation", icon: <Target /> },
    { label: "Brand Strategy", icon: <Award /> },
  ],
},


  {
     slug: "flutter",
  title: "Mobile App Development (Flutter)",
  desc: "Create beautiful, fast cross-platform mobile apps using Flutter & Dart.",
  duration: "12 month learning + 6 month practice",
  level: "Beginner to Advanced",
  topics: [
    { label: "Dart Programming", icon: <SiDart /> },
    { label: "Flutter Fundamentals", icon: <SiFlutter /> },
    { label: "UI Layouts & Widgets", icon: <CodeIcon /> },
    { label: "State Management (Provider / Bloc)", icon: <Layers /> },
    { label: "Navigation & Routing", icon: <Navigation /> },
    { label: "REST API Integration", icon: <Server /> },
    { label: "Firebase Integration", icon: <SiFirebase /> },
    { label: "Authentication (OTP / Google)", icon: <Lock /> },
    { label: "Push Notifications", icon: <Bell /> },
    { label: "Local Storage (Hive / SQLite)", icon: <Database /> },
    { label: "App Performance Optimization", icon: <Rocket /> },
    { label: "App Publishing (Play Store)", icon: <Upload /> },
  ],
},

{
   slug: "ui-ux-design",
  title: "UI / UX Design",
  desc: "Create stunning interfaces and meaningful, user-centered digital experiences.",
  duration: "12 month learning + 6 month practice",
  level: "All Levels",
  topics: [
    { label: "Design Fundamentals", icon: <CodeIcon /> },
    { label: "User Research & Personas", icon: <UsersIcon /> },
    { label: "Information Architecture", icon: <Layers /> },
    { label: "Wireframing", icon: <CodeIcon /> },
    { label: "Prototyping", icon: <CodeIcon /> },
    { label: "UI Design (Figma)", icon: <FaFigma /> },
    { label: "Design Systems", icon: <Layers /> },
    { label: "Usability Testing", icon: <BarChart /> },
    { label: "Accessibility (WCAG)", icon: <ShieldCheck /> },
    { label: "UX Writing & Microcopy", icon: <MessageCircle /> },
    { label: "Interaction Design", icon: <Navigation /> },
    { label: "Design Handoff to Developers", icon: <Rocket /> },
  ],
},

];

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      
    {/* HERO */}
      <section className="pt-24 pb-10 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
             “ Learn development the way  <br />the industry works. 
             <span className="text-white"> ”</span>

           </h1>
          
        </div>
       </section>

       
   <section
  id="about"
  className="pt-10 md:pt-14 pb-20 px-6"
>
  <div className="max-w-4xl mx-auto text-center">
    
    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
      :- About <span className="text-white">Our Institute</span>
    </h2>

    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
      We are a leading tech education institute at 
      <span className="text-white font-semibold underline"> VortexCubes</span>, 
      dedicated to transforming aspiring developers into industry-ready professionals. 
      With a strong focus on practical, hands-on learning, we bridge the gap between academic 
      knowledge and real-world application. Our courses are designed to align with current 
      market demands.
    </p>

  </div>
</section>




      {/* COURSES */}
      <section id="courses" className="px-6 pt-2 pb-14">
       <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-center">
          Our <span className="text-white">Courses</span>
        </h2>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <div
              key={i}
              className="border border-white/10 bg-white/5 p-8 rounded-2xl flex flex-col"
            >
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-gray-400 mb-6">{course.desc}</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                  📅 {course.duration}
                </span>
                <span className="bg-white/10 px-4 py-2 rounded-xl text-sm">
                  📊 {course.level}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {course.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-xs"
                  >
                    <span className="text-base">{topic.icon}</span>
                    {topic.label}
                  </span>
                ))}
              </div>

              <button
                onClick={() => handleApplyClick(course)}
                className="mt-auto bg-white text-black px-3 py-1.5 text-xs font-medium rounded-md w-fit"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {courses.map((course, i) => (
    // <div
    //   key={i}
    //   className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg hover:bg-white/10"
    // >
    //   <h3 className="text-xl md:text-2xl font-bold mb-2">{course.title}</h3>
    //   <p className="text-gray-400 text-sm mb-4 line-clamp-3">{course.desc}</p>

    //   <div className="flex flex-wrap gap-2 mb-4">
    //     <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
    //       📅 {course.duration}
    //     </span>
    //     <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
    //       📊 {course.level}
    //     </span>
    //   </div>

    //   <div className="flex flex-wrap gap-2 mb-4">
    //     {course.topics.map((topic, idx) => (
    //       <span
    //         key={idx}
    //         className="flex items-center gap-1 bg-white/10 border border-white/10 px-2 py-1 rounded-lg text-xs hover:bg-white/20 transition-colors"
    //       >
    //         <span className="text-base">{topic.icon}</span>
    //         {topic.label}
    //       </span>
    //     ))}
    //   </div>

    //   <button
    //     onClick={() => handleApplyClick(course)}
    //     className="mt-auto bg-gradient-to-r bg-white text-black py-2 px-4 text-sm font-semibold rounded-full hover:scale-130 transition-transform duration-300"
        
    //   >
    //     Apply Now
    //   </button>
    // </div>
    <div
  key={i}
  className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col 
             transform transition-transform duration-300 ease-in-out
             hover:scale-110 hover:shadow-2xl
             focus-within:scale-110 active:scale-105
             hover:bg-white/10"
  tabIndex={0} // allows focus on mobile tap
>
  <h3 className="text-xl md:text-2xl font-bold mb-2">{course.title}</h3>
  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{course.desc}</p>

  <div className="flex flex-wrap gap-2 mb-4">
    <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
      📅 {course.duration}
    </span>
    <span className="bg-white/10 px-3 py-1 rounded-full text-xs">
      📊 {course.level}
    </span>
  </div>

  <div className="flex flex-wrap gap-2 mb-4">
    {course.topics.map((topic, idx) => (
      <span
        key={idx}
        className="flex items-center gap-1 bg-white/10 border border-white/10 px-2 py-1 rounded-lg text-xs hover:bg-white/20 transition-colors"
      >
        <span className="text-base">{topic.icon}</span>
        {topic.label}
      </span>
    ))}
  </div>

  {/* <button
    onClick={() => handleApplyClick(course)}
    className="mt-auto bg-white text-black py-2 px-4 text-sm font-semibold rounded-full hover:scale-105 transition-transform duration-300"
  >
    Apply Now
  </button> */}
   {/* <Link
  href={`/course/${course.title.toLowerCase().replace(/\s+/g, "-")}`}
  className="bg-transparent border border-white py-2 px-4 rounded-full text-sm hover:bg-white hover:text-black transition"
>
  Learn More
</Link> */}


<div className="mt-auto flex justify-between items-center gap-2">
  <button
    onClick={() => handleApplyClick(course)}

    className="mt-auto
    bg-white text-black
    border
    hover:bg-black hover:text-white
   py-2 px-4 text-sm font-semibold rounded-full">
  
    Apply Now
  </button>

  <Link href={`/institute/${course.slug}`}>
  <button className="mt-auto bg-black text-white hover:bg-white hover:text-black py-2 px-4 text-sm font-semibold rounded-full">
    Learn More...
  </button>
</Link>

</div>



</div>

  ))}
</div>

      </section>

      {/* FEATURES */}
       <section id="features" className="py-20 bg-white/5">
         <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
             Why Choose <span className="text-white">Institute</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[Code, Rocket, Users, Award].map((Icon, i) => (
              <div
                key={i}
                className="bg-white/10 p-6 rounded-2xl border border-white/20"
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  {["Mentors", "Projects", "Community", "Certification"][i]}
                </h3>
                <p className="text-gray-400 text-sm">
                  Industry-focused professional growth
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* APPLY MODAL — unchanged */}
     {showApplyModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur flex items-center justify-center z-50">
          <div className="bg-black border border-white/20 p-8 rounded-2xl w-full max-w-md relative">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Apply for {selectedCourse?.title}
            </h3>

            <div className="space-y-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-green-600 text-white py-4 rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle /> Apply via WhatsApp
              </button>

              <button
                onClick={handlePhone}
                className="w-full bg-white text-black py-4 rounded-full flex items-center justify-center gap-2"
              >
                <Phone /> Call to Apply
              </button>
            </div>
          </div>
        </div>
      )}
       <Footer />
    </div>
  );
}
    
