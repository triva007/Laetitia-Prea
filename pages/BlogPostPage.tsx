
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CTAButtons } from '../components/CTAButtons';
import type { BlogPost } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/blog/posts.json')
      .then(res => res.json())
      .then((posts: BlogPost[]) => {
        const currentPost = posts.find(p => p.slug === slug);
        if (currentPost) {
          setPost(currentPost);
          document.title = `${currentPost.metaTitle} | Laetitia Préa`;
        } else {
          navigate('/blog');
        }
        setLoading(false);
      });
  }, [slug, navigate]);

  if (loading || !post) {
    return (
        <div className="flex justify-center items-center h-64">
            <div className="text-xl text-brand-green">Chargement de l'article...</div>
        </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-brand-green hover:text-brand-dark font-semibold mb-8 inline-block">
            &larr; Retour au blog
          </Link>

          <header className="mb-8">
            <img src={post.imageUrl} alt={`Illustration pour l'article ${post.title}`} className="w-full h-auto max-h-[400px] object-cover rounded-lg mb-6 shadow-md" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark leading-tight">{post.title}</h1>
          </header>
          
          <article className="prose prose-lg max-w-none prose-h2:text-brand-green prose-h3:text-brand-dark prose-a:text-brand-accent prose-p:leading-relaxed prose-ul:leading-relaxed prose-ol:leading-relaxed space-y-6">
             <MarkdownRenderer content={post.content} />
          </article>
          
          <div className="mt-16 pt-8 border-t border-gray-200 bg-brand-beige p-8 rounded-lg text-center">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-brand-dark">Prêt(e) à aller plus loin ?</h2>
              <p className="mt-4 text-base md:text-lg max-w-2xl mx-auto">
                  Si cet article vous a interpellé(e), discutons-en. Un appel découverte est la meilleure façon de voir comment je peux vous aider à atteindre vos objectifs de santé.
              </p>
              <div className="mt-8">
                  <CTAButtons />
              </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
