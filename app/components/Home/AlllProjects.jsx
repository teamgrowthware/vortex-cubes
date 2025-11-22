"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";
import Image from "next/image";

const AlllProjects = () => {
    const [hovered, setHovered] = useState(null);

    const designs = [
        { id: 1, img: "https://framerusercontent.com/images/aS6TUjI9YxlGwDeky4ti5lNhvk.png?width=2044&height=1522", height: "h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]" },
        { id: 2, img: "https://framerusercontent.com/images/rllHGSR2FRWtiwbcY2zXr5yYNA.png?width=2002&height=1536", height: "h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px]" },
        { id: 3, img: "https://framerusercontent.com/images/hD7JZ9vucYI8VhWUTe0pi4jg5Y.png?width=2038&height=1526", height: "h-[280px] sm:h-[360px] md:h-[420px] lg:h-[420px]" },
        { id: 4, img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=600&fit=crop", height: "h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]" },
        { id: 5, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=400&h=600&fit=crop", height: "h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]" },
        { id: 6, img: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=700&fit=crop", height: "h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px]" },
        { id: 7, img: "https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=700&fit=crop", height: "h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]" },
        { id: 8, img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=600&h=700&fit=crop", height: "h-[300px] sm:h-[380px] md:h-[420px] lg:h-[480px]" },
        { id: 9, img: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=700&h=600&fit=crop", height: "h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]" },
    ];

    return (
        <div className="min-h-screen bg-black p-8">
            <div className="max-w-[1400px] mx-auto">
                {/* MASONRY GRID */}
                <div className="columns-3 gap-2 space-y-2">
                    {designs.map((item, index) => (
                        <div
                            key={item.id}
                            className="relative group break-inside-avoid overflow-hidden rounded-2xl cursor-pointer"
                            onMouseEnter={() => setHovered(index)}
                            onMouseLeave={() => setHovered(null)}
                        >
                            <Image
                                src={item.img}
                                width={400}
                                height={600}
                                className={`w-full rounded-xl object-cover ${item.height} transition-all duration-700 ${hovered === index ? "scale-110" : "scale-100"
                                    }`}
                                alt="Project"
                            />

                            {/* Overlay */}
                            <div
                                className={`absolute inset-0 bg-[#e2e2e2]/50 transition-opacity duration-500 ${hovered === index ? "opacity-0" : "opacity-100"
                                    }`}
                            />

                            <button
                                className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 w-full sm:w-80 md:w-72 border border-white text-white bg-white/20 backdrop-blur-md  px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
                            >
                                VIEW PROJECT
                                <ArrowUpRight
                                    className={`transition-all duration-300 ${hovered === index ? "scale-125 -translate-y-1 rotate-12" : ""
                                        }`}
                                />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AlllProjects;

