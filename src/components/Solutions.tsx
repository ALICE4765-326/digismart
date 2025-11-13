import React from 'react';
import { Share2, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Solutions = () => {
  const { t } = useTranslation();

  const solutions = [
    {
      title: t('solutions.apps.title'),
      description: t('solutions.apps.description'),
      icon: Code
    },
    {
      title: t('solutions.social.title'),
      description: t('solutions.social.description'),
      icon: Share2
    }
  ];

  return (
    <div id="solutions" className="bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('solutions.title')}
          </h2>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <div key={index} className="bg-white p-6 shadow-sm">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 bg-primary-600 text-white">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{solution.title}</h3>
                      <p className="mt-2 text-base text-gray-500">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};