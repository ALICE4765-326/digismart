import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LucideIcon, Play } from 'lucide-react';
import { VideoModal } from '../VideoModal';

interface VideoCardProps {
  icon: LucideIcon;
  titleKey: string;
  videoUrl: string;
  language: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ icon: Icon, titleKey, videoUrl, language }) => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow-md p-8">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-100 rounded-full">
            <Icon className="h-8 w-8 text-primary-600" />
          </div>
        </div>
        <div
          className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden relative cursor-pointer group"
          onClick={handlePlayClick}
        >
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors shadow-lg">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
          {language && (
            <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full shadow-lg">
              {language}
            </div>
          )}
        </div>
        <h3 className="text-center font-semibold text-gray-900">
          {t(titleKey)}
        </h3>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        videoUrl={videoUrl}
      />
    </>
  );
};
