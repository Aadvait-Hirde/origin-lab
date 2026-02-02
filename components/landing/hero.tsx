"use client";

import { motion } from "framer-motion";
import Image from "next/image"; // Note: In a real scenario check if we have logos.
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ShinyText from "@/components/ShinyText"; // Updated import path
import { ArrowRightIcon } from "@phosphor-icons/react";

export function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Dense Dotted Grid Background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #a1a1aa 1px, transparent 1px)`,
            backgroundSize: "8px 8px",
            opacity: 0.15,
          }}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 border rounded-none backdrop-blur-sm mb-6"
                style={{
                  borderColor: "rgba(0,0,0,0.08)",
                  backgroundColor: "rgba(255,255,255,0.5)",
                }}
              >
                <ShinyText
                  text="Applications for Summer 2026 Open March 1st"
                  className="text-xs font-medium tracking-tight uppercase whitespace-nowrap"
                  color="#4a4a4a"
                  shineColor="#a1a1a1"
                />
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-7xl lg:text-7xl font-light leading-[1.0] text-foreground font-instrument-serif tracking-tight"
            >
              Publish your first AI <br />
              research paper in 12 weeks.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-2xl text-md md:text-lg text-muted-foreground leading-relaxed tracking-tighter"
            >
              Origin Lab is an intensive research program for high school students. 
              Work with university researchers to design, execute, and publish original work by the end of summer.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center"
            >
              <Button 
                size="lg" 
                className="rounded-none px-8 h-12 text-base font-medium shadow-sm transition-all hover:scale-105 active:scale-95 duration-300 tracking-tighter"
              >
                Apply for Summer 2026
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-none px-8 h-12 text-base font-medium bg-white/50 backdrop-blur-sm shadow-sm transition-all hover:scale-105 active:scale-95 duration-300 tracking-tighter"
              >
                View Curriculum
              </Button>
            </motion.div>

            {/* Hero Image / Papers */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 w-full max-w-7xl relative mb-[-80px] z-20 pointer-events-none"
            >
              <Image
                src="/assets/hero-papers.png"
                alt="Research Papers"
                width={2400}
                height={1600}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </div>
        </div>
    </section>
  );
}
