
import React from 'react';
import { Character } from './types';

export const CHARACTERS: Character[] = [
  // A
  {
    id: 'agastya',
    name: 'Agastya',
    title: 'The Pot-Born Rishi',
    description: 'A legendary sage who gave Rama the divine bow and arrow. He is the brother of Vishrava and uncle to Ravana.',
    traits: ['Wisdom', 'Divine Power', 'Asceticism'],
    imageUrl: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?q=80&w=800',
    role: 'sage'
  },
  {
    id: 'ahalya',
    name: 'Ahalya',
    title: 'The Redeemed',
    description: 'Wife of Sage Gautama, liberated from a stone curse by the touch of Rama’s feet.',
    traits: ['Purity', 'Penance', 'Grace'],
    imageUrl: 'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=800',
    role: 'other'
  },
  {
    id: 'angada',
    name: 'Angada',
    title: 'The Valiant Prince',
    description: 'Son of Vali and Tara, a powerful vanara who served as an envoy and warrior in Rama’s army.',
    traits: ['Strength', 'Diplomacy', 'Loyalty'],
    imageUrl: 'https://images.unsplash.com/photo-1544717297-fa95b3ee51f3?q=80&w=800',
    role: 'vanara'
  },
  {
    id: 'atikaya',
    name: 'Atikaya',
    title: 'The Invincible Archer',
    description: 'Son of Ravana, owner of divine armor granted by Brahma. He was only defeatable by the Brahmastra.',
    traits: ['Invincibility', 'Valor', 'Armor'],
    imageUrl: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=800',
    role: 'rakshasa'
  },
  // B
  {
    id: 'bharata',
    name: 'Bharata',
    title: 'Symbol of Selflessness',
    description: 'Rama’s younger brother who ruled Ayodhya with Rama’s sandals on the throne during the exile.',
    traits: ['Sacrifice', 'Dharma', 'Love'],
    imageUrl: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=800',
    role: 'protagonist'
  },
  // D
  {
    id: 'dasharatha',
    name: 'Dasharatha',
    title: 'King of Ayodhya',
    description: 'Rama’s father, whose tragic death followed the exile of his beloved eldest son.',
    traits: ['Truthfulness', 'Duty', 'Tragedy'],
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    role: 'protagonist'
  },
  // H
  {
    id: 'hanuman',
    name: 'Hanuman',
    title: 'The Monkey God',
    description: 'The epitome of devotion and strength, son of Anjana and Vayu, and the most loyal devotee of Rama.',
    traits: ['Devotion', 'Power', 'Humility'],
    imageUrl: 'https://images.unsplash.com/photo-1520110120835-c96a9ef9569d?q=80&w=800',
    role: 'divine'
  },
  // I
  {
    id: 'indrajit',
    name: 'Indrajit',
    title: 'Conqueror of Indra',
    description: 'Ravana’s son, a master of illusions and the only warrior to possess the three ultimate weapons of Trimurti.',
    traits: ['Might', 'Illusion', 'Bravery'],
    imageUrl: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=800',
    role: 'antagonist'
  },
  // J
  {
    id: 'jatayu',
    name: 'Jatayu',
    title: 'The Noble Vulture',
    description: 'A divine bird who fought valiantly against Ravana to save Sita, sacrificing his life in the process.',
    traits: ['Valor', 'Sacrifice', 'Loyalty'],
    imageUrl: 'https://images.unsplash.com/photo-1510137600163-2729bc6959a6?q=80&w=800',
    role: 'divine'
  },
  // K
  {
    id: 'kaikeyi',
    name: 'Kaikeyi',
    title: 'The Bound Queen',
    description: 'The queen whose two boons led to Rama’s exile, though she later regretted her actions.',
    traits: ['Complexity', 'Love', 'Ambition'],
    imageUrl: 'https://images.unsplash.com/photo-1528642463367-1d30f31fbb0d?q=80&w=800',
    role: 'other'
  },
  {
    id: 'kumbhakarna',
    name: 'Kumbhakarna',
    title: 'The Sleeping Giant',
    description: 'Ravana’s brother, a giant of immense strength who slept for six months at a time.',
    traits: ['Power', 'Appetite', 'Loyalty'],
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800',
    role: 'rakshasa'
  },
  // L
  {
    id: 'lakshmana',
    name: 'Lakshmana',
    title: 'The Eternal Guard',
    description: 'Rama’s inseparable brother who chose exile to protect Rama and Sita for 14 years without sleep.',
    traits: ['Fierce Loyalty', 'Service', 'Focus'],
    imageUrl: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800',
    role: 'protagonist'
  },
  // M
  {
    id: 'mandodari',
    name: 'Mandodari',
    title: 'The Virtuous Queen',
    description: 'The pious chief consort of Ravana who constantly advised him to follow the path of Dharma.',
    traits: ['Piety', 'Wisdom', 'Purity'],
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
    role: 'rakshasa'
  },
  // R
  {
    id: 'rama',
    name: 'Lord Rama',
    title: 'Maryada Purushottama',
    description: 'The protagonist, an avatar of Vishnu, the embodiment of Dharma and the ideal human.',
    traits: ['Righteousness', 'Calmness', 'Justice'],
    imageUrl: 'https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=800',
    role: 'protagonist'
  },
  {
    id: 'ravana',
    name: 'Ravana',
    title: 'The Ten-Headed King',
    description: 'The scholarly yet egoistic king of Lanka, a great devotee of Shiva whose hubris led to his downfall.',
    traits: ['Knowledge', 'Ego', 'Might'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
    role: 'antagonist'
  },
  // S
  {
    id: 'shabari',
    name: 'Shabari',
    title: 'The Patient Devotee',
    description: 'An elderly ascetic who waited years for Rama and offered him tasted berries with pure love.',
    traits: ['Faith', 'Patience', 'Devotion'],
    imageUrl: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=800',
    role: 'other'
  },
  {
    id: 'shurpanakha',
    name: 'Shurpanakha',
    title: 'The Scorned Rakshasi',
    description: 'Ravana’s sister whose advances toward Rama and Lakshmana led to the conflict with Ravana.',
    traits: ['Passion', 'Envy', 'Chaos'],
    imageUrl: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=800',
    role: 'rakshasa'
  },
  {
    id: 'sita',
    name: 'Mata Sita',
    title: 'Inspiration of Virtue',
    description: 'The incarnation of Lakshmi, a symbol of resilience, purity, and silent strength.',
    traits: ['Resilience', 'Grace', 'Purity'],
    imageUrl: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800',
    role: 'protagonist'
  },
  {
    id: 'sugriva',
    name: 'Sugriva',
    title: 'The Vanara King',
    description: 'Brother of Vali and an ally of Rama, who helped Rama find Sita with his vast vanara army.',
    traits: ['Friendship', 'Bravery', 'Gratitude'],
    imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800',
    role: 'vanara'
  },
  // T
  {
    id: 'trijata',
    name: 'Trijata',
    title: 'The Compassionate Guardian',
    description: 'A demoness guarding Sita in Ashoka Vatika who became her friend and comforted her.',
    traits: ['Kindness', 'Empathy', 'Loyalty'],
    imageUrl: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800',
    role: 'rakshasa'
  },
  // U
  {
    id: 'urmila',
    name: 'Urmila',
    title: 'The Silent Sacrificer',
    description: 'Lakshmana’s wife who endured 14 years of separation and shared her husband’s sleep burden.',
    traits: ['Patience', 'Sacrifice', 'Fortitude'],
    imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800',
    role: 'protagonist'
  },
  // V
  {
    id: 'vibhishana',
    name: 'Vibhishana',
    title: 'The Righteous Rakshasa',
    description: 'Ravana’s brother who chose the side of Dharma and aided Rama in the war.',
    traits: ['Truth', 'Courage', 'Dharma'],
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=800',
    role: 'rakshasa'
  },
  {
    id: 'vishvamitra',
    name: 'Vishvamitra',
    title: 'The Royal Sage',
    description: 'A king-turned-sage who mentored Rama and Lakshmana in their youth.',
    traits: ['Discipline', 'Power', 'Guidance'],
    imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800',
    role: 'sage'
  }
];

export const MANDALA_SVG = (
  <svg className="absolute top-0 right-0 -z-10 w-96 h-96 opacity-10" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
    <path d="M50 5 L55 20 L70 20 L58 30 L63 45 L50 35 L37 45 L42 30 L30 20 L45 20 Z" fill="currentColor" opacity="0.5" />
  </svg>
);
