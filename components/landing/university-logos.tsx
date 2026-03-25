"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const universities = [
  { name: "Harvard", image: "/logos/university/harvard.png" },
  { name: "UC Berkeley", image: "/logos/university/ucb.png" },
  { name: "Stanford", image: "/logos/university/stanford.png" },
  { name: "MIT", image: "/logos/university/mit.png" },
  { name: "Georgia Tech", image: "/logos/university/gatech.png" },
  { name: "Cornell", image: "/logos/university/cornell.png" },
  { name: "University of Michigan", image: "/logos/university/umich.png" },
  { name: "Dartmouth", image: "/logos/university/dartmouth.png" },
];

export function UniversityLogos() {
  return (
    <section className="py-16 bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-tight mb-6">
          Built With The Best
        </p>
        <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 leading-[1.1] font-instrument-serif tracking-tight max-w-2xl">
          Designed with students and professors from
        </h2>
      </div>
      <div className="relative w-full overflow-hidden">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        >
          <CarouselContent className="ml-0">
            {[...universities, ...universities].map((uni, i) => (
              <CarouselItem
                key={`${uni.name}-${i}`}
                className="flex basis-1/4 justify-center pl-0 sm:basis-1/5 md:basis-1/6 lg:basis-[14.28%]"
              >
                <div className="mx-4 flex shrink-0 items-center justify-center">
                  <img
                    src={uni.image}
                    alt={uni.name}
                    className="h-14 w-auto opacity-100 hover:scale-105 transition-all duration-300"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </section>
  );
}
