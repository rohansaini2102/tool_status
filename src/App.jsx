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
