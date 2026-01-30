import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Button } from '../components/Button';
import { Lock } from 'lucide-react';

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      navigate('/shop');
    }
  }, [cart, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      navigate('/confirmation');
    }, 2000);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-10">
        <h1 className="font-serif text-3xl text-stone-900">Checkout</h1>
        <p className="text-stone-500 mt-2">Complete your purchase securely.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form */}
        <div>
          <form id="checkout-form" onSubmit={handleSubmit} className="space-y-6">
            <section>
              <h2 className="text-lg font-medium text-stone-900 mb-4">Contact Information</h2>
              <div className="space-y-4">
                <input 
                  type="email" 
                  required 
                  placeholder="Email address" 
                  className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm"
                />
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium text-stone-900 mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="First Name" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                  <input type="text" required placeholder="Last Name" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                </div>
                <input type="text" required placeholder="Address" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                <div className="grid grid-cols-2 gap-4">
                   <input type="text" required placeholder="City" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                   <input type="text" required placeholder="Postal Code" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-medium text-stone-900 mb-4">Payment</h2>
              <div className="bg-stone-50 p-4 border border-stone-200 rounded-sm mb-4">
                <div className="flex items-center text-sm text-stone-600 mb-2">
                   <Lock className="w-4 h-4 mr-2" /> All transactions are secure and encrypted.
                </div>
                <p className="text-xs text-stone-400">This is a mock checkout. No real payment is processed.</p>
              </div>
              <div className="space-y-4">
                <input type="text" required placeholder="Card Number" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" required placeholder="MM / YY" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                  <input type="text" required placeholder="CVC" className="w-full border border-stone-300 px-4 py-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-stone-500 text-sm" />
                </div>
              </div>
            </section>
          </form>
        </div>

        {/* Summary (Right side on desktop, bottom on mobile) */}
        <div className="bg-stone-50 p-8 h-fit">
          <h3 className="text-lg font-medium text-stone-900 mb-6">Order Summary</h3>
          <div className="space-y-4 mb-6">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between text-sm">
                <div className="flex items-start">
                  <div className="w-12 h-16 bg-stone-200 mr-4 overflow-hidden">
                     <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <span className="block text-stone-900">{item.name}</span>
                    <span className="text-stone-500 text-xs">Qty: {item.quantity}</span>
                  </div>
                </div>
                <span className="text-stone-900 font-medium">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-stone-200 pt-4 space-y-2 text-sm text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
          </div>
          
          <div className="border-t border-stone-200 pt-4 mt-4 flex justify-between text-lg font-medium text-stone-900">
             <span>Total</span>
             <span>${cartTotal.toFixed(2)}</span>
          </div>

          <Button 
            type="submit" 
            form="checkout-form"
            className="w-full mt-8"
            isLoading={isProcessing}
          >
            Pay Now
          </Button>
        </div>
      </div>
    </div>
  );
};