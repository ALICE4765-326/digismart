import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

export const useMetaTags = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const updateMetaTags = () => {
      // Update document title
      document.title = t('meta.title');

      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', t('meta.description'));
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      
      if (ogTitle) {
        ogTitle.setAttribute('content', t('meta.title'));
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', t('meta.description'));
      }

      // Update Twitter Card tags
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      
      if (twitterTitle) {
        twitterTitle.setAttribute('content', t('meta.title'));
      }
      if (twitterDescription) {
        twitterDescription.setAttribute('content', t('meta.description'));
      }

      // Update HTML lang attribute
      document.documentElement.lang = i18n.language;
    };

    updateMetaTags();
  }, [t, i18n.language, location.pathname]);
};