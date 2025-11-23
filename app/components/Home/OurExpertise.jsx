"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ExpertiseSection = () => {
    const [hoveredTag, setHoveredTag] = useState(null);

    const tags = [
        'Software Development',
        'Cloud & DevOps',
        'UX Design',
        'Cloud & DevOps',
        'Cybersecurity & Compliance',
        'Figma',
        'Photoshop',
        'Application Development',
        'Web Development'
    ];

    return (
        <div className="text-white flex items-center justify-center">
            
            <div
                className="
                w-full
                grid lg:grid-cols-2 gap-10 lg:gap-16
                rounded-[30px] md:rounded-[40px]
                p-6 sm:p-10 md:p-14 lg:pt-20 
                border-t border-l border-r border-zinc-900
                bg-black
                "
            >

                {/* LEFT CONTENT */}
                <div className="space-y-6 sm:space-y-8 animate-fadeIn">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light">
                        OUR<br />EXPERTISE
                    </h1>

                    <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
                        We design, build and operate software that moves businesses forward. 
                        We're a full-stack IT studio specializing in cloud-native architectures, 
                        secure integrations, and data-driven products. From rapid MVPs to scalable 
                        production systems — we combine engineering craft with product thinking 
                        to deliver reliable, high-impact results.
                    </p>

                    {/* TAGS */}
                    <div className="flex flex-wrap gap-3 p-4 border-t border-b border-[#1a1a1a]">
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setHoveredTag(idx)}
                                onMouseLeave={() => setHoveredTag(null)}
                                className="
                                    px-4 sm:px-5 py-2 sm:py-2.5 
                                    bg-[#0d0d0d] hover:bg-zinc-800 
                                    rounded-md text-xs sm:text-sm 
                                    transition-all duration-300 ease-out 
                                    hover:scale-105 hover:shadow-lg 
                                    hover:shadow-zinc-700/30  
                                    text-[#a5a5a5]
                                "
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex items-start justify-center w-full">
                    <div
                        className="relative animate-fadeIn h-full w-full"
                        style={{ animationDelay: '0.3s' }}
                    >
                        {/* Glow Background */}
                        <div
                            className="
                                absolute inset-0 bg-gradient-to-br 
                                from-gray-200/20 to-white-500/20 
                                blur-3xl rounded animate-pulse
                            "
                            style={{ animationDuration: '3s' }}
                        />

                        {/* Image Container */}
                        <div className="relative rounded-xl overflow-hidden shadow-2xl w-full h-auto">
                            <Image
                                src="https://framerusercontent.com/images/FKoaSftNu2lxr33yxA3X4xgsBg.png?scale-down-to=2048&width=2436&height=1664"
                                alt="Professional"
                                width={1000}
                                height={800}
                                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-500 object-cover"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExpertiseSection;
