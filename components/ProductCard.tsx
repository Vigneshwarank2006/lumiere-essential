import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden bg-stone-100 aspect-[3/4] mb-4">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300" />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-stone-500 line-clamp-1">{product.shortDescription}</p>
        <p className="text-sm font-semibold text-stone-900 mt-2">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};