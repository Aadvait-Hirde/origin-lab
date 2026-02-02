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
              <div className="relative h-56 bg-white mt-0 mx-8 mb-8 border border-zinc-200 overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:14px_14px]"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="text-xs font-mono text-zinc-400">Microscopy Analysis</div>
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
                  <div className="h-full bg-white p-4 border border-zinc-200 font-mono text-[10px] text-zinc-600 leading-relaxed overflow-hidden relative">
                     <div>model = Transformer()</div>
                     <div className="pl-4">optimizer = Adam(lr=1e-4)</div>
                     <div className="mt-2 text-green-600"># Training loop</div>
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
                 <div className="w-full h-24 relative bg-white border border-zinc-200 overflow-hidden">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                       <path d="M0,50 L20,40 L40,45 L60,20 L80,25 L100,5" fill="none" stroke="#10b981" strokeWidth="1.5" />
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
                  <div className="flex-1 p-4 grid grid-cols-2 gap-4">
                     <div className="space-y-2">
                        <div className="h-1.5 w-full bg-zinc-100" />
                        <div className="h-1.5 w-5/6 bg-zinc-100" />
                        <div className="h-1.5 w-4/6 bg-zinc-100" />
                     </div>
                     <div className="space-y-2">
                         <div className="h-1.5 w-full bg-zinc-100" />
                         <div className="h-1.5 w-full bg-zinc-100" />
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
