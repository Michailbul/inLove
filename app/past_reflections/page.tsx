'use client';

import { useState, useEffect } from 'react';

interface Reflection {
  id: number;
  date: string;
  content: string;
}

export default function PastReflections() {
  const [reflections, setReflections] = useState<Reflection[]>([]);

  useEffect(() => {
    // TODO: Fetch reflections from backend
    setReflections([
      { id: 1, date: '2023-07-18', content: 'Sample reflection 1' },
      { id: 2, date: '2023-07-17', content: 'Sample reflection 2' },
    ]);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Past Reflections</h1>
      <div className="w-full max-w-lg">
        {reflections.map(reflection => (
          <div key={reflection.id} className="mb-4 p-4 border rounded">
            <h3 className="font-bold">{reflection.date}</h3>
            <p>{reflection.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}