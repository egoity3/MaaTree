import React, { useState } from 'react';
import { ShieldCheck, Check, X, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'standards'>('comparison');

  return (
    <section id="certifications" className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Rigorous Science</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>No Greenwashing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display mb-3">
            Laboratory Certifications & Circular Rigor
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            Not all "eco" bags are truly sustainable. We rigorously test our biopolymers to guarantee zero persistent microplastics, zero chemical leaching, and certified backyard compostability.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-[#FAF9F5] rounded-xl border border-stone-200 w-fit mb-8">
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Material Comparison: True Compostable vs Oxo-Plastic
          </button>
          <button
            onClick={() => setActiveTab('standards')}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
              activeTab === 'standards'
                ? 'bg-white text-stone-900 shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Official Testing Standards & Protocols
          </button>
        </div>

        {activeTab === 'comparison' ? (
          /* Side-by-Side Comparison Table */
          <div className="rounded-2xl border border-stone-200 overflow-hidden shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 text-xs">
              {/* Feature Header */}
              <div className="p-4 bg-stone-100/70 font-semibold text-stone-700 hidden md:block">
                Environmental & Physical Criteria
              </div>
              <div className="p-4 bg-emerald-900 text-white font-bold flex items-center justify-between">
                <span>MaaTree Certified Biopolymer Bags</span>
                <span className="font-mono text-[11px] bg-emerald-800 px-2 py-0.5 rounded text-emerald-200">
                  Certified Safe
                </span>
              </div>
              <div className="p-4 bg-stone-200 text-stone-800 font-bold flex items-center justify-between">
                <span>"Oxo-Biodegradable" / Greenwashed Bags</span>
                <span className="font-mono text-[11px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
                  Banned under PWM Rules
                </span>
              </div>

              {/* Row 1: Base Feedstock */}
              <div className="p-4 border-t border-stone-200 font-medium text-stone-700 bg-stone-50/50">
                Primary Raw Material
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-900 flex items-start gap-2 bg-emerald-50/20">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Non-GMO cornstarch & upcycled cassava root starches + PBAT</span>
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-700 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>100% fossil petroleum polyethylene (PE) mixed with chemical breakdown salts</span>
              </div>

              {/* Row 2: Microplastics */}
              <div className="p-4 border-t border-stone-200 font-medium text-stone-700 bg-stone-50/50">
                Microplastic Shedding
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-900 flex items-start gap-2 bg-emerald-50/20">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>0% microplastics</strong>. Fully metabolized by natural soil bacteria and fungi</span>
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-700 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Shatters into trillions of microscopic synthetic plastic fragments that poison soil & oceans</span>
              </div>

              {/* Row 3: Decomposition Environment */}
              <div className="p-4 border-t border-stone-200 font-medium text-stone-700 bg-stone-50/50">
                Composting Requirements
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-900 flex items-start gap-2 bg-emerald-50/20">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Home garden compost bin (20°C–30°C) or municipal commercial compost</span>
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-700 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Cannot be composted. Contaminates standard plastic recycling streams</span>
              </div>

              {/* Row 4: End Result */}
              <div className="p-4 border-t border-stone-200 font-medium text-stone-700 bg-stone-50/50">
                Degradation Byproducts
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-900 flex items-start gap-2 bg-emerald-50/20">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>Rich natural humus, water, and biogenic CO2 suitable for organic agriculture</span>
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-700 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Toxic heavy metal additives and lingering synthetic petrochemical dust</span>
              </div>

              {/* Row 5: Food Safety */}
              <div className="p-4 border-t border-stone-200 font-medium text-stone-700 bg-stone-50/50">
                Direct Food Contact
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-900 flex items-start gap-2 bg-emerald-50/20">
                <Check className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span>IS 9845 overall migration compliant (FSSAI safe) for warm takeout, bread, and raw produce</span>
              </div>
              <div className="p-4 border-t border-stone-200 text-stone-700 flex items-start gap-2">
                <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Prohibited for organic certified grocers and sensitive produce</span>
              </div>
            </div>
          </div>
        ) : (
          /* Indian Standards & Authority Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
              <div className="font-mono text-xs font-bold text-emerald-800 mb-1">CIPET</div>
              <h4 className="text-base font-bold text-stone-900 font-display mb-2">
                Certifying Authority (Govt. of India)
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Tested and certified by the Central Institute of Petrochemicals Engineering &amp; Technology (CIPET) under the Ministry of Chemicals &amp; Fertilizers for complete biodegradation and zero ecotoxicity.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
              <div className="font-mono text-xs font-bold text-emerald-800 mb-1">IS/ISO 17088:2021</div>
              <h4 className="text-base font-bold text-stone-900 font-display mb-2">
                Indian Compostable Standard
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Mandatory BIS specification under India&apos;s Plastic Waste Management (PWM) Rules verifying &gt;90% organic biodegradation within 180 days, full disintegration, and safe seedling germination.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
              <div className="font-mono text-xs font-bold text-emerald-800 mb-1">IS 17899 T:2022</div>
              <h4 className="text-base font-bold text-stone-900 font-display mb-2">
                Biodegradability Assessment
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bureau of Indian Standards (BIS) test protocol assessing biological breakdown across soil and ambient environments with strict heavy-metal and microplastic-free thresholds.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50/50">
              <div className="font-mono text-xs font-bold text-emerald-800 mb-1">IS 9845</div>
              <h4 className="text-base font-bold text-stone-900 font-display mb-2">
                Food Contact Migration Safety
              </h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Indian Standard verifying overall migration limits across aqueous, acidic, and fatty food simulants for FSSAI-compliant direct contact with groceries and warm food.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
