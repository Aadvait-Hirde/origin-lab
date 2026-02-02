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
                 <p className="text-sm text-zinc-400 font-mono mb-2 uppercase tracking-wider">Realistic Expectations</p>
                 <p className="text-base text-zinc-300 leading-relaxed tracking-tight">
                    Target acceptance rate: 35-50%. Not every paper gets accepted — that's research. But you will have the experience and a completed work regardless.
                 </p>
              </div>
           </div>

           {/* Visual: Paper Preview */}
           <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl opacity-50" />
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5 }}
                 className="relative aspect-[3/4] max-w-md mx-auto bg-white text-zinc-900 shadow-2xl p-8 md:p-10"
              >
                 <div className="h-full border-zinc-100 flex flex-col">
                    {/* Header */}
                    <div className="mb-8 text-center space-y-3">
                       <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "80%" }}
                          transition={{ duration: 0.8, delay: 0.2 }}
                          className="h-5 bg-zinc-900 mx-auto" 
                       />
                       <motion.div 
                          initial={{ width: "0%" }}
                          whileInView={{ width: "60%" }}
                          transition={{ duration: 0.8, delay: 0.3 }}
                          className="h-5 bg-zinc-900 mx-auto" 
                       />
                       <div className="pt-2 flex justify-center gap-2">
                           {[1,2,3].map((_, i) => (
                             <motion.div 
                               key={i}
                               initial={{ opacity: 0 }}
                               whileInView={{ opacity: 1 }}
                               transition={{ delay: 0.5 + (i*0.1) }}
                               className="h-2 w-16 bg-zinc-300"
                             />
                           ))}
                       </div>
                    </div>

                    {/* Columns */}
                    <div className="grid grid-cols-2 gap-6 flex-1 overflow-hidden">
                       <div className="space-y-2">
                          {/* Abstract or content */}
                          <div className="space-y-1 mb-4">
                             {[1,2,3,4].map((_, i) => (
                                <motion.div 
                                   key={i}
                                   initial={{ width: 0 }}
                                   whileInView={{ width: "100%" }}
                                   transition={{ delay: 0.6 + (i*0.05), duration: 0.4 }}
                                   className="h-1.5 bg-zinc-300" 
                                />
                             ))}
                          </div>
                          
                          {/* Figure */}
                          <motion.div 
                             initial={{ opacity: 0, y: 10 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             transition={{ delay: 0.8 }}
                             className="h-24 bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-4"
                          >
                             <div className="w-8 h-8 rounded-full border-2 border-zinc-300/50" />
                             <div className="w-8 h-8 rounded-full border-2 border-zinc-300/50 -ml-3" />
                          </motion.div>

                          {/* More text */}
                          <div className="space-y-1">
                             {[1,2,3,4,5,6].map((_, i) => (
                                <motion.div 
                                   key={i}
                                   initial={{ width: 0 }}
                                   whileInView={{ width: "100%" }}
                                   transition={{ delay: 1.0 + (i*0.05), duration: 0.4 }}
                                   className="h-1.5 bg-zinc-300" 
                                />
                             ))}
                          </div>
                       </div>

                       <div className="space-y-2">
                          <div className="space-y-1">
                             {[1,2,3,4,5,6,7,8].map((_, i) => (
                                <motion.div 
                                   key={i}
                                   initial={{ width: 0 }}
                                   whileInView={{ width: "100%" }}
                                   transition={{ delay: 0.7 + (i*0.05), duration: 0.4 }}
                                   className="h-1.5 bg-zinc-300" 
                                />
                             ))}
                          </div>
                          
                          {/* Small Figure */}
                          <motion.div 
                             initial={{ opacity: 0 }}
                             whileInView={{ opacity: 1 }}
                             transition={{ delay: 1.2 }}
                             className="h-16 bg-zinc-800 my-4" 
                          />

                           <div className="space-y-1">
                             {[1,2,3,4].map((_, i) => (
                                <motion.div 
                                   key={i}
                                   initial={{ width: 0 }}
                                   whileInView={{ width: "100%" }}
                                   transition={{ delay: 1.3 + (i*0.05), duration: 0.4 }}
                                   className="h-1.5 bg-zinc-300" 
                                />
                             ))}
                          </div>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>

        </div>
      </div>
    </section>
  );
}
