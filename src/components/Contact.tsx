import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  // Adresse de l'entreprise
  const address = "123 Avenue des Champs-Élysées, 75008 Paris, France";
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dw901SwHSR3g&q=${encodeURIComponent(address)}`;

  return (
    <div id="contact" className="bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Carte Google Maps */}
          <div className="bg-white shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-12 h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.123456789!2d-8.123456789!3d41.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA3JzI0LjQiTiA4wrAwNycyNC40Ilc!5e0!3m2!1spt!2spt!4v1642678901234!5m2!1spt!2spt"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Digismart"
                className=""
              />
            </div>
          </div>
          
          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-white shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('contact.info.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Email</p>
                    <a href="mailto:aliceleacosta@gmail.com" className="text-primary-600 hover:text-primary-700">
                      aliceleacosta@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Téléphone</p>
                    <a href="tel:+351923319672" className="text-primary-600 hover:text-primary-700">
                      +351 923 319 672
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-600">Rua Cruz da Estrada, n° 481</p>
                    <p className="text-gray-600">4765-326 Oliveira Santa Maria</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horaires d'ouverture */}
            <div className="bg-white shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Clock className="h-6 w-6 text-primary-600 mr-2" />
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lundi - Vendredi</span>
                  <span className="font-medium text-gray-900">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Samedi</span>
                  <span className="font-medium text-gray-900">10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Dimanche</span>
                  <span className="font-medium text-gray-900">Fermé</span>
                </div>
              </div>
            </div>
            
            {/* Bouton de contact */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg p-8 text-white">
              <h3 className="text-xl font-semibold mb-4">Prêt à commencer ?</h3>
              <p className="text-primary-100 mb-6">
                Contactez-nous dès aujourd'hui pour discuter de votre projet et découvrir comment nous pouvons vous aider.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:aliceleacosta@gmail.com"
                  className="flex-1 bg-white text-primary-600 px-6 py-3 rounded-lg font-medium text-center hover:bg-gray-50 transition-colors"
                >
                  Envoyer un email
                </a>
                <a
                  href="tel:+351923319672"
                  className="flex-1 bg-primary-800 text-white px-6 py-3 rounded-lg font-medium text-center hover:bg-primary-900 transition-colors"
                >
                  Appeler maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}