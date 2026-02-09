'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ListIcon, XIcon } from '@phosphor-icons/react';

const navLinks = [
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#research', label: 'Research Areas' },
  { href: '#program-details', label: 'Program' },
  { href: '#pricing', label: 'Tuition' },
  { href: '#faq', label: 'FAQ' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled((prev) => {
        const next = window.scrollY > 10;
        return prev === next ? prev : next;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleSmoothScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith('#')) return;

      e.preventDefault();
      const targetId = href.slice(1);
      const targetElement = document.getElementById(targetId);

      if (!targetElement) return;

      const header = document.querySelector('header');
      const navbarHeight = header?.offsetHeight ?? 80;

      const targetPosition =
        targetElement.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    },
    []
  );

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-5 px-6 lg:px-8">
        <nav className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between relative">
            {/* Logo */}
            <div className="flex-1 flex justify-start">
              <Link href="/" className="shrink-0 flex items-center gap-3">
                <Image
                  src="/logos/ol-w-d.png"
                  alt="Origin Lab"
                  width={200}
                  height={56}
                  className="h-8 w-auto"
                  priority
                  unoptimized
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className={cn(
                  'hidden md:flex items-center gap-6 px-4 py-2.5 transition-all duration-300 rounded-none',
                  isScrolled
                    ? 'bg-white/40 backdrop-blur-md border border-gray-200/50 shadow-sm'
                    : 'bg-white/40 backdrop-blur-md border border-gray-200/50'
                )}
              >
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm font-medium text-foreground/70 tracking-tight hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button & Apply Button */}
            <div className="flex-1 flex justify-end items-center gap-4">
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className="md:hidden p-2 text-foreground"
              >
                {isMobileMenuOpen ? (
                  <XIcon className="size-6" />
                ) : (
                  <ListIcon className="size-6" />
                )}
              </button>
              
              <div className="hidden md:block">
                 <Button 
                    onClick={() => window.open("https://airtable.com/applefttOQAtaZ7wa/paggfdS3QhArLUQxt/form", "_blank")} 
                    size="default" 
                    className={cn(
                      "rounded-none h-10 px-4 text-sm bg-white/40 backdrop-blur-md border border-gray-200/50 text-foreground/70 hover:text-foreground hover:bg-white/60 transition-all tracking-tight",
                      isScrolled && "shadow-sm"
                    )}
                  >
                    Apply Now
                  </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div
              id="mobile-menu"
              className="md:hidden mt-4 bg-white/90 backdrop-blur-md border border-white/50 p-4 shadow-xl"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="border-t border-border pt-3 mt-2">
                  <Button
                    className="w-full"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.open("https://airtable.com/applefttOQAtaZ7wa/paggfdS3QhArLUQxt/form", "_blank");
                    }}
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  );
}
