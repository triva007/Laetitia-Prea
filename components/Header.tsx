
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { NAV_LINKS, CONTACT_INFO } from '../constants';

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.254 6.254l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V5a1 1 0 011-1h.001z" />
    </svg>
);

const Logo = () => (
    <div className="flex items-center space-x-3">
        <div className="w-12 h-12 flex-shrink-0">
             <img 
                src="https://i.postimg.cc/Vdr6HhwC/Capture-d-ecran-2025-11-22-171229.png" 
                alt="Logo Laetitia Préa" 
                className="w-full h-full object-contain"
            />
        </div>
        <div className="flex flex-col">
            <span className="text-xl font-bold text-brand-dark font-serif leading-none tracking-tight">Laetitia Préa</span>
            <span className="text-[10px] uppercase tracking-widest text-gray-500 font-medium mt-0.5">Nutrithérapeute</span>
        </div>
    </div>
);


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const activeLinkClass = 'text-brand-dark font-bold bg-brand-beige px-3 py-1 rounded-full';
  const inactiveLinkClass = 'text-gray-500 hover:text-brand-green transition-colors px-3 py-1 font-medium';

  return (
    <>
        <header 
            className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled ? 'bg-white shadow-sm py-3' : 'bg-white py-4'
            }`}
        >
        <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
            <NavLink to="/" className="z-50 relative group">
                <Logo />
            </NavLink>
            
            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
                <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                    isActive ? activeLinkClass : inactiveLinkClass
                }
                >
                {link.label}
                </NavLink>
            ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
                <a href={CONTACT_INFO.calendly} target="_blank" rel="noreferrer" className="flex items-center text-sm bg-brand-dark text-white font-semibold py-2.5 px-6 rounded-full hover:bg-brand-green hover:shadow-lg transition-all duration-300">
                    Prendre RDV
                </a>
            </div>

            {/* Mobile Toggle */}
            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden text-brand-dark focus:outline-none p-2 z-50"
                aria-label="Menu"
            >
                <div className="w-8 h-8 relative flex flex-col justify-center gap-1.5">
                    <span className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </div>
            </button>
        </div>
        </header>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 lg:hidden flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <nav className="flex flex-col items-center space-y-6 w-full px-8">
                {NAV_LINKS.map((link) => (
                <NavLink
                    key={link.label}
                    to={link.path}
                    className={({ isActive }) =>
                    `text-2xl font-serif font-bold py-2 ${
                        isActive ? 'text-brand-green' : 'text-brand-dark'
                    }`
                    }
                >
                    {link.label}
                </NavLink>
                ))}
                
                <div className="w-full h-px bg-gray-100 my-4"></div>

                <a href={CONTACT_INFO.calendly} target="_blank" rel="noreferrer" className="w-full max-w-xs text-center bg-brand-green text-white font-bold py-4 rounded-full shadow-lg active:scale-95 transition-transform">
                    Prendre RDV en ligne
                </a>
                <a href={CONTACT_INFO.phoneLink} className="w-full max-w-xs text-center bg-brand-beige text-brand-dark font-bold py-4 rounded-full active:scale-95 transition-transform">
                    {CONTACT_INFO.phone}
                </a>
            </nav>
        </div>
    </>
  );
};

export default Header;
