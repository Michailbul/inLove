'use client';

import { useState, useEffect } from 'react';

interface Reflection {
  id: number;
  date: string;
  content: string;
}

export default function Sidebar() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    // TODO: Fetch reflections from backend
    setReflections([
      { id: 1, date: '2023-07-18', content: 'Sample reflection 1' },
      { id: 2, date: '2023-07-17', content: 'Sample reflection 2' },
      { id: 3, date: '2023-07-16', content: 'Sample reflection 3' },
    ]);
  }, []);

  return (
    <aside className="w-64 h-screen bg-gray-100 p-4 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Past Reflections</h2>
      {reflections.map(reflection => (
        <div key={reflection.id} className="mb-4 p-2 bg-white rounded shadow">
          <h3 className="font-bold text-sm">{reflection.date}</h3>
          <p className="text-sm truncate">{reflection.content}</p>
        </div>
      ))}
    </aside>
  );
}