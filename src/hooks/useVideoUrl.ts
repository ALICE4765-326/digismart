import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useVideoUrl = (videoName: string): string => {
  const { i18n } = useTranslation();

  return useMemo(() => {
    const currentLang = i18n.language.split('-')[0];
    return `/videos/${videoName}-${currentLang}.mp4`;
  }, [videoName, i18n.language]);
};