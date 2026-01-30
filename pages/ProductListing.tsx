import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { SlidersHorizontal } from 'lucide-react';

export const ProductListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return PRODUCTS;
    return PRODUCTS.filter(p => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 space-y-4 md:space-y-0">
        <div>
          <h1 className="font-serif text-4xl text-stone-900 mb-2">Shop Collection</h1>
          <p className="text-stone-500">Discover clean formulas for every step of your routine.</p>
        </div>
        
        {/* Simple Filter Toggle (Visual only for now, could expand) */}
        <button className="flex items-center text-sm font-medium text-stone-600 hover:text-stone-900">
          <SlidersHorizontal className="w-4 h-4 mr-2" />
          Filter & Sort
        </button>
      </div>

      {/* Categories Tabs */}
      <div className="flex overflow-x-auto no-scrollbar pb-4 mb-8 border-b border-stone-200 gap-8">
        {CATEGORIES.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`whitespace-nowrap pb-4 text-sm font-medium transition-colors border-b-2 ${
              selectedCategory === category 
                ? 'border-stone-900 text-stone-900' 
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-center text-stone-500">
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};