
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { CTAButtons } from '../components/CTAButtons';

// Meta Title: Laetitia Préa - Nutrithérapeute à Saint-Cloud & Boulogne | Équilibre
// Meta Description: Retrouvez énergie et bien-être grâce à une approche personnalisée en nutrithérapie à Saint-Cloud et Boulogne-Billancourt. Prenez rendez-vous.

const CheckIcon = () => (
  <svg className="w-6 h-6 text-brand-green flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const QuoteIcon = () => (
  <svg className="w-10 h-10 text-brand-light-green" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414L9 9.586V4a1 1 0 011-1zM3 3a1 1 0 011 1v5.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 011.414-1.414L3 9.586V4a1 1 0 011-1z" clipRule="evenodd"></path></svg>
);


const HomePage = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* Hero Section */}
      <section className="pt-12 md:pt-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')"}}>
        <div className="bg-brand-beige/90">
          <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-brand-dark leading-tight">Retrouvez votre équilibre grâce à la nutrithérapie à Saint-Cloud et Boulogne</h1>
            <p className="mt-6 text-base md:text-lg max-w-3xl mx-auto text-brand-dark">
              Je vous accompagne avec une approche personnalisée pour vous aider à retrouver votre vitalité, optimiser votre santé et atteindre un bien-être durable. Ensemble, faisons de votre alimentation votre meilleure alliée.
            </p>
            <div className="mt-10">
              <CTAButtons />
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi consulter */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-dark">Pourquoi consulter une nutrithérapeute ?</h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">Pour retrouver une relation saine avec votre alimentation et répondre à des besoins spécifiques.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { title: "Gagner en énergie", description: "Luttez contre la fatigue chronique et retrouvez votre vitalité." },
            { title: "Améliorer la digestion", description: "Mettez fin aux ballonnements, et inconforts digestifs." },
            { title: "Équilibrer votre poids", description: "Atteignez votre poids de forme durablement et sans frustration." },
            { title: "Mieux gérer le stress", description: "Soutenez votre système nerveux grâce à une alimentation adaptée." },
            { title: "Optimiser vos performances", description: "Améliorez votre concentration et vos capacités sportives." },
            { title: "Renforcer votre immunité", description: "Préparez votre corps à mieux se défendre contre les agressions." },
          ].map(item => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-brand-green">{item.title}</h3>
              <p className="mt-2 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approche Personnalisée */}
      <section className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-dark">Une approche personnalisée, bienveillante et scientifique</h2>
            <p className="mt-4 text-base md:text-lg">
              Mon approche est holistique : je ne me contente pas de regarder votre assiette, mais je prends en compte votre mode de vie, votre histoire et vos objectifs. Chaque accompagnement est unique, car vous êtes unique.
            </p>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Une écoute attentive pour comprendre vos besoins réels.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Des bilans complets pour une analyse précise de votre état de santé.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Des conseils pratiques et faciles à intégrer dans votre quotidien.</span></li>
              <li className="flex items-start"><CheckIcon /><span className="ml-3">Un soutien continu pour vous aider à maintenir vos nouvelles habitudes.</span></li>
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <img src="https://scontent-cdg4-2.xx.fbcdn.net/v/t39.30808-6/467809954_10159796748956548_516756445494322095_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=7tBMUaw5w8cQ7kNvwGJD68J&_nc_oc=AdkxV3qkvsFPlXc9eUs5Q7YLQgVXUGg8nuZT91itHYgspY8rS2Vkz7l0Mx0q7q0LtwWweQdSE0-xg71AaBCgD5Gk&_nc_zt=23&_nc_ht=scontent-cdg4-2.xx&_nc_gid=CCSJk3EcIvPt1YUZbviiTg&oh=00_Afhw526_Ic-nrd0Se17x9Rt3pQsf_gjYRdLKMww4v8UoMQ&oe=69193681" alt="Consultation en nutrithérapie avec Laetitia Préa" className="rounded-lg shadow-xl w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-dark">Mes domaines d’expertise</h2>
            <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto">Je vous accompagne sur de nombreuses problématiques, notamment à Boulogne-Billancourt, Saint-Cloud, Suresnes, Garches et Rueil-Malmaison.</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {["Nutrition clinique", "Micronutrition", "Rééducation nutritionnelle", "Choix alimentaires"].map(expertise => (
                <div key={expertise} className="bg-brand-green text-white p-6 md:p-8 rounded-lg shadow-lg text-center flex items-center justify-center">
                    <h3 className="text-xl md:text-2xl font-semibold">{expertise}</h3>
                </div>
            ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-brand-light-green/50">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-dark">Ce que mes clients disent</h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg flex flex-col">
                <QuoteIcon />
                <p className="mt-4 text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6">
                  <p className="font-bold text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 md:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-brand-dark">Prenez rendez-vous dès maintenant</h2>
          <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">N'attendez plus pour prendre soin de vous. Le premier pas vers une meilleure santé commence par un simple appel. Je propose des consultations au cabinet, à domicile ou en téléconsultation à Saint-Cloud, Boulogne et alentours.</p>
          <div className="mt-8">
            <CTAButtons />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;