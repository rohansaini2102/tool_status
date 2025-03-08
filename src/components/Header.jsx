import React from 'react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 text-center shadow-sm sticky top-0 z-10">
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
        Nexus Tools
      </h1>
      <p className="text-center bg-gradient-to-r from-gray-50 to-gray-100 py-3 px-4 rounded-lg text-gray-500 text-sm">
        <strong className="text-red-500">Tip:</strong> Click on any tool to visit its website or use category filters to find specific tools
      </p>
    </header>
  );
};

export default Header; 