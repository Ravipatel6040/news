import React from 'react';
import { motion } from 'framer-motion';

export default function FiltersBar({ filters, setFilters }) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="flex flex-wrap items-center justify-between bg-gradient-to-r from-indigo-50 to-purple-50 p-4 shadow rounded-2xl mb-6 gap-4"
    >
      {/* Language */}
      <select
        className="border rounded-lg p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.language}
        onChange={(e) => setFilters({ ...filters, language: e.target.value })}
      >
        <option value="">All Languages</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>

      {/* Location */}
      <select
        className="border rounded-lg p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.location}
        onChange={(e) => setFilters({ ...filters, location: e.target.value })}
      >
        <option value="">All Locations</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      {/* Category */}
      <select
        className="border rounded-lg p-2 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        value={filters.category}
        onChange={(e) => setFilters({ ...filters, category: e.target.value })}
      >
        <option value="">All Categories</option>
        <option value="Politics">Politics</option>
        <option value="Sports">Sports</option>
        <option value="Business">Business</option>
      </select>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={() => setFilters({ language: '', location: '', category: '' })}
        className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
      >
        Clear Filters
      </motion.button>
    </motion.div>
  );
}
