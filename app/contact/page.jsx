"use client";
import React, { useState } from "react";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9301946303",
      description: "Available 24/7",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vortexcubes.com",
      description: "Response within 2 hours",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Indore, India",
      description: "Global service",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 9301946303",
      description: "Fast support",
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent animate-gradient">
              Contact <span className="font-light">Us</span>
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
          </div>

          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mt-4 sm:mt-6 mx-auto leading-relaxed px-4">
            Reach out to us for support, queries, or collaborations.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

          {/* Contact Info Cards */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-lg">
                Contact us using any platform listed below.
              </p>
            </div>

            <div className="space-y-5">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/50"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" 
                       style={{backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`}}></div>
                  
                  <div className="flex gap-5 items-start relative z-10">
                    <div className="bg-white p-4 rounded-xl shadow-lg transform group-hover:rotate-6 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-1 text-white">{info.title}</h3>
                      <p className="text-white font-medium mb-1">{info.details}</p>
                      <p className="text-gray-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;