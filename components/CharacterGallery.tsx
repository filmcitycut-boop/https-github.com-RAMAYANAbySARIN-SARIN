
import React, { useState, useMemo } from 'react';
import { CHARACTERS } from '../constants';
import { Character } from '../types';
import CharacterCard from './CharacterCard';

interface CharacterGalleryProps {
  onSelectCharacter: (char: Character) => void;
}

const ROLES = ['all', 'protagonist', 'antagonist', 'divine', 'sage', 'vanara', 'rakshasa', 'other'] as const;

const CharacterGallery: React.FC<CharacterGalleryProps> = ({ onSelectCharacter }) => {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<typeof ROLES[number]>('all');

  const filteredCharacters = useMemo(() => {
    return CHARACTERS.filter(char => {
      const matchesSearch = char.name.toLowerCase().includes(search.toLowerCase()) || 
                           char.title.toLowerCase().includes(search.toLowerCase());
      const matchesFilter = activeFilter === 'all' || char.role === activeFilter;
      return matchesSearch && matchesFilter;
    });
  }, [search, activeFilter]);

  return (
    <section id="characters" className="max-w-7xl mx-auto py-20 px-6">
      <div className="flex flex-col mb-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div className="flex-1">
            <h2 className="heading-font text-5xl font-black text-amber-900 mb-2">Divine Pantheon</h2>
            <p className="text-amber-700 text-xl italic">Explore the legends that shape the eternal saga.</p>
          </div>
          <div className="w-full md:w-80 relative">
            <input 
              type="text" 
              placeholder="Search by name or title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-4 py-3 pl-10 bg-white border-2 border-amber-200 rounded-xl focus:border-amber-600 outline-none shadow-sm"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pb-4 overflow-x-auto no-scrollbar">
          {ROLES.map(role => (
            <button
              key={role}
              onClick={() => setActiveFilter(role)}
              className={`px-5 py-2 rounded-full font-bold text-sm transition-all border-2 capitalize
                ${activeFilter === role 
                  ? 'bg-amber-800 text-white border-amber-800' 
                  : 'bg-white text-amber-900 border-amber-200 hover:border-amber-400'}`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
      
      {filteredCharacters.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
          {filteredCharacters.map((char) => (
            <CharacterCard 
              key={char.id} 
              character={char} 
              onClick={() => onSelectCharacter(char)} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-orange-50/50 rounded-3xl border-2 border-dashed border-amber-200">
          <p className="text-2xl text-amber-800 heading-font">No characters found in the archives.</p>
          <button 
            onClick={() => { setSearch(''); setActiveFilter('all'); }}
            className="mt-4 text-amber-600 font-bold hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
};

export default CharacterGallery;
