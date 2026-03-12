"use client";

import Image from "next/image";

const team = [
  {
    name: "Yang Gao",
    role: "PhD Mentor",
    bio: "Yang is a PhD student with cybersecurity research published in ACM DTRAP, IEEE S&P HMISA, and HICSS.",
    image: "/assets/yang.png",
    hasImage: true
  },
    {
    name: "Aadvait Hirde",
    role: "Program Director",
    bio: "Aadvait is a Research Assistant on the NSF SAFE-OSE project and has published multiple AI/ML papers in IEEE.",
    image: "/assets/aadvait.png",
    hasImage: true
  },
  {
    name: "Chengjun (Raina) Zhang",
    role: "PhD Mentor",
    bio: "Raina is a PhD student at IU researching ML and NLP methods for cybersecurity, with work on diachronic embeddings, LLMs, and more.",
    image: "/assets/raina.png",
    hasImage: true
  },
  {
    name: "[PROFESSOR 3]",
    role: "[SPECIALIZATION]",
    bio: "[BIO]",
    image: "",
    hasImage: false
  },
    {
    name: "[PROFESSOR 4]",
    role: "[SPECIALIZATION]",
    bio: "[BIO]",
    image: "",
    hasImage: false
  },
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
             Origin Lab is supported by domain experts. You'll work directly with researchers who understand the full pipeline.
           </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
           {team.map((member, i) => (
             <div 
               key={i} 
               className="group border border-zinc-200 bg-white p-6 md:p-8 hover:border-zinc-300 transition-colors w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] flex flex-col"
             >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 shrink-0 bg-zinc-100 overflow-hidden relative flex items-center justify-center">
                     {member.hasImage ? (
                          <Image 
                              src={member.image} 
                              alt={member.name}
                              width={2400} 
                              height={2400}
                              className="w-full h-full object-cover" 
                          />
                     ) : (
                          <div className="w-full h-full bg-zinc-200" />
                     )}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-zinc-900 mb-1 font-instrument-serif tracking-tight">{member.name}</h3>
                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-tight">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed tracking-tight text-justify md:text-left break-words">
                  {member.bio}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
