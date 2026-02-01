
import React, { useState } from 'react';
import { analyzeSiteLayout } from '../services/geminiService';

const SiteMirror: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [analysis, setAnalysis] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!url.trim()) return;
    setLoading(true);
    try {
      const data = await analyzeSiteLayout(url);
      setAnalysis(data);
    } catch (error) {
      console.error(error);
      setAnalysis("Forensic scan failed. The target is shielded.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-bold mb-2 font-['Playfair_Display'] italic text-zinc-100">Architect Mirror</h2>
        <p className="text-zinc-400 text-sm leading-relaxed mb-6">
          Mimic. Replicate. Deconstruct. Provide a target URL to receive a full forensic breakdown of its UI architecture, from its skeletal structure to its final aesthetic skin.
        </p>
        
        <div className="flex gap-2">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="target-domain.com"
            className="flex-1 bg-black border border-zinc-800 p-3 rounded text-zinc-200 focus:outline-none focus:border-red-900 transition-colors font-mono text-sm"
          />
          <button
            onClick={handleAnalyze}
            disabled={loading}
            className="px-6 py-3 bg-zinc-100 hover:bg-white text-black font-bold uppercase text-xs tracking-widest rounded transition-all disabled:bg-zinc-800 disabled:text-zinc-500"
          >
            {loading ? 'Scanning...' : 'Clone Logic'}
          </button>
        </div>
      </div>

      {analysis && (
        <div className="mt-8 bg-black/40 border border-zinc-800 p-6 rounded-sm font-mono text-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-red-500 text-[10px] tracking-[0.2em] font-bold">DECONSTRUCTION_LOG</span>
            <span className="text-zinc-700 text-[10px]">SOURCE: {url}</span>
          </div>
          <div className="text-zinc-400 whitespace-pre-wrap leading-relaxed">
            {analysis}
          </div>
        </div>
      )}
    </div>
  );
};

export default SiteMirror;
