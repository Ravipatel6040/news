import React from 'react';
import StoryCard from './StoryCard';
import story1 from '../assets/images/story-1.jpg';
import story2 from '../assets/images/story-2.jpg';
import story3 from '../assets/images/story-3.jpg';

const sample = [
  { id:1, title:'Local Startup Raises Seed Round', img: story1, meta:{likes:120,comments:10,shares:8} },
  { id:2, title:'City Council Approves New Park', img: story2, meta:{likes:98,comments:12,shares:4} },
  { id:3, title:'New Tech Hub Opens Downtown', img: story3, meta:{likes:76,comments:7,shares:2} },
];

export default function TrendingStories(){
  return (
    <section id="trending" className="my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Trending Stories</h2>
        <a href="#" className="text-sm sm:text-base text-indigo-600 font-semibold hover:underline transition">View all</a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {sample.map(s => (
          <StoryCard 
            key={s.id} 
            story={s} 
            className="bg-white rounded-3xl overflow-hidden shadow-lg transform transition-all duration-300 cursor-pointer hover:-translate-y-3 hover:shadow-2xl"
          />
        ))}
      </div>
    </section>
  );
}