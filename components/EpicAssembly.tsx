
import React, { useState } from 'react';
import { generateEpicAssembly } from '../services/geminiService';

const EpicAssembly: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState('');

  const messages = [
    "Opening the cosmic scrolls...",
    "Visualizing the Royal Court of Ayodhya...",
    "Gathering the great vanara warriors...",
    "Invoking the presence of Lord Rama...",
    "The divine assembly takes form..."
  ];

  const handleGenerate = async () => {
    setIsLoading(true);
    setImageUrl(null);
    let msgIndex = 0;
    const interval = setInterval(() => {
      setStatus(messages[msgIndex]);
      msgIndex = (msgIndex + 1) % messages.length;
    }, 2500);

    try {
      const url = await generateEpicAssembly();
      setImageUrl(url);
    } catch (error) {
      console.error(error);
    } finally {
      clearInterval(interval);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-24 px-6">
      <div className="bg-amber-950 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl border-4 border-amber-600/30">
        <div className="absolute inset-0 mandala-bg opacity-5"></div>
        
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1 bg-amber-600 text-white rounded-full text-xs font-black tracking-widest uppercase">
              GRAND VISUALIZATION
            </div>
            <h2 className="heading-font text-5xl md:text-7xl font-black text-white leading-tight">
              The Epic <br />
              <span className="text-amber-500">Assembly</span>
            </h2>
            <p className="text-amber-200/80 text-xl leading-relaxed">
              Witness the collective presence of the legends. Generate a unified "photograph" 
              of the central figures gathered in high mythological detail.
            </p>
            <button
              onClick={handleGenerate}
              disabled={isLoading}
              className="px-10 py-5 bg-amber-600 text-white rounded-2xl font-black text-lg hover:bg-amber-500 transition-all flex items-center gap-4 disabled:opacity-50 shadow-xl"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              )}
              {isLoading ? 'VISUALIZING...' : 'GENERATE GROUP PORTRAIT'}
            </button>
          </div>

          <div className="aspect-video bg-black/40 rounded-2xl border-2 border-amber-600/20 overflow-hidden flex items-center justify-center relative group">
            {imageUrl ? (
              <img src={imageUrl} alt="Epic Assembly" className="w-full h-full object-cover animate-in fade-in zoom-in duration-1000" />
            ) : isLoading ? (
              <div className="text-center p-8">
                <p className="heading-font text-amber-500 text-2xl animate-pulse mb-2">{status}</p>
                <div className="w-48 h-1 bg-amber-900 mx-auto rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 animate-progress"></div>
                </div>
              </div>
            ) : (
              <div className="text-center text-amber-600/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className="heading-font text-xl uppercase tracking-widest font-bold">Awaiting Vision</p>
              </div>
            )}
            
            {imageUrl && !isLoading && (
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <a 
                  href={imageUrl} 
                  download="Ramayana_Assembly.png"
                  className="px-6 py-3 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-500 transition-colors"
                >
                  Download Masterpiece
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpicAssembly;
