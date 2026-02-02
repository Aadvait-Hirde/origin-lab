"use client";

import { CheckIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const outcomes = [
  "Completed research paper (5-8 pages)",
  "Real publication experience",
  "Portfolio project for college apps",
  "Network of research peers & mentors",
  "Letter of recommendation (merit-based)"
];

export function Outcomes() {
  return (
    <section id="outcomes" className="py-24 bg-zinc-900 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           
           <div>
              <p className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-tight">
                Outcomes
              </p>
              <h2 className="text-4xl lg:text-5xl font-light mb-8 leading-[1.1] font-instrument-serif tracking-tight">
                What you'll walk away with
              </h2>
              
              <ul className="space-y-6">
                 {outcomes.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                       <div className="flex items-center justify-center w-6 h-6 border border-zinc-700 bg-zinc-800 text-white shadow-sm">
                          <CheckIcon size={14} weight="bold" />
                       </div>
                       <span className="text-lg font-light tracking-tight text-zinc-200">{item}</span>
                    </li>
                 ))}
              </ul>

              <div className="mt-12 p-6 border border-zinc-700 bg-zinc-800/50">
                 <p className="text-sm text-zinc-400 font-mono mb-2 uppercase tracking-wider">Publication Guarantee</p>
                 <p className="text-base text-zinc-300 leading-relaxed tracking-tight">
                    We guarantee that every student's work will be published. While acceptance into top-tier conferences (like those below) depends on research quality, you will walk away with a published paper to your name.
                 </p>
                 
                 <div className="mt-6 pt-6 border-t border-zinc-700/50">
                    <p className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-4">Target Venues</p>
                    <div className="flex items-center gap-3">
                       <div className="h-6 bg-white rounded-sm flex items-center justify-center">
                          <img src="/logos/ieee.png" alt="IEEE" className="h-full w-auto object-contain" />
                       </div>
                       <div className="h-6 bg-white rounded-sm flex items-center justify-center">
                          <img src="/logos/neurips.png" alt="NeurIPS" className="h-full w-auto object-contain" />
                       </div>
                       <div className="h-6 bg-white rounded-sm flex items-center justify-center">
                          <img src="/logos/acm.png" alt="ACM" className="h-full w-auto object-contain" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Visual: Paper Preview */}
           <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl opacity-50" />
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className="relative max-w-md mx-auto"
              >
                  <div className="relative rounded-sm overflow-hidden shadow-2xl border border-white/10">
                    <img 
                       src="/assets/bitcoin-paper.png" 
                       alt="Bitcoin: A Peer-to-Peer Electronic Cash System" 
                       className="w-full h-auto object-cover"
                    />
                    {/* Optional Highlight/Glow */}
                    <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
                  </div>
              </motion.div>
           </div>

        </div>
      </div>
    </section>
  );
}
