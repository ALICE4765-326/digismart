export const i18nConfig = {
  fallbackLng: 'pt',
  debug: false,
  interpolation: {
    escapeValue: false
  },
  detection: {
    order: ['navigator', 'htmlTag', 'path', 'subdomain'],
    caches: ['localStorage']
  }
};
