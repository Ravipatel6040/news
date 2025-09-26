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
    <div className="hidden lg:block w-64 space-y-6">
      <div className="bg-white p-4 shadow rounded-md">
        <h3 className="font-semibold text-gray-800 mb-3">Recommended</h3>
        <ul className="space-y-2 text-gray-600">
          {recommended.map((item, idx) => (
            <li key={idx} className="hover:text-indigo-600 cursor-pointer">
              #{item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
