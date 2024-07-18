'use client';

import { useState } from 'react';

export default function Home() {
  const [reflection, setReflection] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send reflection to backend
    console.log('Submitted:', reflection);
    setReflection('');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">InLove Daily Reflection</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <textarea
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          placeholder="Enter your daily reflection..."
          className="w-full h-32 p-2 border rounded"
        />
        <button 
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Reflection
        </button>
      </form>
    </main>
  );
}