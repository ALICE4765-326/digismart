import React from 'react';
import { useTranslation } from 'react-i18next';
import { ShoppingBag, Users, TrendingUp, CreditCard, Calendar, PhoneCall, MapPin, Monitor, Utensils, Croissant, Flower, Wine, Pizza, ShoppingCart } from 'lucide-react';

export const Solutions = () => {
  const { t } = useTranslation();

  const commerceTypes = [
    { icon: Utensils },
    { icon: Croissant },
    { icon: Flower },
    { icon: Wine },
    { icon: Pizza },
  ];

  const videos = t('solutions.appTakeAway.videos', { returnObjects: true }) as Record<string, { title: string; url: string; language: string }>;

  const videoCards = [
    { icon: Users, titleKey: 'solutions.appTakeAway.videos.customer.title', videoUrl: videos.customer?.url || '', language: videos.customer?.language || '' },
    { icon: ShoppingBag, titleKey: 'solutions.appTakeAway.videos.merchant.title', videoUrl: videos.merchant?.url || '', language: videos.merchant?.language || '' },
    { icon: TrendingUp, titleKey: 'solutions.appTakeAway.videos.admin.title', videoUrl: videos.admin?.url || '', language: videos.admin?.language || '' },
  ];

  const futureProjects = [
    { icon: CreditCard, titleKey: 'solutions.futureProjects.payment.title', descKey: 'solutions.futureProjects.payment.description' },
    { icon: Calendar, titleKey: 'solutions.futureProjects.booking.title', descKey: 'solutions.futureProjects.booking.description' },
    { icon: PhoneCall, titleKey: 'solutions.futureProjects.aiPhone.title', descKey: 'solutions.futureProjects.aiPhone.description' },
    { icon: MapPin, titleKey: 'solutions.futureProjects.realTimeTracking.title', descKey: 'solutions.futureProjects.realTimeTracking.description' },
    { icon: Monitor, titleKey: 'solutions.futureProjects.kiosk.title', descKey: 'solutions.futureProjects.kiosk.description' },
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
            <div className="max-w-2xl mx-auto space-y-4">
              {videoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <a
                    key={index}
                    href={card.videoUrl.replace('/embed/', '/watch?v=')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between bg-white shadow-md p-6 hover:shadow-lg transition-shadow group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-100 rounded-full">
                        <Icon className="h-6 w-6 text-primary-600" />
                      </div>
                      <span className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {t(card.titleKey)}
                      </span>
                    </div>
                    <span className="bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {card.language}
                    </span>
                  </a>
                );
              })}
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

          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {futureProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white shadow-md p-8 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm"
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
