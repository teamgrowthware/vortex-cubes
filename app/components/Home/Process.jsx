"use client";

import { Lightbulb, ListChecks, Rocket } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function Process() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const scrollStart = window.innerHeight * 0.5;
      const scrollRange = rect.height - window.innerHeight;
      
      if (rect.top > scrollStart) {
        setScrollProgress(0);
      } else if (rect.bottom < window.innerHeight) {
        setScrollProgress(1);
      } else {
        const progress = Math.max(0, Math.min(1, (scrollStart - rect.top) / scrollRange));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      step: 1,
      title: "Understand the Problem",
      icon : Lightbulb,
      description: "We start by deeply understanding your business challenges, goals, and user needs. Clarity at this stage helps us define the right tech approach and ensures every decision moves the project forward with purpose."
    },
    {
      step: 2,
      title: "Build with Precision",
      icon: ListChecks,
      description: "From architecture to UI/UX to full-stack development, every feature is crafted with stability, scalability, and efficiency in mind. We work in iterative cycles, keeping you in the loop while refining the product to perfection."
    },
    {
      step: 3,
      title: "Deploy, Support & Scale",
      icon : Rocket,
      description: "Once everything is tested and production-ready, we deploy your product with a secure, seamless handover. Post-launch, we monitor performance, fix issues, and optimize—ensuring your product stays fast, safe, and scalable as your business grows."
    }
  ];

  const getCardTransform = (index) => {
    if (index === 0) {
      return {
        transform: 'translateY(0)',
        opacity: 1,
        zIndex: 1
      };
    }

    const cardsCount = cards.length;
    const progressPerCard = 1 / cardsCount;
    const start = index * progressPerCard;

    if (scrollProgress <= start) {
      return {
        transform: 'translateY(150%)',
        opacity: 0,
        zIndex: index + 1
      };
    }

    const cardProgress = Math.max(0, Math.min(1, (scrollProgress - start) / progressPerCard));

    const startY = 150;
    const endY = 0;

    const translateY = startY - (cardProgress * (startY - endY));
    const opacity = Math.min(1, cardProgress * 2);

    return {
      transform: `translateY(${translateY}%)`,
      opacity,
      zIndex: index + 1
    };
  };

  return (
    <div 
      ref={containerRef} 
      className="bg-black min-h-[300vh] relative"
      style={{ 
        fontFamily: 'Google Sans Flex, sans-serif',
        fontWeight: 400
      }}
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="max-w-[1400px] mx-auto w-full px-8 flex gap-10">
          <div className="flex-1 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-white bg-neutral-900 px-4 py-2 rounded-full text-lg inline-flex items-center shadow-[0_-8px_12px_rgba(0,0,0,0.25)]">
                ⊛ Project Process
              </span>
            </div>
            <h1 className="text-white font-light mb-6" style={{ fontSize: '120px', lineHeight: '1.1' }}>
              Process
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed max-w-lg mb-12">
              crafting bold visuals that inspire and elevate brands with thought process.
            </p>
            <div className="mb-6">
              <span className="text-white bg-neutral-900 px-6 py-3 rounded-sm text-lg inline-flex items-center cursor-pointer hover:bg-neutral-700 transition-colors"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.1), inset 0 0 20px rgba(255, 255, 255, 0.05)'
                }}
              >
                See Projects
              </span>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center relative" 
            style={{ 
              height: '600px',
              width: '900px', 
              overflow: 'visible',
            }}
          >
            <div 
              className="relative" 
              style={{ 
                width: '750px', 
                height: '400px',
              }}
            >
              {cards.map((card, index) => {
                const style = getCardTransform(index);
                const IconComponent = card.icon;
                
                return (
                  <div
                    key={index}
                    className="absolute rounded-[2.5rem] transition-all duration-300 ease-out"
                    style={{
                      ...style,
                      left: 0,
                      top: 0,
                    }}
                  >
                    <div 
                      className="bg-neutral-900 rounded-[2.5rem] p-10 h-[350px] w-[750px] relative"
                      style={{
                        border: '2px solid rgba(255, 255, 255, 0.2)',
                        boxShadow:
                          '0 0 25px rgba(255, 255, 255, 0.25), 0 0 40px rgba(255, 255, 255, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.05), 0 10px 30px rgba(0, 0, 0, 0.5)'
                      }}
                    >
                      <div className='absolute top-6 right-6 w-10 h-10 rounded-full border border-neutral-700 text-neutral-400 flex items-center justify-center text-lg font-medium'>
                        {card.step}
                      </div>

                      <div className='flex items-center gap-4 mb-6'>
                        <IconComponent className='text-white' size={38} strokeWidth={1.5} />
                      </div>

                      <h3 className='text-white text-4xl font-medium mb-6'>
                        {card.title}
                      </h3>

                      <div className='w-full h-px bg-neutral-700 mb-6' />

                      <p className='text-gray-400 text-lg leading-relaxed'>
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

