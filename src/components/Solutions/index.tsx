import React from 'react';
import { Share2, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t('solutions.apps.title'),
      description: t('solutions.apps.description'),
      icon: Code,
      benefits: t('solutions.apps.benefits', { returnObjects: true })
    },
    {
      title: t('solutions.social.title'),
      description: t('solutions.social.description'),
      icon: Share2,
      benefits: t('solutions.social.benefits', { returnObjects: true })
    }
  ];

  return (
    <div id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('solutions.mainTitle')}
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div key={index} className="relative bg-white p-8 shadow-sm">
                <div className="relative">
                  <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 ring-4 ring-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    {solution.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {solution.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {solution.benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};