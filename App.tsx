
import React, { useState, useEffect } from 'react';
import { Character } from './types';
import CharacterModal from './components/CharacterModal';
import CharacterGallery from './components/CharacterGallery';
import DharmaOracle from './components/DharmaOracle';
import ChatInterface from './components/ChatInterface';
import EpicAssembly from './components/EpicAssembly';
import CosmicKnowledgeHub from './components/CosmicKnowledgeHub';
import ForestBackground from './components/ForestBackground';
import SplashScreen from './components/SplashScreen';

const App: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [showSplash, setShowSplash] = useState(true);

  // If splash is showing, prevent scroll on body
  useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showSplash]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
      
      <div className={`min-h-screen flex flex-col relative overflow-x-hidden transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <ForestBackground />

        {/* Hero Section */}
        <header className="relative py-28 px-6 text-center overflow-hidden">
          <div className="max-w-5xl mx-auto space-y-6 relative z-10">
            <div className="inline-block px-4 py-1 border-2 border-amber-600 rounded-full text-amber-800 font-bold tracking-widest text-sm mb-4 bg-white/40 backdrop-blur-sm">
              ANCIENT WISDOM REBORN
            </div>
            <h1 className="heading-font text-6xl md:text-9xl font-black text-amber-900 drop-shadow-lg leading-tight">
              Ramayana <br />
              <span className="text-amber-600">Chronicles</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-800 max-w-3xl mx-auto leading-relaxed drop-shadow-sm font-medium">
              Journey into the sun-drenched heart of the Dandakaranya forest. Explore the eternal saga 
              of Lord Rama amongst the golden glades and divine spirits.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
              <a href="#characters" className="px-10 py-4 bg-amber-800 text-white rounded-full font-bold hover:bg-amber-900 transition-all shadow-lg hover:shadow-xl text-lg">
                Explore the Pantheon
              </a>
              <a href="#cosmic-hub" className="px-10 py-4 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-all shadow-lg hover:shadow-xl text-lg flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.4503-1.4553c-1.13.514-1.59 1.355-1.675 2.163-.055.51.14 1.13.543 1.533a1 1 0 001.414-1.414c-.1-.1-.13-.243-.11-.383.023-.19.094-.367.205-.516l1.076-1.076zM15.657 5.464a1 1 0 10-1.414-1.414l-1.077 1.077c-.11.11-.182.263-.205.414-.023.15.01.303.11.414.403.403 1.023.598 1.533.543.808-.084 1.648-.544 2.163-1.675a1 1 0 00-1.455-1.45a1 1 0 00-.517.205l-1.148 1.148zM10.707 9.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Cosmic Hub
              </a>
            </div>
          </div>
        </header>

        <main className="flex-grow relative z-10">
          {/* Character Gallery with subtle background */}
          <div className="bg-white/10 backdrop-blur-[1px]">
            <CharacterGallery onSelectCharacter={setSelectedCharacter} />
          </div>

          {/* Epic Assembly Section */}
          <div className="py-12">
            <EpicAssembly />
          </div>

          {/* General Knowledge Section */}
          <section id="cosmic-hub" className="py-12">
            <CosmicKnowledgeHub />
          </section>

          {/* Oracle Section */}
          <section id="oracle" className="mb-20">
            <DharmaOracle />
          </section>

          {/* Story Section / Chat - Parchment Style */}
          <section className="max-w-7xl mx-auto py-20 px-6 parchment-bg rounded-3xl mb-20 shadow-xl border-4 border-amber-900/10">
            <div className="text-center mb-12">
              <h2 className="heading-font text-5xl font-black text-amber-900 mb-4">Hermitage Dialogues</h2>
              <p className="text-amber-800 text-xl max-w-2xl mx-auto italic leading-relaxed">
                "Deepen your understanding of the Ramayana by conversing with the keepers of history."
              </p>
            </div>
            
            <ChatInterface />
          </section>

          {/* Quote Section - Bright Emerald Sunshine Variant */}
          <section className="bg-amber-100/60 backdrop-blur-md text-amber-900 py-32 px-6 text-center relative overflow-hidden border-y border-amber-600/20">
             <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/leaf.png")' }}></div>
             <div className="max-w-4xl mx-auto relative z-10">
                <span className="text-5xl text-amber-500 mb-4 block">"</span>
                <p className="text-3xl md:text-5xl heading-font leading-tight italic mb-8 text-amber-900">
                  Ramo Vigrahavan Dharmah <br />
                  <span className="text-xl md:text-2xl not-italic mt-6 block text-amber-700 font-bold uppercase tracking-widest">
                    "Rama is the embodiment of righteousness itself."
                  </span>
                </p>
                <div className="h-1.5 w-32 bg-amber-600 mx-auto rounded-full shadow-sm"></div>
             </div>
          </section>
        </main>

        <footer className="bg-amber-900/90 backdrop-blur-md text-amber-100 py-16 px-6 mt-20 border-t border-amber-800/30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="heading-font text-3xl font-bold text-white mb-3">Ramayana Chronicles</h3>
              <p className="text-base opacity-90 max-w-md">Preserving and presenting the timeless wisdom of the Sanskrit epic through modern intelligence.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold tracking-widest uppercase">
              <a href="#" className="hover:text-amber-200 transition-colors">Dharma Philosophy</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Epic Gallery</a>
              <a href="#" className="hover:text-amber-200 transition-colors">Sacred Verses</a>
            </div>
            <div className="text-xs opacity-70 text-center">
              &copy; {new Date().getFullYear()} Digital Dharma Initiatives. <br />
              An homage to the sage Valmiki.
            </div>
          </div>
        </footer>

        <CharacterModal 
          character={selectedCharacter} 
          onClose={() => setSelectedCharacter(null)} 
        />
      </div>
    </>
  );
};

export default App;
