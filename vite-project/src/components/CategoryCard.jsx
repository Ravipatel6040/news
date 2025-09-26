import React from 'react';


export default function CategoryCard({ category }) {
return (
<button className="group bg-white border border-gray-200 rounded-2xl p-4 flex flex-col items-center text-center shadow-md
hover:shadow-2xl transition transform hover:-translate-y-3 hover:scale-105 w-full sm:w-auto">
<div className="h-24 w-24 sm:h-28 sm:w-28 mb-4 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
<img
src={category.img}
alt={category.name}
className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
/>
</div>
<div className="text-sm sm:text-base font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">
{category.name}
</div>
</button>
);
}