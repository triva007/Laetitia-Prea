
import React from 'react';
import SEO from '../components/SEO';
import { CTAButtons } from '../components/CTAButtons';

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="À propos de Laetitia Préa | Nutrithérapeute"
        description="Découvrez mon parcours et ma philosophie. Nutrithérapeute passionnée à Saint-Cloud, je vous aide à devenir acteur de votre santé grâce à une approche scientifique et humaine."
      />
      <div className="bg-white min-h-screen">
        {/* Hero Header */}
        <div className="bg-[#FDFBF7] py-20 md:py-28 border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 text-center">
             <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Ma Philosophie</span>
             <h1 className="text-4xl md:text-6xl font-bold font-serif text-brand-dark mt-4 mb-8">À propos de moi</h1>
             <div className="relative max-w-3xl mx-auto">
                <svg className="w-16 h-16 text-brand-green/20 absolute -top-8 -left-8 transform -scale-x-100" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                <p className="text-xl md:text-3xl text-brand-dark font-serif italic leading-relaxed relative z-10">
                  "Ma mission : vous donner les clés pour devenir pleinement acteur de votre santé."
                </p>
             </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Image Column */}
            <div className="lg:col-span-5 relative lg:sticky lg:top-32">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FDFBF7] rounded-[2rem] transform translate-x-4 translate-y-4 border border-gray-100"></div>
                <img 
                  src="https://media.licdn.com/dms/image/v2/C5603AQFbE1MFF6mNFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661406455781?e=1764201600&v=beta&t=tZeF5Pz1NSKhV1lxF408fqwTCh_VzIrnkeS6iaHAOh4" 
                  alt="Portrait de Laetitia Préa" 
                  className="rounded-[2rem] shadow-2xl w-full h-auto object-cover relative z-10 aspect-[4/5] border-4 border-white"
                />
              </div>
              
              <div className="mt-12 bg-brand-dark text-white p-8 rounded-3xl shadow-xl relative z-10">
                <h3 className="font-serif text-2xl mb-6 text-brand-accent">Mes Valeurs</h3>
                <ul className="space-y-4">
                  {[
                      "Écoute active & Bienveillance",
                      "Rigueur scientifique",
                      "Personnalisation totale",
                      "Autonomie du patient"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-brand-light-green">
                        <div className="w-1.5 h-1.5 bg-white rounded-full mr-3"></div>
                        {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-7 space-y-12">
              <div className="prose prose-lg text-gray-600 max-w-none">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-dark font-bold mb-6">De la passion à la vocation</h2>
                <p>
                  Passionnée depuis toujours par les liens profonds entre l'alimentation, la santé et le bien-être, j'ai choisi de faire de la nutrithérapie mon métier. Mon parcours m'a permis de comprendre que la santé n'est pas simplement l'absence de maladie, mais un état complet de bien-être physique, mental et émotionnel.
                </p>
                <p>
                  J'ai obtenu mon diplôme auprès du <strong>CFNA (Centre de Formation en Nutrithérapie et Phytothérapie Appliquée)</strong>, me garantissant une expertise pointue et actualisée en biochimie et physiologie.
                </p>
              </div>

              <div className="bg-[#FDFBF7] p-8 rounded-3xl border-l-4 border-brand-green">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-dark font-bold mb-4">Une approche holistique et scientifique</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Je ne crois pas aux solutions universelles ni aux régimes miracles. Chaque personne est unique, avec son métabolisme, son histoire, son environnement et ses contraintes.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                        <h4 className="font-bold text-brand-green mb-2">Nutrition Clinique</h4>
                        <p className="text-sm text-gray-600">Gestion des pathologies et rééquilibrage global.</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                         <h4 className="font-bold text-brand-green mb-2">Micronutrition</h4>
                        <p className="text-sm text-gray-600">Optimisation cellulaire (vitamines, minéraux).</p>
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                         <h4 className="font-bold text-brand-green mb-2">Psycho-nutrition</h4>
                        <p className="text-sm text-gray-600">Gestion du comportement et des émotions.</p>
                    </div>
                </div>
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none">
                <h2 className="text-3xl md:text-4xl font-serif text-brand-dark font-bold mb-6">Pourquoi Saint-Cloud ?</h2>
                <p>
                  Installée au cœur de <strong className="text-brand-green">Saint-Cloud</strong>, j'ai à cœur de proposer un accompagnement de proximité. Je reçois de nombreux patients venant de <strong className="text-brand-green">Boulogne-Billancourt</strong>, Suresnes, Garches et Rueil-Malmaison.
                </p>
                <p>
                  Que vous veniez pour une perte de poids, des troubles digestifs, une fatigue chronique ou simplement pour optimiser votre santé, je m'engage à vous accompagner avec toute la bienveillance et l'expertise nécessaire.
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                  <p className="text-lg font-serif font-bold text-brand-dark">Prêt(e) à commencer ?</p>
                  <CTAButtons layout="row" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
