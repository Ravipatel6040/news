import React from 'react';

export default function CategoryCard({ category }) {
  return (
    <button className="group bg-white rounded-3xl p-6 flex flex-col items-center text-center shadow-md
      hover:shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 w-full sm:w-auto">
      
      <div className="h-28 w-28 sm:h-32 sm:w-32 mb-5 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-400 via-purple-400 to-pink-400 flex items-center justify-center shadow-inner">
        <img
          src={category.img}
          alt={category.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110 rounded-full"
        />
      </div>

      <div className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
        {category.name}
      </div>
    </button>
  );
}
