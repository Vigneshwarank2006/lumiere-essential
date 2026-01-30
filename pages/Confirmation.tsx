import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { CheckCircle } from 'lucide-react';

export const Confirmation: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
        <CheckCircle className="w-8 h-8" />
      </div>
      
      <h1 className="font-serif text-4xl text-stone-900 mb-4">Thank you!</h1>
      <p className="text-lg text-stone-500 max-w-md mb-8">
        Your order has been placed successfully. We've sent a confirmation email to your inbox.
      </p>

      <div className="bg-stone-50 border border-stone-100 p-6 max-w-sm w-full mb-10 text-left">
        <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide mb-4">Order Details</h3>
        <p className="text-sm text-stone-600 mb-2">Order #: <span className="text-stone-900 font-medium">LUM-{Math.floor(Math.random() * 10000)}</span></p>
        <p className="text-sm text-stone-600">Estimated Delivery: <span className="text-stone-900 font-medium">3-5 Business Days</span></p>
      </div>

      <Link to="/">
        <Button variant="outline">Back to Home</Button>
      </Link>
    </div>
  );
};