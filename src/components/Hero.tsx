import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCT_IMAGES } from '../assets/images';

interface HeroProps {
  onRequestSample: () => void;
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestSample, onExploreProducts }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 border-b border-stone-200/70">
      <div className="max-w-7xl mx-auto px-6">
        {/* Kicker - Clean unboxed text, no pill badge */}
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800">
          <span>MaaTree Sustainable Products</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <a href="https://maatree.in" className="hover:underline">maatree.in</a>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>100% Plant Biopolymers</span>
          <span aria-hidden="true" className="text-stone-300">/</span>
          <span>Zero Petroleum Plastics</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.08] font-display mb-6"
              style={{ textWrap: 'balance' }}
            >
              Compostable Carry Bags that Work, Look & Feel like Plastic Bags; Made from Plants.
            </h1>

            <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-2xl mb-8 font-body">
              It's a plant-based biopolymer carry bag engineered to give your customers the familiar stretch, smooth hand-feel, and water resilience of conventional plastic shopping bags—without a single gram of petroleum or microplastics.
            </p>

            {/* Actions Block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                onClick={onRequestSample}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>Request Free Retail Sample Kit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors flex items-center justify-center cursor-pointer"
              >
                Explore Biopolymer Catalog
              </button>
            </div>

            {/* Adjacent Trust Proof Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-200/80">
              <div>
                <p className="text-2xl font-bold text-stone-900 font-display tabular-nums">100%</p>
                <p className="text-xs text-stone-500 font-medium">Plant-starch biopolymer</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900 font-display tabular-nums">18 kg</p>
                <p className="text-xs text-stone-500 font-medium">Tested tensile rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-stone-900 font-display tabular-nums">0%</p>
                <p className="text-xs text-stone-500 font-medium">Microplastic residue</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-emerald-800 font-display">CIPET / BIS</p>
                <p className="text-xs text-stone-500 font-medium">IS/ISO 17088 Certified</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-200/90 shadow-md bg-stone-100 group">
              <img
                src={PRODUCT_IMAGES.heroCarryBags}
                alt="MaaTree compostable carry bags with die-cut and vest handles"
                className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[5/4] transform group-hover:scale-[1.02] transition-transform duration-500"
                loading="eager"
                referrerPolicy="no-referrer"
              />

              {/* Informative Floating Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-stone-200/90 shadow-sm text-stone-800 text-xs flex items-center justify-between">
                <div>
                  <p className="font-semibold text-stone-900 font-display">MaaTree Compostable Carry Bags</p>
                  <p className="text-stone-500 text-[11px]">Corn & Cassava Starch Biopolymer · Die-Cut & Vest Handles</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-mono text-emerald-800 font-semibold text-[11px] bg-emerald-50 px-2 py-0.5 rounded">
                    MOQ: 10 kg
                  </span>
                </div>
              </div>
            </div>

            {/* Note beneath */}
            <div className="mt-3 flex items-center justify-between text-xs text-stone-500 px-1">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                No paper content · 100% Flexible Biopolymer
              </span>
              <span>Food contact safe (IS 9845 · FSSAI)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
