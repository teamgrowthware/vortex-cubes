"use client";

import React, { useState, useEffect } from 'react';
import { Code, Rocket, Users, Award, ChevronRight, X, Phone, MessageCircle } from 'lucide-react';
import Navbar from "../components/Navbar";

export default function DevInstitute() {
  const [scrolled, setScrolled] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const PHONE_NUMBER = "91 9301946303";
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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


  const courses = [
    {
      title: "Full Stack Development (MERN)",
      desc: "Master MongoDB, Express.js, React, and Node.js to build complete web applications from scratch",
      duration: "6 Months",
      level: "Beginner to Advanced",
      topics: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "REST APIs",
        "Authentication",
      ],
    },
    {
      title: "Full Stack Development (MEAN)",
      desc: "Learn MongoDB, Express.js, Angular, and Node.js to create dynamic and scalable web solutions",
      duration: "6 Months",
      level: "Beginner to Advanced",
      topics: [
        "MongoDB",
        "Express.js",
        "Angular",
        "Node.js",
        "TypeScript",
      ],
    },
    {
      title: "UI/UX Design",
      desc: "Create stunning user interfaces and exceptional user experiences with modern design principles",
      duration: "4 Months",
      level: "All Levels",
      topics: [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
        "Usability Testing",
      ],
    },
    {
      title: "Digital Marketing",
      desc: "Master digital marketing strategies and grow your online presence with data-driven campaigns",
      duration: "4 Months",
      level: "All Levels",
      topics: [
        "Fundamentals of Digital Marketing",
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM / PPC)",
        "Social Media Marketing (SMM)",
        "Content Marketing",
       
"Affiliate Marketing & Influencer Marketing",
        "Web Analytics & Data Analysis",
        "Mobile Marketing",
        "E-commerce & Online Sales",
      ],
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen">
    
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm">
            Crafting Unique Developer Identities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Branding that you
            <br />
            <span className="text-white">can't ignore</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your coding skills into a thriving career. Learn from industry experts and build real-world projects.
          </p>
        </div>
      </section>

      {/* Courses Section */}
     <section
  id="courses"
  
>

        <div
        
className="relative -mt-40 sm:-mt-56 md:-mt-52"
        
        >

          <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-white">Courses</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Master the skills that matter in today's tech industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, i) => (
              <div key={i} className="group relative bg-gradient-to-br from-white/5 via-white/[0.02] to-transparent border border-white/10 rounded-3xl p-8 hover:border-white/30 transition-all duration-500 overflow-hidden">
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glowing effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500"></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-block mb-4 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold">
                    ⚡ Popular Choice
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white transition-colors">{course.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">{course.desc}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl text-sm flex items-center gap-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <span className="text-lg">📅</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-xl text-sm flex items-center gap-2 group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                      <span className="text-lg">📊</span>
                      <span>{course.level}</span>
                    </div>
                  </div>

                  {/* Topics with better styling */}
                  <div className="mb-8">
                    <h4 className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wider">What You'll Learn</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.map((topic, idx) => (
                        <span key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-xs font-medium group-hover:bg-white/10 group-hover:border-white/20 transition-all">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Premium Apply Button */}
                  <button 
                    onClick={() => handleApplyClick(course)}
                    className="w-full bg-white text-black px-6 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-2xl hover:scale-[1.02] group-hover:shadow-white/20"
                  >
                    <span>Apply Now</span>
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  {/* Bottom info */}
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                     <span className="flex items-center gap-1">
                      ⭐ 4.9/5
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative bg-white/5 mt-0 md:-mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-white">Institute</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Everything you need to become a successful developer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: "Expert Instructors",
                desc: "Learn from industry professionals with years of experience",
              },
              {
                icon: Rocket,
                title: "Real Projects",
                desc: "Build portfolio-worthy projects that impress employers",
              },
              {
                icon: Users,
                title: "Community",
                desc: "Join a vibrant community of learners and mentors",
              },
              {
                icon: Award,
                title: "Certification",
                desc: "Get recognized certifications valued by top companies",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/10 hover:border-white/40 transition duration-300"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Apply Modal */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-black border-2 border-white/20 rounded-2xl p-8 max-w-md w-full">
            <button 
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Apply for Course</h3>
              <p className="text-gray-400 text-sm">{selectedCourse?.title}</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={handleWhatsApp}
                className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-full font-semibold transition flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                Apply via WhatsApp
              </button>

              <button 
                onClick={handlePhone}
                className="w-full bg-white text-black px-6 py-4 rounded-full font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call to Apply
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mt-6">
              Our team will get back to you within 24 hours
            </p>
          </div>
        </div>
      )}
    </div>
  );
}