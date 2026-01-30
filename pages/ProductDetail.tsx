import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../constants';
import { Button } from '../components/Button';
import { Star, Minus, Plus, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-2xl font-serif text-stone-900 mb-4">Product not found</h2>
        <Button onClick={() => navigate('/shop')}>Back to Shop</Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    // Optional: Add toast notification here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Product Image */}
        <div className="space-y-4">
          <div className="bg-stone-100 aspect-[3/4] overflow-hidden rounded-sm relative">
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
             {/* Thumbnail placeholders to simulate gallery */}
             <div className="bg-stone-100 aspect-square" />
             <div className="bg-stone-100 aspect-square" />
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <div className="mb-2 text-sm text-stone-500 font-medium tracking-wide uppercase">
            {product.category}
          </div>
          <h1 className="font-serif text-4xl text-stone-900 mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-6 space-x-4">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-stone-300'}`} 
                />
              ))}
            </div>
            <span className="text-sm text-stone-500 border-l border-stone-300 pl-4">
              {product.reviewCount} Reviews
            </span>
          </div>

          <div className="text-2xl font-medium text-stone-900 mb-8">
            ${product.price.toFixed(2)}
          </div>

          <p className="text-stone-600 leading-relaxed mb-8">
            {product.fullDescription}
          </p>

          <div className="space-y-6 mb-10">
            <div className="border-t border-b border-stone-200 py-4">
               <h3 className="font-medium text-stone-900 mb-2 text-sm uppercase tracking-wide">Key Ingredients</h3>
               <div className="flex flex-wrap gap-2">
                 {product.ingredients.map(ing => (
                   <span key={ing} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs rounded-full">
                     {ing}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="flex space-x-4 mb-8">
            <div className="w-32 flex items-center justify-between border border-stone-300 px-4 py-3">
              <button className="text-stone-400 hover:text-stone-600">
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-stone-900 font-medium">1</span>
              <button className="text-stone-400 hover:text-stone-600">
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <Button onClick={handleAddToCart} className="flex-1">
              Add to Routine
            </Button>
          </div>

          <div className="space-y-3 text-sm text-stone-500">
            <div className="flex items-center">
              <Truck className="w-4 h-4 mr-3 text-stone-400" />
              Free shipping on orders over $50
            </div>
            <div className="flex items-center">
              <RefreshCw className="w-4 h-4 mr-3 text-stone-400" />
              30-day return policy
            </div>
            <div className="flex items-center">
              <ShieldCheck className="w-4 h-4 mr-3 text-stone-400" />
              Clean, vegan & cruelty-free
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};