"use client";

import React, { useState, useEffect } from 'react';
import { Code, Rocket, Users, Award, ChevronRight, Menu, X } from 'lucide-react';

export default function DevInstitute() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
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
            <span className="text-white">
              can't ignore
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Transform your coding skills into a thriving career. Learn from industry experts and build real-world projects.
          </p>
{/*           
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition flex items-center justify-center">
              Start Learning
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition" />
            </button>
            <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white hover:bg-white hover:text-black transition">
              View Courses
            </button>
          </div> */}

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {[
              { number: '5000+', label: 'Students' },
              { number: '50+', label: 'Courses' },
              { number: '95%', label: 'Success Rate' },
              { number: '200+', label: 'Companies' }
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/10 transition">
                <div className="text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      {/* <section id="courses" className="py-20 relative"> */}
      <section id="courses" className="py-16 relative -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16">

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="text-white">Courses</span>
            </h2>
            <p className="text-gray-400 text-lg">Master the skills that matter in today's tech industry</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                title: 'Full Stack Development (MERN)', 
                desc: 'Master MongoDB, Express.js, React, and Node.js to build complete web applications from scratch',
                duration: '6 Months',
                level: 'Beginner to Advanced',
                topics: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Authentication']
              },
              { 
                title: 'Full Stack Development (MEAN)', 
                desc: 'Learn MongoDB, Express.js, Angular, and Node.js to create dynamic and scalable web solutions',
                duration: '6 Months',
                level: 'Beginner to Advanced',
                topics: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'TypeScript', 'RxJS']
              },
              { 
                title: 'UI/UX Design', 
                desc: 'Create stunning user interfaces and exceptional user experiences with modern design principles',
                duration: '4 Months',
                level: 'All Levels',
                topics: ['Figma', 'Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Usability Testing']
              },
{ 
                title: 'React Native', 
                desc: 'Create stunning user interfaces and exceptional user experiences with modern design principles',
                duration: '4 Months',
                level: 'All Levels',
                topics: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'REST APIs', 'Authentication']

}



            ].map((course, i) => (
              <div key={i} className="group bg-white/5 border border-white/20 rounded-2xl p-8 hover:bg-white/10 hover:border-white/40 transition duration-300">
                <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-400 mb-6">{course.desc}</p>
                
                <div className="flex gap-4 mb-6">
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                    📅 {course.duration}
                  </div>
                  <div className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                    📊 {course.level}
                  </div>
                </div>

                <div className="mb-6">
                  {/* <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-gray-300">Key Topics</h4> */}
                  <div className="flex flex-wrap gap-2">
                    {course.topics.map((topic, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative bg-white/5 mt-0 md:-mt-12">

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-white">DevInstitute</span>
            </h2>
            <p className="text-gray-400 text-lg">Everything you need to become a successful developer</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Code, title: 'Expert Instructors', desc: 'Learn from industry professionals with years of experience' },
              { icon: Rocket, title: 'Real Projects', desc: 'Build portfolio-worthy projects that impress employers' },
              { icon: Users, title: 'Community', desc: 'Join a vibrant community of learners and mentors' },
              { icon: Award, title: 'Certification', desc: 'Get recognized certifications valued by top companies' }
            ].map((feature, i) => (
              <div key={i} className="group bg-white/5 border border-white/20 rounded-2xl p-6 hover:bg-white/10 hover:border-white/40 transition duration-300">
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

      {/* CTA Section */}
      {/* <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/5 border-2 border-white/30 rounded-3xl p-12 backdrop-blur-sm hover:bg-white/10 transition">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your
              <br />
              <span className="text-white">
                Developer Journey?
              </span>
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of students who have transformed their careers with us
            </p>
            <button className="bg-white text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">
              Get Started Today
            </button>
          </div>
        </div>
      </section> */}
    </div>
  );
}