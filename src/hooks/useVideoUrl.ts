import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { siteConfig } from '../config/site';

export const useVideoUrl = () => {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const { i18n } = useTranslation();

  useEffect(() => {
    // Obtenir la langue actuelle
    const currentLang = i18n.language.split('-')[0] as 'fr' | 'en' | 'pt';
    
    // Essayer d'abord la vidéo spécifique à la langue, sinon utiliser la vidéo par défaut
    const langSpecificUrl = siteConfig.videos[currentLang];
    const defaultUrl = siteConfig.videos.demo;
    
    // Pour l'instant, utiliser toujours la vidéo par défaut car c'est celle qui existe
    setVideoUrl(defaultUrl);
  }, [i18n.language]);

  return videoUrl;
};