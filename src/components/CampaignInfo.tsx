import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Leaf, Sparkles } from 'lucide-react';

export const CampaignInfo = () => {
  return (
    <section id="campaign" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
          >
             <img
              src="https://images.unsplash.com/photo-1653508310086-bd5f097286ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFyaXR5JTIwdm9sdW50ZWVyJTIwaGFwcHl8ZW58MXx8fHwxNzY0MDEwNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Volunteers smiling"
              className="w-full h-full object-cover"
            />
             <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent transition-all duration-500 group-hover:from-slate-900/20 group-hover:to-transparent group-hover:backdrop-blur-[2px]" />
             <div className="absolute bottom-6 left-6 transition-colors duration-300">
                <p className="font-bold text-lg text-white group-hover:text-[#e0316b]">Ensemble pour la vie</p>
                <p className="text-sm opacity-90 text-white group-hover:text-[#e0316b]">Centre Antoine Lacassagne</p>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-[rgba(224,49,107,0.4)] text-[rgb(224,49,107)] text-sm font-semibold mb-2">
              Notre Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[rgb(29,63,137)]">
              Mimosa contre le cancer
            </h2>
            <p className="text-lg text-[rgb(153,153,153)] leading-relaxed">
              Le mimosa, symbole de lumière et de renouveau, incarne notre combat quotidien. 
              À travers cette campagne, nous unissons art, solidarité et engagement citoyen 
              pour financer des projets innovants et améliorer le quotidien des patients.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-[#e0316b]">
                        <HeartHandshake className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-[rgb(29,63,137)]">Solidarité</h3>
                    <p className="text-sm text-[rgb(153,153,153)] mt-1">100% des bénéfices reversés</p>
                </div>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-[#e0316b]">
                        <Sparkles className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-[rgb(29,63,137)]">Art & Création</h3>
                    <p className="text-sm text-[rgb(153,153,153)] mt-1">Œuvres uniques d'artistes</p>
                </div>
                <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                    <div className="bg-white p-3 rounded-full shadow-sm mb-3 text-[#e0316b]">
                        <Leaf className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-[rgb(29,63,137)]">Impact Local</h3>
                    <p className="text-sm text-[rgb(153,153,153)] mt-1">Soutien direct au Centre</p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};