"use client";
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

// Custom CSS for neon glow animation
const neonGlowKeyframes = `
  @keyframes neonGlow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3), 0 0 15px rgba(255, 255, 255, 0.2);
    }
    50% {
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.2);
    }
  }
  .neon-glow {
    animation: neonGlow 2s ease-in-out infinite;
  }
`;

const style = document.createElement('style');
style.textContent = neonGlowKeyframes;
document.head.appendChild(style);

const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible] = useState(true);
  const router = useRouter();

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => {
        if (prev === maxSlide) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 3000); // 3 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  const portfolioItems = [
    {
      category: "Web Development",
      title: "E-commerce Platform",
      description: "Modern e-commerce solution with payment integration and inventory management.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      gradient: "from-gray-800 to-black"
    },
    {
      category: "CRM Solutions",
      title: "CRM Dashboard",
      description: "Customer relationship management system with analytics and reporting.",
      tech: ["Vue.js", "Python", "PostgreSQL", "Redis"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      category: "App Development",
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication.",
      tech: ["React Native", "Node.js", "MongoDB", "JWT"],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      gradient: "from-gray-600 to-gray-800"
    },
    {
      category: "AI & Automation",
      title: "AI Chatbot",
      description: "Intelligent customer service chatbot with natural language processing.",
      tech: ["Python", "TensorFlow", "Flask", "OpenAI"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      gradient: "from-gray-900 to-black"
    },
    {
      category: "ERP Solutions",
      title: "ERP System",
      description: "Enterprise resource planning system for manufacturing company.",
      tech: ["Angular", "Java", "MySQL", "Spring Boot"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      category: "Cloud & Security",
      title: "Cloud Infrastructure",
      description: "Scalable cloud infrastructure with automated deployment and monitoring.",
      tech: ["AWS", "Docker", "Kubernetes", "Terraform"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      gradient: "from-gray-800 to-black"
    }
  ];

  const deliveries = [
    { name: "E-Shop", image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&q=80" },
    { name: "Times Now India", image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80" },
    { name: "Fintech", image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=80" },
    { name: "Kai History", image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=400&q=80" },
    { name: "Surplus Loyalty", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80" },
    { name: "Livifi Naturals", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&q=80" },
    { name: "Annuiti", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80" },
    { name: "MD & CO", image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80" },
    { name: "Paperlite", image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80" }
  ];

  const itemsPerView = 5;
  const maxSlide = Math.max(0, deliveries.length - itemsPerView);

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, maxSlide));
  };

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0));
  };

  const handleViewProjects = (category) => {
    const slug = category.toLowerCase().replace(/\s+/g, '-');
    router.push(`/project-overview/${slug}`);
  };

  return (
    <>
      <div className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 grayscale"
        >
          <source src="/smoke.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]"></div>

        {/* Content */}
        <div className="relative z-10 flex-1 pt-20">
          {/* Portfolio Section */}
          <div className="container mx-auto px-4 py-16">
            <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <h1 className="text-5xl font-bold mb-4 text-white">
                Our Portfolio
              </h1>
              <p className="text-white/60 text-lg">
                Explore our successful projects and see how we&apos;ve helped businesses transform digitally.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} transition-all duration-700 transform hover:scale-105 hover:shadow-2xl hover:shadow-white/50 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"/>
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Content */}
                  <div className="relative p-6 h-full flex flex-col justify-between min-h-[320px]">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-[#918E8E] bg-[#383838] backdrop-blur-sm rounded-full mb-4 group-hover:text-black group-hover:bg-white transition-all duration-300">
                        {item.category}
                      </span>
                      <h3 className="text-2xl text-[#9C9A9A] font-bold mb-3 group-hover:text-white transition-colors duration-300" style={{ textShadow: '0 0 10px rgba(0,0,0,0.8)' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed" style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
                        {item.description}
                      </p>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs text-[#918E8E] bg-[#383838] backdrop-blur-sm rounded-lg border border-gray-300 hover:bg-white group-hover:text-black group-hover:bg-white group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/50 group-hover:neon-glow transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* View Projects Button */}
                    <button
                      onClick={() => handleViewProjects(item.category)}
                      className="mt-4 w-full px-4 py-2 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300 group-hover:border-white group-hover:shadow-lg group-hover:shadow-white/50"
                    >
                      View Projects
                    </button>
                  </div>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/50 rounded-2xl transition-all duration-500"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliveries Section */}
          <div className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Our Successful Deliveries
                </h2>
                <p className="text-gray-400 text-lg">
                  Innovative solutions delivered across diverse industries
                </p>
              </div>

              {/* Carousel Container */}
              <div className="relative">
                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white/10 disabled:bg-gray-700 disabled:cursor-not-allowed p-3 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-white/50 -translate-x-4"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                  onClick={nextSlide}
                  disabled={currentSlide === maxSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-white/10 disabled:bg-gray-700 disabled:cursor-not-allowed p-3 rounded-full border border-white/20 backdrop-blur-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-white/50 translate-x-4"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Carousel */}
                <div className="overflow-hidden mx-12">
                  <div
                    className="flex transition-transform duration-500 ease-out gap-6"
                    style={{
                      transform: `translateX(-${currentSlide * (100 / itemsPerView)}%)`
                    }}
                  >
                    {deliveries.map((delivery, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0 group cursor-pointer"
                        style={{ width: `calc(${100 / itemsPerView}% - 20px)` }}
                      >
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black shadow-lg hover:shadow-2xl hover:shadow-white/30 transition-all duration-500 transform hover:scale-105">
                          <div className="aspect-[3/4] relative">
                            <img
                              src={delivery.image}
                              alt={delivery.name}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300" style={{ textShadow: '0 0 8px rgba(0,0,0,0.8)' }}>
                                {delivery.name}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                  {Array.from({ length: maxSlide + 1 }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
