import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();

  const recommended = [
    'breakingNews',
    'elections2025',
    'cricket',
    'technologyUpdates',
    'stockMarket',
  ];

  return (
    <div className="hidden lg:block w-72 space-y-6">
      <div className="backdrop-blur-xl bg-white/70 border border-gray-200 rounded-2xl p-5 shadow-lg">
        <h3 className="font-semibold text-gray-900 mb-4 text-lg">
          {t('recommendedTopics')}
        </h3>
        <ul className="space-y-3 text-gray-700">
          {recommended.map((key, idx) => (
            <li
              key={idx}
              className="hover:text-indigo-600 cursor-pointer transition transform hover:translate-x-1 hover:font-medium"
            >
              #{t(key)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
