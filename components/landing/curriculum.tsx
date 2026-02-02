"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FileText, Code, BookOpen } from "@phosphor-icons/react";

// ============================================================================
// VISUALS
// ============================================================================

function FoundationsVisual() {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden border border-white/10 text-white">
       <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
       <div className="flex flex-col gap-4 p-8 relative z-10">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 bg-zinc-800/80 backdrop-blur p-4 border border-white/10"
          >
             <div className="p-3 bg-blue-500/20 text-blue-400">
               <BookOpen size={24} weight="duotone" />
             </div>
             <div>
                <div className="text-sm font-medium text-white">Literature Review</div>
                <div className="text-xs text-zinc-400">Analyzing seminal papers</div>
             </div>
          </motion.div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4 bg-zinc-800/80 backdrop-blur p-4 border border-white/10 ml-8"
          >
             <div className="p-3 bg-purple-500/20 text-purple-400">
               <Code size={24} weight="duotone" />
             </div>
             <div>
                <div className="text-sm font-medium text-white">Python & PyTorch</div>
                <div className="text-xs text-zinc-400">Mastering the stack</div>
             </div>
          </motion.div>
       </div>
    </div>
  );
}

function ResearchVisual() {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden border border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10" />
        <div className="w-full max-w-md p-6 font-mono text-xs text-zinc-300">
           <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ staggerChildren: 0.1 }}
           >
              <div className="text-emerald-400 mb-2">// Experiment #42: Transformer Architecture</div>
              <div className="pl-4 border-l border-zinc-700 space-y-2">
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>Epoch 1/100 ... loss: 2.451</motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>Epoch 10/100 ... loss: 1.832</motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>Epoch 50/100 ... loss: 0.412</motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="text-emerald-300">Model converged. Validation accuracy: 94.2%</motion.div>
              </div>
           </motion.div>
        </div>
    </div>
  );
}

function PublicationVisual() {
  return (
    <div className="w-full h-full bg-zinc-900 flex items-center justify-center relative overflow-hidden border border-white/10">
       <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-orange-500/10" />
       <motion.div 
         initial={{ y: 40, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.6 }}
         className="w-[280px] h-[360px] bg-white shadow-2xl p-6 overflow-hidden relative"
       >
          <div className="w-full h-1 bg-zinc-200 mb-4" />
          <div className="w-3/4 h-4 bg-zinc-800 mb-2" />
          <div className="w-1/2 h-4 bg-zinc-800 mb-6" />
          
          <div className="flex gap-2 mb-6">
             <div className="flex-1 space-y-2">
                <div className="w-full h-2 bg-zinc-200" />
                <div className="w-full h-2 bg-zinc-200" />
                <div className="w-2/3 h-2 bg-zinc-200" />
             </div>
             <div className="flex-1 space-y-2">
                <div className="w-full h-2 bg-zinc-200" />
                <div className="w-full h-2 bg-zinc-200" />
                <div className="w-1/3 h-2 bg-zinc-200" />
             </div>
          </div>
          
          <div className="w-full h-32 bg-zinc-100 border border-zinc-200 flex items-center justify-center">
             <div className="text-[10px] text-zinc-400 font-serif italic">Figure 1: Results</div>
          </div>
       </motion.div>
    </div>
  );
}

// ============================================================================
// CURRICULUM CARD COMPONENT
// ============================================================================

interface CurriculumCardProps {
  label: string;
  headline: string;
  description: string;
  children: React.ReactNode;
}

