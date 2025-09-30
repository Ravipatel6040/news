import React from 'react';

export default function FeaturesHighlight() {
  return (
    <section className="pt-16 lg:px-20 md:px-10 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Why <span className="text-blue-600">Choose Us</span>
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        We deliver trusted, fast, and accurate news, keeping you informed with every important update.
      </p>

      <div className="lg:flex lg:gap-8 mt-12">
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1">
          <h3 className="text-center font-semibold text-xl text-red-600">WE ARE PASSIONATE</h3>
          <p className="pt-3 text-center text-gray-700">
            Our team is dedicated to reporting real stories that matter. We focus on accurate, meaningful news coverage for our readers.
          </p>
        </div>
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 mt-6 lg:mt-0">
          <h3 className="text-center font-semibold text-xl text-green-600">HONEST AND DEPENDABLE</h3>
          <p className="pt-3 text-center text-gray-700">
            Transparency and integrity are at the core of our reporting. You can rely on us to deliver facts without bias or misinformation.
          </p>
        </div>
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 mt-6 lg:mt-0">
          <h3 className="text-center font-semibold text-xl text-blue-600">WE ARE ALWAYS IMPROVING</h3>
          <p className="pt-3 text-center text-gray-700">
            We continuously update our tools and methods to ensure you have access to the most reliable and timely news updates.
          </p>
        </div>
      </div>
    </section>
  );
}
