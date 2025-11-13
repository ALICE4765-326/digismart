import React from 'react';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';

interface LanguageButtonProps {
  language: SupportedLanguage;
  isActive: boolean;
  onClick: () => void;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  isActive,
  onClick
}) => {
  const langInfo = SUPPORTED_LANGUAGES[language];

  return (
    <button
      onClick={onClick}
      className={`
        flex items-center space-x-2 w-full px-3 py-2 text-sm
        transition-colors
        ${isActive 
          ? 'bg-primary-50 text-primary-700' 
          : 'text-gray-600 hover:bg-gray-50'
        }
      `}
    >
      <span role="img" aria-label={`${langInfo.name} flag`} className="mr-2">
        {langInfo.flag}
      </span>
      <span>{langInfo.name}</span>
      {isActive && <span className="ml-auto">✓</span>}
    </button>
  );
};