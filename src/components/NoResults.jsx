import React from 'react';

const NoResults = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-8 text-center w-full">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">No tools found</h3>
      <p className="text-gray-600">Try adjusting your search or filters</p>
    </div>
  );
};

export default NoResults; 