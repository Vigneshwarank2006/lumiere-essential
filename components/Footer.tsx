import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 pt-16 pb-12 mt-auto border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <span className="font-serif text-2xl tracking-tight text-stone-900">Lumière.</span>
            <p className="mt-4 text-sm text-stone-500 leading-relaxed">
              Clean, conscious skincare designed to reveal your natural radiance. 
              Formulated without compromise.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-stone-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900">All Products</a></li>
              <li><a href="#" className="hover:text-stone-900">Best Sellers</a></li>
              <li><a href="#" className="hover:text-stone-900">Sets & Bundles</a></li>
              <li><a href="#" className="hover:text-stone-900">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-stone-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-stone-500">
              <li><a href="#" className="hover:text-stone-900">FAQ</a></li>
              <li><a href="#" className="hover:text-stone-900">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-stone-900">Contact Us</a></li>
              <li><a href="#" className="hover:text-stone-900">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-stone-900 mb-4">Stay in the glow</h4>
            <p className="text-sm text-stone-500 mb-4">
              Join our newsletter for exclusive offers and skincare tips.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 bg-white border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:border-stone-500"
              />
              <button className="bg-stone-900 text-white px-4 py-2 text-sm font-medium hover:bg-stone-800">
                Join
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-stone-200 text-center text-sm text-stone-400">
          <p>&copy; {new Date().getFullYear()} Lumière Essentials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};