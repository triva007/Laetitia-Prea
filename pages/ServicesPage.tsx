
import React from 'react';
import SEO from '../components/SEO';
import { CTAButtons } from '../components/CTAButtons';

const ServiceCard = ({ title, icon, color, items }: { title: string, icon: string, color: string, items: string[] }) => (
  <div className={`bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 h-full flex flex-col relative overflow-hidden group hover:shadow-xl transition-all duration-300`}>
    <div className={`absolute top-0 left-0 w-full h-2 ${color}`}></div>
    <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-2xl bg-[#FDFBF7] flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {icon}
        </div>
        <h2 className="text-2xl font-serif font-bold text-brand-dark leading-tight">{title}</h2>
    </div>
    
    <ul className="space-y-4 mb-8 flex-grow">
        {items.map((item, i) => (
            <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                <span className={`mr-3 mt-1.5 w-2 h-2 rounded-full ${color.replace('bg-', 'bg-')}`}></span>
                {item}
            </li>
        ))}
    </ul>
  </div>
);

const ServicesPage = () => {
  return (
    <>
      <SEO 
        title="Accompagnements Nutrition | Laetitia Préa Saint-Cloud"
        description="Nutrition clinique, Micronutrition, Rééducation alimentaire. Découvrez mes accompagnements personnalisés à Saint-Cloud et Boulogne."
      />
      <div className="bg-[#FDFBF7] min-h-screen">
        
        {/* Simple Header */}
        <div className="bg-white pt-12 pb-16 rounded-b-[3rem] shadow-sm mb-12">
            <div className="container mx-auto px-4 text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mb-4">Mes Accompagnements</h1>
                <p className="text-lg text-gray-600">
                    Des solutions concrètes et adaptées à votre physiologie.
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 pb-20">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            
            <ServiceCard 
                title="Nutrition Clinique" 
                icon="🩺" 
                color="bg-brand-green"
                items={[
                    "Gestion du diabète & cholestérol",
                    "Troubles digestifs (SII, ballonnements)",
                    "Hypertension & santé cardiovasculaire",
                    "Analyse de vos bilans sanguins"
                ]}
            />

            <ServiceCard 
                title="Micronutrition" 
                icon="🧬" 
                color="bg-brand-accent"
                items={[
                    "Fatigue chronique & manque d'énergie",
                    "Déficits en vitamines & minéraux",
                    "Gestion du stress & de l'humeur",
                    "Protocole de compléments sur-mesure"
                ]}
            />
            
            <ServiceCard 
                title="Perte de Poids" 
                icon="⚖️" 
                color="bg-blue-400"
                items={[
                    "Sortir de l'effet yo-yo",
                    "Comprendre votre métabolisme",
                    "Manger à sa faim sans frustration",
                    "Réconciliation avec votre image"
                ]}
            />

            <ServiceCard 
                title="Coaching Quotidien" 
                icon="🛒" 
                color="bg-yellow-400"
                items={[
                    "Sélection des produits alimentaires",
                    "Apprendre à lire les étiquettes",
                    "Organiser ses courses et menus",
                    "Astuces pour manger sain en famille"
                ]}
            />
          </div>

          <div className="mt-16 text-center">
             <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6">On en discute ?</h3>
             <CTAButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
