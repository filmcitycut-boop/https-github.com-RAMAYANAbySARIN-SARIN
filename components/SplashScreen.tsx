
import React, { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState<'fade-in' | 'visible' | 'fade-out'>('fade-in');

  useEffect(() => {
    // Sequence: Fade in (1s) -> Stay (3s) -> Fade out (1.5s)
    const timer1 = setTimeout(() => setStage('visible'), 100);
    const timer2 = setTimeout(() => setStage('fade-out'), 4000);
    const timer3 = setTimeout(() => onComplete(), 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-[1500ms] ease-in-out ${
        stage === 'fade-out' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Background Image - Cinematic Ramayana Portrait */}
        <img 
          src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1600" 
          alt="Ramayana Epic" 
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out scale-110 ${
            stage === 'visible' ? 'scale-100' : ''
          } opacity-40`}
        />
        
        {/* Decorative Mandala overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <svg className="w-[80vw] h-[80vw] animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="45" fill="none" stroke="gold" strokeWidth="0.1" />
            <path d="M50 5 L55 20 L70 20 L58 30 L63 45 L50 35 L37 45 L42 30 L30 20 L45 20 Z" fill="gold" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="relative z-10 text-center space-y-4 px-6">
          <div className={`transition-all duration-1000 delay-300 transform ${
            stage !== 'fade-in' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <span className="heading-font text-amber-500 tracking-[0.4em] text-sm md:text-xl font-bold uppercase mb-2 block">
              A Divine Presentation
            </span>
            <h1 className="heading-font text-5xl md:text-8xl font-black text-white leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
              RAMAYANA
            </h1>
          </div>
          
          <div className={`transition-all duration-1000 delay-1000 transform ${
            stage !== 'fade-in' ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
          }`}>
            <div className="h-[2px] w-32 md:w-64 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto my-6"></div>
            <p className="heading-font text-2xl md:text-4xl text-amber-200 font-bold tracking-widest">
              BY SARIN & SON
            </p>
          </div>
          
          <div className={`mt-12 transition-all duration-1000 delay-1500 ${
            stage !== 'fade-in' ? 'opacity-100' : 'opacity-0'
          }`}>
             <div className="flex items-center justify-center gap-4 text-amber-500/60">
                <span className="w-12 h-[1px] bg-current"></span>
                <span className="text-xs font-black uppercase tracking-tighter">Enter the Chronicles</span>
                <span className="w-12 h-[1px] bg-current"></span>
             </div>
          </div>
        </div>

        {/* Cinematic Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-80"></div>
      </div>
    </div>
  );
};

export default SplashScreen;
