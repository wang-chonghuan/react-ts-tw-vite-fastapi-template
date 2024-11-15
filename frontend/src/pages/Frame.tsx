import React, { useState } from 'react';
import { Newspaper, MessageCircle } from 'lucide-react';
import News from './News';
import Chat from './Chat';

// StateBar Component
const StateBar = () => (
  <div className="h-12 bg-gray-800 text-white flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-10">
    <span className="text-sm font-medium">12:30</span>
    <div className="flex items-center space-x-2">
      <span className="text-sm">4G</span>
      <span className="text-sm">80%</span>
    </div>
  </div>
);

// NaviBar Component
const NaviBar = ({ activeTab, onTabChange }: { 
  activeTab: string; 
  onTabChange: (tab: string) => void;
}) => (
  <div className="h-16 bg-white border-t border-gray-200 flex items-center justify-around fixed bottom-0 left-0 right-0 z-10">
    <button
      onClick={() => onTabChange('news')}
      className={`flex flex-col items-center p-2 ${
        activeTab === 'news' ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      <Newspaper size={24} />
      <span className="text-xs mt-1">News</span>
    </button>
    <button
      onClick={() => onTabChange('chat')}
      className={`flex flex-col items-center p-2 ${
        activeTab === 'chat' ? 'text-blue-600' : 'text-gray-600'
      }`}
    >
      <MessageCircle size={24} />
      <span className="text-xs mt-1">Chat</span>
    </button>
  </div>
);

// Main App Component
const Frame = () => {
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="relative mx-auto" style={{
      minWidth: '300px',
      maxWidth: '800px'
    }}>
      <StateBar />
      {activeTab === 'news' ? <News /> : <Chat />}
      <NaviBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Frame;