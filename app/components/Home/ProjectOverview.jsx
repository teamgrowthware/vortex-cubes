'use client';
import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Navbar from '../Navbar';

const ProjectOverviewPage = ({ params = {} }) => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const router = useRouter();
  const { slug } = params || {};

  console.log('ProjectOverviewPage params:', params);
  console.log('Slug:', slug);

  const createSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  const allProjects = [
    {
      id: 1,
      title: "NFT Distro Marketplace",
      description: "Creating a secure and user-friendly online marketplace for NFTs requires advanced technology and unique features.",
      date: "July 15, 2024",
      client: "CryptoPunks",
      category: "Web Development",
      tags: ["Research", "Strategy", "Design", "Development"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
    },
    {
      id: 2,
      title: "VorteX Platform",
      description: "VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
      client: "VorteX",
      category: "Web Development",
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
    },
    {
      id: 3,
      title: "VorteX Portfolio",
      description: "VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
      client: "VorteX",
      category: "Web Development",
      tags: ["React", "Next.js", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80"
    },
    {
      id: 4,
      title: "VorteX App",
      description: "VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
      client: "VorteX",
      category: "App Development",
      tags: ["React Native", "iOS", "Android"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 5,
      title: "VorteX CRM",
      description: "VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
      client: "VorteX",
      category: "CRM Solutions",
      tags: ["Salesforce", "CRM", "Analytics"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      id: 6,
      title: "VorteX AI",
      description: "VorteX is a platform that connects developers with clients.",
      date: "August 1, 2024",
      client: "VorteX",
      category: "AI & Automation",
      tags: ["AI", "NLP", "Chatbot"],
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

  // Check if selectedCategory is valid (not URL encoded or invalid)
  const isValidCategory = slug &&
    !slug.includes('%5B') &&
    !slug.includes('%5D') &&
    allProjects.some(project => createSlug(project.category) === slug);

  const filteredProjects = isValidCategory
    ? allProjects.filter(project => createSlug(project.category) === slug)
    : allProjects;

  const projects = filteredProjects.length > 0 ? filteredProjects : allProjects;

  // Get display title from the first project's category if available, otherwise fallback
  const displayTitle = isValidCategory && projects.length > 0
    ? projects[0].category
    : (slug ? slug.replace(/-/g, ' ') : 'All Projects');

  const onBack = () => {
    router.push('/AllProjects');
  };

  return (
    <div className="relative min-h-screen text-white">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-90 contrast-125 grayscale"
      >
        <source src="/smoke.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10">
        <Navbar />

        <div className="pt-24 max-w-7xl mx-auto px-6 pb-12">
          {isValidCategory && (
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-white mb-2">{displayTitle}</h1>
              <p className="text-gray-400">Explore our projects in this category.</p>
            </div>
          )}

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="mb-16 group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={`relative overflow-hidden transition-all duration-500 ${hoveredProject === project.id ? 'scale-105' : 'scale-100'
                  }`}>
                  <div className={`w-96 h-72 bg-gray-900 relative group cursor-pointer overflow-hidden transition-all duration-500 rounded-2xl ${hoveredProject === project.id ? 'shadow-2xl shadow-cyan-500/50 border-2 border-cyan-400/50' : 'border-2 border-transparent'
                    }`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className={`w-full h-full object-cover transition-all duration-500 rounded-2xl ${hoveredProject === project.id ? 'grayscale-0 scale-110 brightness-110' : 'grayscale scale-100 brightness-100'
                        }`}
                    />

                    <div className={`absolute inset-0 bg-gradient-to-t from-cyan-500/20 via-transparent to-transparent transition-opacity duration-500 rounded-2xl ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                      }`}></div>
                  </div>
                </div>

                <div className={`space-y-6 transition-all duration-500 ${hoveredProject === project.id ? 'translate-x-2' : 'translate-x-0'
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
                        className={`px-4 py-2 rounded-full text-xs border transition-all duration-300 cursor-pointer ${hoveredProject === project.id
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
    </div>
  );
};

export default ProjectOverviewPage;