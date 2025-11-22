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
        <div className=" text-white flex items-center justify-center">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 animate-fadeIn">
                    <h1 className="text-4xl md:text-7xl font-semibold leading-tight">
                        OUR<br />EXPERTISE
                    </h1>

                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                        We design, build and operate software that moves businesses forward. We're
                        a full-stack IT studio specializing in cloud-native architectures, secure
                        integrations, and data-driven products. From rapid MVPs to scalable
                        production systems — we combine engineering craft with product thinking to
                        deliver reliable, high-impact results.
                    </p>

                    {/* Tags */}
                    <div
                        className="flex flex-wrap gap-3 p-4 border-t border-b border-[#1a1a1a]"
                    >
                        {tags.map((tag, idx) => (
                            <button
                                key={idx}
                                onMouseEnter={() => setHoveredTag(idx)}
                                onMouseLeave={() => setHoveredTag(null)}
                                className="px-5 py-2.5 bg-[#0d0d0d] hover:bg-zinc-800 rounded-full text-sm 
                         transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg 
                         hover:shadow-zinc-700/50 border border-zinc-800 hover:border-zinc-700 text-[#a5a5a5] "
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
                                }}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative flex items-center justify-center">
                    <div className="relative animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                        {/* Background glow effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 
                          blur-3xl rounded-full animate-pulse"
                            style={{ animationDuration: '3s' }}
                        />

                        {/* Main image container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://framerusercontent.com/images/FKoaSftNu2lxr33yxA3X4xgsBg.png?scale-down-to=2048&width=2436&height=1664"
                                alt="Professional"
                                width={800}
                                height={600}
                                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExpertiseSection;

