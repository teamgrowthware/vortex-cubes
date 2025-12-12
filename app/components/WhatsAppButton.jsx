"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show button after a small delay for a nice entrance
        const timer = setTimeout(() => setIsVisible(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <a
            href="https://wa.me/919301946303"
            target="_blank"
            rel="noopener noreferrer"
            className={`fixed bottom-8 right-8 z-50 flex items-center justify-center transition-all duration-500 transform hover:scale-110 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                }`}
            aria-label="Chat with us on WhatsApp"
        >
            {/* Pulse Effect */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75 duration-1000"></span>

            {/* Button Container */}
            <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-[0_0_20px_rgba(37,211,102,0.5)] hover:shadow-[0_0_30px_rgba(37,211,102,0.8)] transition-shadow duration-300">
                <FaWhatsapp className="w-9 h-9 text-white" />
            </div>

            {/* Tooltip on Hover (Optional, can be added if requested, but icon is self-explanatory) */}
            <div className="absolute right-full mr-4 bg-white text-black px-3 py-1 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg pointer-events-none hidden md:block">
                Chat with us!
            </div>
        </a>
    );
}
