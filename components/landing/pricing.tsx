"use client";

import { CheckIcon } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mb-16 max-w-2xl">
          <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
            Tuition
          </p>
          <h2 className="text-4xl lg:text-5xl font-light font-instrument-serif tracking-tight mb-6 text-zinc-900">
            Invest in your future
          </h2>
          <p className="text-lg text-zinc-600 tracking-tighter leading-relaxed">
             A single program fee covers everything. Need-based financial aid is available.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
            <Card className="flex flex-col md:grid md:grid-cols-2 overflow-hidden rounded-none border-zinc-200 shadow-sm bg-white">
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-zinc-200 bg-zinc-50/50 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-instrument-serif text-zinc-900 mb-2">
                    Summer 2026 Cohort
                  </h3>
                  <p className="text-zinc-500 text-sm mb-8 tracking-tight">
                    June 15 - September 1, 2026
                  </p>

                  <div className="space-y-1 mb-2">
                    <div className="text-5xl font-light tracking-tight text-zinc-900">
                      $1,500
                    </div>
                    <div className="text-sm text-zinc-500 tracking-tight">
                      USD / student
                    </div>
                  </div>
                </div>

                <div className="mt-8 space-y-2 text-xs text-zinc-400">
                   <p>Admissions are rolling. Early application is recommended.</p>
                   <p>Refund Policy: Full refund before June 1.</p>
                </div>
              </div>

              <CardContent className="p-8 md:p-12 flex flex-col justify-between h-full bg-white">
                 <ul className="space-y-4 mb-8">
                    {[
                       "12 Weeks of Guidance",
                       "1:1 Research Mentorship",
                       "Guaranteed Publication Support",
                       "Conference Submission Fees",
                       "University Datasets & Compute"
                    ].map((feature) => (
                       <li key={feature} className="flex gap-3 text-sm text-zinc-600 tracking-tight items-center">
                          <CheckIcon className="w-5 h-5 text-zinc-900 shrink-0" />
                          {feature}
                       </li>
                    ))}
                 </ul>
                 
                 <div className="space-y-3">
                    <Button 
                      size="lg"
                      className="w-full rounded-none h-12 text-base font-medium transition-all hover:scale-[1.02]"
                      onClick={() => {}}
                    >
                      Apply Now
                    </Button>
                    <p className="text-xs text-center text-zinc-500 tracking-tight">
                       Financial aid available ($800 - $1,500 sliding scale).
                    </p>
                 </div>
              </CardContent>
            </Card>
        </div>

      </div>
    </section>
  );
}
