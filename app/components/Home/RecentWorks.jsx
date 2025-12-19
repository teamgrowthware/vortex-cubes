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
    { id: 1, img: "https://framerusercontent.com/images/tUz91RU5N0ssJWF38z5ShHqSb1A.png?scale-down-to=1024&width=1270&height=1994" },
    { id: 2, img: "https://framerusercontent.com/images/z6z6q2neTeUv7hMSj5ylQ8pejAg.png?scale-down-to=1024&width=976&height=1766" },
    { id: 3, img: "https://framerusercontent.com/images/fAkz04ESqyBWW1alEppdeE.png?scale-down-to=1024&width=976&height=1766" },
    { id: 4, img: "https://framerusercontent.com/images/ZuyUwA9odi7pwvxc9Y30p2b4CNs.png?scale-down-to=1024&width=1158&height=1980" },
    { id: 5, img: "https://framerusercontent.com/images/RYRvZnstUexQMOl8zRyrvDfDT0.png?scale-down-to=1024&width=800&height=1200" },
    { id: 6, img: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356" },
  ];

  return (
    <div className="bg-black w-full py-10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">

        {/* Heading */}
        <div className="text-[#a5a5a5] text-lg sm:text-xl font-semibold flex items-center gap-3 mb-8 border-b border-[#1a1a1a] pb-6">
          Recent Works
          <CircleArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </div>

        <div className="relative">

          {/* LEFT ARROW */}
          <button
            className="swiper-prev absolute left-2 sm:left-0 top-1/2 -translate-y-1/2
          z-10 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full backdrop-blur-lg text-white"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* RIGHT ARROW */}
          <button
            className="swiper-next absolute right-2 sm:right-0 top-1/2 -translate-y-1/2
          z-10 bg-white/20 hover:bg-white/40 p-2 sm:p-3 rounded-full backdrop-blur-lg text-white"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* SLIDER */}
          <Swiper
            spaceBetween={20}
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            }}
            slidesPerView={1}
            breakpoints={{
              480: { slidesPerView: 1.3 },
              640: { slidesPerView: 1.7 },
              768: { slidesPerView: 2.3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3.5 },
            }}
            centeredSlides={false}
            loop={false}
            style={{ paddingBottom: "30px" }}
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
                    width={600}
                    height={800}
                    className={`w-full h-[380px] sm:h-[420px] md:h-[460px] lg:h-[500px] 
                      object-cover rounded-xl transition-all duration-500 grayscale group-hover:grayscale-0 
                      ${hovered === index ? "scale-105" : "scale-100"}`}
                    alt="Recent Work"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                  {/* Button */}
                  {/* <button className="
                      absolute bottom-4 left-1/2 -translate-x-1/2 w-[75%] sm:w-[70%]
                      bg-white/20 backdrop-blur-md border border-white/40
                      text-white py-2.5 sm:py-3 rounded-full 
                      flex items-center justify-center gap-2
                      font-medium text-sm sm:text-base
                      transition-all duration-300
                      hover:bg-white hover:text-black
                  ">
                    View Casestudy
                    <ArrowUpRight
                      className={`transition-all duration-300 
                        ${hovered === index ? "scale-125 -translate-y-1 rotate-12" : ""}`}
                    />
                  </button> */}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </div>
  );
}
