
import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import SEO from '../components/SEO';

const BlogListPage = () => {
  return (
    <>
    <SEO 
        title="Le Blog Nutrition | Laetitia Préa"
        description="Conseils, recettes et articles de fond sur la nutrition, la santé et le bien-être par votre Nutrithérapeute à Saint-Cloud."
    />
    <div className="bg-[#FDFBF7] min-h-screen py-20">
        <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-20">
                <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Le Journal</span>
                <h1 className="text-4xl md:text-6xl font-bold font-serif text-brand-dark mt-4 mb-6">Conseils & Bien-être</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
                Explorez mes articles pour comprendre les mécanismes de votre santé et adopter les bons réflexes au quotidien.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {BLOG_POSTS.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                    <div className="h-64 overflow-hidden relative">
                        <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-8 flex flex-col h-full">
                        <div className="mb-4">
                            <span className="text-xs font-bold text-brand-green uppercase tracking-wider bg-[#FDFBF7] px-3 py-1 rounded-full">Nutrition</span>
                        </div>
                        <h2 className="text-2xl font-serif font-bold text-brand-dark group-hover:text-brand-green transition-colors duration-300 mb-4 leading-tight">{post.title}</h2>
                        <p className="text-gray-600 line-clamp-3 mb-6 flex-grow leading-relaxed text-sm">{post.description}</p>
                        
                        <div className="flex items-center text-brand-dark font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                            Lire l'article 
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </div>
    </>
  );
};

export default BlogListPage;
