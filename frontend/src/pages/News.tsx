import React from 'react';

const News = () => (
  <div className="flex-1 overflow-y-auto p-4 bg-gray-100" style={{ 
    marginTop: 'var(--topbar-h)', 
    marginBottom: 'var(--bottombar-h)' 
  }}>
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">Welcome</h2>
      <p className="text-gray-600">
        This is a mobile-first application layout with a state bar, navigation bar,
        and content area.
      </p>
    </div>
    {Array.from({ length: 5 }).map((_, i) => (
      <div key={i} className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="text-md font-medium mb-2">Content Card {i + 1}</h3>
        <p className="text-gray-600">Sample content for demonstration.</p>
      </div>
    ))}
  </div>
);

export default News; 