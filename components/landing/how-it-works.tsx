"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ProgramCalendar } from "./program-calendar";

const timeline = [
  {
    step: "01",
    weeks: "Weeks 1-2",
    phase: "Foundations",
    description: "Master research basics, form teams, and finalize your research question.",
  },
  {
    step: "02",
    weeks: "Weeks 3-4",
    phase: "Design",
    description: "Design experiments, set up tools, and present your research proposal.",
  },
  {
    step: "03",
    weeks: "Weeks 5-8",
    phase: "Execution",
    description: "Run experiments, collect data, and iterate with weekly professor guidance.",
  },
  {
    step: "04",
    weeks: "Weeks 9-11",
    phase: "Analysis & Writing",
    description: "Finalize results, write your paper draft, and prepare for submission.",
  },
  {
    step: "05",
    weeks: "Week 12",
    phase: "Publication",
    description: "Polish your manuscript, present your work, and submit to conferences.",
  }
];

export function HowItWorks() {
  return (
    <section id="curriculum" className="py-24 md:py-32 bg-background border-t border-border relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-20 max-w-2xl">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.5 }}
           >
             <h2 className="text-5xl md:text-7xl font-light text-foreground mb-8 leading-[0.9] font-instrument-serif tracking-tight">
               From idea to publication<br />
               <span className="text-muted-foreground">in 12 weeks.</span>
             </h2>
             <p className="text-lg text-muted-foreground max-w-xl leading-relaxed tracking-tighter">
               A structured, intensive roadmap designed to take you from a blank page to a submitted research paper.
             </p>
           </motion.div>
        </div>

        {/* Horizontal Grid Timeline */}
        <div className="border border-zinc-200 border-r-0 border-b-0 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group border-b border-r border-zinc-200 p-8 md:pt-12 md:pb-12 h-full bg-white hover:bg-zinc-50 transition-all duration-500"
              >
                 {/* Hover Top Line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-zinc-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                 <div className="flex flex-col h-full justify-between gap-8">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">{item.weeks}</span>
                        <span className="text-xs font-mono text-zinc-300 group-hover:text-zinc-900 transition-colors uppercase tracking-widest">
                          {item.step}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-instrument-serif text-zinc-900 mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {item.phase}
                      </h3>
                      <p className="text-sm text-zinc-500 tracking-tight leading-relaxed group-hover:text-zinc-700 transition-colors">
                        {item.description}
                      </p>
                    </div>  
                 </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Detailed Calendar View */}
        <div className="mt-24">
             <ProgramCalendar />
        </div>

      </div>
    </section>
  );
}


