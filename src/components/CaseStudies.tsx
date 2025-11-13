import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play } from 'lucide-react';
import { VideoModal } from './VideoModal';
import { useVideoUrl } from '../hooks/useVideoUrl';

interface CaseStudy {
  name: string;
  role: string;
  challenge: string;
  solution: string;
  results: string[];
}

export const CaseStudies = () => {
  const { t } = useTranslation();
  const [isVideoModalOpen, setIsVideoModalOpen] = React.useState(false);
  const videoUrl = useVideoUrl('testimonial');
  
  // Ensure we have a default empty array if translation returns undefined
  const cases = t('testimonials.cases', { returnObjects: true });
  const caseStudies = Array.isArray(cases) ? cases : [];

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('testimonials.title')}
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {caseStudies.map((study: CaseStudy, index: number) => (
            <div key={index} className="bg-white shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
              <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
                <div className="lg:self-center">
                  <h3 className="text-2xl font-bold text-gray-900">{study.name}</h3>
                  <p className="mt-2 text-lg text-primary-600">{study.role}</p>
                  
                  <div className="mt-8 space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{t('testimonials.labels.challenge')}</h4>
                      <p className="mt-2 text-gray-500">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{t('testimonials.labels.solution')}</h4>
                      <p className="mt-2 text-gray-500">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{t('testimonials.labels.results')}</h4>
                      <ul className="mt-2 space-y-2">
                        {Array.isArray(study.results) && study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-gray-500">
                            <span className="h-1.5 w-1.5 bg-primary-500 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        setIsVideoModalOpen(true);
                      }}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
                    >
                      {t('testimonials.cta')}
                      <Play className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt={study.name}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Video Modal */}
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={videoUrl}
        />
      </div>
    </div>
  );
};