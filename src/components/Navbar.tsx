import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MaaTreeLogo } from './MaaTreeLogo';

interface NavbarProps {
  onRequestSample: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestSample }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark with Flat-Line Logo */}
        <a 
          href="#" 
          className="text-2xl font-bold tracking-tight text-stone-900 hover:text-emerald-900 transition-colors whitespace-nowrap shrink-0 font-display flex items-center gap-2.5"
        >
          <MaaTreeLogo className="w-9 h-9 text-emerald-800 shrink-0" />
          <span>MaaTree</span>
        </a>

        {/* Zone 2: 4-5 Navigation Links (Clean single-line prose) */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
          <a href="#flagship" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Compostable Bags
          </a>
          <a href="#catalog" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Biopolymer Catalog
          </a>
          <a href="#calculator" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Impact Calculator
          </a>
          <a href="#certifications" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Lab Standards
          </a>
          <a href="#updates" className="hover:text-stone-950 transition-colors whitespace-nowrap shrink-0">
            Roadmap & Updates
          </a>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <button
            onClick={onRequestSample}
            className="px-5 py-2.5 text-xs font-semibold tracking-wide text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-all duration-200 shadow-sm hover:shadow flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Request Free Sample Kit
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-950 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-[#FAF9F5] px-6 py-5 space-y-4">
          <nav className="flex flex-col gap-3 text-base font-medium text-stone-700">
            <a 
              href="#flagship" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-900 transition-colors"
            >
              Compostable Bags
            </a>
            <a 
              href="#catalog" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-900 transition-colors"
            >
              Biopolymer Catalog
            </a>
            <a 
              href="#calculator" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-900 transition-colors"
            >
              Impact Calculator
            </a>
            <a 
              href="#certifications" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-900 transition-colors"
            >
              Lab Standards
            </a>
            <a 
              href="#updates" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-emerald-900 transition-colors"
            >
              Roadmap & Updates
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestSample();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Request Free Sample Kit
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
