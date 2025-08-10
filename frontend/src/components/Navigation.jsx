import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { items } = useCart();

  // total count = sum of qty
  const count = items.reduce((sum, i) => sum + i.qty, 0);

  // bump animation when count changes
  const [bump, setBump] = useState(false);
  useEffect(() => {
    if (count <= 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 300);
    return () => clearTimeout(t);
  }, [count]);

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/home" className="flex items-center space-x-2 group">
            <img 
              src="https://customer-assets.emergentagent.com/job_70ecc632-a415-4311-976a-3ef4a79fcfdc/artifacts/y2iq3wf6_447264785_999914622144139_7335207405736880486_n.jpg" 
              alt="Creamy Cafe" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-yellow-400">Creamy Cafe</h1>
              <p className="text-xs text-yellow-200/80">Creations & Cafe</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white hover:text-yellow-400 transition-all duration-300 font-medium relative group ${
                  location.pathname === item.path ? 'text-yellow-400' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.path ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}

            {/* Cart button with badge */}
            <Link
              to="/cart"
              className="relative inline-flex items-center gap-2 text-white hover:text-yellow-400 transition"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Cart</span>
              <span
                className={`absolute -top-2 -right-3 min-w-5 h-5 px-1 rounded-full bg-yellow-500 text-black text-xs font-bold flex items-center justify-center
                ${bump ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
                aria-label={`${count} items in cart`}
              >
                {count}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Cart (always visible on mobile too) */}
            <Link to="/cart" className="relative text-white hover:text-yellow-400 transition">
              <ShoppingCart className="w-6 h-6" />
              <span
                className={`absolute -top-2 -right-2 min-w-5 h-5 px-1 rounded-full bg-yellow-500 text-black text-[10px] font-bold flex items-center justify-center
                ${bump ? 'scale-110' : 'scale-100'} transition-transform duration-300`}
              >
                {count}
              </span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-yellow-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[...navItems, { path: '/cart', label: 'Cart' }].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300 font-medium ${
                  location.pathname === item.path ? 'text-yellow-400' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
