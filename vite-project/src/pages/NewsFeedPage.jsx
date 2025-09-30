import React, { useState } from 'react';
import FiltersBar from '../components/FiltersBar';
import SortOptions from '../components/SortOptions';
import StoryCard from '../components/StoryCards';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';

// Images
import placeholderImg from '../assets/images/placeholder.png';
import Startup from '../assets/images/startup.jpg';
import Stock from '../assets/images/stock.jpg';
import Election from "../assets/images/election.jpg";
import Merge from "../assets/images/merge.jpg";
import Space from "../assets/images/space.jpg";

export default function NewsFeedPage() {
  const [filters, setFilters] = useState({ language: '', location: '', category: '' });
  const [sort, setSort] = useState('latest');

  const stories = [
    {
      title: 'India Wins Cricket Match!',
      snippet: 'India defeated Australia in a thrilling match...',
      image: placeholderImg,
      reporter: 'Ravi Patel',
      verified: true,
      likes: 120,
      comments: 45,
    },
    {
      title: 'New Tech Startup Launch',
      snippet: 'A new startup is disrupting the market with innovative AI solutions...',
      image: Startup,
      reporter: 'Anita Singh',
      verified: false,
      likes: 90,
      comments: 20,
    },
    {
      title: 'Stock Market Soars',
      snippet: 'Sensex and Nifty hit record highs today as investors remain bullish...',
      image: Stock,
      reporter: 'Raj Malhotra',
      verified: true,
      likes: 200,
      comments: 70,
    },
    {
      title: 'Elections 2025 Updates',
      snippet: 'Major political rallies and campaigns are heating up across the country...',
      image: Election,
      reporter: 'Priya Sharma',
      verified: false,
      likes: 140,
      comments: 50,
    },
    {
      title: 'Tech Giants Merge',
      snippet: 'Two of the biggest tech companies announce a groundbreaking merger...',
      image: Merge,
      reporter: 'Karan Mehta',
      verified: true,
      likes: 310,
      comments: 120,
    },
    {
      title: 'SpaceX Launch Successful',
      snippet: 'SpaceX successfully launched another satellite into orbit...',
      image: Space,
      reporter: 'Elon Bhai',
      verified: true,
      likes: 500,
      comments: 200,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-white to-purple-200">
      <div className="max-w-7xl mx-auto p-4 lg:p-8">
        {/* Filters + Sort */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl p-4 border border-white/40">
            <FiltersBar filters={filters} setFilters={setFilters} />
            <SortOptions sort={sort} setSort={setSort} />
          </div>
        </motion.div>

        <div className="lg:flex lg:gap-8">
          {/* News Grid */}
          <motion.div
            className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {stories.map((story, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  scale: 1.07,        // thoda aur bada
                  y: -20,             // aur upar uth jaye
                  boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                }}
                whileTap={{ scale: 0.98 }} // click par halka pressure effect
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 18,
                }}
                className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-indigo-400/50"
              >
                <StoryCard story={story} />
              </motion.div>
            ))}
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 lg:mt-0 lg:w-80"
          >
            <div className="sticky top-4">
              <Sidebar />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
