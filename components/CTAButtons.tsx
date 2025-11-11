import React from 'react';
import { CONTACT_INFO } from '../constants';

export const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.759a11.03 11.03 0 006.254 6.254l.759-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C6.477 18 2 13.523 2 8V5a1 1 0 011-1h.001z" />
    </svg>
);

export const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
    </svg>
);

const handleCalendlyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if ((window as any).Calendly) {
        (window as any).Calendly.initPopupWidget({
            url: CONTACT_INFO.calendly,
            branding: false,
            hideGdprBanner: true,
        });
    }
};

export const CTAButtons = ({ layout = 'row' }: { layout?: 'row' | 'col' }) => {
    const layoutClasses = layout === 'row' ? 'flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4' : 'flex-col space-y-4';
    
    return (
        <div className={`flex justify-center ${layoutClasses}`}>
            <a href={CONTACT_INFO.phoneLink} className="flex items-center justify-center text-base bg-brand-light-green text-brand-dark font-semibold py-3 px-8 rounded-full hover:bg-brand-green hover:text-white transition-all duration-300 shadow-lg transform hover:-translate-y-1">
                <PhoneIcon />
                Appeler Laetitia
            </a>
            <a href={CONTACT_INFO.calendly} onClick={handleCalendlyClick} className="flex items-center justify-center text-base bg-brand-green text-white font-semibold py-3 px-8 rounded-full hover:bg-brand-dark transition-all duration-300 shadow-lg transform hover:-translate-y-1 cursor-pointer">
                <CalendarIcon />
                Réserver un appel découverte
            </a>
        </div>
    );
};