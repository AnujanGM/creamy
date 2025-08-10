import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';
import CartPage from './components/CartPage';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Landing page */}
            <Route path="/" element={<LandingPage />} />

            {/* Menu */}
            <Route path="/menu" element={
              <>
                <Navigation />
                <MenuPage />
              </>
            } />

            {/* Home */}
            <Route path="/home" element={
              <>
                <Navigation />
                <HomePage />
              </>
            } />

            {/* Contact */}
            <Route path="/contact" element={
              <>
                <Navigation />
                <ContactPage />
              </>
            } />

            {/* Cart */}
            <Route path="/cart" element={
              <>
                <Navigation />
                <CartPage />
              </>
            } />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          <Toaster />
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
