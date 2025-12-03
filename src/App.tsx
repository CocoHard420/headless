import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CampaignInfo } from './components/CampaignInfo';
import { FeaturedProducts } from './components/FeaturedProducts';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <main>
        <Hero />
        <CampaignInfo />
        <FeaturedProducts />
        
        {/* Newsletter/CTA Banner between sections for extra engagement */}
        <section className="py-16 bg-gradient-to-t from-[#001E57] to-[#1d3f89] text-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}></div>
          <div className="container mx-auto px-4 text-center relative z-10">
             <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[rgb(255,255,255)]">
               Chaque geste compte
             </h2>
             <p className="text-lg mb-8 max-w-2xl mx-auto font-medium opacity-90 text-[rgb(255,255,255)]">
               En achetant sur notre boutique ou en faisant un don, vous participez activement à l'amélioration de la prise en charge des patients.
             </p>
             <button className="bg-[rgb(224,49,107)] text-white hover:bg-white hover:text-[#e0316b] hover:scale-105 font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg active:scale-95">
               Faire un don maintenant
             </button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default App;