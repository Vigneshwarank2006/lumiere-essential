import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();
  const { currentUser, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="font-serif text-2xl tracking-tight text-stone-900">
              Lumière.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className={`text-sm font-medium transition-colors ${isActive('/shop') ? 'text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
            >
              Shop All
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors"
            >
              Our Story
            </Link>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <button className="text-stone-400 hover:text-stone-600">
              <Search className="h-5 w-5" />
            </button>
            {currentUser ? (
              <button
                onClick={() => logout()}
                className="text-stone-400 hover:text-stone-600 hidden sm:block text-sm font-medium"
              >
                Logout
              </button>
            ) : (
              <Link to="/login" className="text-stone-400 hover:text-stone-600 hidden sm:block">
                <User className="h-5 w-5" />
              </Link>
            )}
            <Link to="/cart" className="relative text-stone-800 hover:text-stone-600">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-stone-800 text-stone-50 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              className="md:hidden text-stone-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-stone-50 border-t border-stone-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 text-base font-medium text-stone-900 rounded-md hover:bg-stone-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="block px-3 py-2 text-base font-medium text-stone-900 rounded-md hover:bg-stone-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shop All
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 text-base font-medium text-stone-900 rounded-md hover:bg-stone-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Story
            </Link>
            {currentUser ? (
              <button
                className="block w-full text-left px-3 py-2 text-base font-medium text-stone-900 rounded-md hover:bg-stone-100"
                onClick={() => {
                  logout();
                  setIsMobileMenuOpen(false);
                }}
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 text-base font-medium text-stone-900 rounded-md hover:bg-stone-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};