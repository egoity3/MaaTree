import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Product, ProductStatus, ProductSector } from '../types';
import { ArrowUpRight, Check, Eye, Filter, Sparkles, X, Shield, Clock, Layers } from 'lucide-react';

interface ProductCatalogProps {
  onRequestSampleForProduct: (productName: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onRequestSampleForProduct }) => {
  const [statusFilter, setStatusFilter] = useState<'all' | ProductStatus>('all');
  const [sectorFilter, setSectorFilter] = useState<'all' | ProductSector>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [subscribedProducts, setSubscribedProducts] = useState<Record<string, boolean>>({});

  // Filter products
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesStatus = statusFilter === 'all' || product.status === statusFilter;
    const matchesSector = sectorFilter === 'all' || product.sector.includes(sectorFilter);
    return matchesStatus && matchesSector;
  });

  const handleNotifyToggle = (productId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSubscribedProducts((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const getStatusBadgeStyle = (status: ProductStatus) => {
    switch (status) {
      case 'available':
        return 'text-emerald-800 font-semibold';
      case 'pilot':
        return 'text-amber-800 font-semibold';
      case 'pipeline':
        return 'text-stone-600 font-medium';
    }
  };

  return (
    <section id="catalog" className="py-16 md:py-24 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-800 mb-2">
              <span>Growing Catalog</span>
              <span aria-hidden="true" className="text-stone-300">/</span>
              <span>Inaugural & Future Packaging</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900 font-display">
              Biopolymer Packaging Catalog & Pipeline
            </h2>
            <p className="text-stone-600 text-base md:text-lg mt-2">
              Starting with our proven compostable carry bags, MaaTree (<a href="https://maatree.in" className="text-emerald-800 hover:underline">maatree.in</a>) is developing a full suite of plastic-free biopolymer films and packaging. We do not manufacture paper products—our mission is replacing flexible petroleum plastics directly.
            </p>
          </div>

          {/* Catalog stats */}
          <div className="flex items-center gap-6 text-xs text-stone-500 border-l border-stone-200 pl-6 shrink-0">
            <div>
              <p className="text-xl font-bold text-stone-900 font-display tabular-nums">
                {PRODUCTS.filter(p => p.status === 'available').length}
              </p>
              <p>In Production</p>
            </div>
            <div>
              <p className="text-xl font-bold text-stone-700 font-display tabular-nums">
                {PRODUCTS.filter(p => p.status === 'pipeline').length}
              </p>
              <p>Upcoming Releases</p>
            </div>
          </div>
        </div>

        {/* Filter Toolbar (Clean interactive controls with active states) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-2 bg-[#FAF9F5] rounded-xl border border-stone-200/80 mb-8">
          {/* Status Filter Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto p-1">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              All Packaging ({PRODUCTS.length})
            </button>
            <button
              onClick={() => setStatusFilter('available')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'available'
                  ? 'bg-emerald-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              In Production (Now Available)
            </button>
            <button
              onClick={() => setStatusFilter('pipeline')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                statusFilter === 'pipeline'
                  ? 'bg-stone-900 text-white shadow-xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Upcoming Releases (Q3–Q4 2027)
            </button>
          </div>

          {/* Sector Filter Selector */}
          <div className="flex items-center gap-2 px-3 py-1">
            <span className="text-xs text-stone-500 flex items-center gap-1 whitespace-nowrap">
              <Filter className="w-3.5 h-3.5" />
              Sector:
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setSectorFilter('all')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  sectorFilter === 'all'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSectorFilter('retail')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  sectorFilter === 'retail'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Retail & Boutiques
              </button>
              <button
                onClick={() => setSectorFilter('ecommerce')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer ${
                  sectorFilter === 'ecommerce'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                E-Commerce
              </button>
              <button
                onClick={() => setSectorFilter('food')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  sectorFilter === 'food'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Food Service
              </button>
              <button
                onClick={() => setSectorFilter('agriculture')}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                  sectorFilter === 'agriculture'
                    ? 'bg-stone-200 text-stone-900 font-semibold'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                Agriculture
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${filteredProducts.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-8`}>
          {filteredProducts.map((product) => {
            const isSubscribed = !!subscribedProducts[product.id];

            return (
              <div
                key={product.id}
                onClick={() => setSelectedProduct(product)}
                className="group rounded-2xl border border-stone-200/90 bg-white overflow-hidden hover:border-stone-400/80 transition-all duration-300 flex flex-col justify-between hover:shadow-md cursor-pointer"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Clean unboxed status line */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-md border border-stone-200/70 text-xs">
                    <span className={getStatusBadgeStyle(product.status)}>
                      {product.statusLabel}
                    </span>
                  </div>

                  {product.launchDate && (
                    <div className="absolute top-3 right-3 bg-stone-900/85 backdrop-blur-sm text-stone-100 font-mono text-[11px] px-2.5 py-1 rounded-md">
                      Target: {product.launchDate}
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata line without pill wraps */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span>{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{product.compostTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-stone-900 font-display group-hover:text-emerald-900 transition-colors mb-2">
                      {product.name}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Key Specs Preview */}
                    <div className="pt-3 border-t border-stone-100 space-y-1 text-xs">
                      {product.id === 'compostable-carry-bag' && (
                        <div className="flex justify-between gap-3 text-stone-600">
                          <span className="text-stone-400 shrink-0">Sizes:</span>
                          <span className="font-medium text-stone-800 text-right tabular-nums">
                            250 gms · 500 gms · 1 kg · 2 kg · 5 kg · 9 kg · 14 kg · 18 kg
                          </span>
                        </div>
                      )}
                      {product.id === 'compostable-garbage-bags' && (
                        <>
                          <div className="flex justify-between gap-3 text-stone-600">
                            <span className="text-stone-400 shrink-0">Sizes:</span>
                            <span className="font-medium text-stone-800 text-right">
                              Small · Large · Extra Large
                            </span>
                          </div>
                          <div className="flex justify-between gap-3 text-stone-600">
                            <span className="text-stone-400 shrink-0">Colors:</span>
                            <span className="font-medium text-stone-800 text-right">
                              Green (Red, Yellow, Blue, Black on order)
                            </span>
                          </div>
                        </>
                      )}
                      <div className="flex justify-between text-stone-600">
                        <span className="text-stone-400">Materials:</span>
                        <span className="font-medium text-stone-800 text-right truncate max-w-[200px]">
                          {product.materials.join(' + ')}
                        </span>
                      </div>
                      <div className="flex justify-between text-stone-600">
                        <span className="text-stone-400">Certification:</span>
                        <span className="font-medium text-stone-800 text-right truncate max-w-[200px]">
                          {product.certification}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(product);
                      }}
                      className="text-xs font-semibold text-stone-700 hover:text-stone-950 flex items-center gap-1 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      View Spec Sheet
                    </button>

                    {product.status === 'available' ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onRequestSampleForProduct(product.name);
                        }}
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors cursor-pointer flex items-center gap-1"
                      >
                        Request Sample
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleNotifyToggle(product.id, e)}
                        className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                          isSubscribed
                            ? 'bg-emerald-50 border-emerald-800 text-emerald-900'
                            : 'bg-white border-stone-300 text-stone-700 hover:border-stone-400'
                        }`}
                      >
                        {isSubscribed ? (
                          <span className="flex items-center gap-1">
                            <Check className="w-3 h-3 text-emerald-800" />
                            Subscribed for Pilot
                          </span>
                        ) : (
                          'Notify on Release'
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Product Quick-View Modal */}
        {selectedProduct && (
          <div 
            className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProduct(null)}
          >
            <div 
              className="bg-white rounded-2xl border border-stone-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="text-xs text-stone-500 flex items-center gap-2 mb-1">
                    <span>{selectedProduct.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className={getStatusBadgeStyle(selectedProduct.status)}>
                      {selectedProduct.statusLabel}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 font-display">
                    {selectedProduct.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-900 hover:bg-stone-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image */}
              <div className="rounded-xl overflow-hidden aspect-[16/9] mb-6 bg-stone-100 border border-stone-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed mb-6">
                {selectedProduct.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-2">
                  Performance Highlights
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600">
                  {selectedProduct.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0"></span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Specs Table */}
              <div className="rounded-xl border border-stone-200 overflow-hidden mb-6">
                <div className="bg-stone-50 px-4 py-2 text-xs font-bold text-stone-900 border-b border-stone-200">
                  Technical Specifications
                </div>
                <div className="divide-y divide-stone-100 text-xs">
                  {selectedProduct.specs.map((spec, i) => (
                    <div key={i} className="px-4 py-2.5 flex justify-between">
                      <span className="text-stone-500">{spec.label}</span>
                      <span className="font-medium text-stone-900">{spec.value}</span>
                    </div>
                  ))}
                  <div className="px-4 py-2.5 flex justify-between bg-stone-50/50">
                    <span className="text-stone-500">Minimum Order</span>
                    <span className="font-semibold text-emerald-900">{selectedProduct.moq}</span>
                  </div>
                </div>
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    const prodName = selectedProduct.name;
                    setSelectedProduct(null);
                    onRequestSampleForProduct(prodName);
                  }}
                  className="flex-1 py-3 px-4 text-xs font-semibold text-white bg-emerald-900 hover:bg-emerald-950 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  {selectedProduct.status === 'available'
                    ? 'Request Material Swatches & Samples'
                    : 'Join Pilot Batch Testing Program'}
                </button>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="py-3 px-5 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
