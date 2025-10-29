import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte Google Maps */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-12 h-96">
              <iframe
                src={siteConfig.maps.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Digismart"
                className="rounded-xl"
              />
            </div>
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-600 hover:text-primary-700">
                      {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{t('contact.info.phone')}</p>
                    <a href={`tel:${siteConfig.contact.phone}`} className="text-primary-600 hover:text-primary-700">
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">{t('contact.info.address')}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.street}</p>
                    <p className="text-gray-600">{siteConfig.contact.address.city}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}