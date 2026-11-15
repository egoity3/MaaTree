import React, { useState } from 'react';
import { BAG_SIZES } from '../data/products';
import { BagSizeOption } from '../types';
import { Leaf } from 'lucide-react';
import { PRODUCT_IMAGES } from '../assets/images';

interface FlagshipProductProps {
  onRequestSample: () => void;
}

export const FlagshipProduct: React.FC<FlagshipProductProps> = ({ onRequestSample }) => {
  const [selectedSize, setSelectedSize] = useState<BagSizeOption>(BAG_SIZES[4]); // Default to 5 kg Standard Carry Bag
  const [handleType, setHandleType] = useState<'diecut' | 'tshirt'>('diecut');
  const [activeView, setActiveView] = useState<'macro' | 'hero'>('macro');
  const [printOption, setPrintOption] = useState<'custom' | 'blank'>('custom');
  const [decompStep, setDecompStep] = useState<number>(180);

  const getTimelineInfo = (days: number) => {
    if (days <= 0) {
      return {
        stage: 'Day 0: Checkout Counter & Customer Carry',
        detail: 'Soft, flexible translucent biopolymer film with identical stretch and puncture resistance to conventional plastic carrier bags. 100% water and humidity proof for groceries, takeout, and retail goods.',
        soilStatus: 'Active biopolymer matrix (Corn & Cassava starches + PBAT)'
      };
    } else if (days <= 30) {
      return {
        stage: 'Day 30: Microbial Digestion Initiates',
        detail: 'When disposed in moist soil or residential home compost, natural soil bacteria and fungi secrete enzymes that sever the biopolymer chains. The biopolymer film embrittles.',
        soilStatus: 'Microscopic biological digestion in progress; zero synthetic toxins'
      };
    } else if (days <= 90) {
      return {
        stage: 'Day 90: Rapid Fragmentation',
        detail: 'Over 92% of the film mass has fragmented into natural organic components within compost beds. Complies with IS/ISO 17088:2021 & IS 17899 T disintegration criteria.',
        soilStatus: 'Macroscopic fragmentation verified to CIPET & IS/ISO 17088 standards'
      };
    } else {
      return {
        stage: 'Day 180: 100% Organic Humus & Nutrients',
        detail: 'The biopolymer film is entirely metabolized into water, biogenic carbon dioxide, and nutrient-dense soil humus. Leaves zero persistent synthetic microplastics in garden soil.',
        soilStatus: '0% microplastics, 0% synthetic residue, 100% circular plant nutrition'
      };
    }
  };

  const currentTimeline = getTimelineInfo(decompStep);

  return (
    <section id="flagship" className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-3">
            <span>First Available Product Category</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>In Active Production</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display mb-4">
            Standard Carry Bags (250 gms – 18 kg)
          </h2>
          <p className="text-stone-600 text-base md:text-lg leading-relaxed">
            Our flagship available range in 8 calibrated weight capacities—250 gms, 500 gms, 1 kg, 2 kg, 5 kg, 9 kg, 14 kg, and 18 kg. Engineered to look, stretch, and feel like traditional plastic shopping bags using 100% plant starches and certified biopolymers.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Visualizer & Decomposition */}
          <div className="lg:col-span-6 space-y-8">
            {/* Visualizer Box */}
            <div className="rounded-2xl border border-stone-200 bg-[#FAF9F5] p-6 lg:p-8 overflow-hidden relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">
                  Product Inspection · {selectedSize.name}
                </span>
                <span className="text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">
                  {selectedSize.thickness}
                </span>
              </div>

              {/* Dynamic Bag Card Presentation */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-stone-200/80 bg-white flex items-center justify-center p-6 shadow-inner">
                <img
                  src={
                    activeView === 'macro'
                      ? PRODUCT_IMAGES.bagMacro
                      : PRODUCT_IMAGES.heroCarryBags
                  }
                  alt="MaaTree compostable carry bag texture and handle close-up"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />

                {/* View Angle Switcher */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-stone-900/80 backdrop-blur-sm p-1 rounded-lg">
                  <button
                    onClick={() => setActiveView('macro')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeView === 'macro'
                        ? 'bg-white text-stone-900'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Macro Film Detail
                  </button>
                  <button
                    onClick={() => setActiveView('hero')}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                      activeView === 'hero'
                        ? 'bg-white text-stone-900'
                        : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    Retail Display
                  </button>
                </div>

                {/* Live Spec Overlay */}
                <div className="absolute inset-x-4 bottom-4 bg-stone-900/90 backdrop-blur-md text-white p-3.5 rounded-lg text-xs flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{selectedSize.dimensions} · Biopolymer Film</p>
                    <p className="text-stone-300 text-[11px]">{selectedSize.idealFor}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-emerald-300 font-semibold">{selectedSize.capacity}</p>
                    <p className="text-stone-400 text-[10px]">MOQ: {selectedSize.moq}</p>
                  </div>
                </div>
              </div>

              {/* Customizer Controls */}
              <div className="mt-6 space-y-4 pt-4 border-t border-stone-200">
                {/* Visual Appearance Info */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Visual Film Texture & Appearance
                  </label>
                  <div className="p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-stone-900">Translucent Biopolymer Film</span>
                      <p className="text-stone-500 text-[11px]">Semi-opaque plant-based biopolymer replicating traditional LDPE/HDPE shopping bag aesthetics</p>
                    </div>
                    <span className="w-4 h-4 rounded-full bg-stone-100 border border-stone-300 shrink-0 ml-3"></span>
                  </div>
                </div>

                {/* Handle Configuration */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Handle Style Format
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHandleType('diecut')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                        handleType === 'diecut'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      Die-Cut Punch Handle (Retail Boutiques)
                    </button>
                    <button
                      onClick={() => setHandleType('tshirt')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                        handleType === 'tshirt'
                          ? 'border-stone-900 bg-stone-900 text-white'
                          : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                      }`}
                    >
                      T-Shirt / Vest Handle (Supermarkets & Takeout)
                    </button>
                  </div>
                </div>

                {/* Custom Branding Print Option */}
                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                    Custom Store Branding & Inks
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setPrintOption('custom')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                        printOption === 'custom'
                          ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-semibold'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      Custom Logo (Soy & Water Vegetable Inks)
                    </button>
                    <button
                      onClick={() => setPrintOption('blank')}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-all cursor-pointer ${
                        printOption === 'blank'
                          ? 'border-emerald-800 bg-emerald-50 text-emerald-950 font-semibold'
                          : 'border-stone-200 bg-white text-stone-700'
                      }`}
                    >
                      Unprinted Plain (Ready to Ship)
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Decomposition Timeline Box */}
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-800" />
                  <h3 className="text-sm font-bold text-stone-900 font-display">
                    Interactive Decomposition Stage
                  </h3>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-900 bg-emerald-100/70 px-2.5 py-0.5 rounded">
                  {decompStep === 0 ? 'Day 0' : `${decompStep} Days`}
                </span>
              </div>

              {/* Range Slider */}
              <div className="py-2">
                <input
                  type="range"
                  min="0"
                  max="180"
                  step="30"
                  value={decompStep}
                  onChange={(e) => setDecompStep(Number(e.target.value))}
                  className="w-full accent-emerald-900 cursor-pointer"
                  aria-label="Decomposition timeline slider in days"
                />
                <div className="flex justify-between text-[11px] text-stone-500 font-mono mt-1">
                  <span>Day 0 (Store)</span>
                  <span>Day 30 (Microbes)</span>
                  <span>Day 90 (Fragment)</span>
                  <span>Day 180 (Humus)</span>
                </div>
              </div>

              {/* Dynamic Stage Explanation */}
              <div className="mt-4 p-4 rounded-xl bg-white border border-stone-200/80">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-1">
                  {currentTimeline.stage}
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">
                  {currentTimeline.detail}
                </p>
                <div className="text-[11px] font-mono text-emerald-800 bg-emerald-50/80 px-2 py-1 rounded inline-block">
                  Status: {currentTimeline.soilStatus}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Size Selection & Technical Data */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-stone-900 font-display mb-1">
                Select Standard Carry Bag Size (8 Capacities)
              </h3>
              <p className="text-xs text-stone-500">
                Available from 250 gms to 18 kg. Click any weight rating to inspect dimensions, micron thickness, and minimum order quantity.
              </p>
            </div>

            {/* Compact 8-Size Selector Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {BAG_SIZES.map((size) => {
                const isSelected = selectedSize.id === size.id;
                return (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`p-3 rounded-xl text-left border transition-colors cursor-pointer ${
                      isSelected
                        ? 'border-emerald-800 bg-emerald-50/70 ring-1 ring-emerald-800'
                        : 'border-stone-200 bg-white hover:border-stone-300'
                    }`}
                  >
                    <div className="text-base font-bold text-stone-900 font-display tabular-nums whitespace-nowrap">
                      {size.capacity}
                    </div>
                    <div className="text-[11px] font-mono text-stone-500 tabular-nums mt-0.5 whitespace-nowrap">
                      {size.dimensions}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Size Specification Summary */}
            <div className="p-5 rounded-xl border border-stone-200 bg-[#FAF9F5] space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-stone-200/80">
                <div>
                  <span className="text-xs text-stone-500 block">Selected Standard Carry Bag</span>
                  <h4 className="text-base font-bold text-stone-900 font-display">
                    {selectedSize.name}
                  </h4>
                </div>
                <span className="text-xs font-mono font-semibold text-emerald-900 tabular-nums">
                  MOQ: {selectedSize.moq}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <span className="text-stone-500 block">Load Rating</span>
                  <span className="font-semibold text-stone-900 tabular-nums">{selectedSize.capacity}</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Dimensions (W × H + Gusset)</span>
                  <span className="font-mono font-medium text-stone-900 tabular-nums">{selectedSize.dimensions}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-stone-500 block">Film Gauge</span>
                  <span className="font-medium text-stone-900 tabular-nums">{selectedSize.thickness}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-200/80 text-xs">
                <span className="text-stone-500">Ideal Applications: </span>
                <span className="text-stone-800 font-medium">{selectedSize.idealFor}</span>
              </div>
            </div>

            {/* Biopolymer Properties */}
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/60 space-y-4">
              <h4 className="text-xs font-semibold text-stone-700 uppercase tracking-wider">
                Biopolymer Formulation & Properties (Zero Paper)
              </h4>

              <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs">
                <div>
                  <span className="text-stone-500 block">Polymer Composition</span>
                  <span className="font-medium text-stone-800">Non-GMO Cornstarch + Cassava + PBAT</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Visual Texture</span>
                  <span className="font-medium text-stone-800">Translucent flexible biopolymer film</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Decomposition Standard</span>
                  <span className="font-medium text-stone-800">CIPET Certified · IS/ISO 17088:2021</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Bottom Seal Profile</span>
                  <span className="font-medium text-stone-800">Ultrasonic Seamless Leakproof Weld</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Tensile Stretch</span>
                  <span className="font-medium text-stone-800">High elastic elongation (resembles plastic)</span>
                </div>
                <div>
                  <span className="text-stone-500 block">Food Safety Compliance</span>
                  <span className="font-medium text-stone-800">IS 9845 Migration Safe (FSSAI)</span>
                </div>
              </div>

              <p className="pt-3 border-t border-stone-200 text-xs text-stone-600 leading-relaxed">
                <strong className="text-stone-900">Seamless Store Transition:</strong> Customers handle everything from 250 gm spice packs to 18 kg grocery loads just like standard plastic carry bags—while eliminating petrochemical pollution entirely.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onRequestSample}
                className="flex-1 py-3 px-5 text-sm font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs whitespace-nowrap"
              >
                <span>Request {selectedSize.capacity} Sample Swatches</span>
              </button>
              <button
                onClick={onRequestSample}
                className="py-3 px-5 text-sm font-semibold text-stone-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
              >
                Get Wholesale Tier Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
