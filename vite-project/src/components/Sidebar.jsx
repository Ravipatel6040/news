import React from 'react';

export default function Sidebar() {
  const recommended = [
    'Breaking News',
    'Elections 2025',
    'Cricket',
    'Technology Updates',
    'Stock Market',
  ];

  return (
    <div className="hidden lg:block w-72 space-y-6">
      <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">Recommended Topics</h3>
        <ul className="space-y-3 text-gray-700">
          {recommended.map((item, idx) => (
            <li
              key={idx}
              className="hover:text-indigo-600 cursor-pointer transition transform hover:translate-x-1 hover:font-medium"
            >
              #{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
