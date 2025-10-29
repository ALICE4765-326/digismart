import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Icons from 'lucide-react';

export const Pricing = () => {
  const { t } = useTranslation();

  return (
    <div id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      {/* Component content remains the same, just update icon usage */}
      <Icons.Shield className="h-6 w-6 text-primary-500" />
      <Icons.Zap className="h-6 w-6 text-primary-500" />
      <Icons.Users className="h-6 w-6 text-primary-500" />
      <Icons.Clock className="h-6 w-6 text-primary-500" />
    </div>
  );
};