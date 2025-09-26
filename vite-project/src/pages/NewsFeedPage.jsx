import React, { useState } from 'react';
import FiltersBar from '../components/FiltersBar';
import SortOptions from '../components/SortOptions';
import StoryCard from '../components/StoryCards';
import Sidebar from '../components/Sidebar';

export default function NewsFeedPage() {
  const [filters, setFilters] = useState({ language: '', location: '', category: '' });
  const [sort, setSort] = useState('latest');

  // Sample news data
  const stories = [
    {
      title: 'India Wins Cricket Match!',
      snippet: 'India defeated Australia in a thrilling match...',
      image: '/src/assets/images/placeholder.jpg',
      reporter: 'Ravi Patel',
      verified: true,
      likes: 120,
      comments: 45,
    },
    {
      title: 'New Tech Startup Launch',
      snippet: 'A new startup is disrupting the market with innovative AI solutions...',
      image: '/src/assets/images/placeholder.jpg',
      reporter: 'Anita Singh',
      verified: false,
      likes: 90,
      comments: 20,
    },
    // Add more stories here
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-4 lg:p-6">
        {/* Filters */}
        <FiltersBar filters={filters} setFilters={setFilters} />

        {/* Sort */}
        <SortOptions sort={sort} setSort={setSort} />

        {/* Content */}
        <div className="lg:flex lg:gap-6">
          {/* News Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {stories.map((story, idx) => (
              <StoryCard key={idx} story={story} />
            ))}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
