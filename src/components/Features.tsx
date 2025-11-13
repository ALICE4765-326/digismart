import React from 'react';
import { Clock, ShoppingCart, Palette, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      name: t('features.title'),
      description: t('features.description'),
      icon: Clock,
      benefits: Array.isArray(t('features.benefits', { returnObjects: true, defaultValue: [] })) 
        ? t('features.benefits', { returnObjects: true }) 
        : []
    },
    {
      name: t('features.sales.title'),
      description: t('features.sales.description'),
      icon: ShoppingCart,
      benefits: Array.isArray(t('features.sales.benefits', { returnObjects: true, defaultValue: [] })) 
        ? t('features.sales.benefits', { returnObjects: true }) 
        : []
    },
    {
      name: t('features.customization.title'),
      description: t('features.customization.description'),
      icon: Palette,
      benefits: Array.isArray(t('features.customization.benefits', { returnObjects: true, defaultValue: [] })) 
        ? t('features.customization.benefits', { returnObjects: true }) 
        : []
    },
    {
      name: t('features.content.title'),
      description: t('features.content.description'),
      icon: Share2,
      benefits: Array.isArray(t('features.content.benefits', { returnObjects: true, defaultValue: [] })) 
        ? t('features.content.benefits', { returnObjects: true }) 
        : []
    }
  ];

  return (
    <div className="bg-primary-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('features.mainTitle')}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="bg-white p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 bg-primary-600 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-500">
                      {feature.description}
                    </p>
                    {Array.isArray(feature.benefits) && feature.benefits.length > 0 && (
                      <ul className="mt-4 space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-500">
                            <span className="h-1.5 w-1.5 mt-2 rounded-full bg-primary-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}