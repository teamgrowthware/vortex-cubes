"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ClientReviewsPage() {
  const testimonials = [
    {
      name: "Samriddhi",
      role: "Agro Tech",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "The user who registers to list their agricultural products, set prices, and manage their online inventory.",
      rating: 5
    },
    {
      name: "Kohlico",
      role: "E-commerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "This eCommerce project is well-designed, practical, and provides great real-world learning about online business and digital sales.",
      rating: 5
    },
    {
      name: "Orbosis Global",
      role: "IT Services",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "A clear, concise mission statement prominently displayed on the homepage helps visitors immediately understand the NGO's purpose and values.",
      rating: 5
    },
    {
      name: "Paper Bill",
      role: "Accounting",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "list all items or services with their quantities and prices, then calculate the total cost for each by multiplying quantity by price.",
      rating: 5
    },
    {
      name: "Velocity",
      role: " Educational Institude",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      text: "The course content includes industry-relevant skills and practical knowledge.",
      rating: 5
    },

 {
      name: "Uniqe Events",
      role: "Event management",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "From planning to execution, the team showed professionalism, creativity, and great attention to detail. Our event turned out better than we imagined.",
      rating: 5
    },
    {
      name: "Times Now India 24*7",
      role: "News Media Industry",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "The team demonstrated strong research skills, timely reporting, and high editorial standards, making the news project a great success.",
      rating: 5
    },
    
    // {
    //   name: "Water 4 all",
    //   role: "save water",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    //   text:"This project is truly amazing and highly valuable for learning, as it helps build real skills and practical understanding.",
    //   rating: 5
    // },

    {
      name: "Scalyx",
      role: "Finance Industry",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "This finance project is highly valuable, practical, and greatly enhances understanding of real-world financial concepts.",
      rating: 5
    },
{
      name: "Shipvine",
      role: "E-commerce",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "list all items or services with their quantities and prices, then calculate the total cost for each by multiplying quantity by price.",
      rating: 5
    },

     {
      name: "Finanza",
      role: "Finance Industry",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "list all items or services with their quantities and prices, then calculate the total cost for each by multiplying quantity by price.",
      rating: 5
    },
    {
      name: "Marshell Technologies Pvt Ltd",
      role: "IT Industry",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "list all items or services with their quantities and prices, then calculate the total cost for each by multiplying quantity by price.",
      rating: 5
    },

];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-black min-h-screen">

 {/* Background Image */}
{/* <section className="relative h-[55vh] md:h-[60vh] flex items-center overflow-hidden">

 
  <div className="absolute inset-0 md:w-1/2 h-full">
    <img
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&fit=crop"
      alt="Client reviews"
      className="w-full h-full object-cover grayscale"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/60 to-black" />
  </div>

  
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex items-center">
    <div className="hidden md:block w-1/2"></div>

    <div className="w-full md:w-1/2 text-center md:text-left">
      <span className="inline-flex items-center gap-2 mb-3 px-3 py-1.5 text-xs border border-white/20 bg-white/10 rounded-full">
        • Reviews
      </span>

      <h1 className="text-white text-3xl md:text-5xl font-light mb-3">
        Client Reviews
      </h1>

      <p className="text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
        Real feedback from clients who trusted my design expertise
        to elevate their brands successfully.
      </p>
    </div>
  </div>
</section> */}

      
 <section className="relative h-[52vh] md:h-[58vh] flex items-center bg-black overflow-hidden">

  {/* IMAGE SIDE */}
  <div className="absolute inset-y-0 left-0 w-full md:w-1/2">
    <img
      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&fit=crop"
      alt="Client Reviews"
      className="w-full h-full object-cover grayscale"
    />

    {/* DARK GRADIENT OVER IMAGE */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/70 to-black"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex items-center">
    
    {/* Empty left space on desktop */}
    <div className="hidden md:block md:w-1/2"></div>

    {/* TEXT AREA */}
    <div className="w-full md:w-1/2 text-center md:text-left">
    <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-sm rounded-full border border-white/40 bg-black text-white">


{/* <span className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 text-sm rounded-full border border-white bg-black"> */}
        ● Reviews
      </span>

      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-light mb-4">
        Client Reviews
      </h1>

      <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed mb-6">
        Real feedback from clients who trusted my design expertise
        to elevate their brands successfully.
      </p>

     

    </div>
  </div>
</section>
     

      {/* TESTIMONIALS SECTION */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 text-center">
          <h2 className="text-white text-4xl md:text-6xl font-light mb-4">What Our Clients Say</h2>
          {/* <p className="text-gray-400 text-lg md:text-xl">Trusted by industry leaders worldwide</p> */}
        </div>

        {/* Scrollable Testimonials */}
        <div className="relative overflow-hidden">
          <div
            className="flex gap-6 animate-scroll"
            style={{ minWidth: "max-content" }}
          >
            {duplicatedTestimonials.map((t, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-6 md:p-8 rounded-2xl transition-transform duration-300 hover:scale-105"
                style={{
                  width: '320px',
                  background: 'linear-gradient(to bottom, #171717 0%, #171717 85%, #000000 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover grayscale"
                  />
                  <div>
                    <h3 className="text-white text-xl md:text-2xl font-medium">{t.name}</h3>
                    <p className="text-gray-400 text-sm">{t.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-6">
                  “{t.text}”
                </p>

                <div className="flex gap-1 items-center">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 md:w-6 md:h-6 fill-yellow-500" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-yellow-500 text-sm md:text-lg ml-2 font-medium">{t.rating}.0</span>
                </div>
              </div>
            ))}
          </div>

          {/* Fade Shadows */}
          <div className="absolute top-0 left-0 h-full w-20 md:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 h-full w-20 md:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>

        {/* Stats Section */}
        {/* <div className="max-w-6xl mx-auto px-6 md:px-8 mt-16">
          <div className="bg-neutral-900 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center justify-around gap-10 md:gap-4">
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-light mb-2 md:mb-3">180+</div>
              <div className="text-gray-300 text-base md:text-lg">projects completed.</div>
            </div>
            <div className="w-full h-px bg-neutral-700 md:w-px md:h-32"></div>
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-light mb-2 md:mb-3">96%</div>
              <div className="text-gray-300 text-base md:text-lg">Client satisfaction rate.</div>
            </div>
            <div className="w-full h-px bg-neutral-700 md:w-px md:h-32"></div>
            <div className="text-center">
              <div className="text-white text-4xl md:text-5xl font-light mb-2 md:mb-3">4+</div>
              <div className="text-gray-300 text-base md:text-lg">Years of experience</div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Keyframes Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-340px * ${testimonials.length})); }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
