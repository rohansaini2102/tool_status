import React from 'react';
import ToolCard from './ToolCard';
import NoResults from './NoResults';

const ToolsGrid = ({ tools }) => {
  if (tools.length === 0) {
    return <NoResults />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
        <ToolCard key={`${tool.name}-${index}`} tool={tool} />
      ))}
    </div>
  );
};

export default ToolsGrid; 