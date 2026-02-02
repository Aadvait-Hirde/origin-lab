"use client";

import Image from "next/image";

export function Intro() {
  return (
    <section id="intro" className="py-24 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div>
               <p className="text-sm font-medium text-zinc-400 mb-6 uppercase tracking-tight">
                 Real outcomes
               </p>
               <h2 className="text-4xl lg:text-5xl font-light text-white mb-6 leading-[1.1] font-instrument-serif tracking-tighter">
                 Here&apos;s what we do.
               </h2>
               <div className="space-y-6 text-lg text-zinc-400 leading-relaxed font-light tracking-tight">
                  <p>
                    Most high school students never get to do real research. Traditional programs are either prohibitively expensive ($5,000+), extremely selective (2-5% acceptance), or focused on teaching instead of doing.
                  </p>
                  <p>
                    Origin Lab is different. Over 12 weeks this summer, you&apos;ll work in a small team to design and execute an AI/ML research project in a field <span className="text-white font-medium">YOU</span> care about. By the end, you&apos;ll have a completed paper submitted to peer-reviewed conferences.
                  </p>
               </div>
            </div>

            {/* Right Visual - Abstract representation of research process */}
            <div className="relative aspect-square lg:aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                
                {/* Visual elements representing collaboration/research */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                   <div className="w-full h-full relative">
                      <div className="absolute top-0 left-0 w-2/3 h-2/3 border border-zinc-300 bg-white shadow-sm p-6 flex flex-col justify-between">
                         <div className="h-2 w-1/3 bg-zinc-200" />
                         <div className="space-y-2">
                            <div className="h-2 w-full bg-zinc-100" />
                            <div className="h-2 w-full bg-zinc-100" />
                            <div className="h-2 w-2/3 bg-zinc-100" />
                         </div>
                      </div>
                      <div className="absolute bottom-0 right-0 w-2/3 h-2/3 border border-zinc-900 bg-zinc-900 shadow-xl p-6 flex flex-col justify-between z-10">
                         <div className="h-2 w-1/3 bg-zinc-700" />
                         <div className="space-y-2">
                             <div className="h-2 w-full bg-zinc-800" />
                             <div className="h-2 w-full bg-zinc-800" />
                             <div className="h-2 w-2/3 bg-zinc-800" />
                         </div>
                         <div className="text-right">
                             <div className="inline-block px-2 py-1 bg-zinc-800 text-zinc-400 text-[10px] font-mono border border-zinc-700">Submitted</div>
                         </div>
                      </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
