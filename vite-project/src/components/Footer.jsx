import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="h-8 w-8 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
              <span className="ml-2 text-xl font-bold">{t('companyName')}</span>
            </div>
            <p className="text-gray-400">{t('companyDescription')}</p>
            <div className="flex space-x-4">
              <FaTwitter className="text-gray-400 hover:text-white transition cursor-pointer" />
              <FaLinkedin className="text-gray-400 hover:text-white transition cursor-pointer" />
              <FaInstagram className="text-gray-400 hover:text-white transition cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('home')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('aboutUs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('services')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('pricing')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('blog')}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('webDevelopment')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('mobileApps')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('uiuxDesign')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('digitalMarketing')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">{t('cloudSolutions')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('contactUs')}</h3>
            <address className="not-italic text-gray-400">
              <p>{t('addressLine1')}</p>
              <p>{t('addressLine2')}</p>
              <p className="mt-2">
                {t('email')}:{" "}
                <a href="mailto:info@company.com" className="hover:text-white transition">info@company.com</a>
              </p>
              <p>
                {t('phone')}:{" "}
                <a href="tel:+11234567890" className="hover:text-white transition">+1 (123) 456-7890</a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">{t('copyright')}</p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">{t('privacyPolicy')}</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">{t('termsOfService')}</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition">{t('cookies')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
