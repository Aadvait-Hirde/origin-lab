"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I don't know ML yet. Can I apply?",
    answer: "You need basic Python proficiency and familiarity with ML concepts. We are not teaching introductory programming. If you can write a script to process data, you're likely ready.",
  },
  {
    question: "Do I need to be in the US?",
    answer: "No. The program is fully remote and international students are welcome.",
  },
  {
    question: "Will this help me get into college?",
    answer: "Published research is one of the strongest signals for competitive universities. However, our goal is to teach you real research skills; the college application benefit is a secondary outcome.",
  },
  {
    question: "What if my paper doesn't get accepted?",
    answer: "Target acceptance rate is 35-50%, which is typical for the conferences we submit to. Even if rejected, you will have a completed research paper for your portfolio and the experience of going through the peer review process.",
  },
  {
    question: "How much time per week?",
    answer: "10-15 hours. This is an intensive program. If you cannot commit to this workload, please do not apply.",
  },
  {
    question: "Can I propose my own project?",
    answer: "Yes, provided it is feasible within the 12-week timeframe and applies AI/ML in a meaningful way.",
  }
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white border-t border-zinc-200">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="mb-16">
          <p className="text-sm font-medium text-zinc-500 mb-6 uppercase tracking-tight">
            FAQ
          </p>
          <h2 className="text-4xl lg:text-5xl font-light text-zinc-900 mb-6 leading-tight font-instrument-serif tracking-tight max-w-2xl">
            Everything you need to know
          </h2>
        </div>

        <div className="mx-auto max-w-4xl">
           <Accordion type="single" collapsible className="w-full">
             {faqs.map((item, i) => (
               <AccordionItem key={i} value={`item-${i}`} className="border-b border-zinc-200">
                 <AccordionTrigger className="text-left text-lg font-light py-6 hover:no-underline hover:text-zinc-600 transition-colors tracking-tight">
                   {item.question}
                 </AccordionTrigger>
                 <AccordionContent className="text-zinc-500 leading-relaxed pb-6 text-base tracking-tight">
                   {item.answer}
                 </AccordionContent>
               </AccordionItem>
             ))}
           </Accordion>
        </div>

      </div>
    </section>
  );
}
