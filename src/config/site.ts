// Configuration centralisée du site Digismart
// Modifiez ce fichier pour personnaliser facilement le contenu

export const siteConfig = {
  // === INFORMATIONS DE L'ENTREPRISE ===
  company: {
    name: "Digismart.ia",
    tagline: "Solutions technologiques innovantes",
    description: "Solutions numériques sur mesure pour transformer votre quotidien professionnel",
  },

  // === COORDONNÉES DE CONTACT ===
  contact: {
    email: "digismartpt@gmail.com",
    phone: "+351 923 319 672",
    address: {
      street: "Rua Cruz da Estrada, n° 481",
      city: "4765-326 Oliveira Santa Maria",
      country: "Portugal"
    }
  },

  // === URLS DES VIDÉOS ===
  videos: {
    demo: "/videos/1.mp4", // Vidéo par défaut (toutes langues)
    // Vidéos spécifiques par langue (optionnel)
    fr: "/videos/1-fr.mp4",  // Français : 1-fr.mp4, 2-fr.mp4, etc.
    en: "/videos/1-en.mp4",  // Anglais : 1-en.mp4, 2-en.mp4, etc.
    pt: "/videos/1-pt.mp4"   // Portugais : 1-pt.mp4, 2-pt.mp4, etc.
  },

  // === RÉSEAUX SOCIAUX ===
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    twitter: "",
    youtube: ""
  },

  // === COULEURS DU THÈME ===
  theme: {
    primary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      200: '#bbf7d0',
      300: '#86efac',
      400: '#4ade80',
      500: '#16a34a', // Couleur principale
      600: '#15803d',
      700: '#166534',
      800: '#14532d',
      900: '#052e16',
    }
  },

  // === IMAGES ===
  images: {
    logo: "/logo.svg",
    hero: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    testimonial: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },

  // === GOOGLE MAPS ===
  maps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.4803939246864!2d-8.491869823799858!3d41.31867867131115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2465aebfa2aaab%3A0x1234567890abcdef!2sRua%20Cruz%20da%20Estrada%20481%2C%204765-326%20Oliveira%20Santa%20Maria!5e0!3m2!1sen!2spt!4v1642678901234!5m2!1sen!2spt"
  },

  // === TARIFICATION ===
  pricing: {
    commission: {
      freeMonths: 1,
      rate: 0, // 0% le premier mois
      standardRate: 5 // 5% après le premier mois (exemple)
    }
  },

  // === HORAIRES (si vous voulez les remettre) ===
  businessHours: {
    monday: { open: "09:00", close: "18:00" },
    tuesday: { open: "09:00", close: "18:00" },
    wednesday: { open: "09:00", close: "18:00" },
    thursday: { open: "09:00", close: "18:00" },
    friday: { open: "09:00", close: "18:00" },
    saturday: { open: "10:00", close: "16:00" },
    sunday: { closed: true }
  },

  // === LIENS UTILES ===
  links: {
    privacy: "/privacy",
    terms: "/cgv",
    contact: "/contact",
    pricing: "/pricing"
  },

  // === MÉTADONNÉES SEO ===
  seo: {
    keywords: "solutions digitales, applications sur mesure, gestion réseaux sociaux, transformation digitale, productivité entreprise",
    author: "Digismart.ia",
    robots: "index, follow"
  }
};

// === FONCTIONS UTILITAIRES ===
export const getVideoUrl = (language: string = 'fr'): string => {
  const videos = siteConfig.videos.demo;
  return videos[language as keyof typeof videos] || videos.default || videos.fr;
};

export const getFullAddress = (): string => {
  const { street, city, country } = siteConfig.contact.address;
  return `${street}, ${city}, ${country}`;
};

export const getPhoneLink = (): string => {
  return `tel:${siteConfig.contact.phone}`;
};

export const getEmailLink = (): string => {
  return `mailto:${siteConfig.contact.email}`;
};