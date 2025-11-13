import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Users, TrendingUp, QrCode, CreditCard, Calendar, PhoneCall, MapPin, Utensils, Croissant, Flower, Wine, Pizza, ShoppingCart } from 'lucide-react';
import { VideoCard } from '../components/Solutions/VideoCard';

export const Solutions = () => {
  const { t } = useTranslation();

  const commerceTypes = [
    { icon: Utensils },
    { icon: Croissant },
    { icon: Flower },
    { icon: Wine },
    { icon: Pizza },
  ];

  const videoCards = [
    { icon: Users, titleKey: 'solutions.appTakeAway.videos.customer', videoName: 'customer' },
    { icon: ShoppingBag, titleKey: 'solutions.appTakeAway.videos.merchant', videoName: 'merchant' },
    { icon: TrendingUp, titleKey: 'solutions.appTakeAway.videos.admin', videoName: 'admin' },
    { icon: PhoneCall, titleKey: 'solutions.appTakeAway.videos.delivery', videoName: 'delivery' },
  ];

  const futureProjects = [
    { icon: CreditCard, titleKey: 'solutions.futureProjects.payment.title', descKey: 'solutions.futureProjects.payment.description' },
    { icon: Calendar, titleKey: 'solutions.futureProjects.booking.title', descKey: 'solutions.futureProjects.booking.description' },
    { icon: PhoneCall, titleKey: 'solutions.futureProjects.aiPhone.title', descKey: 'solutions.futureProjects.aiPhone.description' },
    { icon: MapPin, titleKey: 'solutions.futureProjects.realTimeTracking.title', descKey: 'solutions.futureProjects.realTimeTracking.description' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-teal-700 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t('solutions.appTakeAway.title')}
            </h1>
            <p className="text-xl sm:text-2xl text-primary-200 max-w-3xl mx-auto">
              {t('solutions.appTakeAway.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Présentation Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-12">
              {t('solutions.appTakeAway.description')}
            </p>

            {/* Commerce Icons */}
            <div className="flex justify-center items-center gap-8 mb-16">
              <ShoppingCart className="h-10 w-10 text-gray-400" />
              {commerceTypes.map((commerce, index) => {
                const Icon = commerce.icon;
                return (
                  <Icon key={index} className="h-10 w-10 text-gray-400" />
                );
              })}
            </div>
          </div>

          {/* Video Demonstrations */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              {t('solutions.appTakeAway.videosTitle')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoCards.map((card, index) => (
                <VideoCard
                  key={index}
                  icon={card.icon}
                  titleKey={card.titleKey}
                  videoName={card.videoName}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Test Section */}
      <div className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {t('solutions.appTakeAway.testTitle')}
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            {t('solutions.appTakeAway.testDescription')}
          </p>

          {/* QR Code Placeholder */}
          <div className="inline-block bg-gray-50 p-8 shadow-lg mb-8">
            <div className="w-64 h-64 bg-white flex items-center justify-center border-2 border-gray-200">
              <QrCode className="h-32 w-32 text-gray-300" />
            </div>
          </div>

          {/* Installation Steps Placeholder */}
          <div className="bg-primary-50 p-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t('solutions.appTakeAway.stepsTitle')}
            </h3>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-start">
                <span className="font-bold text-primary-600 mr-3 flex-shrink-0">1.</span>
                <span>{t('solutions.appTakeAway.steps.step1')}</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-primary-600 mr-3 flex-shrink-0">2.</span>
                <span>{t('solutions.appTakeAway.steps.step2')}</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-primary-600 mr-3 flex-shrink-0">3.</span>
                <span>{t('solutions.appTakeAway.steps.step3')}</span>
              </p>
              <p className="flex items-start">
                <span className="font-bold text-primary-600 mr-3 flex-shrink-0">4.</span>
                <span>{t('solutions.appTakeAway.steps.step4')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Future Projects Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t('solutions.futureProjects.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {futureProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white shadow-md p-8"
                >
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-100 rounded-full">
                      <Icon className="h-10 w-10 text-primary-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {t(project.descKey)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-primary-50 p-8 text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              {t('solutions.futureProjects.cta')}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300 shadow-lg"
            >
              {t('solutions.futureProjects.contactButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
