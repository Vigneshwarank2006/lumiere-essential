import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Trash2, ArrowLeft } from 'lucide-react';

export const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <h2 className="font-serif text-3xl text-stone-900 mb-4">Your bag is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't added anything to your routine yet.</p>
        <Link to="/shop">
          <Button>Explore Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl text-stone-900 mb-10">Your Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Cart Items */}
        <div className="lg:col-span-8">
          <div className="space-y-8">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 border-b border-stone-200 pb-8">
                <div className="w-24 h-32 flex-shrink-0 bg-stone-100 overflow-hidden">
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between mb-2">
                      <h3 className="text-lg font-medium text-stone-900">
                        <Link to={`/product/${item.id}`}>{item.name}</Link>
                      </h3>
                      <p className="font-medium text-stone-900">${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-stone-500 mb-4">{item.category}</p>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center border border-stone-300">
                      <button 
                        className="px-3 py-1 text-stone-500 hover:text-stone-900"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="px-3 py-1 text-sm text-stone-900 min-w-[2rem] text-center">
                        {item.quantity}
                      </span>
                      <button 
                        className="px-3 py-1 text-stone-500 hover:text-stone-900"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>
                    
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-sm text-stone-400 hover:text-rose-500 flex items-center transition-colors"
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Link to="/shop" className="inline-flex items-center text-sm text-stone-600 hover:text-stone-900">
              <ArrowLeft className="w-4 h-4 mr-2" /> Continue Shopping
            </Link>
          </div>
        </div>

        {/* Summary */}
        <div className="lg:col-span-4">
          <div className="bg-stone-100 p-8 sticky top-24">
            <h2 className="text-lg font-medium text-stone-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm text-stone-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span>Tax</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-stone-200 pt-4 mb-8">
              <div className="flex justify-between font-medium text-stone-900 text-lg">
                <span>Total</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Button className="w-full" onClick={() => navigate('/checkout')}>
              Proceed to Checkout
            </Button>
            
            <p className="mt-4 text-xs text-stone-400 text-center">
              Secure Checkout • Satisfaction Guaranteed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};