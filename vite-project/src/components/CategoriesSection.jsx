import React from 'react';
import CategoryCard from './CategoryCard';


// Import all category images
import localImg from '../assets/images/local.jpg';
import nationalImg from '../assets/images/national.jpg';
import politicsImg from '../assets/images/politics.jpg';
import sportsImg from '../assets/images/sports.jpg';
import businessImg from '../assets/images/business.jpg';
import techImg from '../assets/images/technology.jpg';
import entertainmentImg from '../assets/images/entertainment.jpg';


const categories = [
{ name: 'Local', img: localImg },
{ name: 'National', img: nationalImg },
{ name: 'Politics', img: politicsImg },
{ name: 'Sports', img: sportsImg },
{ name: 'Business', img: businessImg },
{ name: 'Technology', img: techImg },
{ name: 'Entertainment', img: entertainmentImg },
];


export default function CategoriesSection() {
return (
<section id="categories" className="my-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4 sm:gap-0">
<h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">Browse by Category</h2>
<a href="#" className="text-sm sm:text-base text-indigo-600 font-semibold hover:underline transition">View all</a>
</div>


<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-8">
{categories.map((cat, idx) => (
<CategoryCard key={idx} category={cat} />
))}
</div>
</section>
);
}