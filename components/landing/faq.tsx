"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "I don't know ML yet. Can I still apply?",
    answer: "We recommend having a foundational understanding of Python and some familiarity with machine learning concepts. While we don't teach introductory programming, our mentors are here to guide you through the complexities of research and advanced modeling.",
  },
  {
    question: "Do I need to be located in the US to participate?",
    answer: "Not at all! Origin Lab is a fully remote, global program. We welcome ambitious students from all over the world to join our community of researchers.",
  },
  {
    question: "Will this program help with my college applications?",
    answer: "Absolutely. Publishing independent research is a powerful way to demonstrate intellectual curiosity and rigorous academic capability to admissions officers. Beyond the application, you'll gain critical thinking skills that will serve you throughout your academic career.",
  },
  {
    question: "What happens if my paper doesn't get accepted?",
    answer: "Rejection is a natural part of the scientific process! We target competitive conferences with a 35-50% acceptance rate. Regardless of the outcome, you will walk away with a complete, high-quality research paper for your portfolio and the invaluable experience of navigating the peer review system.",
  },
  {
    question: "What is the weekly time commitment?",
    answer: "We suggest budgeting about 15 hours per week to get the most out of the program. This immersive experience is designed to be rigorous, but our mentors and community are here to support you every step of the way.",
  },
  {
    question: "Can I bring my own research project?",
    answer: "We love student initiative! You are more than welcome to propose your own research questions, provided they are feasible within the 12-week timeline and effectively utilize AI/ML methodologies.",
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
