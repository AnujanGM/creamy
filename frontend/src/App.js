import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from './components/ui/sonner';
import Navigation from './components/Navigation';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import MenuPage from './components/MenuPage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Landing page route */}
          <Route path="/" element={<LandingPage />} />
          
          {/* Main app routes with navigation */}
          <Route path="/home" element={
            <>
              <Navigation />
              <HomePage />
            </>
          } />
          
          <Route path="/menu" element={
            <>
              <Navigation />
              <MenuPage />
            </>
          } />
          
          <Route path="/contact" element={
            <>
              <Navigation />
              <ContactPage />
            </>
          } />
          
          {/* Redirect any other route to landing */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;