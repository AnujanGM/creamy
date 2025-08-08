import React, { useState, useEffect } from 'react';
import { Star, Clock, ChefHat } from 'lucide-react';

const FeaturedItem = ({ item }) => {
  const [currentLayer, setCurrentLayer] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        startAnimation();
      }
    }, 8000); // Restart animation every 8 seconds

    return () => clearInterval(interval);
  }, [isAnimating]);

  const startAnimation = () => {
    setIsAnimating(true);
    setCurrentLayer(-1);
    
    // Animate each layer
    item.layers.forEach((layer, index) => {
      setTimeout(() => {
        setCurrentLayer(index);
      }, layer.delay * 1000);
    });

    // Reset after all layers are shown
    setTimeout(() => {
      setCurrentLayer(-1);
      setIsAnimating(false);
    }, 6000);
  };

  const handleManualStart = () => {
    if (!isAnimating) {
      startAnimation();
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/20 shadow-2xl">
      <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* 3D Animation Container */}
        <div className="relative flex-1 flex justify-center">
          <div className="relative w-80 h-80">
            
            {/* Coffee Cup Base */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-56 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-3xl rounded-t-lg border-4 border-yellow-500/30 shadow-lg relative">
                {/* Cup handle */}
                <div className="absolute -right-6 top-12 w-8 h-16 border-4 border-yellow-500/30 rounded-r-full"></div>
                
                {/* Coffee base layer */}
                <div className="absolute bottom-2 left-2 right-2 h-44 bg-gradient-to-t from-amber-900 to-amber-700 rounded-b-2xl"></div>
              </div>
            </div>

            {/* Floating Ingredients */}
            {item.layers.map((layer, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-1000 ease-out ${
                  currentLayer >= index 
                    ? 'opacity-100' 
                    : currentLayer === -1 
                      ? 'opacity-30' 
                      : 'opacity-0'
                }`}
                style={{
                  transform: currentLayer >= index 
                    ? 'translateY(0) translateX(0) scale(1)' 
                    : currentLayer === -1
                      ? `translateY(${-60 + index * -40}px) translateX(${Math.sin(index) * 30}px) scale(0.8)`
                      : `translateY(${-120 + index * -60}px) translateX(${Math.sin(index) * 50}px) scale(0.6)`,
                  zIndex: item.layers.length - index
                }}
              >
                <div
                  className={`w-32 h-8 rounded-full shadow-lg border-2 border-white/20 flex items-center justify-center text-xs font-semibold text-white ${
                    currentLayer === index ? 'animate-pulse' : ''
                  }`}
                  style={{ 
                    backgroundColor: layer.color,
                    left: '50%',
                    top: '50%',
                    transform: 'translateX(-50%) translateY(-50%)'
                  }}
                >
                  {currentLayer === index && (
                    <span className="drop-shadow-lg">{layer.name}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Sparkle Effects */}
            {isAnimating && (
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-ping"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Item Details */}
        <div className="flex-1 text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start space-x-2 mb-4">
            <Star className="text-yellow-400 fill-current" size={20} />
            <span className="text-yellow-400 font-semibold">Featured Item</span>
          </div>
          
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            {item.name}
          </h3>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            {item.description}
          </p>
          
          <div className="flex items-center justify-center lg:justify-start space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-green-400">
              <ChefHat size={18} />
              <span className="text-sm">Freshly Made</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock size={18} />
              <span className="text-sm">5-7 mins</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start space-x-4">
            <span className="text-3xl font-bold text-yellow-400">
              {item.price}
            </span>
            <button
              onClick={handleManualStart}
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
              disabled={isAnimating}
            >
              {isAnimating ? 'Watch Magic...' : 'See Layers'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;