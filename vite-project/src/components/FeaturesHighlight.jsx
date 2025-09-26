import React from 'react';

const features = [
  {title:'Ad-free reading',desc:'Subscribe to read without interruptions.', icon:'📖'},
  {title:'Earn by reporting',desc:'Report accurate news and earn via licensing.', icon:'💰'},
  {title:'License content easily',desc:'Publishers can quickly license verified stories.', icon:'📄'},
];

export default function FeaturesHighlight(){
  return (
    <section className="bg-gray-50 rounded-2xl shadow-xl p-8 sm:p-12 my-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((f,i)=> (
          <div key={i} className="flex flex-col items-start gap-4 bg-white rounded-xl p-6 shadow hover:shadow-2xl transition transform hover:-translate-y-2">
            <div className="h-14 w-14 rounded-full bg-indigo-50 flex items-center justify-center text-2xl">
              {f.icon}
            </div>
            <h4 className="text-xl font-bold text-gray-900">{f.title}</h4>
            <p className="text-gray-600 text-base">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition">Join Now</a>
        <a href="#" className="inline-block px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg font-semibold hover:bg-indigo-50 transition">Learn More</a>
      </div>
    </section>
  );
}