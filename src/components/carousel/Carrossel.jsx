"use client";
import { Carousel } from "@material-tailwind/react";

export default function Carrossel() {
  return (
    <div className="sm:w-4/5 h-96 rounded-xl mt-4 mx-auto">
      <Carousel
        className="rounded-xl"
        autoplay={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-white w-8" : "bg-white/50 w-4"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="/assets/bannerGuarana.webp"
          alt="banner carousel guarana"
          className="h-full w-full object-cover"
        />
        <img
          src="/assets/bannerGeek.webp"
          alt="banner semana geek"
          className="h-full w-full object-cover"
        />
        <img
          src="/assets/bannerIce.webp"
          alt="banner promoção Ice"
          className="h-full w-full object-cover"
        />
      </Carousel>
    </div>
  );
}
