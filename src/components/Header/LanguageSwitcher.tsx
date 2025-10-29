import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const currentLang = i18n.language.split('-')[0] as SupportedLanguage;
  const currentLangInfo = SUPPORTED_LANGUAGES[currentLang] || SUPPORTED_LANGUAGES.en;

  const handleLanguageChange = (lang: SupportedLanguage) => {
    i18n.changeLanguage(lang);
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${lang}`);
    navigate(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-md bg-white/90 hover:bg-white transition-colors shadow-sm"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe className="h-5 w-5 text-primary-600" />
        <span className="text-sm text-gray-700">{currentLangInfo.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu">
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as SupportedLanguage)}
                className={`flex items-center space-x-2 w-full px-4 py-2 text-left transition-colors ${
                  currentLang === code
                    ? 'bg-primary-50 text-primary-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg">{info.flag}</span>
                <span>{info.name}</span>
                {currentLang === code && (
                  <span className="ml-auto text-primary-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};