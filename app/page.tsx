import { Navbar } from '@/components/landing/navbar';
import { Hero } from '@/components/landing/hero';
import { Intro } from '@/components/landing/intro';
import { HowItWorks } from '@/components/landing/how-it-works';
import { ResearchDomains } from '@/components/landing/research-domains';
import { Team } from '@/components/landing/team';
import { ProgramDetails } from '@/components/landing/program-details';
import { Outcomes } from '@/components/landing/outcomes';
import { Pricing } from '@/components/landing/pricing';
import { ApplicationProcess } from '@/components/landing/application-process';
import { FAQ } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';
import { AssetsShowcase } from '@/components/landing/assets-showcase';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* SECTION 1: HERO */}
      <Hero />
      
      {/* SECTION 2: WHAT IS THIS? (Context-setting) */}
      <Intro />
      
      {/* SECTION 3: HOW IT WORKS (The Process) */}
      <HowItWorks />
      
      {/* SECTION 4: RESEARCH DOMAINS (What you can work on) */}
      <ResearchDomains />
      
      {/* SECTION 5: WHO YOU'LL WORK WITH (Credibility) */}
      <Team />
      
      {/* SECTION 6: ASSETS (What you get) */}
      <AssetsShowcase />

      {/* SECTION 7: PROGRAM DETAILS (Logistics) */}
      <ProgramDetails />
      
      {/* SECTION 8: OUTCOMES (What you get) */}
      <Outcomes />
      
      {/* SECTION 9: PRICING (Clear, upfront) */}
      <Pricing />
      
      {/* SECTION 10: APPLICATION PROCESS (How to join) */}
      <ApplicationProcess />
      
      {/* SECTION 11: FAQ (Address objections) */}
      <FAQ />
      
      <Footer />
    </main>
  );
}