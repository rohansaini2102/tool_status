import React from 'react';
import { toolsData } from './data/toolsData';
import { useToolsFilter } from './hooks/useToolsFilter';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import CategoryFilters from './components/CategoryFilters';
import ToolsGrid from './components/ToolsGrid';

function App() {
  const { 
    searchTerm, 
    setSearchTerm, 
    activeCategory, 
    setActiveCategory, 
    filteredTools 
  } = useToolsFilter(toolsData);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Tailwind Test Element */}
      <div className="bg-blue-500 text-white p-4 m-4 rounded-lg shadow-lg">
        <p className="font-bold">Tailwind CSS Test</p>
        <p className="text-sm">If this box is blue with white text, Tailwind is working!</p>
      </div>
      
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilters activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ToolsGrid tools={filteredTools} />
      </main>
    </div>
  );
}

export default App;
