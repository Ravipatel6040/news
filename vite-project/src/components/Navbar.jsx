import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const activeClass = 'text-indigo-600 font-semibold';

  return (
    <header className="bg-white shadow sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-2xl font-bold text-indigo-600">
              NewsMarket
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {/* <NavLink to="/" className={({isActive}) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>Home</NavLink> */}
              <NavLink to="/explore" className={({isActive}) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>Explore</NavLink>
              <NavLink to="/about" className={({isActive}) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>About</NavLink>
              <NavLink to="/contact" className={({isActive}) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>Contact</NavLink>
              <div className="relative group">
                <button className="flex items-center gap-1 hover:text-indigo-600 transition">
                  Categories ▾
                </button>
                <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                  <NavLink to="/category/local" className="block px-4 py-2 text-sm hover:bg-gray-100">Local</NavLink>
                  <NavLink to="/category/national" className="block px-4 py-2 text-sm hover:bg-gray-100">National</NavLink>
                  <NavLink to="/category/politics" className="block px-4 py-2 text-sm hover:bg-gray-100">Politics</NavLink>
                </div>
              </div>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <input
                aria-label="Search"
                placeholder="Search news..."
                className="px-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <NavLink to="/signup" className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition">
              SignUP
            </NavLink>

            {/* Join as Reporter Button */}
            <NavLink to="/join-reporter" className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
              Join as Reporter
            </NavLink>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-3 space-y-2 border-t mt-2">
            <NavLink to="/" className="block px-2 py-2 hover:bg-gray-50 rounded">Home</NavLink>
            <NavLink to="/trending" className="block px-2 py-2 hover:bg-gray-50 rounded">Explore</NavLink>
            <NavLink to="/about" className="block px-2 py-2 hover:bg-gray-50 rounded">About</NavLink>
            <NavLink to="/contact" className="block px-2 py-2 hover:bg-gray-50 rounded">Contact</NavLink>
            <NavLink to="/categories" className="block px-2 py-2 hover:bg-gray-50 rounded">Categories</NavLink>
            <NavLink to="/login" className="block px-2 py-2 text-indigo-600 font-semibold">Login</NavLink>
            <NavLink to="/join-reporter" className="block px-2 py-2 font-semibold bg-indigo-600 text-white rounded text-center">Join as Reporter</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
