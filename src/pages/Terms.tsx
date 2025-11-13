import React from 'react';
import { ScrollText, Building, Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../config/site';

export const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center h-16 w-16 bg-primary-100 mb-4">
            <ScrollText className="h-8 w-8 text-primary-600" />
          </div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Conditions Générales de Vente
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            En vigueur au {new Date().toLocaleDateString('fr-FR')}
          </p>
        </div>

        {/* Informations de l'entreprise */}
        <div className="bg-white shadow-sm p-6 mb-8">
          <div className="flex items-center mb-4">
            <Building className="h-6 w-6 text-primary-600 mr-2" />
            <h2 className="text-xl font-semibold text-gray-900">{siteConfig.company.name}</h2>
          </div>
          <div className="space-y-2 text-gray-600">
            <p className="flex items-center">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              {siteConfig.contact.address.street}, {siteConfig.contact.address.city}
            </p>
            <p className="flex items-center">
              <Phone className="h-5 w-5 text-primary-600 mr-2" />
              {siteConfig.contact.phone}
            </p>
            <p className="flex items-center">
              <Mail className="h-5 w-5 text-primary-600 mr-2" />
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        {/* CGV */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 1 - Définitions</h2>
          <p className="text-gray-600 mb-6">
            Les termes et expressions suivants ont, sauf précision contraire, le sens qui leur est donné ci-dessous :
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li><strong>Client :</strong> Toute personne physique ou morale qui achète ou utilise les services de Digismart</li>
            <li><strong>Services :</strong> Ensemble des prestations proposées par Digismart</li>
            <li><strong>Site :</strong> Le site internet accessible à l'adresse www.digismart.fr</li>
            <li><strong>CGV :</strong> Les présentes Conditions Générales de Vente</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 2 - Champ d'application</h2>
          <p className="text-gray-600 mb-6">
            Les présentes CGV s'appliquent à l'ensemble des prestations de services proposées par Digismart. Toute commande implique l'acceptation sans réserve par le Client des présentes CGV. Ces CGV prévalent sur tout autre document du Client.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 3 - Services proposés</h2>
          <p className="text-gray-600 mb-6">
            Digismart propose les services suivants :
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li>Développement d'applications sur mesure</li>
            <li>Gestion des réseaux sociaux</li>
            <li>Conseil en stratégie digitale</li>
            <li>Formation et accompagnement</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 4 - Prix et modalités de paiement</h2>
          <p className="text-gray-600 mb-6">
            Les prix des services sont indiqués en euros hors taxes et sont majorés de la TVA au taux en vigueur. Le paiement s'effectue selon les modalités suivantes :
          </p>
          <ul className="list-disc pl-6 mb-8 text-gray-600">
            <li>Aucun acompte à la commande</li>
            <li>Facturation basée sur les résultats obtenus</li>
            <li>Paiement à 30 jours à compter de la date de facturation</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 5 - Droit de rétractation</h2>
          <p className="text-gray-600 mb-6">
            Conformément à l'article L221-18 du Code de la consommation, le Client dispose d'un délai de quatorze jours pour exercer son droit de rétractation sans avoir à motiver sa décision.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 6 - Responsabilité</h2>
          <p className="text-gray-600 mb-6">
            Digismart s'engage à mettre en œuvre tous les moyens nécessaires à la bonne exécution de ses prestations. La responsabilité de Digismart ne pourra être engagée qu'en cas de faute prouvée.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 7 - Protection des données</h2>
          <p className="text-gray-600 mb-6">
            Les données personnelles collectées sont traitées dans le respect du Règlement Général sur la Protection des Données (RGPD). Pour plus d'informations, consultez notre Politique de confidentialité.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 8 - Propriété intellectuelle</h2>
          <p className="text-gray-600 mb-6">
            Tous les éléments du site et des services fournis par Digismart sont et restent la propriété intellectuelle exclusive de Digismart. Aucune cession de droits de propriété intellectuelle n'est réalisée au travers des présentes CGV.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 9 - Force majeure</h2>
          <p className="text-gray-600 mb-6">
            La responsabilité de Digismart ne pourra pas être mise en œuvre si la non-exécution ou le retard dans l'exécution de l'une de ses obligations décrites dans les présentes CGV découle d'un cas de force majeure.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 10 - Litiges</h2>
          <p className="text-gray-600 mb-6">
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. À défaut, les tribunaux de Paris seront seuls compétents.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article 11 - Modification des CGV</h2>
          <p className="text-gray-600 mb-6">
            Digismart se réserve la faculté de modifier les présentes CGV à tout moment. Les CGV applicables sont celles en vigueur à la date de la commande du Client.
          </p>
        </div>
      </div>
    </div>
  );
}