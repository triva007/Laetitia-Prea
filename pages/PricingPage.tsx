import React from 'react';

// Meta Title: Tarifs Nutrithérapeute Laetitia Préa - Saint-Cloud & Boulogne
// Meta Description: Consultez les tarifs de votre nutrithérapeute à Saint-Cloud et Boulogne-Billancourt. Formules d'accompagnement nutritionnel personnalisé.

interface PricingCardProps {
  title: string;
  duration: string;
  price: string;
  children?: React.ReactNode;
  featured?: boolean;
}

const PricingCard = ({ title, duration, price, children, featured = false }: PricingCardProps) => (
  <div className={`border-2 rounded-lg p-6 sm:p-8 text-center flex flex-col ${featured ? 'border-brand-green bg-white shadow-2xl md:scale-105' : 'border-gray-200 bg-white'}`}>
    <h2 className="text-2xl font-semibold text-brand-dark">{title}</h2>
    <p className="text-gray-500 mt-2">{duration}</p>
    <p className="text-5xl font-bold text-brand-green my-6">{price} €</p>
    <div className="text-left text-gray-600 space-y-4 flex-grow">
      {children}
    </div>
  </div>
);

const PricingPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">Formules et Tarifs</h1>
        <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-600">Des accompagnements clairs et adaptés à vos besoins à Saint-Cloud et Boulogne, pour un investissement durable dans votre santé.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center max-w-sm mx-auto lg:max-w-none">
        
        <PricingCard title="Première Séance" duration="1h" price="90">
            <p>Un premier rendez-vous essentiel pour faire connaissance, réaliser un bilan complet de votre situation et définir ensemble vos objectifs.</p>
        </PricingCard>

        <PricingCard title="Séance de Suivi" duration="45 min" price="70" featured={true}>
          <p>Pour ajuster votre programme, répondre à vos questions et vous accompagner pas à pas vers l'atteinte de vos objectifs.</p>
        </PricingCard>

        <PricingCard title="Séance Flash" duration="1h30" price="140">
          <p>Une séance unique et intensive pour un bilan complet et la mise en place d'une stratégie de rééducation nutritionnelle ciblée.</p>
        </PricingCard>
        
      </div>

      <div className="mt-16 text-center text-gray-700 max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-brand-dark mb-4">Informations importantes</h3>
        <p>Les consultations ne sont pas remboursées par la Sécurité Sociale, mais de nombreuses mutuelles proposent une prise en charge. Renseignez-vous auprès de la vôtre.</p>
        <p className="mt-4 font-semibold">Moyens de paiement acceptés : chèque, espèces, virement.</p>
      </div>
    </div>
  );
};

export default PricingPage;