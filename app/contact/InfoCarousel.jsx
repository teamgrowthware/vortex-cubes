"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Clock, MapPin, Users } from "lucide-react";
import { SiFacebook, SiInstagram, SiLinkedin, SiX } from "react-icons/si";

export default function InfoCarousel({
  businessHours = {
    days: "Mon-Fri",
    hours: "9AM - 6PM",
    note: "Emergency support available 24/7",
  },
  address = {
    street: "123 Business Avenue",
    city: "New York, NY 10001",
    country: "United States",
  },
  mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1701234567890!5m2!1sen!2s",
  socialLinks = {
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
  },
}) {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Auto-scroll effect
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 7000); // 7 seconds

    return () => clearInterval(interval);
  }, [api]);

  const scrollTo = useCallback(
    (index) => {
      api?.scrollTo(index);
    },
    [api]
  );

  const socialItems = [
    { icon: SiFacebook, href: socialLinks.facebook, label: "Facebook" },
    { icon: SiX, href: socialLinks.twitter, label: "Twitter" },
    { icon: SiLinkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: SiInstagram, href: socialLinks.instagram, label: "Instagram" },
  ];

  return (
    <div className="w-full">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent>
          <CarouselItem>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                Business Hours
              </h3>
              <p className="text-emerald-500 font-medium text-base mb-1">
                {businessHours.days}: {businessHours.hours}
              </p>
              {businessHours.note && (
                <p className="text-gray-400 text-xs">
                  {businessHours.note}
                </p>
              )}
            </div>
          </CarouselItem>

          <CarouselItem>
            <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-lg p-4 h-[180px] flex flex-col items-center justify-center text-center">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Connect With Us
              </h3>
              <div className="flex gap-3 mb-4">
                {socialItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 transition-all duration-300 hover:bg-emerald-500/20 hover:text-emerald-500 hover:scale-110"
                    aria-label={item.label}
                    data-testid={`social-link-${item.label.toLowerCase()}`}
                  >
                    <item.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
              <div className="text-gray-400 text-xs">
                <p>{address.street}</p>
                <p>{address.city}</p>
                <p>{address.country}</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>

        <CarouselPrevious
          className="left-2 bg-black/50 backdrop-blur-sm border-white/10 text-white transition-transform duration-300 hover:scale-110 hover:bg-black/70"
          data-testid="carousel-prev"
        />
        <CarouselNext
          className="right-2 bg-black/50 backdrop-blur-sm border-white/10 text-white transition-transform duration-300 hover:scale-110 hover:bg-black/70"
          data-testid="carousel-next"
        />
      </Carousel>

      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === current
              ? "bg-emerald-500 w-6"
              : "bg-gray-600 hover:bg-gray-500"
              }`}
            aria-label={`Go to slide ${index + 1}`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
