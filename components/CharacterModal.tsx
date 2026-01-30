
import React, { useState, useEffect } from 'react';
import { Character } from '../types';
import { generateCharacterPortrait } from '../services/geminiService';

interface CharacterModalProps {
  character: Character | null;
  onClose: () => void;
}

const CharacterModal: React.FC<CharacterModalProps> = ({ character, onClose }) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [visionUrl, setVisionUrl] = useState<string | null>(null);

  // Clear vision when character changes
  useEffect(() => {
    setVisionUrl(null);
  }, [character]);

  if (!character) return null;

  const handleInvokeVision = async () => {
    setIsGenerating(true);
    try {
      const url = await generateCharacterPortrait(character.name, character.description);
      setVisionUrl(url);
    } catch (error) {
      console.error("Divine vision failed:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 sm:p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      <div className="bg-[#fffaf0] w-full h-full sm:h-auto sm:max-w-4xl sm:rounded-3xl overflow-hidden shadow-2xl relative border-0 sm:border-4 border-amber-600 flex flex-col md:flex-row">
        
        {/* Close Button - Optimized for touch */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-900 bg-white/90 hover:bg-white rounded-full p-3 transition-colors z-30 shadow-xl border border-amber-200"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image Section */}
        <div className="w-full h-1/2 md:h-auto md:w-1/2 relative bg-amber-900 overflow-hidden">
          <img 
            src={visionUrl || character.imageUrl} 
            alt={character.name} 
            className={`w-full h-full object-cover transition-all duration-1000 ${isGenerating ? 'opacity-30 blur-xl scale-110' : 'opacity-100 blur-0 scale-100'}`}
          />
          {isGenerating && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-8 text-center">
              <div className="w-12 h-12 border-4 border-amber-400 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="heading-font text-lg font-bold animate-pulse">Invoking Divine Vision...</p>
            </div>
          )}
          {!visionUrl && !isGenerating && (
            <div className="absolute bottom-4 left-4 right-4 flex justify-center pointer-events-none">
              <p className="text-white/80 font-black text-[10px] tracking-[0.2em] uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">Classic Representation</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10 md:w-1/2 space-y-6 overflow-y-auto max-h-1/2 md:max-h-[80vh] flex flex-col">
          <div className="space-y-1">
            <h2 className="heading-font text-3xl md:text-5xl font-black text-amber-900 leading-tight">{character.name}</h2>
            <p className="text-amber-600 font-bold italic tracking-wide text-sm md:text-base">{character.title}</p>
          </div>
          
          <div className="h-1 w-16 bg-amber-600 rounded"></div>
          
          <p className="text-gray-800 leading-relaxed text-base md:text-lg italic">
            "{character.description}"
          </p>

          <div className="space-y-3">
            <h4 className="font-black text-amber-900 text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
              Attributes
            </h4>
            <div className="flex flex-wrap gap-2">
              {character.traits.map(trait => (
                <span key={trait} className="px-3 py-1 bg-orange-100 text-orange-900 rounded-lg text-[10px] font-black uppercase border border-orange-200">
                  {trait}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-auto border-t border-amber-200">
            <button
              onClick={handleInvokeVision}
              disabled={isGenerating}
              className="w-full py-4 bg-amber-800 text-white rounded-2xl font-black hover:bg-amber-900 transition-all flex items-center justify-center gap-3 shadow-lg disabled:opacity-50 active:scale-95 touch-manipulation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {visionUrl ? 'REGENERATE VISION' : 'INVOKE DIVINE VISION'}
            </button>
            <p className="text-[9px] text-center mt-3 text-amber-600/50 uppercase font-bold tracking-tighter">
              A.I. Generated Mythological Reconstruction
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterModal;
