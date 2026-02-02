"use client";

import Image from "next/image";

const mentors = [
  {
    name: "Aadvait Hirde",
    role: "Program Director",
    bio: "Junior at IU, National Director of Kappa Theta Pi, Research Assistant on $32M NSF grant.",
    image: "/avatars/aadvait.png" // Placeholder, handle if missing
  },
  {
    name: "PhD Researchers",
    role: "Mentors from IU Data Science Lab",
    bio: "Experts in Computer Vision, NLP, and Deep Learning with publications in NeurIPS, CVPR, and ICML.",
    image: "/avatars/placeholder.png" // Abstract placeholder
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
           <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
             Mentorship
           </p>
           <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-[1.1] font-instrument-serif tracking-tight">
             Backed by real researchers
           </h2>
           <p className="text-lg text-zinc-600 leading-relaxed tracking-tight">
             Origin Lab is supported by Indiana University's Data Science & AI Lab. You'll work directly with researchers who understand the full pipeline.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {/* Primary Mentor Card */}
           <div className="group border border-zinc-200 bg-white p-6 md:p-8 hover:border-zinc-300 transition-colors">
              <div className="w-16 h-16 bg-zinc-100 mb-6 overflow-hidden relative grayscale">
                 {/* Visual Placeholder if image fails */}
                 <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-serif italic">AH</div>
              </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-1 font-instrument-serif tracking-tight">Aadvait Hirde</h3>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-tight mb-4">Program Director</p>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Junior at Indiana University, National Director of Kappa Theta Pi, Research Assistant on $1.5M NSF grant.
              </p>
           </div>

           {/* Generic Mentor Group Card */}
           <div className="group border border-zinc-200 bg-white p-6 md:p-8 hover:border-zinc-300 transition-colors">
               <div className="w-16 h-16 bg-zinc-100 mb-6 overflow-hidden relative flex items-center justify-center">
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-zinc-400 border-2 border-white" />
                      <div className="w-8 h-8 rounded-full bg-zinc-500 border-2 border-white" />
                   </div>
               </div>
              <h3 className="text-xl font-medium text-zinc-900 mb-1 font-instrument-serif">IU PhD Researchers</h3>
              <p className="text-xs font-medium text-zinc-500 uppercase tracking-tight mb-4">Lead Mentors</p>
              <p className="text-sm text-zinc-600 leading-relaxed tracking-tight">
                3-4 PhD students from the IU Data Science Lab. 1:10 mentor-to-student ratio ensuring personalized guidance.
              </p>
           </div>

           {/* Resources Card */}
           <div className="group border border-zinc-900 bg-zinc-900 p-6 md:p-8 text-white">
              <h3 className="text-xl font-medium mb-1 font-instrument-serif tracking-tight">Resources Provided</h3>
              <div className="mt-6 space-y-4">
                 <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 bg-zinc-500 shrink-0" />
                    <p className="text-sm text-zinc-300 leading-relaxed tracking-tight">Lab compute infrastructure (GPUs for training)</p>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 bg-zinc-500 shrink-0" />
                    <p className="text-sm text-zinc-300 leading-relaxed tracking-tight">Weekly office hours + async Discord support</p>
                 </div>
                 <div className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 bg-zinc-500 shrink-0" />
                    <p className="text-sm text-zinc-300 leading-relaxed tracking-tight">Conference submission fees covered</p>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
