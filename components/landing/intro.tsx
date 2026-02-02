"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Hash, PaperPlaneRight, FilePy, Folder, GitBranch, CheckCircle, FileText } from "@phosphor-icons/react";

export function Intro() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: { opacity: 0, scale: 0.98 },
    center: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.02 }
  };

  return (
    <section id="intro" className="py-24 bg-white border-b border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
               <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
                 Real outcomes
               </p>
               <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-[1.1] font-instrument-serif tracking-tighter">
                 Here&apos;s what we do.
               </h2>
               <div className="space-y-6 text-lg text-zinc-600 leading-relaxed font-light tracking-tight">
                  <p>
                    Most high school students never get to do real research. Traditional programs are either prohibitively expensive ($5,000+), extremely selective (2-5% acceptance), or focused on teaching instead of doing.
                  </p>
                  <p>
                    Origin Lab is different. Over 12 weeks this summer, you&apos;ll work in a small team to design and execute an AI/ML research project in a field <span className="text-zinc-900 font-medium">YOU</span> care about. By the end, you&apos;ll have a completed paper submitted to peer-reviewed conferences.
                  </p>
               </div>
            </div>

            {/* Right Visual - Carousel */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-zinc-50 border border-zinc-200 overflow-hidden rounded-sm">
                
                <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12">
                   <div className="relative w-full max-w-md aspect-[1.4/1]">
                      <AnimatePresence mode="wait">
                        
                        {/* Slide 1: Slack / Collaboration */}
                        {activeSlide === 0 && (
                          <motion.div
                            key="slack"
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white border border-zinc-200 shadow-xl rounded-md overflow-hidden flex flex-col"
                          >
                             {/* Slack Header */}
                             <div className="h-10 border-b border-zinc-100 flex items-center px-4 bg-white">
                                <span className="font-bold text-zinc-800 text-sm flex items-center gap-1">
                                  <Hash size={14} weight="bold" className="text-zinc-400" />
                                  project-alpha
                                </span>
                             </div>
                             
                             {/* Slack Body */}
                             <div className="flex-1 p-4 space-y-4 overflow-hidden bg-white">
                                {/* Message 1 */}
                                <div className="flex gap-3">
                                   <div className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold shrink-0">AK</div>
                                   <div>
                                      <div className="flex items-baseline gap-2">
                                         <span className="text-xs font-bold text-zinc-900">Alex K.</span>
                                         <span className="text-[10px] text-zinc-400">10:42 AM</span>
                                      </div>
                                      <p className="text-xs text-zinc-600 leading-relaxed">
                                        Just finished the preprocessing pipeline. The accuracy on the validation set jumped to <span className="font-medium text-emerald-600">87.4%</span>! 🚀
                                      </p>
                                   </div>
                                </div>

                                {/* Message 2 */}
                                <div className="flex gap-3">
                                   <div className="w-8 h-8 rounded bg-purple-100 text-purple-600 flex items-center justify-center text-xs font-bold shrink-0">SM</div>
                                   <div>
                                      <div className="flex items-baseline gap-2">
                                         <span className="text-xs font-bold text-zinc-900">Sarah M.</span>
                                         <span className="text-[10px] text-zinc-400">10:45 AM</span>
                                      </div>
                                      <p className="text-xs text-zinc-600 leading-relaxed">
                                        Nice work! I&apos;m pushing the updated attention mechanism now. Should help with the long-tail cases.
                                      </p>
                                      <div className="mt-2 text-[10px] border border-zinc-200 rounded p-1.5 flex items-center gap-2 bg-zinc-50 w-fit">
                                         <GitBranch size={12} className="text-zinc-400"/>
                                         <span className="font-mono text-zinc-700">feat/attention-layer</span>
                                      </div>
                                   </div>
                                </div>
                             </div>

                             {/* Slack Input */}
                             <div className="p-3 border-t border-zinc-100">
                                <div className="h-8 border border-zinc-200 rounded px-2 flex items-center justify-between">
                                   <span className="text-xs text-zinc-300">Message #project-alpha</span>
                                   <PaperPlaneRight size={12} className="text-zinc-300" />
                                </div>
                             </div>
                          </motion.div>
                        )}

                        {/* Slide 2: IDE / Code */}
                        {activeSlide === 1 && (
                          <motion.div
                            key="ide"
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white border border-zinc-200 shadow-xl rounded-md overflow-hidden flex flex-col"
                          >
                             {/* IDE Header */}
                             <div className="h-8 border-b border-zinc-100 flex items-center px-3 bg-zinc-50 gap-2">
                                <div className="flex gap-1.5">
                                   <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                   <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                                   <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                </div>
                                <div className="ml-4 px-3 py-0.5 bg-white border border-zinc-200 rounded-t text-[10px] text-zinc-500 flex items-center gap-1.5">
                                   <FilePy size={10} className="text-blue-500" />
                                   train.py
                                </div>
                             </div>

                             {/* IDE Body */}
                             <div className="flex-1 flex overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-12 bg-zinc-50 border-r border-zinc-100 flex flex-col items-center py-3 gap-3">
                                   <Folder size={16} className="text-zinc-400" />
                                   <GitBranch size={16} className="text-zinc-400" />
                                </div>
                                {/* Editor */}
                                <div className="flex-1 p-4 font-mono text-[10px] leading-relaxed text-zinc-800 bg-white">
                                   <div><span className="text-purple-600">class</span> <span className="text-amber-600">TransformerBlock</span>(nn.Module):</div>
                                   <div className="pl-4"><span className="text-purple-600">def</span> <span className="text-blue-600">__init__</span>(self, dim, heads):</div>
                                   <div className="pl-8"><span className="text-purple-600">super</span>().__init__()</div>
                                   <div className="pl-8">self.attn = <span className="text-amber-600">MultiHeadAttn</span>(dim, heads)</div>
                                   <div className="pl-8">self.norm = nn.<span className="text-amber-600">LayerNorm</span>(dim)</div>
                                   <div className="pl-8">self.ffn = <span className="text-amber-600">FeedForward</span>(dim)</div>
                                   <br/>
                                   <div className="pl-4"><span className="text-purple-600">def</span> <span className="text-blue-600">forward</span>(self, x):</div>
                                   <div className="pl-8">x = x + self.attn(self.norm(x))</div>
                                   <div className="pl-8">return x + self.ffn(self.norm(x))</div>
                                </div>
                             </div>
                             
                             {/* Terminal Status */}
                             <div className="h-6 bg-blue-600 flex items-center px-4 justify-between">
                                <span className="text-[10px] text-white font-medium">Running Training Loop...</span>
                                <span className="text-[10px] text-blue-200">Ln 14, Col 32</span>
                             </div>
                          </motion.div>
                        )}

                        {/* Slide 3: Paper */}
                        {activeSlide === 2 && (
                          <motion.div
                            key="paper"
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-white border border-zinc-200 shadow-xl rounded-md p-8 flex flex-col"
                          >
                             <div className="border-b border-zinc-900 pb-4 mb-4">
                                <h3 className="text-lg font-serif font-bold text-zinc-900 leading-snug mb-2">
                                  Optimizing Transformer Attention Mechanisms for Low-Resource Languages
                                </h3>
                                <div className="text-[10px] text-zinc-500 font-serif italic">
                                  Alex Kim, Sarah Miller, Dr. James Chen
                                </div>
                             </div>
                             
                             <div className="flex gap-4 mb-4">
                                <div className="flex-1">
                                   <div className="uppercase text-[8px] font-bold text-zinc-400 mb-1 tracking-wider">Abstract</div>
                                   <div className="space-y-1.5">
                                      <p className="text-[7px] leading-relaxed text-zinc-600 text-justify font-serif">
                                        We propose a novel sparse attention mechanism that reduces computational overhead by 40% while maintaining state-of-the-art performance on low-resource language benchmarks. Our approach leverages a dynamic token pruning strategy to focus on semantically significant key-value pairs.
                                      </p>
                                   </div>
                                </div>
                                <div className="w-16 h-16 border border-zinc-100 bg-zinc-50 p-1">
                                   <div className="w-full h-full bg-zinc-200/50" />
                                </div>
                             </div>

                             <div className="mt-auto flex justify-between items-end">
                                <div className="text-[9px] font-mono text-zinc-400">
                                  Proc. of NeurIPS 2026<br/>
                                  Volume 38
                                </div>
                                <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-200 rounded text-green-700 text-[10px] font-bold uppercase">
                                   <CheckCircle weight="fill" size={12} /> Accepted
                                </div>
                             </div>
                          </motion.div>
                        )}

                      </AnimatePresence>
                   </div>
                </div>

                {/* Progress Indicators */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                   {[0, 1, 2].map((i) => (
                      <div 
                        key={i} 
                        className={`h-1 duration-500 rounded-full transition-all ${activeSlide === i ? "w-8 bg-zinc-900" : "w-1 bg-zinc-200"}`}
                      />
                   ))}
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}
