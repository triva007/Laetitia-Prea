
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, NAV_LINKS } from '../constants';

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
);


const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold font-serif mb-4">{CONTACT_INFO.name}</h3>
            <p className="text-brand-light-green">{CONTACT_INFO.title}</p>
            <div className="mt-4">
              <a href={CONTACT_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-light-green hover:text-brand-accent transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.path} className="text-brand-light-green hover:text-brand-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-brand-light-green">
              <li>{CONTACT_INFO.address}</li>
              <li><a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-brand-accent transition-colors">{CONTACT_INFO.email}</a></li>
              <li><a href={CONTACT_INFO.phoneLink} className="hover:text-brand-accent transition-colors">{CONTACT_INFO.phone}</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold text-lg mb-4">Horaires</h4>
             <ul className="space-y-2 text-brand-light-green">
                <li>Lundi–Vendredi : 9h00–19h00</li>
                <li>Samedi : 9h00–13h00</li>
                <li>Dimanche : Fermé</li>
             </ul>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {CONTACT_INFO.name}. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;