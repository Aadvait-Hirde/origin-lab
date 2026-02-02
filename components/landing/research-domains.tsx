"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";


// ============================================================================
// VISUAL COMPONENTS (Static)
// ============================================================================

const domains = [
  {
    id: "biology",
    title: "Biology & Medicine",
    description: "Apply computer vision to microscopy, analyze genomic sequences, or detect anomalies in medical imaging.",
    imageSrc: "/papers/bio-paper.png"
  },
  {
    id: "cs",
    title: "Computer Science",
    description: "Design novel deep learning architectures, optimize systems, or push the boundaries of NLP.",
    imageSrc: "/papers/cs-paper.png"
  },
  {
    id: "economics",
    title: "Economics & Finance",
    description: "Build algorithmic trading models or analyze market sentiment using large-scale datasets.",
    imageSrc: "/papers/econ-paper.png"
  },
  {
    id: "law",
    title: "Law & Society",
    description: "Use computational methods to analyze legal texts, policy impact, and social dynamics.",
    imageSrc: "/papers/society-paper.png"
  }
];

export function ResearchDomains() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 4 Cards. To show all 4, we need to translate ~3 cards worth of width.
  // Let's assume each card is 60vw + 2vw gap = 62vw stride.
  // Max translation = 3 * 62 = 186vw (approx). 
  // We'll tune this to ensure the last card aligns nicely.
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <>
    <section ref={containerRef} id="research" className="relative h-[400vh] bg-white hidden lg:block">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="pt-16 pb-8 px-6 md:px-12 z-10 bg-white/80 backdrop-blur-sm pointer-events-none">
          <div className="max-w-7xl mx-auto flex justify-between items-end">
             <div>
                <p className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-tight">Research Areas</p>
                <h2 className="text-5xl font-light text-zinc-900 leading-tight font-instrument-serif tracking-tight">
                  Work on what you care about.
                </h2>
             </div>
             <p className="text-lg text-zinc-600 max-w-md text-right leading-relaxed tracking-tight">
                We help you apply AI to your field of interest. <br/>
                No predefined topics.
             </p>
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="flex-1 flex items-center mb-16">
           <motion.div 
              style={{ x }} 
              className="flex gap-[4vw] px-[10vw] w-max"
           >
              {domains.map((domain, i) => (
                 <div key={domain.id} className="w-[60vw] h-[60vh] flex flex-col gap-6 group">
                    {/* Visual Card */}
                    <div className="flex-1 rounded-sm overflow-hidden shadow-sm border border-zinc-200 bg-white relative transition-shadow duration-500 group-hover:shadow-md p-6">
                        <img src={domain.imageSrc} alt={domain.title} className="w-full h-full object-contain object-top shadow-sm border border-zinc-100" />
                    </div>
                    {/* Caption */}
                    <div className="pl-2 border-l-2 border-zinc-200 group-hover:border-zinc-900 transition-colors duration-300">
                       <h3 className="text-2xl font-instrument-serif text-zinc-900 mb-2">{domain.title}</h3>
                       <p className="text-zinc-500 leading-relaxed tracking-tight max-w-lg">{domain.description}</p>
                    </div>
                 </div>
              ))}
           </motion.div>
        </div>

        {/* Progress Bar / Indicator */}
        <div className="absolute bottom-12 left-0 right-0 px-12">
           <div className="max-w-7xl mx-auto h-px bg-zinc-200 relative overflow-hidden">
              <motion.div 
                 className="absolute left-0 top-0 bottom-0 bg-zinc-900 w-full origin-left"
                 style={{ scaleX: scrollYProgress }}
              />
           </div>
        </div>

      </div>
    </section>

    {/* Mobile Fallback (Vertical) */}
    <section className="lg:hidden bg-white py-24 px-6">
       <div className="mb-16">
          <p className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-tight">Research Areas</p>
          <h2 className="text-4xl font-light text-zinc-900 leading-tight font-instrument-serif tracking-tight mb-6">
            Work on what you care about.
          </h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
             We help you apply AI to your field of interest. No predefined topics.
          </p>
       </div>

       <div className="space-y-16">
          {domains.map((domain) => (
             <div key={domain.id}>
                <div className="aspect-video w-full border border-zinc-200 rounded-sm overflow-hidden shadow-sm mb-6 p-4 bg-zinc-50/50">
                   <img src={domain.imageSrc} alt={domain.title} className="w-full h-full object-contain object-top shadow-sm border border-zinc-100" />
                </div>
                <h3 className="text-2xl font-instrument-serif text-zinc-900 mb-2">{domain.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{domain.description}</p>
             </div>
          ))}
       </div>
    </section>
    </>
  );
}
