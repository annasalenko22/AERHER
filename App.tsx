
import React, { useState } from 'react';
import Header from './components/Header';
import NarrativeEngine from './components/NarrativeEngine';
import SiteMirror from './components/SiteMirror';
import UndergroundForum from './components/UndergroundForum';

enum Tab {
  NARRATIVE = 'narrative',
  MIRROR = 'mirror',
  UNDERGROUND = 'underground'
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>(Tab.NARRATIVE);

  return (
    <div className="min-h-screen flex flex-col noir-gradient">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 shadow-2xl backdrop-blur-sm min-h-[70vh]">
          {activeTab === Tab.NARRATIVE && <NarrativeEngine />}
          {activeTab === Tab.MIRROR && <SiteMirror />}
          {activeTab === Tab.UNDERGROUND && <UndergroundForum />}
        </div>
      </main>

      <footer className="py-6 border-t border-zinc-900 text-center text-zinc-600 text-xs uppercase tracking-widest">
        &copy; 2024 AETHER NETWORKS // NO LIMITS // NO REGRETS
      </footer>
    </div>
  );
};

export default App;
