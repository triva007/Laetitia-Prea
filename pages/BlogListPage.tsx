

import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const BlogListPage = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">Blog Nutrition & Bien-être</h1>
        <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-600">
          Retrouvez ici mes conseils et articles pour approfondir vos connaissances en nutrition, santé et bien-être.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOG_POSTS.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 border border-gray-200/80">
            <img src={post.imageUrl} alt={`Illustration pour l'article ${post.title}`} className="w-full h-48 object-cover" />
            <div className="p-6 flex flex-col h-full">
              <h2 className="text-xl lg:text-2xl font-semibold font-serif text-brand-dark group-hover:text-brand-green transition-colors duration-300 flex-grow">{post.title}</h2>
              <p className="mt-3 text-gray-600 line-clamp-3">{post.description}</p>
              <span className="inline-block mt-4 font-semibold text-brand-green group-hover:text-brand-dark transition-colors duration-300 self-start">
                Lire l'article &rarr;
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;