import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Fonction pour déterminer si une couleur est claire
const isLightColor = (color: string): boolean => {
  // Valeurs par défaut pour chaque page
  const lightPages = ['/pricing', '/contact', '/privacy', '/cgv'];
  const darkPages = ['/'];
  
  const location = useLocation().pathname;
  
  if (darkPages.includes(location)) return false;
  if (lightPages.includes(location)) return true;
  
  return true; // Par défaut, considérer le fond comme clair
};

export const useBackgroundColor = () => {
  const location = useLocation();
  const [isLightBg, setIsLightBg] = useState(true);

  useEffect(() => {
    setIsLightBg(isLightColor(location.pathname));
  }, [location]);

  return isLightBg;
};