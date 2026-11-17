import React, { useState, useEffect } from 'react';
import { X, Check, Package, Send } from 'lucide-react';

interface SampleRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProduct?: string;
}

const SAMPLE_CATALOG_OPTIONS = [
  'Standard Carry Bags (All 8 Sizes: 250g–18kg)',
  'Garbage Bags — Green & Custom Colors (Small, Large, XL · Q3 2027)',
  'Agricultural Mulching Film (Q3 2027)',
  'Shipping Mailer (Q4 2027)',
  'Biopolymer Resin Film Swatch'
];

export const SampleRequestModal: React.FC<SampleRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedProduct
}) => {
  const [businessName, setBusinessName] = useState('');
  const [contactName, setContactName] = useState('');
  const [email, setEmail] = useState('');
  const [storeType, setStoreType] = useState('boutique');
  const [streetAddress, setStreetAddress] = useState('');
  const [cityStateZip, setCityStateZip] = useState('');
  const [monthlyVolume, setMonthlyVolume] = useState('2500');
  const [selectedItems, setSelectedItems] = useState<string[]>([
    'Standard Carry Bags (All 8 Sizes: 250g–18kg)',
    'Biopolymer Resin Film Swatch'
  ]);
  const [submitted, setSubmitted] = useState(false);
  const [trackingCode, setTrackingCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!isOpen || !preselectedProduct) return;
    const lower = preselectedProduct.toLowerCase();
    let matchedOption: string | undefined;
    if (lower.includes('garbage')) {
      matchedOption = 'Garbage Bags — Green & Custom Colors (Small, Large, XL · Q3 2027)';
    } else if (lower.includes('mulch') || lower.includes('agricult')) {
      matchedOption = 'Agricultural Mulching Film (Q3 2027)';
    } else if (lower.includes('mailer')) {
      matchedOption = 'Shipping Mailer (Q4 2027)';
    } else if (lower.includes('pallet') || lower.includes('stretch')) {
      matchedOption = 'Biopolymer Resin Film Swatch';
    } else {
      matchedOption = 'Standard Carry Bags (All 8 Sizes: 250g–18kg)';
    }
    if (matchedOption) {
      setSelectedItems(prev => (prev.includes(matchedOption!) ? prev : [...prev, matchedOption!]));
    }
  }, [isOpen, preselectedProduct]);

  if (!isOpen) return null;

  const sampleCatalogOptions = SAMPLE_CATALOG_OPTIONS;

  const handleToggleItem = (item: string) => {
    setSelectedItems(prev =>
      prev.includes(item)
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !email || !email.includes('@') || !streetAddress) {
      setErrorMsg('Please fill in your business name, valid email, and shipping address.');
      return;
    }
    setErrorMsg('');
    const randomCode = 'MTR-SMP-' + Math.floor(1000 + Math.random() * 9000);
    setTrackingCode(randomCode);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={handleResetAndClose}
    >
      <div 
        className="bg-white rounded-2xl border border-stone-200 max-w-xl w-full p-6 sm:p-8 shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 text-stone-400 hover:text-stone-900 rounded-lg hover:bg-stone-100 transition-colors"
          aria-label="Close sample request"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8" />
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
              <span>Sample Dispatch Confirmed</span>
            </div>
            <h3 className="text-2xl font-bold text-stone-900 font-display mb-2">
              Your Sample Kit is on the Way!
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong className="text-stone-900">{contactName || businessName}</strong>. We are packing your physical swatch box with certified compostable carry bags and material samples for <strong>{businessName}</strong>.
            </p>

            {/* Tracking Reference Card */}
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 text-left max-w-sm mx-auto mb-6 space-y-1.5 text-xs">
              <div className="flex justify-between">
                <span className="text-stone-500">Dispatch Order:</span>
                <span className="font-mono font-bold text-stone-900">{trackingCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Destination:</span>
                <span className="font-medium text-stone-800">{cityStateZip || 'Provided Address'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Estimated Delivery:</span>
                <span className="font-medium text-emerald-800">2–4 Business Days (Carbon Neutral)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleResetAndClose}
                className="py-2.5 px-6 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors cursor-pointer"
              >
                Back to Website
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-1">
                <Package className="w-3.5 h-3.5" />
                <span>Zero-Commitment Dispatch</span>
              </div>
              <h3 className="text-2xl font-bold text-stone-900 font-display">
                Request a Free Retail Sample Kit
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                Test the tensile strength, tactile hand-feel, and water resilience of our certified compostable bags in your store before ordering.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Sample Pack Checkboxes */}
              <div>
                <label className="block text-xs font-semibold text-stone-800 mb-2">
                  Select Samples to Include:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {sampleCatalogOptions.map((item) => {
                    const isChecked = selectedItems.includes(item);
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => handleToggleItem(item)}
                        className={`p-2.5 rounded-lg border text-xs text-left flex items-center justify-between transition-colors cursor-pointer ${
                          isChecked
                            ? 'border-emerald-800 bg-emerald-50/60 text-emerald-950 font-medium'
                            : 'border-stone-200 bg-white text-stone-600 hover:border-stone-300'
                        }`}
                      >
                        <span>{item}</span>
                        {isChecked && <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Fields Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-stone-100">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Business / Store Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="e.g. Green Leaf Artisan Bakery"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="e.g. Emma Vance"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="orders@yourstore.com"
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Store Type
                  </label>
                  <select
                    value={storeType}
                    onChange={(e) => setStoreType(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800 bg-white text-stone-800"
                  >
                    <option value="boutique">Apparel & Lifestyle Boutique</option>
                    <option value="grocery">Specialty Organic Grocer</option>
                    <option value="cafe">Bakery, Cafe & Hospitality</option>
                    <option value="bookstore">Bookshop & Gift Retail</option>
                    <option value="ecommerce">E-Commerce Brand</option>
                    <option value="other">Other Merchant / Distributor</option>
                  </select>
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Shipping Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  placeholder="124 Market Street, Suite 4B"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800 mb-2"
                />
                <input
                  type="text"
                  value={cityStateZip}
                  onChange={(e) => setCityStateZip(e.target.value)}
                  placeholder="City, State / Province, Postal Code"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800"
                />
              </div>

              {/* Volume Selection */}
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Estimated Monthly Bag Requirement
                </label>
                <select
                  value={monthlyVolume}
                  onChange={(e) => setMonthlyVolume(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded-lg focus:outline-none focus:border-emerald-800 bg-white text-stone-800"
                >
                  <option value="500">Under 1,000 bags / month (Small Boutique)</option>
                  <option value="2500">1,000 – 5,000 bags / month (Standard Store)</option>
                  <option value="10000">5,000 – 20,000 bags / month (Busy Grocer / Cafe)</option>
                  <option value="50000">20,000+ bags / month (Chain / Multi-location)</option>
                </select>
              </div>

              {errorMsg && (
                <p className="text-rose-600 text-xs font-medium">{errorMsg}</p>
              )}

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Me Free Sample Swatch Kit</span>
                </button>
                <p className="text-[11px] text-stone-500 text-center mt-2">
                  No credit card required. Free standard carbon-neutral postal delivery.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
