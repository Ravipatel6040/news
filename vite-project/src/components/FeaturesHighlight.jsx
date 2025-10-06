import React from 'react';
import { useTranslation } from 'react-i18next';

export default function FeaturesHighlight() {
  const { t } = useTranslation();

  return (
    <section className="pt-16 lg:px-20 md:px-10 px-6 bg-gray-50 text-gray-900">
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        {t('whyChoose')} <span className="text-blue-600">{t('chooseUs')}</span>
      </h2>
      <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
        {t('featuresDescription')}
      </p>

      <div className="lg:flex lg:gap-8 mt-12">
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1">
          <h3 className="text-center font-semibold text-xl text-red-600">{t('feature1Title')}</h3>
          <p className="pt-3 text-center text-gray-700">{t('feature1Desc')}</p>
        </div>
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 mt-6 lg:mt-0">
          <h3 className="text-center font-semibold text-xl text-green-600">{t('feature2Title')}</h3>
          <p className="pt-3 text-center text-gray-700">{t('feature2Desc')}</p>
        </div>
        <div className="lg:pt-2 pt-7 bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex-1 mt-6 lg:mt-0">
          <h3 className="text-center font-semibold text-xl text-blue-600">{t('feature3Title')}</h3>
          <p className="pt-3 text-center text-gray-700">{t('feature3Desc')}</p>
        </div>
      </div>
    </section>
  );
}
