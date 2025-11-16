import type { NavLink, Testimonial } from './types';

export const CONTACT_INFO = {
  name: "Laetitia Préa",
  title: "Nutrithérapeute",
  email: "laetitiaprea@gmail.com",
  phone: "06 72 77 64 41",
  phoneLink: "tel:+33672776441",
  address: "50 bis Bd de la République, 92210 Saint-Cloud",
  instagram: "https://www.instagram.com/lprea_nutrition",
  calendly: "https://calendly.com/laetitiaprea/30min",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Accueil", path: "/" },
  { label: "À propos", path: "/a-propos" },
  { label: "Accompagnements", path: "/accompagnements" },
  { label: "Tarifs", path: "/tarifs" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "Laetitia m'a redonné de l'énergie et m'a appris à mieux m'alimenter sans frustration. Son approche est à la fois bienveillante et très professionnelle. Je recommande vivement !",
    name: "Sophie D.",
    location: "Saint-Cloud",
  },
  {
    quote: "Grâce à un bilan complet, nous avons identifié des carences que je n'aurais jamais soupçonnées. En quelques semaines, ma digestion et mon sommeil se sont nettement améliorés.",
    name: "Marc L.",
    location: "Boulogne-Billancourt",
  },
  {
    quote: "J'avais des problèmes de digestion depuis des années. L'approche de Laetitia, centrée sur la micronutrition, a été une révélation. Je me sens enfin plus légère et sereine.",
    name: "Caroline F.",
    location: "Suresnes",
  },
];
