"use client";
import React, { useEffect, useRef, useState } from 'react';
import { Lightbulb, Map, Pencil, CheckCircle, Headphones } from 'lucide-react';

export default function Process() {
  const [lineHeight, setLineHeight] = useState(0);
  const timelineRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const timelineTop = rect.top + window.scrollY;
        const scrollProgress = Math.max(0, window.scrollY - timelineTop + window.innerHeight / 2);
        const totalHeight = timelineRef.current.offsetHeight;
        
        const progress = Math.min(100, (scrollProgress / totalHeight) * 100);
        setLineHeight(progress);

        // Check which cards are visible
        const cards = document.querySelectorAll('.timeline-card');
        const visible = [];
        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          if (cardRect.top < window.innerHeight * 0.8) {
            visible.push(index);
          }
        });
        setVisibleCards(visible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    {
      icon: Lightbulb,
      title: "Build with Precision",
      side: "right"
    },
    {
      icon: Map,
      title: "Deploy, Support & Scale",
      side: "left"
    },
    {
      icon: Pencil,
      title: "Design & Development",
      side: "right"
    },
    {
      icon: CheckCircle,
      title: "Testing & Quality",
      side: "left"
    },
    {
      icon: Headphones,
      title: "understand the problem",
      side: "right"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white py-8 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1 border border-white rounded-full text-white text-xs md:text-sm mb-4 md:mb-6">
           ⊛ Project Process
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-4">
            Our Simple <span className="text-gray-400">Process</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto leading-relaxed text-sm md:text-base px-4">
            crafting bold visuals that inspire and elevate brands with thought process.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line background - Desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-800 h-full"></div>
          
          {/* Animated vertical line - Desktop */}
          <div 
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-500 transition-all duration-200 ease-out shadow-lg shadow-white/50"
            style={{ height: `${lineHeight}%` }}
          ></div>

          {/* Vertical line for mobile - left aligned */}
          <div className="md:hidden absolute left-6 w-0.5 bg-gray-800 h-full"></div>
          <div 
            className="md:hidden absolute left-6 w-0.5 bg-gradient-to-b from-white via-gray-300 to-gray-500 transition-all duration-200 ease-out"
            style={{ height: `${lineHeight}%` }}
          ></div>

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-24">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isVisible = visibleCards.includes(index);
              return (
                <div key={index} className="relative timeline-card">
                  {/* Center dot - Desktop */}
                  <div 
                    className={`hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full z-10 transition-all duration-500 ${
                      isVisible 
                        ? 'bg-white scale-100 shadow-lg shadow-white/50 animate-pulse' 
                        : 'bg-gray-700 scale-75'
                    }`}
                  ></div>

                  {/* Center dot - Mobile */}
                  <div 
                    className={`md:hidden absolute left-6 transform -translate-x-1/2 w-3 h-3 rounded-full z-10 transition-all duration-500 ${
                      isVisible 
                        ? 'bg-white scale-100' 
                        : 'bg-gray-700 scale-75'
                    }`}
                  ></div>

              {/* Content card */}
                  <div className={`
                    flex 
                    justify-start md:${phase.side === 'right' ? 'justify-start' : 'justify-end'} 
                    ${phase.side === 'right' ? 'md:pl-[52%]' : 'md:pr-[52%]'}
                    pl-12 md:pl-0 md:pr-0
                  `}>
                    <div 
                      className={`
                        ${isVisible ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/30' : 'bg-gradient-to-br from-gray-900 to-black border-gray-800'}
                        border-2
                        rounded-xl md:rounded-2xl 
                        p-6 md:p-10 
                        w-full md:w-[450px] 
                        cursor-pointer 
                        transition-all duration-700 ease-out
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-8'}
                        hover:scale-105 
                        hover:shadow-2xl 
                        hover:shadow-white/20
                        hover:border-white/50 
                        hover:-translate-y-2
                        backdrop-blur-sm
                      `}
                      style={{
                        transformStyle: 'preserve-3d',
                        perspective: '1000px'
                      }}
                    >
                      <div className="flex items-center gap-4 md:gap-6">
                        <div className={`rounded-full p-3 md:p-5 flex-shrink-0 transition-all duration-500 ${
                          isVisible 
                            ? 'bg-white shadow-lg shadow-white/50' 
                            : 'bg-gray-700'
                        } hover:rotate-12 hover:scale-110`}>
                          <Icon className={`w-6 h-6 md:w-8 md:h-8 transition-colors duration-500 ${
                            isVisible ? 'text-black' : 'text-gray-400'
                          }`} />
                        </div>
                        <h3 className={`text-lg md:text-2xl font-semibold transition-colors duration-500 ${
                          isVisible ? 'text-white' : 'text-gray-500'
                        }`}>
                          {phase.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        
      </div>
      
    </div>
  );
}
