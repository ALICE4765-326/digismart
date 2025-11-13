import React from 'react';
import { Check, Sparkles, Star, Crown, Gift, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            {t('pricing.headline')}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-lg p-8 border-2 border-green-200">
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center">
                <Gift className="h-6 w-6 text-green-600" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                {t('pricing.plans.freedom.badge')}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('pricing.plans.freedom.name')}</h3>
            <p className="text-gray-600 mb-6">{t('pricing.plans.freedom.description')}</p>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-gray-900">0€</span>
                <span className="ml-2 text-gray-600">+ 3%</span>
              </div>
              <p className="text-sm text-gray-500">{t('pricing.plans.freedom.priceNote')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t('pricing.plans.freedom.features', { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-start text-gray-600">
                  <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-green-600 text-base font-medium rounded-xl text-green-600 hover:bg-green-50 transition-colors duration-300"
            >
              {t('pricing.contactButton')}
            </Link>
          </div>

          <div className="bg-gradient-to-br from-teal-500 to-teal-600 shadow-xl p-8 border-2 border-teal-400">
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                {t('pricing.plans.pro.badge')}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.plans.pro.name')}</h3>
            <p className="text-teal-100 mb-6">{t('pricing.plans.pro.description')}</p>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-white">7,90€</span>
                <span className="ml-2 text-teal-100">{t('pricing.plans.pro.period')}</span>
              </div>
              <p className="text-sm text-teal-100">{t('pricing.plans.pro.priceNote')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t('pricing.plans.pro.features', { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-start text-white">
                  <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-300"
            >
              {t('pricing.contactButton')}
            </Link>
          </div>

          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 shadow-xl p-8 border-2 border-emerald-500">
            <div className="flex items-center justify-between mb-6">
              <div className="h-12 w-12 rounded-xl bg-white/20 flex items-center justify-center">
                <Crown className="h-6 w-6 text-white" />
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white">
                {t('pricing.plans.premium.badge')}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{t('pricing.plans.premium.name')}</h3>
            <p className="text-emerald-100 mb-6">{t('pricing.plans.premium.description')}</p>

            <div className="mb-6">
              <div className="flex items-baseline">
                <span className="text-4xl font-extrabold text-white">14,90€</span>
                <span className="ml-2 text-emerald-100">{t('pricing.plans.premium.period')}</span>
              </div>
              <p className="text-sm text-emerald-100">{t('pricing.plans.premium.priceNote')}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {t('pricing.plans.premium.features', { returnObjects: true }).map((feature: string, index: number) => (
                <li key={index} className="flex items-start text-white">
                  <Check className="h-5 w-5 text-white mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-xl text-white hover:bg-white/10 transition-colors duration-300"
            >
              {t('pricing.contactButton')}
            </Link>
          </div>
        </div>

        <div className="bg-white shadow-xl p-8 mb-24">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-xl bg-primary-100 flex items-center justify-center mr-4">
              <Plus className="h-6 w-6 text-primary-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{t('pricing.additionalServices.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t('pricing.additionalServices.services', { returnObjects: true }).map((service: { name: string; description: string; price: string }, index: number) => (
              <div key={index} className="border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <span className="text-lg font-bold text-primary-600">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
