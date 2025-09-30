import placeholder from "../assets/images/placeholder.png";
import { motion } from "framer-motion";

export default function StoryCard({ story }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-indigo-300/50 hover:border-indigo-400 transition-all duration-300"
    >
      <div className="relative">
        <img
          src={story.image || placeholder}
          alt={story.title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 right-3 bg-indigo-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
          {story.verified ? "Verified" : "Unverified"}
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-900 hover:text-indigo-600 transition-colors">
          {story.title}
        </h2>
        <p className="text-gray-600 mt-2 text-sm">{story.snippet}</p>

        <div className="flex items-center justify-between mt-5">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">{story.reporter}</span>
          </div>
          <div className="flex space-x-4 text-gray-500 text-sm">
            <span className="hover:text-pink-500 transition">👍 {story.likes}</span>
            <span className="hover:text-blue-500 transition">💬 {story.comments}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
