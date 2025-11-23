"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ArrowUpRight, ChevronLeft, ChevronRight, CircleArrowDown } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";

export default function RecentWorks() {
  const [hovered, setHovered] = useState(null);

  const slides = [
    { id: 1, img: "https://framerusercontent.com/images/aS6TUjI9YxlGwDeky4ti5lNhvk.png?width=2044&height=1522" },
    { id: 2, img: "https://framerusercontent.com/images/rllHGSR2FRWtiwbcY2zXr5yYNA.png" },
    { id: 3, img: "https://framerusercontent.com/images/hD7JZ9vucYI8VhWUTe0pi4jg5Y.png" },
    { id: 4, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356" },
    { id: 5, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356" },
    { id: 6, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356" },
  ];

  return (
    <div className="bg-black py-10">
      <div className="max-w-[1500px] mx-auto px-4">
        {/* Heading */}
        <div className="text-[#a5a5a5] text-3xl font-semibold flex items-center gap-3 mb-8 p-6 border-b border-[#1a1a1a]">
          Recent Works
          <CircleArrowDown  className="w-8 h-8" />
        </div>

        <div className="relative sm:mx-20">
          {/* LEFT ARROW */}
          <button
            className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2
            z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-lg text-white"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT ARROW */}
          <button
            className="swiper-next absolute right-0 top-1/2 -translate-y-1/2
            z-10 bg-white/20 hover:bg-white/40 p-2 rounded-full backdrop-blur-lg text-white"
          >
            <ChevronRight />
          </button>
          {/* Slider */}
          <Swiper
            spaceBetween={10}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.6 },
              768: { slidesPerView: 2.2 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4 },
            }}
            centeredSlides={false}
            loop={false}
            style={{ paddingBottom: "40px" }}
          >
            {slides.map((item, index) => (
              <SwiperSlide key={item.id}>
                <div
                  className="relative group overflow-hidden rounded-xl cursor-pointer"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Image */}
                  <Image
                    src={item.img}
                    width={400}
                    height={400}
                    className={`w-full h-96 rounded-md object-cover transition-all duration-500 
                    ${hovered === index ? "scale-105" : "scale-100"}
                  `}
                    alt="Recent Work"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to from-black/40 to-transparent" />

                  {/* Button */}
                  <button className="
                    absolute bottom-4 left-1/2 -translate-x-1/2 w-[80%]
                    bg-white/20 backdrop-blur-md border border-white/40
                    text-white py-3 rounded-full 
                    flex items-center justify-center gap-2
                    font-medium transition-all duration-300
                    hover:bg-white hover:text-black
                ">
                    View Casestudy
                    <ArrowUpRight
                      className={`transition-all duration-300 ${hovered === index ? "scale-125 -translate-y-1 rotate-12" : ""
                        }`}
                    />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

