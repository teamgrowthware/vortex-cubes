'use client';
import React, { useState } from 'react';

const PortfolioPage = ({ category, onBack }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const allProjects = [
    {
      id: 1,
      title: "NFT Distro Marketplace",
      description: "Creating a secure and user-friendly online marketplace for NFTs requires advanced technology and unique features.",
      date: "June 30, 2023",
      client: "NFT Distro",
      category: "Web Development",
      tags: ["Research", "Strategy", "Design", "Development"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      id: 2,
      title: "Design and Develop of TheHealing Platform",
      description: "TheHealing.com is an online platform that connects healers with alternative healing to potential users with ailments or looking to better their health.",
      date: "June 2, 2024",
      client: "TheHealing.com",
      category: "Web Development",
      tags: ["Product Roadmap", "Design", "Dev", "Maintenance"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 3,
      title: "Website Revamp of TRPE",
      description: "Modernizing a real estate brokerage website to increase user engagement and generate more leads through better visuals and user experience.",
      date: "February 1, 2023",
      client: "The Real Property Experts",
      category: "Web Development",
      tags: ["Strategy", "Product Roadmap", "Design", "Development"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
    },
    {
      id: 4,
      title: "Tuks - Ecommerce Mobile App",
      description: "Created a mobile-responsive e-commerce mobile app for a sneaker online store using Magento with a focus on customer experience.",
      date: "January 18, 2024",
      client: "Tuks",
      category: "App Development",
      tags: ["Strategy", "Product Roadmap", "Design", "Development"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 5,
      title: "CRM Dashboard System",
      description: "Customer relationship management system with analytics and reporting capabilities.",
      date: "March 15, 2024",
      client: "TechCorp Solutions",
      category: "CRM Solutions",
      tags: ["Strategy", "Design", "Development", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 6,
      title: "AI Chatbot Platform",
      description: "Intelligent customer service chatbot with natural language processing.",
      date: "April 20, 2024",
      client: "AI Solutions Inc",
      category: "AI & Automation",
      tags: ["AI", "NLP", "Development", "Integration"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
    },
    {
      id: 7,
      title: "ERP Manufacturing System",
      description: "Enterprise resource planning system for manufacturing company.",
      date: "May 10, 2024",
      client: "Manufacturing Corp",
      category: "ERP Solutions",
      tags: ["ERP", "Manufacturing", "Development", "Integration"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    },
    {
      id: 8,
      title: "Cloud Infrastructure Setup",
      description: "Scalable cloud infrastructure with automated deployment and monitoring.",
      date: "June 5, 2024",
      client: "CloudTech Systems",
      category: "Cloud & Security",
      tags: ["Cloud", "AWS", "DevOps", "Monitoring"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
    }
  ];

  // Filter projects based on selected category
  const projects = selectedCategory
    ? allProjects.filter(project => project.category === selectedCategory)
    : allProjects;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            ©2022
          </div>
          <div className="flex items-center gap-4">
            {category && (
              <button
                onClick={onBack}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer flex items-center gap-2"
              >
                ← Back to Portfolio
              </button>
            )}
            <nav className="text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              {category ? `${category} Projects` : 'Explore Innovative Portfolio'}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 max-w-7xl mx-auto px-6 pb-12">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="mb-16 group"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Image Section */}
              <div className={`relative overflow-hidden transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-[1.02]' : 'scale-100'
              }`}>
                <div className="aspect-[4/3] bg-gray-900 relative group cursor-pointer overflow-hidden">
                  {/* Background Image */}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                  }`}></div>
                  
                  {/* Device Mockup Frame */}
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                    hoveredProject === project.id ? 'scale-95 opacity-100' : 'scale-100 opacity-0'
                  }`}>
                    <div className="relative">
                      {/* Laptop/Tablet Frame */}
                      <div className="w-80 h-52 bg-gray-900 rounded-lg shadow-2xl border-8 border-gray-800 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"></div>
                      </div>
                      {/* Laptop base */}
                      <div className="w-96 h-2 bg-gray-800 mx-auto rounded-b-lg -mt-1"></div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div className={`absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-white/30 transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                  }`}></div>
                  <div className={`absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-white/30 transition-all duration-500 ${
                    hoveredProject === project.id ? 'scale-150 opacity-100' : 'scale-100 opacity-0'
                  }`}></div>
                </div>
              </div>

              {/* Content Section */}
              <div className={`space-y-6 transition-all duration-500 ${
                hoveredProject === project.id ? 'translate-x-2' : 'translate-x-0'
              }`}>
                <h2 className="text-3xl md:text-4xl font-normal leading-tight text-white">
                  {project.title}
                </h2>
                
                <p className="text-gray-400 leading-relaxed text-base">
                  {project.description}
                </p>

                <div className="grid grid-cols-2 gap-6 pt-2">
                  <div>
                    <div className="text-xs text-gray-500 mb-2">Project Date</div>
                    <div className="text-sm text-white">{project.date}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 mb-2">Client</div>
                    <div className="text-sm text-white">{project.client}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-4 py-2 rounded-full text-xs border transition-all duration-300 cursor-pointer ${
                        hoveredProject === project.id
                          ? 'border-gray-500 bg-gray-800/80 text-white transform -translate-y-1'
                          : 'border-gray-700 bg-transparent text-gray-500 hover:border-gray-600 hover:text-gray-400'
                      }`}
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            {index < projects.length - 1 && (
              <div className="mt-20 mb-4 h-px bg-gray-800/50"></div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;
