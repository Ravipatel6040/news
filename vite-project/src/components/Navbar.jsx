import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';
import { useTranslation } from 'react-i18next'; // ✅ Import i18n hook

export default function Navbar() {
  const { t } = useTranslation(); // ✅ Hook for translations
  const [open, setOpen] = useState(false); // Mobile menu
  const [categoriesOpen, setCategoriesOpen] = useState(false); // Desktop dropdown toggle

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
              <NavLink to="/explore" className={({ isActive }) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>
                {t('explore')}
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>
                {t('about')}
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : 'hover:text-indigo-600 transition'}>
                {t('contact')}
              </NavLink>

              {/* Desktop Categories Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setCategoriesOpen(!categoriesOpen)}
                  className="flex items-center gap-1 hover:text-indigo-600 transition cursor-pointer"
                >
                  {t('categories')} <FiChevronDown />
                </button>
                {categoriesOpen && (
                  <div className="absolute left-0 mt-2 w-44 bg-white border rounded-lg shadow-lg z-50">
                    <NavLink to="/category/local" className="block px-4 py-2 text-sm hover:bg-gray-100">{t('local')}</NavLink>
                    <NavLink to="/category/national" className="block px-4 py-2 text-sm hover:bg-gray-100">{t('national')}</NavLink>
                    <NavLink to="/category/politics" className="block px-4 py-2 text-sm hover:bg-gray-100">{t('politics')}</NavLink>
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:block">
              <input
                aria-label={t('search')}
                placeholder={t('search')}
                className="px-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* Signup Button */}
            <NavLink to="/signup" className="hidden md:inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-50 transition">
              {t('signup')}
            </NavLink>

            {/* Join as Reporter */}
            <NavLink to="/join-reporter" className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition">
              {t('joinReporter')}
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
            <NavLink to="/" className="block px-2 py-2 hover:bg-gray-50 rounded">{t('home')}</NavLink>
            <NavLink to="/explore" className="block px-2 py-2 hover:bg-gray-50 rounded">{t('explore')}</NavLink>
            <NavLink to="/about" className="block px-2 py-2 hover:bg-gray-50 rounded">{t('about')}</NavLink>
            <NavLink to="/contact" className="block px-2 py-2 hover:bg-gray-50 rounded">{t('contact')}</NavLink>

            {/* Mobile Categories Dropdown */}
            <div>
              <button
                onClick={() => setCategoriesOpen(!categoriesOpen)}
                className="flex justify-between w-full px-2 py-2 hover:bg-gray-50 rounded items-center"
              >
                {t('categories')} <FiChevronDown />
              </button>
              {categoriesOpen && (
                <div className="pl-4 mt-1 space-y-1">
                  <NavLink to="/category/local" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">{t('local')}</NavLink>
                  <NavLink to="/category/national" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">{t('national')}</NavLink>
                  <NavLink to="/category/politics" className="block px-4 py-2 text-sm hover:bg-gray-100 rounded">{t('politics')}</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/login" className="block px-2 py-2 text-indigo-600 font-semibold">{t('login')}</NavLink>
            <NavLink to="/join-reporter" className="block px-2 py-2 font-semibold bg-indigo-600 text-white rounded text-center">{t('joinReporter')}</NavLink>
          </div>
        )}
      </div>
    </header>
  );
}
