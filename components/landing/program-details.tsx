"use client";

const details = [
  { label: "Timeline", value: "June 1 - Aug 30", sub: "Apps due May 1" },
  { label: "Commitment", value: "10-15 hrs/week", sub: "Live: Sun 2-4pm ET" },
  { label: "Cohort", value: "40-50 Students", sub: "~10% acceptance" },
  { label: "Format", value: "Fully Remote", sub: "Teams of 3-4" }
];

export function ProgramDetails() {
  return (
    <section id="details" className="bg-zinc-900 border-y border-zinc-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4 lg:gap-y-16 py-12 md:py-16">
          {details.map((stat) => (
            <div key={stat.label} className="flex flex-col border-l border-zinc-800 pl-6">
              <dt className="text-sm font-medium leading-6 text-zinc-500 uppercase tracking-tight mb-2">
                {stat.label}
              </dt>
              <dd className="order-first text-2xl font-light tracking-tight text-white font-instrument-serif">
                {stat.value}
              </dd>
              <dd className="text-xs text-zinc-400 tracking-tight mt-1">
                 {stat.sub}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
