import React, { useState, useEffect } from "react";
import hero1 from "../assets/images/hero-11.jpg";
import hero2 from "../assets/images/hero-22.jpg";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      img: hero1,
      heading: "Read, Report & License News — Built for every citizen",
      desc: "Join a community-driven marketplace for trustworthy hyperlocal, national, and investigative journalism.",
    },
    {
      id: 2,
      img: hero2,
      heading: "Empowering Reporters, Informing Citizens",
      desc: "Reporters can earn, readers can trust, and media houses can license easily.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000); // auto-slide every 5s
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] overflow-hidden">
      {slides.map((s, index) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
          style={{
            backgroundImage: `url(${s.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <div className="max-w-2xl text-center text-white px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
                {s.heading}
              </h1>
              <p className="mt-4 text-lg text-gray-100/90">{s.desc}</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-medium"
                >
                  Read News
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white text-white"
                >
                  Join as Reporter
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-3 w-3 rounded-full ${
              i === current ? "bg-white" : "bg-gray-400/70"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
