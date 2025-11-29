"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

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
      details: "106, Navrang Plaza, Sapna Sangeeta Road, Indore, M.P",
      description: "Global service",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      details: "View Profile",
      description: "Connect professionally",
      link: "https://www.linkedin.com/company/vortexcubes/",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingMessages =
      JSON.parse(localStorage.getItem("contactMessages")) || [];

    const newMessage = {
      ...formData,
      id: Date.now(),
      createdAt: new Date().toISOString(),
    };

    existingMessages.push(newMessage);

    localStorage.setItem(
      "contactMessages",
      JSON.stringify(existingMessages)
    );

    setSuccess(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => setSuccess(false), 3000);
  };

  return (
<div className="min-h-screen bg-black text-white">
  <Navbar />

  {/* Contact content starts just below navbar */}
  <div className="pt-16">
    <section className="py-16 text-center">
      <h1 className="text-5xl font-bold">Contact Us</h1>
      <p className="mt-4 text-gray-400">
        Reach out to us for support or collaboration
      </p>
    </section>


        {/* Grid */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) =>
                info.link ? (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center
                    bg-gray-900 border border-gray-800 rounded-2xl p-6
                    transition-all duration-300
                    hover:-translate-y-2 hover:border-white/40
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    <CardContent info={info} />
                  </a>
                ) : (
                  <div
                    key={index}
                    className="group flex items-center justify-center
                    bg-gray-900 border border-gray-800 rounded-2xl p-6
                    transition-all duration-300
                    hover:-translate-y-2 hover:border-white/40
                    hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                  >
                    <CardContent info={info} />
                  </div>
                )
              )}
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8
              transition-all duration-300
              hover:shadow-[0_0_30px_rgba(255,255,255,0.12)]"
            >
              <h2 className="text-3xl font-bold text-center mb-6">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg
                  transition-all duration-300
                  focus:outline-none focus:border-white/50
                  focus:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg
                  transition-all duration-300
                  focus:outline-none focus:border-white/50
                  focus:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg
                  transition-all duration-300
                  focus:outline-none focus:border-white/50
                  focus:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />

                <textarea
                  placeholder="Message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full p-3 bg-black border border-gray-700 rounded-lg
                  transition-all duration-300
                  focus:outline-none focus:border-white/50
                  focus:shadow-[0_0_10px_rgba(255,255,255,0.25)]"
                />

                <button
                  type="submit"
                  className="w-full bg-white text-black font-semibold py-3 rounded-lg
                  transition-all duration-300
                  hover:bg-gray-200 hover:scale-[1.02]
                  hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                >
                  Send Message
                </button>

                {success && (
                  <p className="text-green-400 text-center mt-3">
                    ✅ Message sent successfully
                  </p>
                )}
              </form>
            </div>

          </div>
        </section>
        
      </div>
    </div>
  );
}

/* ✅ Card Content Component */
function CardContent({ info }) {
  return (
    <div className="flex flex-col gap-3 text-center">
      <div
        className="bg-white p-3 rounded-xl mx-auto
        transition-all duration-300
        group-hover:scale-110 group-hover:-translate-y-1
        group-hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
      >
        <info.icon className="w-6 h-6 text-black" />
      </div>

      <h3 className="text-xl font-semibold transition group-hover:text-white">
        {info.title}
      </h3>

      <p className="text-white underline transition group-hover:text-gray-200">
        {info.details}
      </p>

      <p className="text-gray-400 text-sm transition group-hover:text-gray-300">
        {info.description}
      </p>
    </div>
  );
}
