
import React, { useState } from 'react';
import { getDharmaGuidance } from '../services/geminiService';

const DharmaOracle: React.FC = () => {
  const [concern, setConcern] = useState('');
  const [guidance, setGuidance] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concern.trim()) return;

    setIsLoading(true);
    try {
      const result = await getDharmaGuidance(concern);
      setGuidance(result || "The sages are silent at this moment. Please try again later.");
    } catch (error) {
      console.error(error);
      setGuidance("An error occurred in the heavens. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-orange-50 border-y-4 border-amber-600 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-font text-4xl font-black text-amber-900 mb-4">Dharma Oracle</h2>
        <p className="text-amber-800 text-lg mb-8 italic">
          "Seek clarity for your modern dilemmas through the timeless wisdom of the Great Epic."
        </p>

        <form onSubmit={handleSubmit} className="relative max-w-2xl mx-auto mb-8">
          <input
            type="text"
            value={concern}
            onChange={(e) => setConcern(e.target.value)}
            placeholder="Describe your situation (e.g., 'I am struggling with a choice between career and family duty...')"
            className="w-full px-6 py-4 rounded-full border-2 border-amber-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none text-lg pr-32 shadow-inner"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="absolute right-2 top-2 bottom-2 px-6 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
            ) : (
              'Consult'
            )}
          </button>
        </form>

        {guidance && (
          <div className="bg-white p-8 rounded-2xl shadow-xl text-left border-l-8 border-amber-600 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="heading-font text-2xl text-amber-900 mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Wisdom Revealed
            </h3>
            <div className="prose prose-amber max-w-none">
              <div className="whitespace-pre-wrap text-gray-800 text-lg leading-relaxed">
                {guidance}
              </div>
            </div>
            <button 
              onClick={() => setGuidance(null)}
              className="mt-6 text-amber-700 font-bold hover:underline"
            >
              Consult again?
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DharmaOracle;
