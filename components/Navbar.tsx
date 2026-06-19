'use client';

import { useState, useEffect } from 'react';
import { Utensils, Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Menu' },
    { href: '#feature', label: 'Our Story' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#contact', label: 'Visit Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-brand-primary shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-brand-accent flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Utensils className="w-5 h-5 text-brand-primary" strokeWidth={2} />
            </div>
            <span className="font-heading text-xl font-700 text-white tracking-wide leading-tight">
              Copper Skillet Kitchen
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-brand-accent font-body font-500 text-sm tracking-wide transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:5558891322"
              className="flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white text-sm font-600 px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              <Phone className="w-4 h-4" strokeWidth={2} />
              <span>Call Us</span>
            </a>
          </nav>

          <button
            className="md:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white/80 hover:text-brand-accent font-body font-500 text-base py-3 px-2 rounded-md hover:bg-white/5 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:5558891322"
                className="flex items-center gap-2 bg-brand-accent hover:bg-brand-secondary text-white text-sm font-600 px-5 py-3 rounded-full transition-all duration-300 mt-3 w-fit"
              >
                <Phone className="w-4 h-4" strokeWidth={2} />
                <span>Call Us</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
