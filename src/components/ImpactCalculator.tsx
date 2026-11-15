import React, { useState } from 'react';
import { Calculator, Trees, Droplets, Trash2, Award, Download, Check } from 'lucide-react';

interface ImpactCalculatorProps {
  onRequestSample: () => void;
}

export const ImpactCalculator: React.FC<ImpactCalculatorProps> = ({ onRequestSample }) => {
  const [monthlyBags, setMonthlyBags] = useState<number>(3000);
  const [copiedBadge, setCopiedBadge] = useState<boolean>(false);

  // Math conversions
  const annualBags = monthlyBags * 12;
  // Avg conventional plastic bag = 8.5 grams virgin fossil HDPE
  const plasticDivertedKg = Math.round((annualBags * 0.0085));
  // 1 plastic bag requires ~0.018 liters crude petroleum
  const crudeOilSavedLiters = Math.round((annualBags * 0.018));
  // CO2e reduction ~0.021 kg CO2e per bag avoided
  const co2ReducedKg = Math.round((annualBags * 0.021));
  // Equivalent plastic bottles diverted (1 plastic bottle ~ 12g PET)
  const plasticBottlesEquiv = Math.round((plasticDivertedKg * 1000) / 12);

  const handleCopyBadge = () => {
    setCopiedBadge(true);
    setTimeout(() => setCopiedBadge(false), 2500);
  };

  return (
    <section id="calculator" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>Environmental Ledger</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Real-Time Carbon & Waste Math</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display mb-4">
            Calculate your store’s annual plastic diversion.
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            See the direct, measurable environmental reduction when your retail store, cafe, or boutique switches from conventional petroleum plastic to certified compostable carry bags.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Slider & Input Controls */}
          <div className="lg:col-span-5 bg-white p-6 md:p-8 rounded-2xl border border-stone-200 shadow-xs space-y-6">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <label className="text-sm font-semibold text-stone-900 font-display">
                  Monthly Bag Consumption
                </label>
                <span className="text-2xl font-bold text-emerald-900 font-display tabular-nums">
                  {monthlyBags.toLocaleString()} <span className="text-xs font-normal text-stone-500">bags/mo</span>
                </span>
              </div>
              <p className="text-xs text-stone-500 mb-4">
                Drag the slider or choose a preset to match your store’s transaction volume.
              </p>

              <input
                type="range"
                min="500"
                max="30000"
                step="500"
                value={monthlyBags}
                onChange={(e) => setMonthlyBags(Number(e.target.value))}
                className="w-full accent-emerald-900 cursor-pointer h-2 bg-stone-100 rounded-lg"
                aria-label="Monthly bag usage slider"
              />

              <div className="flex justify-between text-xs text-stone-400 font-mono mt-1.5">
                <span>500/mo</span>
                <span>10,000/mo</span>
                <span>20,000/mo</span>
                <span>30,000+/mo</span>
              </div>
            </div>

            {/* Quick Presets */}
            <div>
              <span className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                Typical Store Presets
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button
                  onClick={() => setMonthlyBags(1000)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    monthlyBags === 1000
                      ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  Artisan Boutique
                  <span className="block text-[11px] font-mono text-stone-500">1,000 / mo</span>
                </button>
                <button
                  onClick={() => setMonthlyBags(4000)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    monthlyBags === 4000
                      ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  Busy Cafe / Retail
                  <span className="block text-[11px] font-mono text-stone-500">4,000 / mo</span>
                </button>
                <button
                  onClick={() => setMonthlyBags(15000)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    monthlyBags === 15000
                      ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-semibold'
                      : 'border-stone-200 bg-stone-50 text-stone-700 hover:bg-stone-100'
                  }`}
                >
                  Organic Grocer
                  <span className="block text-[11px] font-mono text-stone-500">15,000 / mo</span>
                </button>
              </div>
            </div>

            {/* Methodology Note */}
            <div className="pt-4 border-t border-stone-100 text-[11px] text-stone-500 leading-relaxed">
              Calculations based on life-cycle analysis comparing standard single-use petroleum HDPE carrier bags against 100% bio-based compostable bags tested by CIPET to IS/ISO 17088:2021.
            </div>
          </div>

          {/* Results Grid & Customer Proof Badge */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Metric 1: Plastic Diverted */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Trash2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Virgin Plastic Diverted
                  </span>
                </div>
                <p className="text-3xl font-bold text-stone-900 font-display tabular-nums">
                  {plasticDivertedKg.toLocaleString()} <span className="text-base font-normal text-stone-600">kg/year</span>
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Eliminates approximately <strong className="text-stone-800 font-semibold tabular-nums">{plasticBottlesEquiv.toLocaleString()}</strong> plastic bottle equivalents from oceans.
                </p>
              </div>

              {/* Metric 2: CO2 Reduction */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Trees className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Carbon Footprint Cut
                  </span>
                </div>
                <p className="text-3xl font-bold text-stone-900 font-display tabular-nums">
                  {co2ReducedKg.toLocaleString()} <span className="text-base font-normal text-stone-600">kg CO₂e</span>
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Equivalent to planting <strong className="text-stone-800 font-semibold tabular-nums">{Math.round(co2ReducedKg / 22)}</strong> mature urban trees every 12 months.
                </p>
              </div>

              {/* Metric 3: Crude Petroleum Conserved */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Fossil Crude Oil Conserved
                  </span>
                </div>
                <p className="text-3xl font-bold text-stone-900 font-display tabular-nums">
                  {crudeOilSavedLiters.toLocaleString()} <span className="text-base font-normal text-stone-600">Liters</span>
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Keeps <strong className="text-stone-800 font-semibold tabular-nums">{Math.round(crudeOilSavedLiters / 159)}</strong> crude oil barrels underground annually.
                </p>
              </div>

              {/* Metric 4: Landfill Lifespan vs Compost */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-800">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    Breakdown Lifecycle
                  </span>
                </div>
                <p className="text-3xl font-bold text-emerald-900 font-display tabular-nums">
                  180 Days
                </p>
                <p className="text-xs text-stone-500 mt-1">
                  Replaces persistent plastic that remains toxic in landfills for <strong className="text-stone-800 font-semibold">500+ years</strong>.
                </p>
              </div>
            </div>

            {/* Store Countertop Sustainability Certificate Preview */}
            <div className="p-5 rounded-2xl bg-stone-900 text-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                  Ready-To-Print Countertop Seal
                </p>
                <p className="text-sm font-medium text-stone-200 mt-0.5">
                  Display your store’s commitment: "We proudly package with 100% Home Compostable Carry Bags."
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleCopyBadge}
                  className="px-4 py-2 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedBadge ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                      Seal Badge Copied!
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      Download Store Badge
                    </>
                  )}
                </button>
                <button
                  onClick={onRequestSample}
                  className="px-4 py-2 text-xs font-semibold text-white bg-emerald-800 hover:bg-emerald-700 rounded-lg transition-colors cursor-pointer"
                >
                  Request Sample Batch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
