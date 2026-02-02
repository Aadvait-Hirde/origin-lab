"use client";

import Image from "next/image";
import { motion } from "framer-motion";



export function AssetsShowcase() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:text-left max-w-3xl">
          <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
            Premium Resources
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-[1.1] font-instrument-serif tracking-tight">
            Comprehensive learning materials.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed tracking-tight">
             Gain access to a library of high-quality slide decks, templates, and guides. 
             These are the exact same resources used to teach graduate-level research methodology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
              { src: "/slides/slide-1.png", title: "Research Fundamentals" },
              { src: "/slides/slide-2.png", title: "Literature Review" },
              { src: "/slides/slide-3.png", title: "Methodology" },
              { src: "/slides/slide-4.png", title: "Data Analysis" },
              { src: "/slides/slide-5.png", title: "Results & Discussion" },
              { src: "/slides/slide-6.png", title: "Academic Writing" },
           ].map((slide, i) => (
              <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: i * 0.1, duration: 0.5 }}
                 viewport={{ once: true }}
                 // Simple, clean presentation without interactive hover states that distract
                 className="relative group shadow-sm border border-zinc-200/50 bg-white p-1"
              >
                 <Image
                    src={slide.src}
                    alt={slide.title}
                    width={800}
                    height={450}
                    className="w-full h-auto"
                 />
                 <div className="mt-3 px-1 pb-1">
                    <p className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{slide.title}</p>
                 </div>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
