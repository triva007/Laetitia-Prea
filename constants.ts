import type { NavLink, Testimonial, BlogPostMeta } from './types';
import DifferenceNutritionnisteNutritherapeute from './blog/DifferenceNutritionnisteNutritherapeute';
import MicronutritionEnergie from './blog/MicronutritionEnergie';
import LireEtiquettesAlimentaires from './blog/LireEtiquettesAlimentaires';


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

export const BLOG_POSTS: BlogPostMeta[] = [
  {
    slug: "difference-nutritionniste-nutritherapeute-saint-cloud",
    title: "Différence entre nutritionniste et Nutrithérapeute à Saint-Cloud et Boulogne",
    description: "Comprendre les nuances entre ces deux professions pour faire le choix le plus adapté à vos besoins en matière de santé à Boulogne-Billancourt et Saint-Cloud.",
    metaTitle: "Nutritionniste vs Nutrithérapeute à Boulogne & Saint-Cloud",
    metaDescription: "Découvrez la différence entre nutritionniste et Nutrithérapeute à Boulogne et Saint-Cloud pour choisir l'accompagnement nutritionnel qui vous convient.",
    component: DifferenceNutritionnisteNutritherapeute,
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "micronutrition-energie-quotidien",
    title: "Comment la micronutrition peut transformer votre énergie au quotidien",
    description: "Explorez comment un bilan en micronutrition peut révéler des carences insoupçonnées et booster votre vitalité, votre sommeil et votre gestion du stress.",
    metaTitle: "Micronutrition à Boulogne & Saint-Cloud : Boostez Votre Énergie",
    metaDescription: "Apprenez comment la micronutrition peut améliorer votre énergie. Conseils de votre Nutrithérapeute à Boulogne-Billancourt et Saint-Cloud.",
    component: MicronutritionEnergie,
    imageUrl: "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop",
  },
  {
    slug: "apprendre-lire-etiquettes-alimentaires-pieges-eviter",
    title: "Apprendre à lire les étiquettes alimentaires : les pièges à éviter",
    description: "Devenez un consommateur averti en apprenant à décrypter les étiquettes des produits alimentaires pour éviter les pièges du marketing et faire des choix plus sains.",
    metaTitle: "Lire les Étiquettes Alimentaires : Guide de Votre Nutritionniste",
    metaDescription: "Votre Nutrithérapeute à Boulogne et Saint-Cloud vous guide pour déchiffrer les étiquettes alimentaires et éviter les produits ultra-transformés.",
    component: LireEtiquettesAlimentaires,
    imageUrl: "https://images.unsplash.com/photo-1584305574647-7c15fb24379c?q=80&w=2070&auto=format&fit=crop",
  },
];