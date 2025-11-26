


"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar"; // ✅ Correct path
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 9301946303",
      description: "Available 24/7",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@vortexcubes.com",
      description: "Response within 2 hours",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "106, Navrang Plaza, Sapna Sangeera Road, Indore, M.P",
      description: "Global service",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "+91 9301946303",
      description: "Fast support",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* ✅ SAME NAVBAR AS HOME */}
      <Navbar />

      {/* ✅ Padding so navbar does not overlap */}
      <div className="pt-24">

        {/* Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>

        {/* Hero */}
        <section className="relative py-16 px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Reach out to us for support, queries, or collaborations.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="relative py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900/60 to-black/60 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl">
                    <info.icon className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{info.title}</h3>
                    <p className="text-white">{info.details}</p>
                    <p className="text-gray-500 text-sm">
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Page;
