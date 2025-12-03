import React from 'react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ArrowRight, Palette, ShoppingBag } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1644027514240-5b853862612c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW1vc2ElMjBmbG93ZXJzJTIweYlsb3dzfGVufDF8fHx8MTc2NDAxMDQwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Mimosa flowers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl text-white space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-yellow-400 font-semibold tracking-wide uppercase mb-2">
              Mimosa contre le cancer
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Faites fleurir l'espoir. Soutenez la recherche.
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg">
              Chaque achat contribue directement au Fonds de Dotation du Centre Antoine Lacassagne pour lutter contre le cancer.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[rgb(224,49,107)] hover:bg-yellow-600 text-[rgb(255,255,255)] font-bold border-0 h-12 px-8"
            >
              <Palette className="mr-2 h-5 w-5" />
              Découvrir les œuvres
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-[rgba(29,63,137,0)] text-[rgb(255,255,255)] border-white hover:bg-white/20 h-12 px-8 rounded-[8px]"
            >
              <ShoppingBag className="mr-2 h-5 w-5" />
              Acheter un goodie
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};