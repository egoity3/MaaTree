import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { PRODUCT_IMAGES } from '../assets/images';

interface Story {
  id: string;
  businessName: string;
  storeType: string;
  location: string;
  ownerName: string;
  role: string;
  image: string;
  bagModel: string;
  headline: string;
  testimonial: string;
  metrics: {
    label: string;
    value: string;
  }[];
  category: 'all' | 'grocery' | 'boutique' | 'food';
}

interface CustomerStoriesProps {
  onRequestSample: () => void;
}

const STORIES: Story[] = [
  {
    id: 'verdant-grocers',
    businessName: 'Verdant Market & Provisions',
    storeType: 'Independent Organic Grocer',
    location: 'Portland, OR',
    ownerName: 'Martha Vance',
    role: 'Co-Founder & General Manager',
    image: PRODUCT_IMAGES.storyOrganicGrocer,
    bagModel: 'Supermarket Grocer Bag (24L · 45μm)',
    headline: 'Zero bag failure across 48,000 heavy grocery transactions.',
    testimonial: 'Our shoppers were fed up with rigid paper bags that tear in rainy weather, but we refused to use petroleum poly bags. MaaTree’s compostable bags look, stretch, and load just like conventional plastic grocery bags, but return to nutrient-dense garden compost in our customers’ backyards. It was an overnight hit.',
    metrics: [
      { label: 'Annual Plastic Bags Eliminated', value: '48,000 bags' },
      { label: 'Puncture Failure Rate', value: '0.0%' },
      { label: 'Customer Retention Uplift', value: '+22%' }
    ],
    category: 'grocery'
  },
  {
    id: 'linen-atelier',
    businessName: 'The Linen Atelier',
    storeType: 'Sustainable Apparel & Home Boutique',
    location: 'Austin, TX',
    ownerName: 'Elena Rostova',
    role: 'Founder & Creative Director',
    image: PRODUCT_IMAGES.storyBoutiqueOwner,
    bagModel: 'Standard Retail Bag (15L · Die-Cut Handle)',
    headline: 'Elevated translucent biopolymer aesthetics with custom soy-ink branding.',
    testimonial: 'In boutique fashion, presentation is everything. Paper bags felt bulky, while conventional poly bags betrayed our sustainability ethics. MaaTree’s biopolymer bags have a gorgeous translucent, soft-matte hand-feel. Printing our logo with their non-toxic vegetable soy inks gave us a luxury retail finish with genuine circular integrity.',
    metrics: [
      { label: 'Boutique Footfall Transition', value: '100% Plastic-Free' },
      { label: 'Social Media Mentions', value: '+3.4x Uplift' },
      { label: 'Virgin Resin Diverted', value: '380 kg / year' }
    ],
    category: 'boutique'
  },
  {
    id: 'maison-levain',
    businessName: 'Maison Levain Bakery & Cafe',
    storeType: 'Artisanal Sourdough Bakery',
    location: 'Seattle, WA',
    ownerName: 'Camilla Thorne',
    role: 'Head Baker & Co-Owner',
    image: PRODUCT_IMAGES.storyBakeryCafe,
    bagModel: 'Standard Retail (15L) & T-Shirt Takeout (24L)',
    headline: 'Handles warm sourdough loaves and steam without weakening.',
    testimonial: 'Freshly baked sourdough releases steam that softens and weakens traditional paper bags, leading to bottom blowouts. MaaTree’s plant-starch bags are water-resistant, IS 9845 food-contact certified, and hold multiple crusty loaves without breaking a sweat. Our regulars love tossing them straight into their home compost bins.',
    metrics: [
      { label: 'Food-Contact Safety', value: 'IS 9845 Compliant' },
      { label: 'Moisture Barrier Retention', value: '100% Steam-Proof' },
      { label: 'Monthly Bags Dispensed', value: '5,500 units' }
    ],
    category: 'food'
  }
];

