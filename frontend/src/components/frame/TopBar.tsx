import React, { useState } from 'react';

const TopBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 添加点击外部关闭菜单的处理函数
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('dropdown-menu');
      const button = document.getElementById('dropdown-button');
      
      if (dropdown && button && 
          !dropdown.contains(event.target as Node) && 
          !button.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between px-4" style={{ height: 'var(--topbar-h)' }}>
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-xl font-bold text-white">NewsAct</span>
      </div>

      {/* Dropdown Menu */}
      <div className="relative">
        <button 
          id="dropdown-button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 hover:opacity-75 transition-opacity rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {isDropdownOpen && (
          <div id="dropdown-menu" className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
            <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">Settings</a>
            <a href="#" className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100">User</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopBar;
