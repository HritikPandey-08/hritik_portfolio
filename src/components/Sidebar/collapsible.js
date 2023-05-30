import React, { useState } from 'react';
// // Import CSS file for styling

const CollapsibleContent = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleContent = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div>
      <button onClick={toggleContent}>
        {isCollapsed ? 'Show Content' : 'Hide Content'}
      </button>
      <div className={`collapsible-content ${isCollapsed ? 'collapsed' : ''}`}>
        <p>This is the collapsible content.</p>
        <p>It will be shown or hidden based on the button click.</p>
      </div>
    </div>
    
  );
};

export default CollapsibleContent;
