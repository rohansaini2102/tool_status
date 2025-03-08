import React from 'react';
import { categories } from '../data/toolsData';

const CategoryFilters = ({ activeCategory, setActiveCategory }) => {
  // Create an array with 'All' option and all categories from the data
  const categoryOptions = [
    { id: 'all', label: 'All' },
    ...categories.map(category => ({ id: category, label: category }))
  ];

  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {categoryOptions.map(category => (
        <button
          key={category.id}
          onClick={() => setActiveCategory(category.id)}
          className={`px-3 py-1 rounded-full text-sm ${
            activeCategory === category.id
              ? 'bg-blue-600 text-white'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilters; 