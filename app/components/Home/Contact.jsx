

"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      details: "Indore, India",
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
    <div className="min-h-screen bg-black text-white">

      {/* Hero Section */}
      <section className="py-20 bg-[url('/bg-smoke.gif')] bg-cover bg-center bg-opacity-10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-semibold"
          >
            Contact <span className="font-light">Us</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-300 text-lg max-w-3xl mt-4 mx-auto"
          >
            Reach out to us for support, queries, or collaborations.
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-400">
              Contact us using any platform listed below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="border border-gray-600 p-3 rounded-full">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{info.title}</h3>
                    <p className="text-white font-medium">{info.details}</p>
                    <p className="text-gray-400 text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#111] border border-gray-700 p-10 rounded-2xl space-y-6 shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <input name="name" placeholder="Name" className="input-field" onChange={handleChange} />
              <input name="email" placeholder="Email" className="input-field" onChange={handleChange} />
              <input name="phone" placeholder="Phone" className="input-field" onChange={handleChange} />
              <input name="subject" placeholder="Subject" className="input-field" onChange={handleChange} />
            </div>

            <textarea
              name="message"
              rows="5"
              placeholder="Message..."
              className="input-field"
              onChange={handleChange}
            />

            {/* <button className="w-full py-3 border border-white rounded-lg hover:bg-white hover:text-black transition font-medium">
              Send Message
            </button> */}

            {isSubmitted && <p className="text-center text-gray-300 pt-3">✔ Message Sent Successfully</p>}
          </motion.form>
        </div>
      </section>
    </div>
  );
};

// Tailwind input style
const inputStyle = `
input-field border border-gray-600 bg-transparent text-white placeholder-gray-400 rounded-lg p-3 w-full focus:border-white focus:outline-none
`;

export default Contact;
