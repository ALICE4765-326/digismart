import React from 'react';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES, SupportedLanguage } from '../../i18n/config';

interface LanguageButtonProps {
  language: SupportedLanguage;
  onClick: () => void;
  isActive: boolean;
}

export const LanguageButton: React.FC<LanguageButtonProps> = ({
  language,
  onClick,
  isActive
}) => {
  const { t } = useTranslation();
  const langInfo = SUPPORTED_LANGUAGES[language];

  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 w-full px-4 py-2 text-left transition-colors ${
        isActive
          ? 'bg-primary-50 text-primary-700'
          : 'text-gray-700 hover:bg-gray-50'
      }`}
      dir={langInfo.dir}
    >
      <span className="text-lg">{langInfo.flag}</span>
      <span>{langInfo.name}</span>
      {isActive && (
        <span className="ml-auto text-primary-600">
          ✓
        </span>
      )}
    </button>
  );
};