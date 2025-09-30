import React from "react";

export default function About() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl mx-auto p-6">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img
              src="https://i.imgur.com/WbQnbas.png"
              alt="About Us"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl sm:text-4xl">
              About <span className="text-indigo-600">Our Company</span>
            </h2>
            <p className="text-gray-700">
               At Our Company, we are committed to delivering innovative solutions that empower businesses and individuals alike. 
  Our team of experts combines creativity and technology to transform ideas into impactful results, ensuring excellence 
  and growth at every step.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our Investors & Board of Directors
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8 md:grid-cols-4 gap-y-12 lg:gap-x-16 xl:gap-x-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <img
                  className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                  src={`https://cdn.rareblocks.xyz/collection/clarity/images/team/1/team-member-${i}.png`}
                  alt=""
                />
                <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                  Jerome Bell
                </p>
                <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                  Co founder, Chairman, Executive Director
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16">
            <svg
              className="w-auto h-4 mx-auto text-gray-300"
              viewBox="0 0 172 16"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              {Array.from({ length: 20 }).map((_, index) => (
                <line
                  key={index}
                  y1="-0.5"
                  x2="18.0278"
                  y2="-0.5"
                  transform={`matrix(-0.5547 0.83205 0.83205 0.5547 ${index * 35} 1)`}
                />
              ))}
            </svg>
          </div>

          <div className="max-w-3xl mx-auto mt-12 space-y-8 sm:space-y-0 sm:flex sm:items-center sm:justify-center sm:mt-16 sm:gap-x-16">
            {[
              "logo-waverio.svg",
              "logo-squarestone.svg",
              "logo-creaty.svg",
            ].map((logo, index) => (
              <div key={index}>
                <img
                  className="w-auto mx-auto h-11"
                  src={`https://cdn.rareblocks.xyz/collection/clarity/images/team/1/${logo}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Our Company. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0">
            <a href="#" className="hover:text-indigo-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </>
  );
}
