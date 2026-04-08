"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ShinyText from "@/components/ShinyText";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black h-screen flex items-center justify-center">
        {/* NASA Background Image */}
        <div className="absolute inset-0 scale-108">
          <Image
            src="/assets/nasa-1.jpg"
            alt="Artemis Mission - Moon"
            fill
            className="object-cover opacity-80"
            priority
          />
          {/* Gradient overlays for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-none backdrop-blur-md mb-6"
                style={{
                  borderColor: "rgba(255,255,255,0.15)",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <ShinyText
                  text="Applications Due May 25th, 11:59 PM EDT"
                  className="text-xs font-medium tracking-tight uppercase whitespace-nowrap"
                  color="#e4e4e7"
                  shineColor="#ffffff"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] text-white font-instrument-serif tracking-tight"
            >
              Publish your first AI <br />
              research paper in 12 weeks.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-md md:text-lg text-zinc-300 leading-relaxed tracking-tighter"
            >
              Origin Lab is an intensive research program for high school students. 
              Work with university researchers to design, execute, and publish original work by the end of summer.
            </motion.p>
          </div>
        </div>

        {/* Artemis Caption */}
        <p className="absolute bottom-4 right-6 text-[10px] text-white/30 tracking-wider uppercase z-30">
          Image: NASA / Artemis II Mission
        </p>
    </section>
  );
}
