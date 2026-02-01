
import React from 'react';

enum Tab {
  NARRATIVE = 'narrative',
  MIRROR = 'mirror',
  UNDERGROUND = 'underground'
}

interface HeaderProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="border-b border-zinc-800 bg-black/80 sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="w-10 h-10 bg-red-600 rounded-sm flex items-center justify-center font-bold text-black rotate-45 shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            <span className="-rotate-45">Æ</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-white italic">AETHER <span className="text-red-600">/ NOIR</span></h1>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono">Transgressive Fiction & Digital Deconstruction</p>
          </div>
        </div>

        <nav className="flex space-x-1 bg-zinc-950 p-1 rounded-md border border-zinc-900">
          {[
            { id: Tab.NARRATIVE, label: 'Narrative Engine' },
            { id: Tab.MIRROR, label: 'Architect Mirror' },
            { id: Tab.UNDERGROUND, label: 'The Underground' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`px-4 py-2 text-xs font-mono uppercase transition-all duration-300 rounded ${
                activeTab === tab.id
                  ? 'bg-zinc-800 text-red-500 shadow-inner'
                  : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
