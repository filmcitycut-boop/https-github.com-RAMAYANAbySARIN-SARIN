
import React from 'react';
import { Character } from '../types';

interface CharacterCardProps {
  character: Character;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative cursor-pointer overflow-hidden rounded-xl shadow-lg transition-transform hover:-translate-y-2 hover:shadow-2xl border-2 border-transparent hover:border-amber-400 bg-white"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img 
          src={character.imageUrl} 
          alt={character.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 flex flex-col justify-end">
        <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-1">{character.role}</p>
        <h3 className="heading-font text-white text-xl font-bold">{character.name}</h3>
        <p className="text-gray-300 text-sm line-clamp-1">{character.title}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
