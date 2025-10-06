import React, { useState } from 'react';
import FiltersBar from '../components/FiltersBar';
import SortOptions from '../components/SortOptions';
import StoryCard from '../components/StoryCards';
import Sidebar from '../components/Sidebar';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Images
import placeholderImg from '../assets/images/placeholder.png';
import Startup from '../assets/images/startup.jpg';
import Stock from '../assets/images/stock.jpg';
import Election from "../assets/images/election.jpg";
import Merge from "../assets/images/merge.jpg";
import Space from "../assets/images/space.jpg";

export default function NewsFeedPage() {
  const { t } = useTranslation();

  const [filters, setFilters] = useState({ language: '', location: '', category: '' });
  const [sort, setSort] = useState('latest');

  const stories = [
    { title: t('stories.indiaCricket.title'), snippet: t('stories.indiaCricket.snippet'), image: placeholderImg, reporter: 'Ravi Patel', verified: true, likes: 120, comments: 45 },
    { title: t('stories.techStartup.title'), snippet: t('stories.techStartup.snippet'), image: Startup, reporter: 'Anita Singh', verified: false, likes: 90, comments: 20 },
    { title: t('stories.stockMarket.title'), snippet: t('stories.stockMarket.snippet'), image: Stock, reporter: 'Raj Malhotra', verified: true, likes: 200, comments: 70 },
    { title: t('stories.elections.title'), snippet: t('stories.elections.snippet'), image: Election, reporter: 'Priya Sharma', verified: false, likes: 140, comments: 50 },
    { title: t('stories.techMerge.title'), snippet: t('stories.techMerge.snippet'), image: Merge, reporter: 'Karan Mehta', verified: true, likes: 310, comments: 120 },
    { title: t('stories.spacex.title'), snippet: t('stories.spacex.snippet'), image: Space, reporter: 'Elon Bhai', verified: true, likes: 500, comments: 200 },
  ];

  return (
    <>
      {/* Top Highlight Section */}
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-10">

          {/* Left Large Card */}
          <div className="sm:col-span-6 lg:col-span-5">
            <a href="#">
              <div
                className="h-56 bg-cover text-center overflow-hidden"
                style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/06/GettyImages-1222922545.jpg?quality=85&w=364&h=204&crop=1')" }}
                title={t('topHighlight.title')}
              />
            </a>
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="lg:pl-16">
                <a href="#" className="text-xs text-indigo-600 uppercase font-medium mb-3 flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                  {t('topHighlight.category')}
                </a>
                <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                  {t('topHighlight.title')}
                </a>
                <p className="text-gray-700 text-xs mt-2">
                  {t('topHighlight.description')}
                </p>
              </div>
            </div>
          </div>

          {/* Middle Small Cards */}
          <div className="sm:col-span-6 lg:col-span-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="flex items-start mb-3 pb-3">
                <a href="#" className="inline-block mr-3">
                  <div
                    className="w-20 h-20 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://media.gettyimages.com/photos/cristiano-ronaldo-of-juventus-fc-looks-dejected-during-the-uefa-of-picture-id1227967060?k=6&m=1227967060&s=612x612&w=0&h=cMSMlRyI6YAzcE_C2KgHGRLeVojHYoUhIvhwPBYv8f4=)` }}
                  />
                </a>
                <div className="text-sm w-2/3">
                  <p className="text-gray-600 text-xs">{t('smallCards.date')}</p>
                  <a href="#" className="text-gray-900 font-medium hover:text-indigo-600 leading-none">
                    {t('smallCards.snippet')}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Large Card */}
          <div className="sm:col-span-12 lg:col-span-3">
            <a href="#">
              <div
                className="h-56 bg-cover text-center overflow-hidden"
                style={{ backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/president-trump-coronavirus-election.jpg?quality=85&w=364&h=204&crop=1')" }}
                title={t('topHighlight.title2')}
              />
            </a>
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div>
                <a href="#" className="text-xs text-indigo-600 uppercase font-medium flex items-center hover:text-gray-900 transition duration-500 ease-in-out">
                  {t('topHighlight.category2')}
                </a>
                <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 transition duration-500 ease-in-out">
                  {t('topHighlight.title2')}
                </a>
                <p className="text-gray-700 text-xs mt-2">
                  {t('topHighlight.description2')}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* News Feed Section */}
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
                visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
              }}
            >
              {stories.map((story, idx) => (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.07, y: -20, boxShadow: "0px 20px 40px rgba(0,0,0,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 250, damping: 18 }}
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
    </>
  );
}
