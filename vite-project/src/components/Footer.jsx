import React from 'react';

export default function Footer(){
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">NewsMarket</h3>
            <p className="text-sm text-gray-400">© NewsMarket {new Date().getFullYear()}. All rights reserved.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-12">

            <div>
              <h4 className="font-semibold text-white mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-indigo-500 transition">About</a></li>
                <li><a href="#" className="hover:text-indigo-500 transition">Contact</a></li>
                <li><a href="#" className="hover:text-indigo-500 transition">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Follow</h4>
              <ul className="space-y-1">
                <li><a href="#" className="hover:text-indigo-500 transition">Twitter</a></li>
                <li><a href="#" className="hover:text-indigo-500 transition">LinkedIn</a></li>
                <li><a href="#" className="hover:text-indigo-500 transition">Instagram</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}