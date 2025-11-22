
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { CTAButtons } from '../components/CTAButtons';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Laetitia Préa | Nutrithérapeute Saint-Cloud & Boulogne"
        description="Cabinet de nutrithérapie à Saint-Cloud. Retrouvez énergie, digestion et poids de forme grâce à un accompagnement personnalisé en micronutrition. Proche Boulogne."
      />

      <div className="flex flex-col w-full overflow-hidden bg-[#FDFBF7]">
        
        {/* HERO SECTION: Mobile First Optimized */}
        <section className="relative pt-10 pb-12 lg:pt-20 lg:pb-24 px-4 sm:px-6">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    
                    {/* 1. TEXT CONTENT (First on mobile) */}
                    <div className="lg:w-1/2 text-center lg:text-left order-1">
                        <div className="inline-flex items-center gap-2 bg-white border border-brand-green/20 rounded-full px-4 py-1.5 mb-6 shadow-sm">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-green"></span>
                            </span>
                            <span className="text-xs font-bold uppercase tracking-widest text-brand-dark">Cabinet Saint-Cloud & Visio</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-dark leading-[1.15] mb-6">
                            Retrouver une alimentation équilibrée et riche en nutriments grâce à la <span className="text-brand-green">Nutrithérapie</span>
                        </h1>
                        
                        <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                            Laetitia Préa, Nutrithérapeute. J'aide les femmes et les hommes à régler leurs problèmes de santé chroniques par l'alimentation et la micronutrition. Je vous guide également dans la sélection de vos produits alimentaires pour des choix plus sains au quotidien.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <CTAButtons layout="row" />
                            <Link to="/a-propos" className="flex items-center justify-center px-8 py-3.5 bg-white border-2 border-brand-light-green/30 text-brand-dark font-semibold rounded-full hover:border-brand-dark transition-all duration-300">
                                En savoir plus
                            </Link>
                        </div>
                    </div>

                    {/* 2. IMAGE (Second on mobile, Right on Desktop) */}
                    <div className="lg:w-1/2 order-2 w-full max-w-md lg:max-w-none mx-auto">
                        <div className="relative">
                            {/* Decorative shape behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[100%] bg-brand-light-green/20 rounded-[3rem] rotate-3 -z-10"></div>
                            
                            <img 
                                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop" 
                                alt="Alimentation saine et colorée" 
                                className="w-full h-auto rounded-[2.5rem] shadow-xl border-4 border-white object-cover aspect-[4/3] lg:aspect-square"
                            />

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:-left-6 lg:translate-x-0 bg-white p-4 rounded-2xl shadow-lg border border-brand-green/10 flex items-center gap-3 w-max max-w-[90%]">
                                <div className="bg-brand-beige p-2 rounded-full text-xl">🌿</div>
                                <div>
                                    <p className="font-bold text-brand-dark text-sm">Approche Naturelle</p>
                                    <p className="text-xs text-gray-500">Basée sur la science</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* PROBLÉMATIQUES : Grid Visual */}
        <section className="py-16 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.03)] z-10">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Pour quoi consulter ?</h2>
              <p className="text-gray-600 text-lg">
                Si vous ressentez l'un de ces symptômes, la nutrithérapie est la solution adaptée.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {[
                { title: "Fatigue & Stress", icon: "⚡", color: "bg-yellow-50" },
                { title: "Digestion Difficile", icon: "🌱", color: "bg-green-50" },
                { title: "Perte de Poids", icon: "⚖️", color: "bg-blue-50" },
                { title: "Troubles du Sommeil", icon: "🌙", color: "bg-indigo-50" },
                { title: "Problèmes de Peau", icon: "✨", color: "bg-pink-50" },
                { title: "Santé Féminine", icon: "🌸", color: "bg-red-50" },
              ].map((item, idx) => (
                <div key={idx} className={`${item.color} p-6 rounded-3xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300 border border-transparent hover:border-brand-dark/5`}>
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-bold text-brand-dark text-base md:text-lg leading-tight">{item.title}</h3>
                </div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
                <Link to="/accompagnements" className="inline-block text-brand-green font-bold hover:text-brand-dark underline decoration-2 underline-offset-4 transition-colors">
                    Découvrir tous les accompagnements
                </Link>
            </div>
          </div>
        </section>

        {/* BIO SECTION : Reassuring & Human */}
        <section className="py-20 bg-brand-dark text-brand-beige">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
                    <img 
                        src="https://media.licdn.com/dms/image/v2/C5603AQFbE1MFF6mNFA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1661406455781?e=1764201600&v=beta&t=tZeF5Pz1NSKhV1lxF408fqwTCh_VzIrnkeS6iaHAOh4" 
                        alt="Laetitia Préa" 
                        className="w-full h-full object-cover rounded-full border-4 border-brand-beige/20"
                    />
                </div>
                <div className="text-center md:text-left">
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">"Je ne soigne pas des symptômes, j'accompagne une personne."</h2>
                    <p className="text-brand-light-green/80 text-lg leading-relaxed mb-6 max-w-2xl">
                        Diplômée du CFNA, je pratique une nutrithérapie scientifique et bienveillante. Mon but est de vous rendre autonome dans la gestion de votre santé, sans régime restrictif intenable.
                    </p>
                    <Link to="/a-propos" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full transition-colors font-medium text-sm tracking-wide">
                        Lire mon histoire
                    </Link>
                </div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS : Google Reviews Style */}
        <section className="py-20 bg-[#FDFBF7]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-brand-dark mb-4">Ce qu'ils en disent</h2>
                <div className="flex items-center justify-center gap-2">
                     <span className="text-2xl font-bold text-brand-dark">5.0</span>
                     <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-[#F4B400]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                     </div>
                     <span className="text-sm text-gray-500">sur Google</span>
                </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col h-full transform transition-transform hover:-translate-y-1 duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                        {/* Random color for avatar based on index */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                            ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-yellow-600'][i % 5]
                        }`}>
                            {t.name.charAt(0)}
                        </div>
                        <div>
                            <p className="font-bold text-sm text-[#202124]">{t.name}</p>
                            <p className="text-xs text-gray-500">{t.location}</p>
                        </div>
                    </div>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
                  </div>

                  <div className="flex items-center gap-1 mb-3">
                     {[...Array(5)].map((_, idx) => (
                        <svg key={idx} className="w-4 h-4 text-[#F4B400]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                     ))}
                  </div>
                  
                  <p className="text-[#4a4a4a] text-[15px] leading-relaxed">"{t.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl bg-brand-green rounded-[2.5rem] p-8 md:p-16 text-center text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Prêt(e) à aller mieux ?</h2>
                    <p className="text-lg text-white/90 mb-10 max-w-lg mx-auto">
                        Le premier pas est souvent le plus difficile. Prenez rendez-vous pour un bilan ou un appel découverte gratuit.
                    </p>
                    <div className="flex justify-center">
                        <a href="https://calendly.com/laetitiaprea/30min" className="bg-white text-brand-green font-bold py-4 px-10 rounded-full hover:scale-105 transition-transform shadow-lg">
                            Prendre Rendez-vous
                        </a>
                    </div>
                </div>
            </div>
        </section>

      </div>
    </>
  );
};

export default HomePage;
