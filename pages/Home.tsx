import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import { ArrowRight, Star, Leaf, ShieldCheck } from 'lucide-react';

export const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2073&auto=format&fit=crop" 
            alt="Woman with radiant skin" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-stone-900/10 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 drop-shadow-md">
            Unveil Your Natural Radiance
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-10 font-light max-w-2xl mx-auto drop-shadow">
            Premium, clean skincare formulated to nourish, protect, and enhance your skin's natural beauty.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/shop">
              <Button className="w-full sm:w-auto min-w-[160px]">
                Shop Collection
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="w-full sm:w-auto min-w-[160px] bg-white/10 backdrop-blur-sm border-white/50 text-white hover:bg-white hover:text-stone-900">
                Our Philosophy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white border border-stone-100 rounded-sm">
            <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-700">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-2">Clean Ingredients</h3>
            <p className="text-stone-500">Sustainably sourced, non-toxic botanicals that care for your skin and the planet.</p>
          </div>
          <div className="p-6 bg-white border border-stone-100 rounded-sm">
            <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-700">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-2">Dermatologist Tested</h3>
            <p className="text-stone-500">Rigorous testing ensures our formulas are safe, effective, and gentle on all skin types.</p>
          </div>
          <div className="p-6 bg-white border border-stone-100 rounded-sm">
            <div className="mx-auto w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mb-4 text-stone-700">
              <Star className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-xl text-stone-900 mb-2">Proven Results</h3>
            <p className="text-stone-500">Backed by science and loved by thousands for visible improvements in texture and tone.</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-serif text-3xl text-stone-900 mb-2">Curated Favorites</h2>
            <p className="text-stone-500">Our most loved essentials for your daily ritual.</p>
          </div>
          <Link to="/shop" className="group flex items-center text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors">
            View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Banner */}
      <section className="bg-stone-200 py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl text-stone-900 mb-6">"Skincare is a journey, not a race. Embrace the ritual of caring for yourself."</h2>
          <Link to="/shop">
            <Button variant="outline" className="border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};