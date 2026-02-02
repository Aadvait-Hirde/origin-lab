"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Dna, Bank, Gavel, Cpu } from "@phosphor-icons/react";
import { motion } from "framer-motion";

export function ResearchDomains() {
  return (
    <section id="research" className="relative bg-white py-16 md:py-32 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
            Research Areas
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight font-instrument-serif tracking-tight max-w-2xl">
            Work on what you care about
          </h2>
          <p className="text-lg text-zinc-600 tracking-tighter leading-relaxed max-w-2xl">
            We don't box you into predefined topics. Instead, we help you apply AI/ML to whatever field interests you. Bring your passion, and we'll help you turn it into a research question.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-6">
          
          {/* CARD 1 - Large, Top Left (spans 4 columns) - Biology & Medicine */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <Card className="group h-full overflow-hidden shadow-none rounded-none border-zinc-200 bg-zinc-50 hover:border-zinc-300 transition-colors">
              <CardHeader className="p-8">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-white border border-zinc-200 text-blue-600 rounded-none w-fit">
                      <Dna size={20} weight="regular" />
                   </div>
                   <p className="font-light text-xl tracking-tight text-zinc-900">Biology & Medicine</p>
                </div>
                <p className="text-zinc-500 max-w-lg text-sm leading-relaxed tracking-tight">
                   Cell classification from microscopy, genomic sequence analysis, or detecting anomalies in MRI scans.
                </p>
              </CardHeader>
              <div className="relative h-56 bg-zinc-900 mt-0 mx-8 mb-8 border border-zinc-200 overflow-hidden">
                   {/* Grid Background */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                  
                  {/* Content: Cell-like circles */}
                  <div className="absolute inset-0 p-6 flex flex-wrap gap-4 content-center justify-center opacity-50">
                     {[...Array(12)].map((_, i) => (
                        <motion.div 
                           key={i}
                           className="w-8 h-8 rounded-full border border-blue-500/30 bg-blue-500/10"
                           animate={{ 
                              scale: [1, 1.1, 1],
                              opacity: [0.3, 0.6, 0.3]
                           }}
                           transition={{ 
                              duration: 3, 
                              repeat: Infinity, 
                              delay: i * 0.2,
                              ease: "easeInOut" 
                           }}
                        />
                     ))}
                  </div>

                  {/* Scanning Line */}
                  <motion.div 
                     className="absolute left-0 right-0 h-px bg-blue-400/50 shadow-[0_0_15px_rgba(96,165,250,0.5)] z-10"
                     animate={{ top: ["0%", "100%", "0%"] }}
                     transition={{ duration: 8, ease: "linear", repeat: Infinity }}
                  />
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-4 right-4 text-[10px] font-mono text-blue-400 bg-blue-950/50 px-2 py-1 border border-blue-500/20 backdrop-blur-sm">
                     ANALYZING SEQUENCE...
                  </div>
              </div>
            </Card>
          </motion.div>

          {/* CARD 2 - Medium, Top Right (spans 2 columns) - Computer Science */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="group h-full overflow-hidden shadow-none flex flex-col rounded-none border-zinc-200 bg-zinc-50 hover:border-zinc-300 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-white border border-zinc-200 text-purple-600 rounded-none w-fit">
                      <Cpu size={20} weight="regular" />
                   </div>
                   <p className="text-xl font-light tracking-tight text-zinc-900">Computer Science</p>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed tracking-tight">
                  Deep learning architectures, NLP, and system optimization.
                </p>
              </CardHeader>
              <CardContent className="flex-1 p-8">
                  <div className="h-full bg-zinc-900 p-5 border border-zinc-800 font-mono text-[10px] text-zinc-400 leading-relaxed overflow-hidden relative shadow-inner">
                     <div className="flex gap-2 mb-2 opacity-50">
                        <div className="w-2 h-2 rounded-full bg-red-500" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500" />
                        <div className="w-2 h-2 rounded-full bg-green-500" />
                     </div>
                     <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ staggerChildren: 0.1 }}
                     >
                        <div><span className="text-purple-400">class</span> Transformer(nn.Module):</div>
                        <div className="pl-4 text-emerald-400">def __init__(self):</div>
                        <div className="pl-8 text-zinc-500">super().__init__()</div>
                        <motion.div 
                           className="pl-8 text-blue-300"
                           animate={{ opacity: [0.5, 1, 0.5] }}
                           transition={{ duration: 1.5, repeat: Infinity }}
                        >
                           self.attn = MultiHead()
                        </motion.div>
                     </motion.div>
                  </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* CARD 3 - Small, Bottom Left (spans 2 columns) - Economics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="group h-full shadow-none flex flex-col relative overflow-hidden rounded-none border-zinc-200 bg-zinc-50 hover:border-zinc-300 transition-colors">
              <CardHeader className="p-8 pb-0">
                <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-white border border-zinc-200 text-emerald-600 rounded-none w-fit">
                      <Bank size={20} weight="regular" />
                   </div>
                   <p className="text-xl font-light tracking-tight text-zinc-900">Economics & Finance</p>
                </div>
                <p className="text-zinc-500 text-sm tracking-tight leading-relaxed">
                  Market prediction models and algorithmic trading strategies.
                </p>
              </CardHeader>
              <div className="flex-1 p-8 pt-6 flex items-center justify-center">
                 <div className="w-full h-24 relative bg-white border border-zinc-200 overflow-hidden p-4">
                    <svg className="absolute inset-0 w-full h-full p-4" viewBox="0 0 100 50" preserveAspectRatio="none">
                       {/* Grid lines */}
                       <line x1="0" y1="10" x2="100" y2="10" stroke="#f4f4f5" strokeWidth="0.5" />
                       <line x1="0" y1="25" x2="100" y2="25" stroke="#f4f4f5" strokeWidth="0.5" />
                       <line x1="0" y1="40" x2="100" y2="40" stroke="#f4f4f5" strokeWidth="0.5" />
                       
                       {/* Animated Path */}
                       <motion.path 
                          d="M0,45 L10,40 L20,42 L30,35 L40,38 L50,20 L60,25 L70,15 L80,18 L90,5 L100,2" 
                          fill="none" 
                          stroke="#10b981" 
                          strokeWidth="1.5"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                       />
                       
                       {/* Pulsing end dot */}
                       <motion.circle 
                          cx="100" cy="2" r="2" fill="#10b981"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 2, duration: 0.5 }} 
                       />
                    </svg>
                 </div>
              </div>
            </Card>
          </motion.div>

          {/* CARD 4 - Large, Bottom Right (spans 4 columns) - Social Sciences */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-4" 
          >
            <Card className="group h-full relative overflow-hidden shadow-none gap-0 rounded-none border-zinc-200 bg-zinc-50 hover:border-zinc-300 transition-colors">
              <CardHeader className="p-8">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="p-2 bg-white border border-zinc-200 text-orange-600 rounded-none w-fit">
                      <Gavel size={20} weight="regular" />
                   </div>
                   <p className="font-light text-xl tracking-tight text-zinc-900">Law & Society</p>
                </div>
                <p className="text-zinc-500 max-w-lg text-sm leading-relaxed tracking-tight">
                  Legal document analysis, digital policy research, and computational social science.
                </p>
              </CardHeader>
              
              <div className="flex h-32 bg-white border border-zinc-200 mt-0 mx-8 mb-8">
                  <div className="flex-1 p-6 grid grid-cols-2 gap-6 items-center">
                     <div className="space-y-3">
                        <motion.div 
                           initial={{ width: "0%" }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.2 }}
                           className="h-2 w-full bg-zinc-100 rounded-sm overflow-hidden"
                        >
                           <motion.div className="h-full bg-orange-100 w-full" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
                        </motion.div>
                        <motion.div 
                           initial={{ width: "0%" }} whileInView={{ width: "80%" }} transition={{ duration: 1, delay: 0.4 }}
                           className="h-2 w-5/6 bg-zinc-100 rounded-sm"
                        />
                        <motion.div 
                           initial={{ width: "0%" }} whileInView={{ width: "60%" }} transition={{ duration: 1, delay: 0.6 }}
                           className="h-2 w-4/6 bg-zinc-100 rounded-sm"
                        />
                     </div>
                     <div className="h-20 bg-zinc-50 border border-zinc-100 flex items-center justify-center p-2 relative overflow-hidden">
                        <motion.div 
                           className="absolute inset-0 bg-orange-500/5"
                           initial={{ scaleY: 0 }}
                           whileInView={{ scaleY: 1 }}
                           transition={{ duration: 1.5, ease: "circOut" }}
                        />
                        <div className="z-10 text-[10px] text-zinc-400 font-mono text-center">
                           POLICY MATCH: <span className="text-orange-500 font-bold">98%</span>
                        </div>
                     </div>
                  </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
