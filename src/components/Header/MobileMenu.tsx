import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;

  return (
    <div 
      className="
        fixed inset-x-0 top-[4rem] bg-white
        border-t border-gray-100 shadow-lg
        z-50 animate-slideDown
        max-h-[calc(100vh-4rem)] overflow-y-auto
        md:hidden
        font-sans
      "
    >
      <nav className="p-4 space-y-2">
        {[
          { to: '/', label: t('header.home') },
          { to: '/solutions', label: t('header.solutions') },
          { to: '/pricing', label: t('header.pricing') },
          { to: '/contact', label: t('header.contact') }
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="
              block px-4 py-3 rounded-lg
              text-[16px] leading-6 tracking-wide font-medium
              text-gray-800 hover:text-primary-600
              hover:bg-primary-50
              transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-primary-600
            "
          >
            {item.label}
          </Link>
        ))}
        <div className="px-4 py-2">
          <LanguageSwitcher />
        </div>
      </nav>
    </div>
  );
};