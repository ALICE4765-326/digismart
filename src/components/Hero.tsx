import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-700 via-primary-600 to-teal-600">
      {/* Contenu */}
      <div className="relative w-full">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <h1 className="text-center">
            <span className="block text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t('hero.title')}
            </span>
            <span className="mt-6 block text-2xl sm:text-3xl lg:text-4xl font-medium bg-gradient-to-r from-primary-300 via-primary-400 to-primary-300 text-transparent bg-clip-text">
              {t('hero.subtitle')}
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-300 text-center max-w-2xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
        
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link 
              to="/contact" 
              className="group inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-500 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg hover:shadow-primary-500/20"
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              onClick={() => {
                const solutionsSection = document.getElementById('solutions');
                if (solutionsSection) {
                  const headerOffset = 80;
                  const elementPosition = solutionsSection.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-gray-900 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg"
            >
              {t('hero.cta.secondary')}
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              t('hero.benefits.custom'),
              t('hero.benefits.free'),
              t('hero.benefits.support')
            ].map((benefit) => (
              <div 
                key={benefit}
                className="flex items-center justify-center px-6 py-4 rounded-lg bg-white text-gray-900 text-sm font-medium transition-all duration-300 hover:bg-gray-50 hover:translate-y-[-2px] shadow-md group"
              >
                <span className="relative">
                  {benefit}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};