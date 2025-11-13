import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LucideIcon, Play } from 'lucide-react';
import { useVideoUrl } from '../../hooks/useVideoUrl';

interface VideoCardProps {
  icon: LucideIcon;
  titleKey: string;
  videoName: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({ icon: Icon, titleKey, videoName }) => {
  const { t } = useTranslation();
  const videoUrl = useVideoUrl(videoName);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="bg-white shadow-md p-8">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-primary-100 rounded-full">
          <Icon className="h-8 w-8 text-primary-600" />
        </div>
      </div>
      <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
        {!isPlaying ? (
          <div
            className="w-full h-full flex items-center justify-center cursor-pointer group"
            onClick={handlePlayClick}
          >
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
            <div className="relative z-10 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center group-hover:bg-primary-700 transition-colors shadow-lg">
              <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
            </div>
          </div>
        ) : (
          <video
            src={videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
          >
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
        )}
      </div>
      <h3 className="text-center font-semibold text-gray-900">
        {t(titleKey)}
      </h3>
    </div>
  );
};
