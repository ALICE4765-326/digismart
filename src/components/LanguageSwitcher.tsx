import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' }
];

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Langue actuelle: ${currentLang.name}`}
      >
        <Globe className="h-4 w-4 text-white" />
        <span className="text-sm text-white font-medium">{currentLang.flag}</span>
        <span className="text-sm text-white font-medium hidden sm:inline">{currentLang.name}</span>
        <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 animate-slideDown">
          <div className="py-1" role="menu" aria-orientation="vertical">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center space-x-3 w-full px-4 py-3 text-left transition-colors hover:bg-gray-50 ${
                  i18n.language === lang.code
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700'
                }`}
                role="menuitem"
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {i18n.language === lang.code && (
                  <span className="text-primary-600 font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};