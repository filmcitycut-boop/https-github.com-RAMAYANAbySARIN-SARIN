
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getSagesChat } from '../services/geminiService';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Namaste. I am a keeper of the ancient tales. What would you like to know about the journey of Rama or the wisdom of the Ramayana?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      const response = await getSagesChat(messages, input);
      setMessages(prev => [...prev, { role: 'model', text: response || "The chronicles are momentarily obscured." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "A storm has disrupted our connection to the hermitage." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 bg-white rounded-2xl shadow-2xl border-2 border-amber-200 overflow-hidden flex flex-col h-[600px]">
      <div className="bg-amber-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center font-bold">ॐ</div>
          <div>
            <h3 className="heading-font font-bold">Hermitage Dialogues</h3>
            <p className="text-xs text-amber-200">Chat with the Sages</p>
          </div>
        </div>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-orange-50/30">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm ${
              m.role === 'user' 
                ? 'bg-amber-600 text-white rounded-tr-none' 
                : 'bg-white border border-amber-100 text-gray-800 rounded-tl-none'
            }`}>
              <p className="whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white border border-amber-100 p-4 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-100" />
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-bounce delay-200" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-amber-100 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask about a character, event, or verse..."
          className="flex-1 px-4 py-2 border border-amber-200 rounded-full focus:outline-none focus:border-amber-600"
        />
        <button
          onClick={handleSend}
          disabled={isTyping}
          className="bg-amber-800 text-white p-2 rounded-full hover:bg-amber-900 transition-colors disabled:opacity-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChatInterface;
