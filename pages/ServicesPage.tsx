import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CalendarIcon } from '../components/CTAButtons';

// Meta Title: Accompagnements Nutrition à Saint-Cloud & Boulogne | Laetitia Préa
// Meta Description: Découvrez mes accompagnements en nutrition à Boulogne et Saint-Cloud : nutrition clinique, micronutrition... Solutions personnalisées.

interface ServiceCardProps {
  title: string;
  children?: React.ReactNode;
}

const handleCalendlyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
            url: CONTACT_INFO.calendly,
            branding: false,
            hideGdprBanner: true,
        });
    }
};

const ServiceCard = ({ title, children }: ServiceCardProps) => (
  <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
    <h2 className="text-2xl md:text-3xl font-serif font-semibold text-brand-green mb-4">{title}</h2>
    <div className="text-gray-700 space-y-4 leading-relaxed">
      {children}
    </div>
    <a 
      href={CONTACT_INFO.calendly} 
      onClick={handleCalendlyClick}
      className="inline-flex items-center mt-6 text-base bg-brand-green text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-dark transition-all duration-300 cursor-pointer"
    >
      <CalendarIcon />
      Réserver un appel découverte
    </a>
  </div>
);

const ServicesPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">Mes Accompagnements</h1>
        <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-600">Une approche structurée autour de quatre piliers fondamentaux pour un bien-être complet et durable, que vous soyez à Boulogne, Saint-Cloud ou aux alentours.</p>
      </div>
      <div className="space-y-12">
        
        <ServiceCard title="Nutrition Clinique">
          <p>La nutrition clinique est la base de mon approche. Elle consiste à utiliser l'alimentation comme un véritable outil thérapeutique pour prévenir ou accompagner diverses pathologies.</p>
          <h3 className="font-semibold text-brand-dark mb-2 mt-4">Bénéfices :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Élaboration d'un bilan nutritionnel complet et détaillé.</li>
            <li>Création d'un plan alimentaire 100% personnalisé à vos besoins.</li>
            <li>Soutien dans la gestion de pathologies (diabète, cholestérol, troubles digestifs...).</li>
            <li>Optimisation de votre santé globale par l'alimentation.</li>
          </ul>
        </ServiceCard>

        <ServiceCard title="Micronutrition">
          <p>La micronutrition s'intéresse aux molécules essentielles au bon fonctionnement de notre corps : vitamines, minéraux, oligo-éléments... Un déficit peut avoir des conséquences importantes sur votre bien-être.</p>
          <h3 className="font-semibold text-brand-dark mb-2 mt-4">Bénéfices :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Correction des carences pour une vitalité retrouvée.</li>
            <li>Amélioration significative de la qualité de votre sommeil.</li>
            <li>Meilleure gestion du stress et de l'anxiété.</li>
            <li>Renforcement de votre système immunitaire et de votre énergie.</li>
          </ul>
        </ServiceCard>
        
        <ServiceCard title="Rééducation Nutritionnelle">
          <p>Oubliez les régimes frustrants. La rééducation nutritionnelle vise à modifier vos habitudes en profondeur et en douceur pour des résultats qui s'inscrivent dans la durée. C'est un véritable apprentissage.</p>
          <h3 className="font-semibold text-brand-dark mb-2 mt-4">Bénéfices :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Rééquilibrage alimentaire progressif et sans privation.</li>
            <li>Mise en place d'habitudes saines et durables.</li>
            <li>Retrouver une relation apaisée et intuitive avec la nourriture.</li>
            <li>Gagner en autonomie dans vos choix alimentaires quotidiens.</li>
          </ul>
        </ServiceCard>

        <ServiceCard title="Sélection des produits alimentaires">
          <p>Faire ses courses peut devenir un casse-tête. Je vous accompagne pour vous apprendre à faire les bons choix, à décrypter les emballages et à privilégier une alimentation de qualité.</p>
          <h3 className="font-semibold text-brand-dark mb-2 mt-4">Bénéfices :</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Apprendre à lire et comprendre les étiquettes nutritionnelles.</li>
            <li>Identifier et réduire la consommation de produits ultra-transformés.</li>
            <li>Faire des choix éclairés pour votre santé et celle de votre famille.</li>
            <li>Composer des repas sains, rapides et savoureux.</li>
          </ul>
        </ServiceCard>

      </div>
    </div>
  );
};

export default ServicesPage;