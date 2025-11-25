
"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function ClientReviewsPage() {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Samriddhi",
      role: "Agriculture tech",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      text: "The user who registers to list their agricultural products, set prices, and manage their online inventory.",
      rating: 5
    },
    {
      name: "Kohlico",
      role: "Ecommerce",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      text: "It is the online equivalent of a physical store, where customers can browse products, read descriptions, and make purchases.",
      rating: 5
    },
    {
      name: "Orbosis Global",
      role: "NGO website",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      text: "A clear, concise mission statement prominently displayed on the homepage helps visitors immediately understand the NGO's purpose and values.",
      rating: 5
    },
    {
      name: "Paper Bill",
      role: "Accounting Related",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      text: "list all items or services with their quantities and prices, then calculate the total cost for each by multiplying quantity by price. Add any applicable taxes or fees, and sum up all the item totals to get the final amount due.",
      rating: 5
    },
    {
      name: "Velocity",
      role: "news paper",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop",
      text: "The course content includes industry-relevant skills and practical knowledge to prepare individuals for roles in software quality assurance and testing",
      rating: 5
    }
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="bg-black min-h-screen">
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-456px * ${testimonials.length}));
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop"
            alt="Designer workspace"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(100%) brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full flex items-center">
          <div className="w-1/2"></div>
          <div className="w-1/2 pl-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5">
              <div className="w-2 h-2 rounded-full bg-white"></div>
              <span className="text-white text-sm">Reviews</span>
            </div>
            
            <h1 className="text-white text-7xl font-light mb-6 leading-tight">
              Client Reviews
            </h1>
            
            <p className="text-gray-400 text-xl mb-8 leading-relaxed max-w-lg">
              Real feedback from clients who trusted my design expertise to elevate their brands successfully.
            </p>
            
           
            

{/* <Link href="/Services" passHref>
<button className="px-8 py-3 border border-white/30 text-white rounded-full hover:bg-white hover:text-black transition-all duration-300">
    See Services
  </button>
</Link> */}

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-8 mb-12">
          <h2 className="text-white text-6xl font-light mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 text-xl">Trusted by industry leaders worldwide</p>
        </div>

        <div className="relative mb-20 overflow-hidden">
          <div 
            className={`flex gap-6 ${isPaused ? 'paused' : ''} animate-scroll`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 p-8 transition-transform duration-300 hover:scale-105 rounded-2xl"
                style={{
                  width: '450px',
                  background: 'linear-gradient(to bottom, #171717 0%, #171717 85%, #000000 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover"
                    style={{ filter: 'grayscale(100%)' }}
                  />
                  <div>
                    <h3 className="text-white text-2xl font-medium">{testimonial.name}</h3>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  &quot;{testimonial.text}&quot;
                </p>

                <div className="flex gap-1 items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 fill-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="text-yellow-500 text-lg ml-2 font-medium">{testimonial.rating}.0</span>
                </div>
              </div>
            ))}
          </div>

          <div 
            className="absolute top-0 left-0 h-full w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to right, black, transparent)' }}
          />
          <div 
            className="absolute top-0 right-0 h-full w-32 pointer-events-none z-10"
            style={{ background: 'linear-gradient(to left, black, transparent)' }}
          />
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto px-8">
          <div className="bg-neutral-900 rounded-3xl p-16 flex items-center justify-around gap-4">
            <div className="text-center">
              <div className="text-white text-5xl font-light mb-3">180+</div>
              <div className="text-gray-300 text-lg">projects completed.</div>
            </div>

            <div className="h-32 w-px bg-neutral-700"></div>

            <div className="text-center">
              <div className="text-white text-5xl font-light mb-3">96%</div>
              <div className="text-gray-300 text-lg">Client satisfaction rate.</div>
            </div>

            <div className="h-32 w-px bg-neutral-700"></div>

            <div className="text-center">
              <div className="text-white text-5xl font-light mb-3">4+</div>
              <div className="text-gray-300 text-lg">Years of experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}