import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const LandingPage = () => {
  const [animationPhase, setAnimationPhase] = useState('initial');
  const navigate = useNavigate();

  useEffect(() => {
    const phases = [
      { phase: 'filling', delay: 1000 },
      { phase: 'splash', delay: 2000 },
      { phase: 'steam', delay: 3000 },
      { phase: 'complete', delay: 4000 }
    ];

    phases.forEach(({ phase, delay }) => {
      setTimeout(() => setAnimationPhase(phase), delay);
    });

    // Auto-redirect after animation
    setTimeout(() => {
      navigate('/home');
    }, 6000);
  }, [navigate]);

  const handleEnter = () => {
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden relative">
      {/* Animated Background Coffee Beans */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-3 bg-yellow-600 rounded-full opacity-20 animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}
      </div>

      <div className="text-center z-10 relative">
        {/* Coffee Cup Animation Container */}
        <div className="relative mb-12">
          {/* Coffee Cup SVG */}
          <div className="relative mx-auto w-48 h-48">
            {/* Cup outline */}
            <svg
              className="w-full h-full"
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cup body */}
              <path
                d="M40 180 L40 80 Q40 70 50 70 L150 70 Q160 70 160 80 L160 180 Q160 190 150 190 L50 190 Q40 190 40 180 Z"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                className="opacity-90"
              />
              
              {/* Coffee liquid with animation */}
              <path
                d="M45 175 L45 85 Q45 80 50 80 L150 80 Q155 80 155 85 L155 175 Q155 180 150 180 L50 180 Q45 180 45 175 Z"
                fill="#8B4513"
                className={`transition-all duration-1000 ${
                  animationPhase === 'initial' ? 'scale-y-0 origin-bottom' : 
                  animationPhase === 'filling' ? 'scale-y-100 origin-bottom' : 'scale-y-100'
                }`}
              />

              {/* Handle */}
              <path
                d="M160 100 Q180 100 180 120 Q180 140 160 140"
                fill="none"
                stroke="#FFD700"
                strokeWidth="3"
                className="opacity-90"
              />

              {/* Splash effect */}
              {animationPhase === 'splash' && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <circle
                      key={i}
                      cx={100 + Math.cos(i * 60 * Math.PI / 180) * 30}
                      cy={85 + Math.sin(i * 60 * Math.PI / 180) * 15}
                      r="3"
                      fill="#D2691E"
                      className="animate-ping"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    />
                  ))}
                </>
              )}
            </svg>

            {/* Steam animation */}
            {(animationPhase === 'steam' || animationPhase === 'complete') && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={`absolute w-1 h-12 bg-gradient-to-t from-white/60 to-transparent rounded-full animate-pulse`}
                    style={{
                      left: `${i * 10 - 10}px`,
                      animationDelay: `${i * 0.3}s`,
                      animation: `steamRise 2s infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Logo and Title */}
        <div className="space-y-6">
          <img 
            src="https://customer-assets.emergentagent.com/job_70ecc632-a415-4311-976a-3ef4a79fcfdc/artifacts/y2iq3wf6_447264785_999914622144139_7335207405736880486_n.jpg" 
            alt="Creamy Creations" 
            className={`mx-auto h-24 w-auto transition-all duration-1000 ${
              animationPhase === 'complete' ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          />
          
          <div className={`transition-all duration-1000 delay-500 ${
            animationPhase === 'complete' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
              Creamy Creations
            </h1>
            <p className="text-xl md:text-2xl text-yellow-200 mb-8">
              & Creamy Cafe
            </p>
            <p className="text-gray-300 text-lg mb-8">
              Where every sip tells a story
            </p>
            
            <button
              onClick={handleEnter}
              className="group bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 text-black font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-yellow-500/25 flex items-center mx-auto space-x-2"
            >
              <span>Enter Cafe</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform duration-300" size={20} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes steamRise {
          0% {
            opacity: 0.6;
            transform: translateY(0) scale(1);
          }
          50% {
            opacity: 0.3;
            transform: translateY(-20px) scale(1.2);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default LandingPage;