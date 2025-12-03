import React from 'react';
import { ProductCard } from './ProductCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const PRODUCTS = [
  {
    id: 1,
    title: "Affiche 'L'Espoir en Jaune'",
    price: 25,
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1535385793343-27dff1413c5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    isNew: true,
  },
  {
    id: 2,
    title: "Tote Bag 'Mimosa'",
    price: 15,
    category: "Accessoires",
    imageUrl: "https://images.unsplash.com/photo-1574365569389-a10d488ca3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    isNew: false,
  },
  {
    id: 3,
    title: "Carnet de Notes Solidaire",
    price: 12,
    category: "Papeterie",
    imageUrl: "https://images.unsplash.com/photo-1544816155-12df9643f363?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Generic notebook image
    isNew: false,
  },
  {
    id: 4,
    title: "Lithographie 'Renaissance'",
    price: 80,
    category: "Art",
    imageUrl: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080", // Art image
    isNew: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <section id="shop" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-[rgb(224,49,107)] mb-3">Nos Coups de Cœur</h2>
            <p className="text-slate-600 max-w-xl">
              Découvrez notre sélection de produits solidaires. Chaque achat est un geste concret pour soutenir la lutte contre le cancer.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex border-slate-200 hover:border-yellow-500 hover:text-yellow-600">
            Tout voir <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-10 text-center md:hidden">
          <Button variant="outline" className="w-full border-slate-200">
            Tout voir <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};