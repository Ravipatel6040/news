import React from 'react';
import { motion } from 'framer-motion';
import story1 from '../assets/images/story-1.jpg';
import story2 from '../assets/images/story-2.jpg';
import story3 from '../assets/images/story-3.jpg';
import story4 from '../assets/images/story-4.jpg';
import story5 from '../assets/images/story-5.jpg';
import story6 from '../assets/images/story-6.jpg';

const sample = [
  { id:1, title:'Local Startup Raises Seed Round', desc:'A local startup has raised significant funding to expand its operations and hire more employees. Investors are optimistic about its growth potential in the next 5 years.', img: story1, meta:{likes:120,comments:10,shares:8} },
  { id:2, title:'City Council Approves New Park', desc:'The city council has approved a new park development project aimed at providing residents with green spaces and recreational facilities.', img: story2, meta:{likes:98,comments:12,shares:4} },
  { id:3, title:'New Tech Hub Opens Downtown', desc:'A state-of-the-art tech hub has opened downtown to support startups and innovation. The hub includes coworking spaces, labs, and networking opportunities.', img: story3, meta:{likes:76,comments:7,shares:2} },
  { id:4, title:'Community Garden Project Launched', desc:'Volunteers are coming together to create a community garden that will promote sustainability and provide fresh produce to local families.', img: story4, meta:{likes:150,comments:20,shares:10} },
  { id:5, title:'Tech Conference Highlights AI Trends', desc:'The annual tech conference showcased emerging AI technologies and discussed the future of automation in various industries.', img: story5, meta:{likes:200,comments:30,shares:25} },
  { id:6, title:'Historic Building Restoration Completed', desc:'A historic building downtown has been fully restored, preserving its architectural heritage while adding modern facilities for public use.', img: story6, meta:{likes:85,comments:15,shares:5} },
];

export default function TrendingStories() {
  return (
    <section id="trending" className="my-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
          Trending Stories
        </h2>
        <a href="#" className="text-sm sm:text-base text-indigo-600 font-semibold hover:underline transition">
          View all
        </a>
      </div>

      <div className="space-y-20">
        {sample.map((s, index) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center w-full gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Image */}
            <motion.div
              className="w-full md:w-1/3 relative rounded-2xl overflow-hidden shadow-xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={s.img}
                alt={s.title}
                className="w-full h-80 md:h-96 object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </motion.div>

            {/* Text */}
            <motion.div
              className="w-full md:w-2/3 p-6 md:p-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 hover:text-indigo-600 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-700 text-lg md:text-xl mb-6">{s.desc}</p>
              <div className="flex space-x-6 text-gray-500 text-sm md:text-base">
                <span>{s.meta.likes} Likes</span>
                <span>{s.meta.comments} Comments</span>
                <span>{s.meta.shares} Shares</span>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
