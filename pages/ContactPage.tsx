
import React from 'react';
import { CONTACT_INFO } from '../constants';
import SEO from '../components/SEO';

const ContactPage = () => {
  return (
    <>
      <SEO 
        title="Contact & RDV | Nutrithérapeute Saint-Cloud"
        description="Prendre rendez-vous avec Laetitia Préa à Saint-Cloud ou Boulogne."
      />
      <div className="bg-[#FDFBF7] min-h-screen">
        
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
            <h1 className="text-4xl md:text-5xl font-bold font-serif text-brand-dark mb-12 text-center">Me Contacter</h1>

            <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden">
                <div className="grid md:grid-cols-2">
                    
                    {/* Left: Contact Actions */}
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Vous avez une question avant de prendre rendez-vous ? Je suis joignable par téléphone ou par email.
                        </p>

                        <div className="space-y-4">
                            <a href={CONTACT_INFO.phoneLink} className="flex items-center p-4 rounded-2xl bg-[#FDFBF7] hover:bg-brand-green hover:text-white transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-green shadow-sm group-hover:text-brand-green">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Appelez-moi</p>
                                    <p className="font-bold text-lg">{CONTACT_INFO.phone}</p>
                                </div>
                            </a>

                            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center p-4 rounded-2xl bg-[#FDFBF7] hover:bg-brand-dark hover:text-white transition-colors group">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-dark shadow-sm group-hover:text-brand-dark">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Écrivez-moi</p>
                                    <p className="font-bold text-lg break-all">{CONTACT_INFO.email}</p>
                                </div>
                            </a>

                            <div className="flex items-center p-4 rounded-2xl bg-[#FDFBF7]">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-accent shadow-sm">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div className="ml-4">
                                    <p className="text-xs font-bold uppercase tracking-widest opacity-60">Le Cabinet</p>
                                    <p className="font-medium text-sm md:text-base leading-snug">{CONTACT_INFO.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Map */}
                    <div className="h-64 md:h-auto w-full bg-gray-100 relative">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.688015504825!2d2.215286515673899!3d48.84501717928628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e67b5f6b3f7f09%3A0x6a0d2f8b5a0b7e0c!2s50%20Bd%20de%20la%20R%C3%A9publique%2C%2092210%20Saint-Cloud!5e0!3m2!1sfr!2sfr!4v1620054321098!5m2!1sfr!2sfr" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen={true}
                            loading="lazy"
                            title="Cabinet Saint-Cloud"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>

                </div>
            </div>
            
            <div className="mt-12 text-center text-gray-500 text-sm">
                <p>Consultations sur rendez-vous uniquement.</p>
                <p>Lundi au Vendredi (9h-19h) et Samedi matin.</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
