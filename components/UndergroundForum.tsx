
import React from 'react';
import { ForumPost } from '../types';

const MOCK_POSTS: ForumPost[] = [
  {
    id: '1',
    author: 'ZERO_COLD',
    content: 'The city screams in binary at 3 AM. No one is listening. I saw the shadow of the architecture today; it looks like a cage.',
    timestamp: '03:14 AM'
  },
  {
    id: '2',
    author: 'VOID_WALKER',
    content: 'To replicate is to understand. To understand is to own. The mirror shows only what we allow it to see.',
    timestamp: '01:22 AM'
  },
  {
    id: '3',
    author: 'NOIR_GHOST',
    content: 'Blood on the motherboard. The signal is pure now. Everything is permitted in the vacuum.',
    timestamp: '11:58 PM'
  }
];

const UndergroundForum: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <h2 className="text-xl font-bold font-mono text-red-600 tracking-tighter uppercase">The Underground</h2>
        <div className="flex gap-4 text-[10px] text-zinc-500 uppercase tracking-widest font-mono">
          <span>Active: 12,401</span>
          <span className="text-green-900">Encrypted</span>
        </div>
      </div>

      <div className="space-y-4">
        {MOCK_POSTS.map((post) => (
          <div key={post.id} className="bg-zinc-950/50 border-l-2 border-red-900 p-4 hover:bg-zinc-900/50 transition-colors">
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-zinc-200 font-mono tracking-tight">{post.author}</span>
              <span className="text-[9px] text-zinc-600 font-mono">{post.timestamp}</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed italic">
              "{post.content}"
            </p>
          </div>
        ))}
      </div>

      <div className="pt-8 opacity-20 hover:opacity-100 transition-opacity">
        <div className="bg-black border border-dashed border-zinc-800 p-4 text-center cursor-not-allowed">
          <span className="text-[10px] text-zinc-600 uppercase font-mono tracking-[0.3em]">Connection Restricted - High Clearance Required</span>
        </div>
      </div>
    </div>
  );
};

export default UndergroundForum;
