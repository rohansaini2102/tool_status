import React from 'react';

const ToolCard = ({ tool }) => {
  // Extract domain for favicon
  const getDomain = (url) => {
    try {
      return new URL(url).hostname;
    } catch (e) {
      return url.split('/')[2];
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:-translate-y-1 transition-transform duration-200 hover:shadow-md">
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="block">
        <div className="flex justify-between items-center p-4 border-b border-gray-100">
          <div className="flex items-center">
            <img 
              src={`https://www.google.com/s2/favicons?domain=${getDomain(tool.url)}&sz=32`} 
              alt="" 
              className="w-6 h-6 mr-2"
            />
            <h3 className="font-semibold text-gray-800">{tool.name}</h3>
          </div>
          <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
            {tool.status}
          </span>
        </div>
        <div className="p-4">
          <div className="mb-3">
            <span className="block text-xs font-medium text-gray-500 mb-1">
              Usage Limits
            </span>
            <div className="text-sm text-gray-700">{tool.limits}</div>
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {tool.categories.map(category => (
              <span 
                key={category} 
                className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-600"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
};

export default ToolCard; 