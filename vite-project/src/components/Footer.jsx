import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-0">

          {/* Logo & Copyright */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              NewsMarket
            </h3>
            <p className="text-sm text-gray-400">
              © NewsMarket {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-12">

            <div>
              <h4 className="font-semibold text-white mb-3 text-lg">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-indigo-400 transition duration-300">About</a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition duration-300">Contact</a>
                </li>
                <li>
                  <a href="#" className="hover:text-indigo-400 transition duration-300">Terms & Conditions</a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3 text-lg">Follow Us</h4>
              <ul className="flex gap-4">
                <li>
                  <a href="#" className="hover:text-blue-400 transition duration-300 text-xl">
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-600 transition duration-300 text-xl">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-pink-500 transition duration-300 text-xl">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
