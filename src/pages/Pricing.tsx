import React from 'react';
import { Check, Sparkles, Plus } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-slate-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
            {t('pricing.headline')}
          </h1>
        </div>

        <div className="max-w-3xl mx-auto mb-24">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-emerald-600 p-10 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-bold bg-white/25 backdrop-blur-sm text-white shadow-lg">
                    {t('pricing.plan.badge')}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {t('pricing.plan.name')}
                </h3>
                <p className="text-teal-50 text-lg leading-relaxed mb-8">
                  {t('pricing.plan.description')}
                </p>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 border border-white/20">
                  <div className="flex items-end justify-center gap-3">
                    <div className="flex items-baseline gap-2">
                      <span className="text-6xl font-black text-white">0€</span>
                      <span className="text-3xl font-bold text-teal-100">+</span>
                      <span className="text-6xl font-black text-white">10%</span>
                    </div>
                  </div>
                  <p className="text-center text-teal-100 mt-3 text-base font-medium">
                    {t('pricing.plan.priceNote')}
                  </p>
                </div>

                <ul className="space-y-4 mb-10">
                  {t('pricing.plan.features', { returnObjects: true }).map((feature: string, index: number) => (
                    <li key={index} className="flex items-start text-white group/item">
                      <div className="flex-shrink-0 h-7 w-7 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center mr-4 mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 text-lg font-bold rounded-xl hover:bg-teal-50 hover:scale-105 transform transition-all duration-200 shadow-xl"
                >
                  {t('pricing.contactButton')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10 mb-16">
          <div className="flex items-center mb-8">
            <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-teal-100 to-emerald-100 flex items-center justify-center mr-4">
              <Plus className="h-7 w-7 text-teal-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{t('pricing.additionalServices.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t('pricing.additionalServices.services', { returnObjects: true }).map((service: { name: string; description: string; price: string }, index: number) => (
              <div key={index} className="border-2 border-gray-200 rounded-xl p-6 hover:border-teal-400 hover:shadow-lg transition-all duration-200">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight flex-1">{service.name}</h3>
                  <span className="text-xl font-black text-teal-600 ml-3">{service.price}</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
