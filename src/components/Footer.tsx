import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className="bg-[rgb(29,63,137)] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] gap-8 md:gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Centre Antoine Lacassagne</h3>
            <p className="text-sm leading-relaxed opacity-80">
              Unicancer Nice. Lutte contre le cancer, recherche et soins.
              Votre générosité fait avancer la recherche.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-[#e0316b] transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#e0316b] transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#e0316b] transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-[#e0316b] transition-colors">Plan du site</a></li>
              <li><a href="#shop" className="hover:text-[#e0316b] transition-colors">Boutique Solidaire</a></li>
              <li><a href="#campaign" className="hover:text-[#e0316b] transition-colors">La Campagne Mimosa</a></li>
              <li><a href="#" className="hover:text-[#e0316b] transition-colors">Faire un don</a></li>
              <li><a href="#" className="hover:text-[#e0316b] transition-colors">Mentions Légales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <span>33 Avenue de Valombrose,<br />06189 Nice Cedex 2</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-yellow-500 shrink-0" />
                <span>04 92 03 10 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0" />
                <span>contact@centreantoinelacassagne.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-xs opacity-60">
          <p>2025 © VCOMK - Plan du site</p>
        </div>
      </div>
    </footer>
  );
};