
import React, { useState } from 'react';
import { generateRawNarrative } from '../services/geminiService';
import { NarrativeResponse } from '../types';

const NarrativeEngine: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<NarrativeResponse | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const data = await generateRawNarrative(prompt);
      setResult(data);
    } catch (error) {
      console.error(error);
      setResult({ content: "The engine stalled. Reality is too stable." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-2 font-['Playfair_Display'] italic text-zinc-100">Visceral Storytelling</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          Input a theme, a scene, or a single raw word. The engine will strip away the gloss and reveal the darkness beneath. 
          Unflinching. Raw. Brutal.
        </p>
        
        <div className="relative group">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe a rainy street, a loaded gun, or a broken promise..."
            className="w-full bg-black border border-zinc-800 p-4 rounded text-zinc-200 focus:outline-none focus:border-red-900 transition-colors h-32 resize-none font-mono text-sm"
          />
          <div className="absolute inset-0 bg-red-600/5 pointer-events-none opacity-0 group-focus-within:opacity-100 transition-opacity rounded"></div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="mt-4 px-8 py-3 bg-red-700 hover:bg-red-600 disabled:bg-zinc-800 text-white font-bold uppercase text-xs tracking-widest rounded transition-all shadow-[0_4px_20px_rgba(185,28,28,0.3)] flex items-center gap-2"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Igniting the Void...
            </>
          ) : 'Manifest Narrative'}
        </button>
      </div>

      {result && (
        <div className="mt-12 space-y-4 animate-in fade-in duration-1000">
          <div className="flex items-center gap-4 border-b border-zinc-800 pb-2">
            <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-tighter">
              Intensity: {result.metadata?.intensity || '74'}%
            </span>
            <div className="h-1 flex-1 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-600" 
                style={{ width: `${result.metadata?.intensity || 74}%` }}
              ></div>
            </div>
          </div>
          <div className="text-zinc-300 leading-relaxed font-serif text-lg italic whitespace-pre-wrap selection:bg-red-900 selection:text-white">
            {result.content}
          </div>
          {result.metadata?.tags && (
            <div className="flex gap-2 mt-4">
              {result.metadata.tags.map(tag => (
                <span key={tag} className="text-[9px] bg-zinc-950 border border-zinc-800 px-2 py-1 text-zinc-500 uppercase tracking-widest">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NarrativeEngine;
