/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FlagshipProduct } from './components/FlagshipProduct';
import { ProductCatalog } from './components/ProductCatalog';
import { ImpactCalculator } from './components/ImpactCalculator';
import { Certifications } from './components/Certifications';
import { DevelopmentUpdates } from './components/DevelopmentUpdates';
import { Footer } from './components/Footer';
import { SampleRequestModal } from './components/SampleRequestModal';

export default function App() {
  const [sampleModalOpen, setSampleModalOpen] = useState(false);
  const [preselectedProduct, setPreselectedProduct] = useState<string | undefined>(undefined);

  const handleOpenSampleModal = (productName?: string) => {
    setPreselectedProduct(productName);
    setSampleModalOpen(true);
  };

  const handleCloseSampleModal = () => {
    setSampleModalOpen(false);
    setPreselectedProduct(undefined);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('catalog');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F5] text-stone-800 font-body selection:bg-emerald-900 selection:text-white">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onRequestSample={() => handleOpenSampleModal('Standard Carry Bags')} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onRequestSample={() => handleOpenSampleModal('Standard Carry Bags')} 
          onExploreProducts={handleExploreProducts}
        />

        {/* Flagship Feature Deep-Dive: Compostable Carry Bags */}
        <FlagshipProduct 
          onRequestSample={() => handleOpenSampleModal('Standard Carry Bags')} 
        />

        {/* Intuitive Product Catalog & Roadmap Showcase */}
        <ProductCatalog 
          onRequestSampleForProduct={(name) => handleOpenSampleModal(name)} 
        />

        {/* Environmental Math & Impact Calculator */}
        <ImpactCalculator 
          onRequestSample={() => handleOpenSampleModal('Standard Carry Bags')} 
        />

        {/* Laboratory Certifications & Rigor */}
        <Certifications />

        {/* Updates, Roadmap & Pilot Newsletter */}
        <DevelopmentUpdates />
      </main>

      {/* Quiet Footer */}
      <Footer 
        onRequestSample={() => handleOpenSampleModal('Standard Carry Bags')} 
      />

      {/* Interactive Sample Kit Modal */}
      <SampleRequestModal
        isOpen={sampleModalOpen}
        onClose={handleCloseSampleModal}
        preselectedProduct={preselectedProduct}
      />
    </div>
  );
}
