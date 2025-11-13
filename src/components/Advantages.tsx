import React from 'react';
import { useTranslation } from 'react-i18next';

export const Advantages = () => {
  const { t } = useTranslation();
  
  // Ensure we have a default empty array if translation returns undefined
  const advantages = t('advantages.items', { returnObjects: true });
  const items = Array.isArray(advantages) ? advantages : [];

  return (
    <div id="advantages" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('advantages.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('advantages.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item: { title: string; description: string }, index: number) => (
            <div key={index} className="relative bg-white p-8 shadow-lg">
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};