function CurriculumCard({ label, headline, description, children }: CurriculumCardProps) {
  return (
    <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 flex flex-col">
      {/* Visual mockup - 16:9 aspect ratio */}
      <div className="w-full aspect-video bg-zinc-900 overflow-hidden border border-white/10 shadow-2xl">
        {children}
      </div>

      {/* Text content */}
      <div className="mt-8 pr-8">
        <div className="flex items-center gap-3 mb-3">
           <span className="px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-white/10 text-white/90 border border-white/5">
             {label}
           </span>
        </div>
        <h3 className="text-2xl md:text-3xl font-light text-white leading-tight font-instrument-serif mb-3">
          {headline}
        </h3>
        <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const PHASES = [
  {
     id: "foundations",
     label: "Weeks 1-4",
     headline: "Master the foundations",
     description: "Deep dive into machine learning theory, analyze seminal papers, and identify your novel research direction with 1:1 mentorship.",
     visual: <FoundationsVisual />
  },
  {
     id: "research",
     label: "Weeks 5-8",
     headline: "Execute your experiment",
     description: "Design and implement your model, train on real datasets, and iterate on your hypothesis. This is where the real science happens.",
     visual: <ResearchVisual />
  },
  {
     id: "publication",
     label: "Weeks 9-12",
     headline: "Publish your findings",
     description: "Write your paper in LaTeX, submit to high-school or undergraduate conferences, and present your work to the cohort.",
     visual: <PublicationVisual />
  }
];

// Scroll distance based on number of cards
const TOTAL_SCROLL_VW = 100; // Adjust based on gap and card width

export function Curriculum() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", "-60vw"] // Adjusted for fewer cards
  );

  // Map vertical scroll to horizontal scroll
  // We want to scroll enough to show all cards.
  // 3 cards * 45vw + gap.
  // Let's rely on the manual tuned x value or logic from inspiration.
  // Inspiration used `-${TOTAL_SCROLL_VW}vw` with TOTAL_SCROLL_VW = 100.
  // Inspiration had 3 cards.
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest < 0.33) {
        setActiveIndex(0);
      } else if (latest < 0.66) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const scrollToCard = (index: number) => {
    if (containerRef.current) {
      const sectionTop = containerRef.current.offsetTop;
      const sectionHeight = containerRef.current.offsetHeight - window.innerHeight;
      const scrollAmount = sectionTop + (index / 2) * sectionHeight;
      window.scrollTo({ top: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section
      id="curriculum"
      ref={containerRef}
      className="relative h-[300vh] bg-zinc-950"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Header */}
        <div className="pt-12 md:pt-20 pb-8 px-6 lg:px-8">
           <div className="mx-auto max-w-7xl">
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8">
                 <div>
                    <p className="text-sm font-medium text-zinc-500 mb-4 uppercase tracking-tight">
                      Curriculum
                    </p>
                    <h2 className="text-4xl lg:text-6xl font-light text-white leading-[0.95] font-instrument-serif tracking-tight max-w-3xl">
                      Twelve weeks from <br/> student to researcher.
                    </h2>
                 </div>
                 
                 <div className="lg:max-w-md hidden lg:block">
                    <p className="text-lg text-zinc-400 tracking-tight leading-relaxed mb-6">
                       A structured, intensive roadmap designed to take you from learning the basics to publishing original work.
                    </p>
                    <div className="flex items-center gap-2">
                      {PHASES.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => scrollToCard(i)}
                          className={`h-1.5 transition-all duration-300 ${
                            i === activeIndex
                              ? "w-12 bg-white"
                              : "w-3 bg-zinc-800 hover:bg-zinc-700"
                          }`}
                          aria-label={`Go to phase ${i + 1}`}
                        />
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* Horizontal Scroll Area */}
        <div className="flex-1 flex items-center overflow-hidden w-full">
           <motion.div
             style={{ x }}
             className="flex gap-8 px-6 lg:px-20 items-center h-full pb-20"
           >
              {PHASES.map((phase) => (
                <CurriculumCard 
                   key={phase.id} 
                   label={phase.label}
                   headline={phase.headline}
                   description={phase.description}
                >
                   {phase.visual}
                </CurriculumCard>
              ))}
              
              {/* Spacer at the end */}
              <div className="w-[10vw] shrink-0" />
           </motion.div>
        </div>
      </div>
    </section>
  );
}
