import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';

export const Footer = () => {
  const { t } = useTranslation();

  const contactInfo = [
    { name: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}`, icon: Mail },
    { name: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone}`, icon: Phone },
    { name: `${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`, href: '#', icon: MapPin },
  ];

  const links = [
    { name: t('header.solutions'), href: '/#solutions' },
    { name: t('header.advantages'), href: '/#advantages' },
    { name: t('header.contact'), href: '/#contact' },
  ];

  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo className="text-white [&>*]:text-white" />
            <p className="mt-4 text-gray-400 text-base">
              {t('footer.description')}
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('footer.navigation')}
            </h3>
            <ul className="mt-4 space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-base text-gray-300 hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('footer.legal.title')}
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/cgv" className="text-base text-gray-300 hover:text-primary-400">
                  {t('footer.legal.terms')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              {t('footer.contact')}
            </h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-base text-gray-300 hover:text-primary-400 flex items-center"
                  >
                    <item.icon className="h-5 w-5 mr-2" aria-hidden="true" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Digismart. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};