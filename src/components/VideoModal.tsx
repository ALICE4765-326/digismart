import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose, 
  videoUrl
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full transition-colors"
          aria-label="Fermer la vidéo"
        >
          <X className="h-5 w-5 text-white" />
        </button>
        
        {/* Video Container */}
        <div className="relative aspect-video bg-black">
          <video
            className="w-full h-full"
            controls
            autoPlay
            preload="metadata"
          >
            <source src={videoUrl} type="video/mp4" />
            <p className="text-white p-4">
              Votre navigateur ne supporte pas la lecture de vidéos HTML5.
            </p>
          </video>
        </div>
      </div>
    </div>
  );
};