
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getDharmaGuidance = async (userConcern: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: `Modern Concern: ${userConcern}`,
    config: {
      systemInstruction: "You are a wise sage providing advice based on the Ramayana. Relate modern human problems to the choices made by characters like Rama, Sita, Hanuman, or Bharat. Keep the tone compassionate, spiritual, and insightful. Return the response in a structured way focusing on 'The Lesson', 'The Character Example', and 'The Path Forward'.",
      temperature: 0.7,
    },
  });
  return response.text;
};

export const getSagesChat = async (history: { role: 'user' | 'model', text: string }[], newMessage: string) => {
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: "You are an expert on the Ramayana. Answer questions about its verses, characters, philosophy (Dharma), and history accurately based on Valmiki's Ramayana and Tulsidas's Ramcharitmanas. If asked about modern topics, bridge them with Ramayana wisdom.",
    },
  });

  const context = history.map(m => `${m.role}: ${m.text}`).join('\n');
  const response = await chat.sendMessage({ 
    message: context + "\nuser: " + newMessage 
  });
  
  return response.text;
};

export const getGeneralKnowledge = async (query: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: query,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });

  const text = response.text;
  const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
  
  // Extract URLs from grounding chunks
  const sources = groundingChunks
    .map((chunk: any) => chunk.web)
    .filter((web: any) => web && web.uri && web.title);

  return { text, sources };
};

export const generateCharacterPortrait = async (charName: string, charDescription: string) => {
  const prompt = `A cinematic, ultra-realistic 8k photograph of ${charName} from the Ramayana. ${charDescription}. High detailed, epic lighting, traditional ancient Indian attire, divine atmosphere, sharp focus, masterpiece.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};

export const generateEpicAssembly = async () => {
  const prompt = `A grand, wide-angle cinematic 8k group photograph of the main characters of the Ramayana standing together in the royal court of Ayodhya. Lord Rama in the center, Sita by his side, Lakshmana and Hanuman nearby, and other sages and warriors in the background. High-detail textures, golden hour lighting, epic composition, mythological realism, masterpiece.`;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash-image',
    contents: {
      parts: [{ text: prompt }],
    },
    config: {
      imageConfig: {
        aspectRatio: "16:9"
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  return null;
};
