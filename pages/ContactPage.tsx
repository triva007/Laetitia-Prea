
import React from 'react';
import { CONTACT_INFO } from '../constants';
import { CTAButtons } from '../components/CTAButtons';

// Meta Title: Contact & RDV - Nutrithérapeute à Saint-Cloud & Boulogne
// Meta Description: Contactez Laetitia Préa, nutrithérapeute à Boulogne et Saint-Cloud, pour un rendez-vous. Consultations au cabinet, à domicile ou en visio.

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">Contact & Prise de Rendez-vous</h1>
        <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-600">Prêt(e) à commencer ? Contactez-moi pour toute question ou pour réserver votre première séance à Saint-Cloud ou Boulogne.</p>
      </div>
      
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Info Section */}
          <div className="p-6 sm:p-8 md:p-12 bg-brand-green text-white flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Mes Coordonnées</h2>
              <div className="space-y-4 text-base sm:text-lg">
                <p><strong>Adresse :</strong><br />{CONTACT_INFO.address}</p>
                <p><strong>Téléphone :</strong><br /><a href={CONTACT_INFO.phoneLink} className="hover:underline">{CONTACT_INFO.phone}</a></p>
                <p><strong>Email :</strong><br /><a href={`mailto:${CONTACT_INFO.email}`} className="hover:underline">{CONTACT_INFO.email}</a></p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Horaires</h3>
                <ul className="space-y-1">
                   <li>Lundi–Vendredi : 9h00–19h00</li>
                   <li>Samedi : 9h00–13h00</li>
                </ul>
              </div>
            </div>
            <p className="mt-8 text-brand-light-green italic">Consultations à Saint-Cloud, Boulogne, à domicile ou en visio.</p>
          </div>
          
          {/* Map Section */}
          <div className="w-full h-80 lg:h-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.688015504825!2d2.215286515673899!3d48.84501717928628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b5f6b3f7f09%3A0x6a0d2f8b5a0b7e0c!2s50%20Bd%20de%20la%20R%C3%A9publique%2C%2092210%20Saint-Cloud!5e0!3m2!1sfr!2sfr!4v1620054321098!5m2!1sfr!2sfr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true}
              loading="lazy"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <h2 className="text-3xl font-serif text-brand-dark">Prêt(e) à faire le premier pas ?</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-700">Un appel découverte gratuit est le meilleur moyen de discuter de vos objectifs et de voir comment je peux vous aider.</p>
        <div className="mt-8">
            <CTAButtons />
        </div>
      </div>

    </div>
  );
};

export default ContactPage;