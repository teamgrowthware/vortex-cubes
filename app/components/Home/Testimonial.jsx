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
    
    <div className="bg-black min-h-screen text-white ">
     <div className="text-center mb-12 md:mb-20 mt-16">
          <div className="inline-block px-4 py-1 border border-white rounded-full text-white text-xs md:text-sm mb-4 md:mb-6">
           ⊛ Testimonials
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Our Client <span className="text-gray-400">Reviews</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
            Engineering smart digital solutions that elevate businesses with a clear thought process.
          </p>
        </div>

    

      {/* TESTIMONIALS SECTION */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-6 md:px-8 mb-12 text-center ">
         
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
                  {/* <img 
                    src={t.image} 
                    alt={t.name}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover grayscale"
                  /> */}
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
