"use client";

import Link from "next/link";
import Image from "next/image";
import { TwitterLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";

const navigation = {
  main: [
    { name: "Program", href: "#program-details" },
    { name: "Curriculum", href: "#curriculum" },
    { name: "Research", href: "#research" },
    { name: "Tuition", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ],
  social: [
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => <TwitterLogo weight="fill" {...props} />,
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (props: any) => <LinkedinLogo weight="fill" {...props} />,
    },
    {
      name: "Email",
      href: "mailto:hello@originlab.org",
      icon: (props: any) => <EnvelopeSimple weight="fill" {...props} />,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
             <Link href="/" className="block">
                <span className="sr-only">Origin Lab</span>
                <Image
                  src="/logos/ol-w-d.png"
                  alt="Origin Lab"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                  unoptimized
                />
             </Link>
            <p className="text-sm leading-6 text-zinc-600 max-w-xs">
              Empowering the next generation of researchers to solve the world&apos;s most pressing problems.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="text-zinc-400 hover:text-zinc-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-zinc-900">Program</h3>
                <ul role="list" className="mt-6 space-y-4">
                   {navigation.main.slice(0, 3).map((item) => (
                      <li key={item.name}>
                         <a href={item.href} className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">
                            {item.name}
                         </a>
                      </li>
                   ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-zinc-900">Admissions</h3>
                <ul role="list" className="mt-6 space-y-4">
                   {navigation.main.slice(3).map((item) => (
                      <li key={item.name}>
                         <a href={item.href} className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">
                            {item.name}
                         </a>
                      </li>
                   ))}
                   <li>
                      <a href="#" className="text-sm leading-6 text-zinc-600 hover:text-zinc-900">
                         Apply Now
                      </a>
                   </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
               {/* Extra column if needed */}
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-zinc-900/10 pt-8 sm:mt-20 lg:mt-24">
           {/* Big Wordmark Background Effect - Optional, from inspiration */}
           <div className="relative w-full overflow-hidden h-32 md:h-64 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
              <span className="text-[12vw] font-sans font-bold text-black leading-none tracking-tighter whitespace-nowrap">
                 ORIGIN LAB_
              </span>
           </div>
           
           <p className="text-xs leading-5 text-zinc-500 text-center mt-8">
            &copy; 2026 Origin Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
