import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.254 6.254l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V5a1 1 0 011-1h.001z" />
    </svg>
);

const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
);

const handleCalendlyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({ url: CONTACT_INFO.calendly });
    }
};

const Logo = () => (
    <div className="flex items-center space-x-2">
        <svg className="h-8 w-8 text-brand-green" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="64" height="64" rx="12" fill="currentColor"/>
            <path d="M32 12C32 12 44 20 44 32C44 44 32 52 32 52C32 52 20 44 20 32C20 20 32 12 32 12Z" fill="#F7F3E9"/>
            <path d="M32 12V52" stroke="#5E8B7E" strokeWidth="2"/>
        </svg>
        <span className="text-xl md:text-2xl font-bold text-brand-dark font-serif">Laetitia Préa</span>
    </div>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkClass = 'text-brand-accent';
  const inactiveLinkClass = 'hover:text-brand-accent transition-colors duration-300';

  return (
    <header className="bg-brand-beige sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/">
          <Logo />
        </NavLink>
        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.path}
              className={({ isActive }) =>
                `font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center space-x-2">
            <a href={CONTACT_INFO.phoneLink} className="flex items-center text-sm bg-brand-light-green text-brand-dark font-semibold py-2 px-4 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300">
                <PhoneIcon />
                Appeler
            </a>
            <a href={CONTACT_INFO.calendly} onClick={handleCalendlyClick} className="flex items-center text-sm bg-brand-green text-white font-semibold py-2 px-4 rounded-full hover:bg-brand-dark transition-all duration-300 cursor-pointer">
                <CalendarIcon />
                Réserver un appel
            </a>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="lg:hidden bg-brand-beige pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-lg ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col space-y-3 pt-4">
                <a href={CONTACT_INFO.phoneLink} className="flex items-center justify-center bg-brand-light-green text-brand-dark font-semibold py-2 px-6 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300">
                    <PhoneIcon />
                    Appeler Laetitia
                </a>
                <a href={CONTACT_INFO.calendly} onClick={handleCalendlyClick} className="flex items-center justify-center bg-brand-green text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-dark transition-all duration-300 cursor-pointer">
                    <CalendarIcon />
                    Réserver un appel
                </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;