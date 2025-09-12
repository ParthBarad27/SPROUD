import React, { useState } from 'react';
import type { Resource } from '../data';
import { mockResources } from '../data';
import { Video, Headphones, FileText, Heart } from 'lucide-react';
import './Resources.css'; // optional CSS

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = mockResources.filter((r) =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIcon = (type: Resource['type']) => {
    switch (type) {
      case 'video': return <Video />;
      case 'audio': return <Headphones />;
      case 'article': return <FileText />;
      case 'meditation': return <Heart />;
    }
  };

  return (
    <div className="resources-container">
      <h2>Resource Library</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="resources-list">
        {filteredResources.map((r) => (
          <div key={r.id} className="resource-card">
            {getIcon(r.type)}
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
