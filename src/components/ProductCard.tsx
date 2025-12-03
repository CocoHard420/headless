import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { ShoppingCart } from 'lucide-react';

interface ProductProps {
  id: number;
  title: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew?: boolean;
}

export const ProductCard = ({ product }: { product: ProductProps }) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-sm hover:shadow-[0_10px_40px_-10px_rgba(224,49,107,0.4)] transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {product.isNew && (
          <Badge className="absolute top-3 left-3 z-10 bg-[#e0316b] hover:bg-[#e0316b] text-white border-0">
            Nouveau
          </Badge>
        )}
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
           <Button className="w-full bg-white text-slate-900 hover:bg-[#e0316b] hover:text-white font-medium shadow-lg">
             <ShoppingCart className="mr-2 h-4 w-4" />
             Ajouter au panier
           </Button>
        </div>
      </div>
      
      <CardContent className="pt-5 px-4">
        <p className="text-sm text-slate-500 mb-1">{product.category}</p>
        <h3 className="font-semibold text-lg text-slate-900 group-hover:text-[#e0316b] transition-colors line-clamp-1">
          {product.title}
        </h3>
      </CardContent>
      
      <CardFooter className="px-4 pb-5 flex items-center justify-between">
        <span className="font-bold text-lg text-slate-900">{product.price} €</span>
      </CardFooter>
    </Card>
  );
};