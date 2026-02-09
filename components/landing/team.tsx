"use client";

import Image from "next/image";

const team = [
  {
    name: "[PROFESSOR 1]",
    role: "[SPECIALIZATION]",
    bio: "[BIO]",
    image: "",
    hasImage: false
  },
  {
    name: "[PROFESSOR 2]",
    role: "[SPECIALIZATION]",
    bio: "[BIO]",
    image: "",
    hasImage: false
  },
    {
    name: "Aadvait Hirde",
    role: "Program Director",
    bio: "Junior at IU, National Director of Kappa Theta Pi, Research Assistant on $1.5M NSF grant.",
    image: "/assets/aadvait.png",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1">
           {team.map((member, i) => (
             <div key={i} className="group border border-zinc-200 bg-white p-6 md:p-8 hover:border-zinc-300 transition-colors">
                <div className="w-16 h-16 bg-zinc-100 mb-6 overflow-hidden relative flex items-center justify-center">
                   {member.hasImage ? (
                        <Image 
                            src={member.image} 
                            alt={member.name}
                            width={2400} 
                            height={2400}
                            className="w-full h-full object-cover scale-[1.2]" 
                        />
                   ) : (
                        <div className="w-full h-full bg-zinc-200" />
                   )}
                </div>
                <h3 className="text-xl font-medium text-zinc-900 mb-1 font-instrument-serif tracking-tight">{member.name}</h3>
                <p className="text-xs font-medium text-zinc-500 uppercase tracking-tight mb-4">{member.role}</p>
                <p className="text-sm text-zinc-600 leading-relaxed tracking-tight">
                  {member.bio}
                </p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}
