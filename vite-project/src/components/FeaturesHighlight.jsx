import React from 'react';

const features = [
  { title: 'Ad-free reading', desc: 'Subscribe to read without interruptions.', icon: '📖', color: 'from-pink-400 to-red-400' },
  { title: 'Earn by reporting', desc: 'Report accurate news and earn via licensing.', icon: '💰', color: 'from-green-400 to-teal-400' },
  { title: 'License content easily', desc: 'Publishers can quickly license verified stories.', icon: '📄', color: 'from-yellow-400 to-orange-400' },
];

export default function FeaturesHighlight() {
  return (
    <section className="bg-gradient-to-r from-purple-50 via-pink-50 to-yellow-50 rounded-3xl p-10 sm:p-16 my-28 relative overflow-hidden">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 text-center mb-16">
        Why Choose Us
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col items-start gap-5 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:scale-105 transition duration-300 bg-gradient-to-r ${f.color}`}
          >
            <div className="h-16 w-16 rounded-full flex items-center justify-center text-3xl bg-white shadow-md">
              {f.icon}
            </div>
            <h4 className="text-2xl font-bold text-white">{f.title}</h4>
            <p className="text-white text-base sm:text-lg">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 flex flex-col sm:flex-row gap-6 justify-center">
        <a
          href="#"
          className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl font-semibold shadow-lg hover:scale-105 transform transition"
        >
          Join Now
        </a>
        <a
          href="#"
          className="inline-block px-8 py-4 border-2 border-indigo-500 text-indigo-500 rounded-xl font-semibold hover:bg-indigo-50 transition"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
