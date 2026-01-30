
import React, { useState } from 'react';
import { getGeneralKnowledge } from '../services/geminiService';

const CosmicKnowledgeHub: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ text: string, sources: any[] } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setResult(null);
    try {
      const data = await getGeneralKnowledge(query);
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <div className="bg-indigo-950 rounded-[2.5rem] overflow-hidden shadow-2xl border-b-8 border-indigo-600 relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-50"></div>
        
        <div className="p-10 md:p-16 text-center space-y-8">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 bg-indigo-600/30 text-indigo-300 rounded-full text-xs font-black tracking-widest uppercase">
              Cosmic Insight Engine
            </span>
            <h2 className="heading-font text-4xl md:text-6xl text-white font-black">
              Beyond the <span className="text-indigo-400">Epic Lore</span>
            </h2>
            <p className="text-indigo-200/70 text-lg max-w-2xl mx-auto">
              Ask anything about the world, science, or modern events. Gemini AI will scan the modern world and provide grounded answers.
            </p>
          </div>

          <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative group">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. 'How does Ramayana influence modern management?' or 'What is the speed of light?'"
              className="w-full bg-white/5 border-2 border-indigo-500/30 rounded-2xl px-8 py-5 text-white placeholder-indigo-300/40 outline-none focus:border-indigo-400 transition-all text-lg pr-32"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-3 top-3 bottom-3 px-8 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-500 transition-all flex items-center gap-2 shadow-lg disabled:opacity-50"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                  Search
                </>
              )}
            </button>
          </form>

          {result && (
            <div className="mt-12 text-left bg-white/5 rounded-3xl p-8 border border-white/10 animate-in fade-in slide-in-from-bottom-6 duration-700">
              <div className="prose prose-invert max-w-none">
                <p className="text-indigo-100 text-xl leading-relaxed whitespace-pre-wrap">
                  {result.text}
                </p>
              </div>

              {result.sources.length > 0 && (
                <div className="mt-10 pt-8 border-t border-white/10">
                  <h4 className="text-indigo-400 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    Knowledge Sources
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {result.sources.map((source, idx) => (
                      <a
                        key={idx}
                        href={source.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-indigo-900/40 hover:bg-indigo-800 text-indigo-200 px-4 py-2 rounded-lg text-sm transition-colors border border-indigo-500/20 flex items-center gap-2"
                      >
                        <span className="font-bold opacity-50">{idx + 1}</span>
                        {source.title}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CosmicKnowledgeHub;
