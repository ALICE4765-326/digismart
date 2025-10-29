import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    navigate(path);
  };

  // Determine if we need a solid background
  const needsSolidBackground = isScrolled || location.pathname !== '/';

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        needsSolidBackground ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/">
              <Logo className={needsSolidBackground ? '' : 'text-white'} />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${
                needsSolidBackground ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              {t('header.solutions')}
            </Link>
            <Link 
              to="/pricing" 
              className={`transition-colors ${
                needsSolidBackground ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              {t('header.pricing')}
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${
                needsSolidBackground ? 'text-gray-700 hover:text-primary-600' : 'text-white hover:text-primary-200'
              }`}
            >
              {t('header.contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          <button 
            className={`md:hidden ${needsSolidBackground ? 'text-gray-700' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.solutions')}
            </Link>
            <Link 
              to="/pricing" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.pricing')}
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.contact')}
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};