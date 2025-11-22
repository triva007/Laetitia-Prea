
import React from 'react';
import SEO from '../components/SEO';
import { CTAButtons } from '../components/CTAButtons';

const PriceItem = ({ title, price, duration, features, recommended = false }: { title: string, price: string, duration: string, features: string[], recommended?: boolean }) => (
    <div className={`p-8 rounded-3xl border ${recommended ? 'bg-brand-dark text-white border-brand-dark shadow-xl scale-100 md:scale-105 z-10' : 'bg-white text-brand-dark border-gray-100 shadow-sm'}`}>
        {recommended && <div className="text-brand-accent text-xs font-bold uppercase tracking-widest mb-4">Recommandé</div>}
        <h3 className="text-2xl font-serif font-bold mb-2">{title}</h3>
        <div className="flex items-baseline mb-6">
            <span className="text-4xl font-bold">{price}€</span>
            <span className={`ml-2 text-sm ${recommended ? 'text-gray-300' : 'text-gray-500'}`}>/ séance</span>
        </div>
        <div className={`inline-block px-3 py-1 rounded-lg text-sm font-medium mb-8 ${recommended ? 'bg-white/10' : 'bg-gray-100'}`}>
            Durée : {duration}
        </div>
        <ul className="space-y-4">
            {features.map((f, i) => (
                <li key={i} className="flex items-start text-sm">
                    <span className={`mr-3 mt-0.5 ${recommended ? 'text-brand-accent' : 'text-brand-green'}`}>✓</span>
                    <span className={recommended ? 'text-gray-200' : 'text-gray-600'}>{f}</span>
                </li>
            ))}
        </ul>
        <div className="mt-8">
            <a href="https://calendly.com/laetitiaprea/30min" target="_blank" rel="noreferrer" className={`block w-full text-center py-3.5 rounded-xl font-bold transition-all ${recommended ? 'bg-brand-green text-white hover:bg-white hover:text-brand-dark' : 'bg-brand-beige text-brand-dark hover:bg-brand-green hover:text-white'}`}>
                Réserver
            </a>
        </div>
    </div>
);

const PricingPage = () => {
  return (
    <>
      <SEO 
        title="Tarifs Consultations | Saint-Cloud"
        description="Tarifs clairs et transparents pour vos consultations de nutrithérapie."
      />
      <div className="bg-[#FDFBF7] min-h-screen">
        
        <div className="bg-white pt-12 pb-16 rounded-b-[3rem] shadow-sm mb-12">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mb-4">Tarifs</h1>
            </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto items-start">
            
            <PriceItem 
                title="Bilan Initial" 
                price="90" 
                duration="1h15"
                features={[
                    "Analyse complète de votre santé",
                    "Enquête alimentaire & micronutritionnelle",
                    "Premiers conseils personnalisés",
                    "Plan d'action initial"
                ]}
            />

            <PriceItem 
                title="Suivi" 
                price="70" 
                duration="45 min"
                recommended={true}
                features={[
                    "Ajustement du protocole",
                    "Analyse des progrès",
                    "Soutien motivationnel",
                    "Réponses à toutes vos questions",
                    "Adaptation des compléments"
                ]}
            />

            <PriceItem 
                title="Séance Flash" 
                price="140" 
                duration="1h30"
                features={[
                    "Pour une problématique unique",
                    "Audit express",
                    "Stratégie 'Quick Wins'",
                    "Idéal pour débloquer une situation"
                ]}
            />
            
          </div>

          <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100 max-w-3xl mx-auto">
             <h3 className="font-serif font-bold text-xl text-brand-dark mb-4">À savoir</h3>
             <div className="grid sm:grid-cols-3 gap-6 text-sm text-gray-600">
                <p>
                    <strong className="block text-brand-green mb-1">Lieux de consultation</strong>
                    Je vous reçois à mon <strong>cabinet de Saint-Cloud</strong>, en <strong>Visio</strong> (WhatsApp/Zoom) ou directement à votre <strong>Domicile</strong>.
                </p>
                <p>
                    <strong className="block text-brand-green mb-1">Remboursement</strong>
                    Les consultations ne sont pas remboursées par la Sécurité Sociale mais de nombreuses mutuelles prennent en charge les séances de nutrition/médecines douces.
                </p>
                <p>
                    <strong className="block text-brand-green mb-1">Paiement</strong>
                    Règlement par chèque, espèces ou virement instantané. Le paiement s'effectue à la fin de la séance.
                </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
