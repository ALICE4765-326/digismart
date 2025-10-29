import React from 'react';
import { Gift } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const PromoHeader = () => {
  const { t } = useTranslation();

  return (
    <div className="fixed top-0 left-0 right-0 bg-primary-600 z-50 h-[40px]">
      <div className="max-w-7xl mx-auto h-full px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center flex-1">
            <span className="flex p-1 rounded-lg bg-primary-800">
              <Gift className="h-4 w-4 text-white" aria-hidden="true" />
            </span>
            <p className="ml-3 font-medium text-white truncate text-sm">
              <span className="md:hidden">{t('promo.titleShort')}</span>
              <span className="hidden md:inline">{t('promo.title')}</span>
            </p>
          </div>
          <div>
            <a
              href="#contact"
              className="flex items-center justify-center px-3 py-1 border border-transparent rounded-md shadow-sm text-xs font-medium text-primary-600 bg-white hover:bg-primary-50 transition-colors"
            >
              {t('promo.cta')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}