import React, { useState, useEffect } from 'react';
import { Sparkles, Zap, Star } from 'lucide-react';

const SplashScreen = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const steps = [
    { text: "Welcome to", highlight: "Assist", delay: 1000 },
    { text: "Your Academic", highlight: "Success Partner", delay: 1500 },
    { text: "Ready to", highlight: "Excel?", delay: 1000 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(onComplete, 500);
        }, 1500);
      }
    }, steps[currentStep]?.delay || 1000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete, steps]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-white/15 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Sparkles className="absolute top-20 left-20 w-8 h-8 text-white/60 animate-bounce delay-300" />
        <Zap className="absolute top-32 right-32 w-6 h-6 text-white/50 animate-bounce delay-700" />
        <Star className="absolute bottom-32 left-32 w-7 h-7 text-white/70 animate-bounce delay-500" />
        <Sparkles className="absolute bottom-20 right-20 w-5 h-5 text-white/40 animate-bounce delay-1000" />
      </div>

      {/* Main Content */}
      <div className="text-center z-10 px-8">
        {/* Logo */}
        <div className="mb-8 transform transition-all duration-1000 animate-bounce-in">
          <div className="mx-auto w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30 shadow-2xl">
            <span className="text-3xl font-black text-white tracking-wider">A</span>
          </div>
        </div>

        {/* Text Animation */}
        <div className="space-y-2 min-h-[120px] flex flex-col justify-center">
          <div 
            key={currentStep}
            className="animate-fade-in-up"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
              {steps[currentStep]?.text}
            </h1>
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-300 via-pink-300 to-blue-300 bg-clip-text text-transparent tracking-tight animate-shimmer">
              {steps[currentStep]?.highlight}
            </h2>
          </div>
        </div>

        {/* Loading Indicator */}
        <div className="mt-12 flex justify-center">
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i <= currentStep ? 'bg-white scale-110' : 'bg-white/30'
                }`}
                style={{
                  animationDelay: `${i * 200}ms`
                }}
              />
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="mt-8 text-white/80 text-lg font-medium animate-fade-in delay-1000">
          Elevating your academic journey
        </p>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-32 fill-white/10">
          <path d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z">
            <animate
              attributeName="d"
              dur="10s"
              repeatCount="indefinite"
              values="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z;
                      M0,80 C300,40 600,120 900,80 C1050,50 1150,90 1200,80 L1200,120 L0,120 Z;
                      M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            />
          </path>
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;