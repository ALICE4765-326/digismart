import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ title, description, icon: Icon, benefits }) => {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
      <div className="relative">
        <div className="inline-flex items-center justify-center p-3 bg-primary-50 text-primary-600 rounded-xl ring-4 ring-white group-hover:bg-primary-100 transition-colors duration-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500 mr-2 group-hover:scale-125 transition-transform duration-300" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}