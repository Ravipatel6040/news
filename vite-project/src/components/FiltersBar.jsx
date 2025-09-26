import React from 'react';

export default function FiltersBar({ filters, setFilters }) {
  return (
    <div className="flex flex-wrap items-center justify-between bg-white p-4 shadow rounded-md mb-6 gap-4">
      {/* Language */}
      <select
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.language}
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>

      {/* Location */}
      <select
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Category */}
      <select
        className="border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="Business">Business</option>
      </select>

      <button
        onClick={() => setFilters({ language: '', location: '', category: '' })}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Clear Filters
      </button>
    </div>
  );
}
