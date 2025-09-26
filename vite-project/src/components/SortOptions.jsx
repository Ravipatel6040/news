import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid'; // Optional: heroicons for dropdown icon

export default function SortOptions({ sort, setSort }) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
      
      {/* Title */}
      <span className="text-gray-700 font-semibold text-lg">Sort News By:</span>

      {/* Dropdown */}
      <div className="relative w-full md:w-60">
        <select
          className="appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 pl-4 pr-10 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="trending">Trending</option>
          <option value="verified">Verified</option>
          <option value="paid">Paid</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <ChevronDownIcon className="h-5 w-5 text-gray-400" />
        </div>
      </div>

    </div>
  );
}
