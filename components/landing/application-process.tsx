"use client";

import { Button } from "@/components/ui/button";

export function ApplicationProcess() {
  return (
    <section id="apply" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16 max-w-2xl">
           <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
             Admissions
           </p>
           <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-[1.1] font-instrument-serif tracking-tight">
             Ready to publish?
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
           <div className="bg-white p-8 border border-zinc-200">
              <span className="block text-4xl font-instrument-serif text-zinc-200 mb-4">01</span>
              <h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Submit Application</h3>
              <p className="text-sm text-zinc-500 leading-relaxed tracking-tight">
                 Basic info + short answers about your interests. Takes ~45 mins.
              </p>
           </div>
           
           <div className="bg-white p-8 border border-zinc-200">
              <span className="block text-4xl font-instrument-serif text-zinc-200 mb-4">02</span>
              <h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Interview</h3>
              <p className="text-sm text-zinc-500 leading-relaxed tracking-tight">
                 If selected, a 20-min technical discussion to assess fit and curiosity.
              </p>
           </div>

           <div className="bg-white p-8 border border-zinc-200">
              <span className="block text-4xl font-instrument-serif text-zinc-200 mb-4">03</span>
              <h3 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Acceptance</h3>
              <p className="text-sm text-zinc-500 leading-relaxed tracking-tight">
                 Decisions by May 21. Payment due within 7 days of acceptance.
              </p>
           </div>
        </div>

        <div className="bg-zinc-900 text-white p-8 md:p-12 text-center">
            <h3 className="text-2xl font-light font-instrument-serif mb-4">Early Application Open Until March 1st</h3>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto tracking-tight">
               60 spots. If you're ready to do real research this summer, apply.
            </p>
            <Button 
               size="lg" 
               className="rounded-none px-8 h-12 bg-white text-zinc-900 hover:bg-zinc-100"
               onClick={() => window.open("https://airtable.com/applefttOQAtaZ7wa/paggfdS3QhArLUQxt/form", "_blank")}
            >
               Apply Now
            </Button>
        </div>

      </div>
    </section>
  );
}
