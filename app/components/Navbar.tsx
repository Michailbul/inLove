import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-white font-bold">InLove</Link>
        <div>
          <Link href="/" className="text-white mr-4">Home</Link>
          <Link href="/past-reflections" className="text-white">Past Reflections</Link>
        </div>
      </div>
    </nav>
  );
}