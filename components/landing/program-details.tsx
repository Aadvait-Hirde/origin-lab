"use client";

const details = [
  { label: "Timeline", value: "June 1 - Aug 31", sub: "Early action due March 1" },
  { label: "Commitment", value: "15 hours/week", sub: "Live: Mon, Wed, Fri 11 AM EST" },
  { label: "Cohort", value: "60 Students", sub: "~10% acceptance" },
  { label: "Format", value: "Fully Remote", sub: "Solo, Pair, Teams of 4 or 6" }
];

export function ProgramDetails() {
  return (
    <section id="program-details" className="bg-zinc-900 border-y border-zinc-800">
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
