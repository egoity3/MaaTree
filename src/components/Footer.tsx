import React from 'react';
import { MaaTreeLogo } from './MaaTreeLogo';

interface FooterProps {
  onRequestSample: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestSample }) => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800 text-xs">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a 
              href="https://maatree.in" 
              className="text-2xl font-bold tracking-tight text-white font-display flex items-center gap-2.5"
            >
              <MaaTreeLogo className="w-9 h-9 text-emerald-400 shrink-0" />
              <span>MaaTree</span>
            </a>
            <p className="text-stone-300 font-medium text-xs">
              MaaTree Sustainable Products · <a href="https://maatree.in" className="text-emerald-400 hover:underline">maatree.in</a>
            </p>
            <p className="text-stone-400 text-xs leading-relaxed max-w-sm">
              Dedicated exclusively to flexible plant biopolymers. We manufacture certified compostable carry bags and circular films that replace conventional single-use plastic without any paper or microplastics.
            </p>
            <div className="text-[11px] text-stone-500 space-y-1">
              <div>Manufacturing: Biopolymer Film Extrusion Plant</div>
              <div>Official Website: <a href="https://maatree.in" className="text-stone-400 hover:text-white underline">maatree.in</a></div>
              <div>Inquiries: <a href="mailto:maatree.products@gmail.com" className="text-stone-400 hover:text-white">maatree.products@gmail.com</a></div>
            </div>
          </div>

          {/* Col 2: Products */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Biopolymer Catalog
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#flagship" className="hover:text-stone-200 transition-colors">
                  Standard Carry Bags (250g–18kg)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-stone-200 transition-colors">
                  Garbage Bags (Q3 2027)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-stone-200 transition-colors">
                  Agricultural Mulching Film (Q3 2027)
                </a>
              </li>
              <li>
                <a href="#catalog" className="hover:text-stone-200 transition-colors">
                  Shipping Mailer (Q4 2027)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Testing & Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              Lab & Standards
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <a href="#certifications" className="hover:text-stone-200 transition-colors">
                  CIPET Testing Authority
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-stone-200 transition-colors">
                  IS/ISO 17088:2021 Compostable
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-stone-200 transition-colors">
                  IS 17899 T:2022 Biodegradability
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-stone-200 transition-colors">
                  IS 9845 Food Contact Safe
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-stone-200 transition-colors">
                  Plastic Diversion Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Retailers */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-200">
              For Retailers
            </h4>
            <ul className="space-y-2 text-stone-400">
              <li>
                <button 
                  onClick={onRequestSample}
                  className="hover:text-stone-200 transition-colors text-left cursor-pointer"
                >
                  Request Sample Swatches
                </button>
              </li>
              <li>
                <button 
                  onClick={onRequestSample}
                  className="hover:text-stone-200 transition-colors text-left cursor-pointer"
                >
                  Custom Soy Ink Branding
                </button>
              </li>
              <li>
                <a href="#updates" className="hover:text-stone-200 transition-colors">
                  Biopolymer Product Roadmap
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-stone-200 transition-colors">
                  Storefront Eco Badge
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <div>
            © {new Date().getFullYear()} MaaTree Sustainable Products Inc. (<a href="https://maatree.in" className="hover:underline">maatree.in</a>). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>100% Plant Biopolymers</span>
            <span aria-hidden="true">·</span>
            <span>Zero Paper Products</span>
            <span aria-hidden="true">·</span>
            <span>Zero Synthetic Microplastics</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
