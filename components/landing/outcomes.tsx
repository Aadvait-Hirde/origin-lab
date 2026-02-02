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
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
                 className="relative aspect-[1/1.4] max-w-md mx-auto bg-white text-zinc-900 shadow-2xl overflow-hidden"
              >
                 <div className="h-full px-8 py-10 flex flex-col font-serif">
                    {/* Header */}
                    <div className="mb-6 text-center">
                       <h1 className="text-xl font-bold leading-tight mb-2 font-serif text-black">
                          Optimizing Transformer Attention Mechanisms for Low-Resource Environments
                       </h1>
                       <div className="text-[10px] text-zinc-600 mb-4 font-sans">
                          Alex Chen, Sarah Williams, and Dr. Emily Zhang
                       </div>
                    </div>

                    {/* Columns */}
                    <div className="flex-1 grid grid-cols-2 gap-6 text-[8px] leading-[1.3] text-justify text-zinc-800">
                       <div className="space-y-4">
                          <p>
                             <strong>Abstract.</strong> Recent advancements in large language models have demonstrated remarkable capabilities across various domains. However, the computational cost of self-attention mechanisms scales quadratically with sequence length, limiting their deployment in resource-constrained environments. In this paper, we propose a novel sparse attention technique that reduces complexity to O(N log N) while maintaining performance on standard benchmarks.
                          </p>
                          <p>
                             <strong>1. Introduction</strong><br/>
                             The Transformer architecture (Vaswani et al., 2017) has become the de facto standard for natural language processing tasks. Despite its success, the standard self-attention mechanism incurs significant memory and compute overhead. Several efficient attention variants have been proposed, including Reformer, Linformer, and Longformer.
                          </p>
                          
                          {/* Figure 1 Mockup */}
                          <div className="my-2 p-2 border border-zinc-200 bg-zinc-50">
                             <div className="h-16 w-full bg-zinc-100 relative overflow-hidden flex items-end justify-between px-2 pb-1 gap-1">
                                <div className="h-4/5 w-2 bg-blue-500/80"></div>
                                <div className="h-3/5 w-2 bg-blue-500/80"></div>
                                <div className="h-full w-2 bg-blue-500/80"></div>
                                <div className="h-1/2 w-2 bg-blue-500/80"></div>
                                <div className="h-3/4 w-2 bg-blue-500/80"></div>
                             </div>
                             <div className="mt-1 text-[6px] text-center text-zinc-500 font-sans">
                                Figure 1: Attention score distribution across layers.
                             </div>
                          </div>

                          <p>
                             Our approach builds upon these foundations but introduces a dynamic sparsity pattern that adapts to the input sequence content. This allows the model to focus resources on the most relevant tokens.
                          </p>
                       </div>

                       <div className="space-y-4">
                          <p>
                             <strong>2. Methodology</strong><br/>
                             We define the attention matrix A as a sparse matrix where only the top-k elements are retained. To efficiently compute this, we employ a locality-sensitive hashing (LSH) scheme that groups similar keys into buckets. Within each bucket, we apply standard attention.
                          </p>
                          
                          <p>
                             <strong>3. Experiments</strong><br/>
                             We evaluate our model on the GLUE benchmark and compare it against BERT-base and DistilBERT. Table 1 summarizes our results.
                          </p>
                          
                          {/* Table Mockup */}
                          <div className="my-2 border-t border-b border-black py-1">
                             <div className="grid grid-cols-3 font-bold mb-1 border-b border-zinc-300 pb-0.5">
                                <span>Model</span> <span className="text-center">Acc.</span> <span className="text-right">Speed</span>
                             </div>
                             <div className="space-y-0.5">
                                <div className="grid grid-cols-3">
                                   <span>BERT</span> <span className="text-center">84.2</span> <span className="text-right">1.0x</span>
                                </div>
                                <div className="grid grid-cols-3 font-semibold">
                                   <span>Ours</span> <span className="text-center">83.9</span> <span className="text-right">2.4x</span>
                                </div>
                             </div>
                             <div className="mt-1 text-[6px] text-center text-zinc-500 font-sans pt-1">
                                Table 1: Performance comparison on GLUE.
                             </div>
                          </div>

                          <p>
                             Our method achieves comparable accuracy while delivering a 2.4x speedup in inference time. This makes it suitable for edge deployment on mobile devices.
                          </p>
                          
                          <p>
                             <strong>4. Conclusion</strong><br/>
                             We theoretically and empirically demonstrate that sparse attention can approximate full attention with high fidelity. Future work includes extending this to vision transformers.
                          </p>
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
