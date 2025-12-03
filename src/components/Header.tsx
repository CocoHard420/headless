import image_0664f411bf39b60e0cd0164cda14b611973e42ab from 'figma:asset/0664f411bf39b60e0cd0164cda14b611973e42ab.png';
import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 md:px-8 h-24 flex items-center justify-between gap-8">
        <div className="flex items-center flex-shrink-0">
          <a href="#" className="flex items-center">
            <ImageWithFallback 
              src={image_0664f411bf39b60e0cd0164cda14b611973e42ab}
              alt="Centre Antoine Lacassagne"
              className="h-20 w-auto object-contain hover:scale-105 active:scale-95 transition-transform duration-200 cursor-pointer"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 flex-1 justify-center">
          <a href="#" className="text-base font-medium text-[rgb(29,63,137)] hover:text-yellow-500 transition-colors">
            Accueil
          </a>
          <a href="#campaign" className="text-base font-medium text-[rgb(29,63,137)] hover:text-yellow-500 transition-colors">
            La Campagne
          </a>
          <a href="#shop" className="text-base font-medium text-[rgb(29,63,137)] hover:text-yellow-500 transition-colors">
            Boutique
          </a>
          <a href="#" className="text-base font-medium text-[rgb(29,63,137)] hover:text-yellow-500 transition-colors">
            À Propos
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
           <Button variant="ghost" size="icon" className="h-11 w-11 text-[rgb(29,63,137)]">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-11 w-11 text-[rgb(224,49,107)]">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-11 w-11 text-[rgb(29,63,137)]">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <Button className="bg-[rgb(224,49,107)] hover:bg-white hover:text-[#e0316b] hover:scale-105 text-white font-semibold h-11 px-6 transition-all duration-300 active:scale-95">
            Faire un don
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-white"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#" className="text-sm font-medium py-2">Accueil</a>
              <a href="#campaign" className="text-sm font-medium py-2">La Campagne</a>
              <a href="#shop" className="text-sm font-medium py-2">Boutique</a>
              <a href="#" className="text-sm font-medium py-2">À Propos</a>
              <Button className="w-full bg-yellow-500 hover:bg-yellow-600">Faire un don</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};