import React, { useState } from 'react';
import { COMPANY_UPDATES } from '../data/updates';
import { Mail, Check, BellRing, ArrowRight, ShieldCheck, Sparkles, Calendar } from 'lucide-react';

export const DevelopmentUpdates: React.FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [errorMessage, setErrorMessage] = useState('');

  const categories = ['all', 'Supply Chain', 'Certification', 'Product Launch'];

  const filteredUpdates = selectedCategory === 'all'
    ? COMPANY_UPDATES
    : COMPANY_UPDATES.filter(u => u.category === selectedCategory);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      setErrorMessage('Please provide a valid business email address.');
      return;
    }
    setErrorMessage('');
    setSubscribed(true);
  };

  return (
    <section id="updates" className="py-16 md:py-24 bg-[#FAF9F5] border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
            <span>2027 Rollout Schedule</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>Production, CIPET Testing &amp; Launches</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display mb-3">
            2027 Product Roadmap &amp; Certification Timeline
          </h2>
          <p className="text-stone-600 text-base md:text-lg">
            Production is slated to start in Q1 2027, followed by a 6-month CIPET testing and IS certification cycle, leading into our Q3 Garbage Bags and Q4 Shipping Mailer launches.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <span className="text-xs text-stone-500 font-medium whitespace-nowrap">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-stone-900 text-white font-semibold'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-300'
              }`}
            >
              {cat === 'all' ? 'All Updates' : cat}
            </button>
          ))}
        </div>

        {/* Timeline Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {filteredUpdates.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-stone-200 shadow-xs flex flex-col justify-between hover:border-stone-300 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2.5">
                  <span className="font-mono text-emerald-800 font-semibold">{item.quarter} · {item.date}</span>
                  <span className="text-stone-500">{item.category}</span>
                </div>

                <h3 className="text-lg font-bold text-stone-900 font-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="space-y-1.5 pt-3 border-t border-stone-100">
                  {item.highlights.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-stone-700">
                      <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter & Pilot Alert Box */}
        <div className="rounded-2xl bg-stone-900 text-stone-100 p-8 md:p-10 border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
                <BellRing className="w-3.5 h-3.5" />
                <span>Early Access Dispatch</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-display mb-2">
                Be the first to test upcoming packaging lines.
              </h3>
              <p className="text-stone-300 text-xs md:text-sm leading-relaxed max-w-xl">
                Get engineering dispatch notes, CIPET certification milestones, and invitations to receive early sample batches of our upcoming Garbage Bags and Shipping Mailers.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-950/80 border border-emerald-800 p-4 rounded-xl text-emerald-100 text-xs flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-800 text-white shrink-0">
                    <Check className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-white">Subscription Confirmed</p>
                    <p className="text-stone-300 text-xs mt-0.5">
                      You will receive technical updates and pilot dispatch invitations at {emailInput}.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="merchant@yourstore.com"
                      className="flex-1 px-4 py-3 text-xs bg-stone-800/90 border border-stone-700 text-white placeholder-stone-400 rounded-lg focus:outline-none focus:border-emerald-500"
                    />
                    <button
                      type="submit"
                      className="px-5 py-3 text-xs font-semibold text-stone-900 bg-white hover:bg-stone-100 rounded-lg transition-colors whitespace-nowrap cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Join Pilot List</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  {errorMessage && (
                    <p className="text-rose-400 text-xs">{errorMessage}</p>
                  )}
                  <p className="text-[11px] text-stone-400">
                    No spam. Zero sales calls. Unsubscribe anytime with 1 click.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