export const CustomerStories: React.FC<CustomerStoriesProps> = ({ onRequestSample }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'grocery' | 'boutique' | 'food'>('all');

  const filteredStories = activeCategory === 'all'
    ? STORIES
    : STORIES.filter(s => s.category === activeCategory);

  return (
    <section id="stories" className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>Local Merchant Stories</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Real Retail Outcomes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display">
              Trusted by Local Independent Merchants
            </h2>
            <p className="text-stone-600 text-base md:text-lg mt-2">
              Discover how community grocers, fashion boutiques, and specialty cafes transitioned away from petroleum plastics using MaaTree compostable carry bags.
            </p>
          </div>

          {/* Quick Aggregate Proof Strip */}
          <div className="flex items-center gap-6 text-xs text-stone-500 border-l border-stone-200 pl-6 shrink-0">
            <div>
              <p className="text-2xl font-bold text-stone-900 font-display tabular-nums">180+</p>
              <p>Storefronts Switched</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-emerald-800 font-display tabular-nums">1.4M</p>
              <p>Plastic Bags Avoided</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-900 font-display tabular-nums">99.8%</p>
              <p>Shopper Approval</p>
            </div>
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-stone-900 text-white font-semibold shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            All Storefronts ({STORIES.length})
          </button>
          <button
            onClick={() => setActiveCategory('grocery')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'grocery'
                ? 'bg-stone-900 text-white font-semibold shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Organic Grocers & Markets
          </button>
          <button
            onClick={() => setActiveCategory('boutique')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'boutique'
                ? 'bg-stone-900 text-white font-semibold shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Lifestyle & Apparel Boutiques
          </button>
          <button
            onClick={() => setActiveCategory('food')}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
              activeCategory === 'food'
                ? 'bg-stone-900 text-white font-semibold shadow-xs'
                : 'bg-stone-100 text-stone-600 hover:text-stone-900'
            }`}
          >
            Artisan Bakeries & Cafes
          </button>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredStories.map((story) => {
            return (
              <div
                key={story.id}
                className="rounded-2xl border border-stone-200/90 bg-[#FAF9F5] p-6 md:p-7 flex flex-col justify-between hover:border-stone-400 transition-all duration-300 shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Storefront Header */}
                  <div className="flex items-center gap-3.5 mb-5 pb-4 border-b border-stone-200">
                    <img
                      src={story.image}
                      alt={story.ownerName}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-xs shrink-0"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-bold text-stone-900 font-display text-base">
                        {story.businessName}
                      </h4>
                      <p className="text-xs text-stone-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-stone-400" />
                        <span>{story.location}</span>
                        <span aria-hidden="true">·</span>
                        <span>{story.storeType}</span>
                      </p>
                    </div>
                  </div>

                  {/* Headline & Bag Tag */}
                  <div className="mb-3">
                    <span className="text-[11px] font-mono font-medium text-emerald-900 bg-emerald-100/60 px-2 py-0.5 rounded">
                      Using: {story.bagModel}
                    </span>
                    <h5 className="font-bold text-stone-900 text-sm mt-2 font-display leading-snug">
                      "{story.headline}"
                    </h5>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs text-stone-600 leading-relaxed mb-6 font-body italic">
                    "{story.testimonial}"
                  </p>
                </div>

                {/* Measurable Quantitative Proof Strip */}
                <div className="pt-4 border-t border-stone-200/80 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-stone-500 mb-1">
                    Store Outcome Metrics
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {story.metrics.map((m, idx) => (
                      <div key={idx} className="bg-white p-2 rounded-lg border border-stone-200/60">
                        <p className="font-mono font-bold text-xs text-stone-900 tabular-nums">
                          {m.value}
                        </p>
                        <p className="text-[10px] text-stone-500 line-clamp-1 leading-tight mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 flex items-center justify-between text-xs text-stone-500">
                    <span className="font-medium text-stone-800">{story.ownerName}</span>
                    <span className="text-[11px]">{story.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Proof CTA Box */}
        <div className="p-6 md:p-8 rounded-2xl bg-stone-900 text-stone-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Tested in 180+ Local Businesses</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white font-display mb-1">
              Test our compostable bags in your store risk-free.
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed">
              Experience the load tolerance, water barrier, and customer reception firsthand. Free swatch kit dispatched with all 8 sizes (250 gms–18 kg) and certified biopolymer feelers.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-3">
            <button
              onClick={onRequestSample}
              className="py-3 px-5 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Request Free Retail Sample Kit</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
