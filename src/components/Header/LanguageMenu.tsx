import React from 'react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';
import { LanguageButton } from './LanguageButton';

interface LanguageMenuProps {
  currentLanguage: SupportedLanguage;
  onLanguageSelect: (lang: SupportedLanguage) => void;
}

export const LanguageMenu: React.FC<LanguageMenuProps> = ({
  currentLanguage,
  onLanguageSelect,
}) => {
  return (
    <div className="py-1 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
      {(Object.keys(SUPPORTED_LANGUAGES) as SupportedLanguage[]).map((lang) => (
        <LanguageButton
          key={lang}
          language={lang}
          isActive={currentLanguage === lang}
          onClick={() => onLanguageSelect(lang)}
        />
      ))}
    </div>
  );
};