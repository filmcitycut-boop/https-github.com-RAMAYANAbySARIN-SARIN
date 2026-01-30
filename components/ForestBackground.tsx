
import React from 'react';

const LordSun: React.FC = () => {
  return (
    <div className="lord-sun-container">
      {/* Outer Glow */}
      <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-[60px]"></div>
      
      {/* Outer Rays Layer 1 */}
      <svg className="sun-ray-layer sun-ray-1 opacity-40" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="rayGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[...Array(12)].map((_, i) => (
          <rect
            key={i}
            x="48" y="0" width="4" height="100"
            fill="url(#rayGrad1)"
            transform={`rotate(${i * 30} 50 50)`}
          />
        ))}
      </svg>

      {/* Outer Rays Layer 2 */}
      <svg className="sun-ray-layer sun-ray-2 opacity-30" viewBox="0 0 100 100">
        {[...Array(8)].map((_, i) => (
          <path
            key={i}
            d="M50 0 L55 30 L45 30 Z"
            fill="#f59e0b"
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}
      </svg>

      {/* Sun Core */}
      <div className="absolute inset-[25%] sun-core bg-gradient-to-br from-white via-amber-200 to-amber-500 rounded-full shadow-[0_0_50px_rgba(251,191,36,0.8)] flex items-center justify-center">
        {/* Divine Symbol - OM */}
        <span className="text-amber-900/40 text-4xl md:text-6xl font-black select-none">ॐ</span>
      </div>
    </div>
  );
};

const ForestBackground: React.FC = () => {
  return (
    <div className="forest-container">
      {/* Divine Lord Sun Animation */}
      <LordSun />
      
      {/* Distant Trees - Brighter Greens/Yellows */}
      <svg className="absolute bottom-0 left-0 w-full h-2/3 opacity-15 sway" viewBox="0 0 1000 500" preserveAspectRatio="none">
        <path d="M0 500 L50 400 L100 480 L150 350 L200 450 L250 300 L300 420 L400 250 L500 450 L600 200 L700 480 L800 300 L900 450 L1000 400 L1000 500 Z" fill="#4ade80" />
      </svg>

      {/* Mid Trees with Monkey Silhouettes - Warmer Tones */}
      <svg className="absolute bottom-0 w-full h-1/2 opacity-20 sway" style={{ animationDelay: '-2s' }} viewBox="0 0 1000 500" preserveAspectRatio="none">
        <path d="M-50 500 C100 400 150 100 300 500 M200 500 C350 200 450 150 600 500 M500 500 C650 100 800 200 950 500" stroke="#78350f" strokeWidth="40" fill="none" />
        {/* Simple Monkey Silhouette */}
        <circle cx="310" cy="420" r="10" fill="#451a03" />
        <circle cx="310" cy="440" r="15" fill="#451a03" />
      </svg>

      {/* Sunshine Rays */}
      <div className="sunshine-rays"></div>

      {/* Animated Birds */}
      <svg className="bird" style={{ top: '20%', animationDuration: '25s', animationDelay: '0s' }} width="30" height="20" viewBox="0 0 30 20">
        <path d="M0 10 Q7.5 0 15 10 Q22.5 0 30 10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="bird" style={{ top: '35%', animationDuration: '30s', animationDelay: '5s' }} width="25" height="15" viewBox="0 0 30 20">
        <path d="M0 10 Q7.5 0 15 10 Q22.5 0 30 10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      <svg className="bird" style={{ top: '15%', animationDuration: '20s', animationDelay: '12s' }} width="35" height="25" viewBox="0 0 30 20">
        <path d="M0 10 Q7.5 0 15 10 Q22.5 0 30 10" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      {/* Falling Golden Leaves */}
      {[...Array(15)].map((_, i) => (
        <svg 
          key={i} 
          className="leaf" 
          style={{ 
            left: `${Math.random() * 100}%`, 
            animationDuration: `${12 + Math.random() * 25}s`, 
            animationDelay: `${Math.random() * 15}s` 
          }} 
          width="15" height="15" viewBox="0 0 20 20"
        >
          <path d="M10 0 C15 5 20 10 10 20 C0 10 5 5 10 0" />
        </svg>
      ))}

      {/* Foreground Foliage - Bright Emerald */}
      <svg className="absolute -bottom-10 -left-10 w-64 h-64 opacity-25 sway" style={{ animationDuration: '5s' }} viewBox="0 0 200 200">
        <path d="M100 200 Q120 150 180 140 M100 200 Q80 150 20 140 M100 200 Q100 120 100 40" stroke="#059669" strokeWidth="10" fill="none" strokeLinecap="round" />
        <circle cx="100" cy="40" r="15" fill="#059669" />
      </svg>
    </div>
  );
};

export default ForestBackground;
