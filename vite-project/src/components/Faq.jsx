import React from "react";

export default function FAQ() {
  return (
    <div className="py-4 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

        {/* Header */}
        <div className="text-center">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">F.A.Q</p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span className="text-indigo-600">Questions</span>
          </h3>
        </div>

        {/* FAQ List */}
        <div className="mt-20">
          <ul>
            {/* FAQ Item 1 */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">What could possibly be your first question?</h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg height="25px" fill="white" viewBox="0 0 295.238 295.238">
                    <path d="M277.462,0.09l-27.681,20.72..."></path>
                  </svg>
                </div>
              </div>
            </li>

            {/* FAQ Item 2 */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">How does your service work?</h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, quam! Explanation about how the service works goes here.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg height="25px" fill="white" viewBox="0 0 295.238 295.238">
                    <path d="M277.462,0.09l-27.681,20.72..."></path>
                  </svg>
                </div>
              </div>
            </li>

            {/* FAQ Item 3 */}
            <li className="text-left mb-10">
              <div className="flex flex-row items-start mb-5">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg width="30px" fill="white" height="30px" viewBox="0 0 24 24">
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"></rect>
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="bg-gray-100 p-5 px-10 w-full flex items-center">
                  <h4 className="text-md leading-6 font-medium text-gray-900">Can I cancel anytime?</h4>
                </div>
              </div>
              <div className="flex flex-row items-start">
                <div className="bg-indigo-100 p-5 px-10 w-full flex items-center">
                  <p className="text-gray-700 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Yes, you can cancel anytime with no extra charges.
                  </p>
                </div>
                <div className="hidden sm:flex items-center justify-center p-3 ml-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg height="25px" fill="white" viewBox="0 0 295.238 295.238">
                    <path d="M277.462,0.09l-27.681,20.72..."></path>
                  </svg>
                </div>
              </div>
            </li>

          </ul>
        </div>
      </div>
    </div>
  );
}
