import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { Globe, ChevronDown } from 'lucide-react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(dropdownRef, () => setIsOpen(false));

  const currentLang = i18n.language.split('-')[0] as SupportedLanguage;
  const currentLangInfo = SUPPORTED_LANGUAGES[currentLang] || SUPPORTED_LANGUAGES.pt;

  const handleLanguageChange = async (lang: SupportedLanguage) => {
    await i18n.changeLanguage(lang);
    document.documentElement.lang = lang;
    document.title = i18n.t('meta.title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', i18n.t('meta.description'));
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors shadow-sm min-w-[120px]"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={currentLangInfo.title}
      >
        <span className="text-lg" aria-hidden="true">
          {currentLangInfo.flag}
        </span>
        <span className="text-sm text-gray-700 flex-1 text-left">
          {currentLangInfo.name}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-full min-w-[160px] rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1">
            {Object.entries(SUPPORTED_LANGUAGES).map(([code, info]) => (
              <button
                key={code}
                onClick={() => handleLanguageChange(code as SupportedLanguage)}
                className={`
                  flex items-center space-x-3 w-full px-4 py-3 text-left transition-colors rounded-md mx-1
                  ${currentLang === code
                    ? 'bg-primary-50 text-primary-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                  }
                `}
                role="menuitem"
                lang={code}
                aria-current={currentLang === code ? 'true' : undefined}
              >
                <span className="text-lg">{info.flag}</span>
                <span>{info.name}</span>
                {currentLang === code && (
                  <span className="ml-auto text-primary-600" aria-hidden="true">
                    ✓
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};