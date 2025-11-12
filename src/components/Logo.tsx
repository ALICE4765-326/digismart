import React from 'react';
import { Zap } from 'lucide-react';
import { siteConfig } from '../config/site';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-primary-600 [.text-white_&]:bg-primary-600">
        <Zap className="h-5 w-5 text-white" />
      </div>
      <span className="ml-2 text-2xl font-bold text-gray-900 [.text-white_&]:text-white">
        {siteConfig.company.name.slice(0, 4)}<span className="text-primary-600 [.text-white_&]:text-primary-600">{siteConfig.company.name.slice(4, 9)}</span><span className="text-gray-900 [.text-white_&]:text-white">{siteConfig.company.name.slice(9)}</span>
      </span>
    </div>
  );
};