import React, { useState, useEffect } from 'react';
import { Star, Clock, ChefHat, RotateCcw } from 'lucide-react';

const FeaturedItem = ({ item }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [isExploded, setIsExploded] = useState(false);
  const [animationPhase, setAnimationPhase] = useState('idle');

  useEffect(() => {
    const autoAnimationInterval = setInterval(() => {
      if (animationPhase === 'idle') {
        startScientificAnimation();
      }
    }, 12000); // Auto-restart every 12 seconds

    return () => clearInterval(autoAnimationInterval);
  }, [animationPhase]);

  const startScientificAnimation = () => {
    setAnimationPhase('starting');
    setIsRotating(true);

    // Phase 1: Start rotation
    setTimeout(() => {
      setAnimationPhase('exploding');
      setIsExploded(true);
    }, 1500);

    // Phase 2: Continue rotation with explosion for 6 seconds
    setTimeout(() => {
      setAnimationPhase('reassembling');
      setIsExploded(false);
    }, 8000);

    // Phase 3: Reassemble and stop
    setTimeout(() => {
      setIsRotating(false);
      setAnimationPhase('idle');
    }, 10000);
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 border border-yellow-500/20 shadow-2xl overflow-hidden">
      
      {/* Scientific Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Advanced 3D Scientific Animation Container */}
        <div className="relative flex-1 flex justify-center">
          <div className="relative w-96 h-96 perspective-1000">
            
            {/* Main Container with 360° Rotation */}
            <div 
              className={`relative w-full h-full transition-transform duration-1000 ease-in-out transform-style-3d ${
                isRotating ? 'animate-spin-y-360' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                animation: isRotating ? 'scientificRotate 6s linear infinite' : 'none'
              }}
            >
              
              {/* Central Assembly Point - Coffee Cup */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="relative">
                  <div className="w-32 h-36 bg-gradient-to-b from-gray-200 to-gray-300 rounded-b-2xl rounded-t-lg border-3 border-yellow-500/40 shadow-2xl relative transform transition-all duration-500"
                    style={{
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))'
                    }}>
                    
                    {/* Cup Handle with 3D effect */}
                    <div className="absolute -right-4 top-8 w-6 h-12 border-3 border-yellow-500/40 rounded-r-full"></div>
                    
                    {/* Base liquid layer */}
                    <div className="absolute bottom-1 left-1 right-1 h-28 bg-gradient-to-t from-amber-900 via-amber-700 to-amber-600 rounded-b-xl opacity-90"></div>
                  </div>
                </div>
              </div>

              {/* Scientific Layer Visualization */}
              {item.layers.map((layer, index) => {
                const angle = (index * 90) + (isRotating ? 45 : 0); // Scientific positioning
                const radius = isExploded ? 120 + (index * 20) : 60 + (index * 15);
                const elevation = isExploded ? -40 + (index * -25) : -20 + (index * -8);
                
                return (
                  <div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out"
                    style={{
                      transform: `
                        translateX(${Math.cos(angle * Math.PI / 180) * radius}px)
                        translateY(${Math.sin(angle * Math.PI / 180) * radius + elevation}px)
                        translateZ(${isExploded ? index * 30 : index * 5}px)
                        rotateX(${isRotating ? '25deg' : '0deg'})
                        rotateY(${isRotating ? angle * 2 : 0}deg)
                        scale(${isExploded ? 1.2 : 0.9})
                      `,
                      zIndex: item.layers.length - index
                    }}
                  >
                    {/* Scientific Layer Representation */}
                    <div className="relative">
                      
                      {/* Layer Shape */}
                      <div
                        className={`w-24 h-6 rounded-full shadow-xl border-2 border-white/30 relative overflow-hidden transition-all duration-500 ${
                          isRotating ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          backgroundColor: layer.color,
                          boxShadow: `0 8px 32px ${layer.color}40, inset 0 2px 8px rgba(255,255,255,0.2)`
                        }}
                      >
                        {/* Layer Texture Effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      </div>

                      {/* Scientific Labels */}
                      {(isExploded || animationPhase === 'exploding') && (
                        <div className="absolute -right-32 top-1/2 transform -translate-y-1/2">
                          <div className="bg-black/80 text-yellow-400 text-xs font-mono px-2 py-1 rounded border border-yellow-500/30 whitespace-nowrap">
                            {layer.name}
                          </div>
                          <div 
                            className="absolute left-0 top-1/2 w-8 h-px bg-yellow-400/60"
                            style={{ transform: 'translateY(-50%) translateX(-100%)' }}
                          ></div>
                        </div>
                      )}

                      {/* Connection Lines to Center */}
                      {isExploded && (
                        <div 
                          className="absolute w-px bg-gradient-to-r from-yellow-400/60 to-transparent"
                          style={{
                            height: `${radius * 0.6}px`,
                            left: '50%',
                            top: '50%',
                            transformOrigin: 'top',
                            transform: `translateX(-50%) translateY(-50%) rotate(${225 + angle}deg)`
                          }}
                        ></div>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Scientific Measurement Rings */}
              {isExploded && (
                <>
                  {[1, 2, 3].map((ring) => (
                    <div
                      key={ring}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      <div 
                        className="border border-yellow-500/20 rounded-full animate-pulse"
                        style={{
                          width: `${ring * 80}px`,
                          height: `${ring * 80}px`,
                          animation: `scientificPulse ${2 + ring}s linear infinite`
                        }}
                      ></div>
                    </div>
                  ))}
                </>
              )}

              {/* Particle System */}
              {isRotating && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-yellow-400 rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                        animation: `particleOrbit ${3 + Math.random() * 2}s linear infinite`,
                        animationDelay: `${i * 0.2}s`,
                        transform: `rotate(${i * 30}deg) translateX(${60 + Math.random() * 40}px)`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Scientific HUD Elements */}
            {animationPhase !== 'idle' && (
              <div className="absolute inset-0 pointer-events-none">
                
                {/* Corner Brackets */}
                {[0, 1, 2, 3].map((corner) => (
                  <div
                    key={corner}
                    className={`absolute w-8 h-8 border-yellow-500/60 ${
                      corner === 0 ? 'top-4 left-4 border-t-2 border-l-2' :
                      corner === 1 ? 'top-4 right-4 border-t-2 border-r-2' :
                      corner === 2 ? 'bottom-4 left-4 border-b-2 border-l-2' :
                      'bottom-4 right-4 border-b-2 border-r-2'
                    }`}
                  />
                ))}

                {/* Status Indicator */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/80 border border-yellow-500/30 rounded px-3 py-1">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-yellow-400 text-xs font-mono uppercase tracking-wider">
                      {animationPhase === 'starting' ? 'INITIALIZING' :
                       animationPhase === 'exploding' ? 'ANALYZING' :
                       animationPhase === 'reassembling' ? 'SYNTHESIZING' : 'STANDBY'}
                    </span>
                  </div>
                </div>
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