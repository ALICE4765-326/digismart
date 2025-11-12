import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Logo } from '../Logo';
import { MobileMenu } from './MobileMenu';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScrolled = useScrollPosition();
  const location = useLocation();

  const needsWhiteBackground = ['/contact', '/pricing', '/solutions'].includes(location.pathname);

  return (
    <header 
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300 ease-in-out
        font-sans
        ${isScrolled || needsWhiteBackground
          ? 'bg-white shadow-sm h-16' 
          : 'bg-transparent h-20'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center"
              aria-label="Accueil"
            >
              <Logo 
                className={`
                  transition-all duration-300
                  ${isScrolled || needsWhiteBackground ? 'scale-90' : 'scale-100'}
                `} 
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`
                relative py-2 px-2
                text-[16px] leading-6 tracking-wide font-semibold
                transition-all duration-200
                ${isScrolled || needsWhiteBackground
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                }
                hover:scale-105
                focus:outline-none focus:ring-2
                focus:ring-primary-600
                rounded-md
              `}
            >
              {t('header.home')}
            </Link>
            <Link
              to="/solutions"
              className={`
                relative py-2 px-2
                text-[16px] leading-6 tracking-wide font-semibold
                transition-all duration-200
                ${isScrolled || needsWhiteBackground
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                }
                hover:scale-105
                focus:outline-none focus:ring-2
                focus:ring-primary-600
                rounded-md
              `}
            >
              {t('header.solutions')}
            </Link>
            <Link
              to="/pricing"
              className={`
                relative py-2 px-2
                text-[16px] leading-6 tracking-wide font-semibold
                transition-all duration-200
                ${isScrolled || needsWhiteBackground
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                }
                hover:scale-105
                focus:outline-none focus:ring-2
                focus:ring-primary-600
                rounded-md
              `}
            >
              {t('header.pricing')}
            </Link>
            <Link
              to="/contact"
              className={`
                relative py-2 px-2
                text-[16px] leading-6 tracking-wide font-semibold
                transition-all duration-200
                ${isScrolled || needsWhiteBackground
                  ? 'text-gray-900 hover:text-primary-600'
                  : 'text-white hover:text-primary-200'
                }
                hover:scale-105
                focus:outline-none focus:ring-2
                focus:ring-primary-600
                rounded-md
              `}
            >
              {t('header.contact')}
            </Link>
            <LanguageSwitcher />
          </nav>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`
              md:hidden p-2 rounded-lg
              transition-colors duration-200
              ${isScrolled || needsWhiteBackground 
                ? 'text-gray-900 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
              }
              focus:outline-none focus:ring-2 focus:ring-primary-600
            `}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            {isMenuOpen 
              ? <X className="h-6 w-6" /> 
              : <Menu className="h-6 w-6" />
            }
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};