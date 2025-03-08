import { useState, useMemo } from 'react';

export const useToolsFilter = (initialTools) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTools = useMemo(() => {
    let filtered = [...initialTools];
    
    // Apply search filter
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase().trim();
      filtered = filtered.filter(tool => 
        tool.name.toLowerCase().includes(searchLower) ||
        tool.limits.toLowerCase().includes(searchLower) ||
        tool.categories.some(category => category.toLowerCase().includes(searchLower)) ||
        (tool.tags && tool.tags.some(tag => tag.toLowerCase().includes(searchLower)))
      );
    }
    
    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered.filter(tool =>
        tool.categories.includes(activeCategory) || 
        (tool.tags && tool.tags.includes(activeCategory))
      );
    }
    
    return filtered;
  }, [initialTools, searchTerm, activeCategory]);

  return {
    searchTerm,
    setSearchTerm,
    activeCategory,
    setActiveCategory,
    filteredTools
  };
}; 