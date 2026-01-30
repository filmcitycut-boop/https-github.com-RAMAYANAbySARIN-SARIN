
export interface Character {
  id: string;
  name: string;
  title: string;
  description: string;
  traits: string[];
  imageUrl: string;
  role: 'protagonist' | 'antagonist' | 'divine' | 'sage' | 'vanara' | 'rakshasa' | 'other';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface DharmaAdvice {
  situation: string;
  guidance: string;
  characterReference: string;
}
