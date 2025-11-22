
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { CTAButtons } from '../components/CTAButtons';
import SEO from '../components/SEO';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = BLOG_POSTS.find(p => p.slug === slug);

  React.useEffect(() => {
    if (!post) {
        navigate('/blog');
    }
  }, [post, navigate]);

  if (!post) {
    return null; 
  }

  const ArticleComponent = post.component;

  return (
    <>
      <SEO 
        title={`${post.metaTitle} | Blog Laetitia Préa`}
        description={post.metaDescription}
      />
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
          <div className="max-w-3xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-brand-green hover:text-brand-dark font-semibold mb-8 transition-colors group">
              <span className="transform group-hover:-translate-x-1 transition-transform duration-300 mr-2">&larr;</span> Retour au blog
            </Link>

            <header className="mb-10">
              <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg mb-8">
                  <img src={post.imageUrl} alt={`Illustration pour l'article ${post.title}`} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark leading-tight">{post.title}</h1>
            </header>
            
            <article className="prose prose-lg max-w-none prose-headings:font-serif prose-h2:text-brand-green prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:mt-12 prose-h3:text-brand-dark prose-a:text-brand-accent prose-p:leading-relaxed prose-ul:leading-relaxed prose-ol:leading-relaxed space-y-6 text-gray-700">
              <ArticleComponent />
            </article>
            
            <div className="mt-12 md:mt-16 pt-10 border-t border-gray-200">
                <div className="bg-brand-beige rounded-2xl p-8 md:p-12 text-center shadow-inner">
                    <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark mb-4">Vous avez aimé cet article ?</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        La théorie c'est bien, la pratique c'est mieux. Si ces sujets résonnent en vous, je peux vous aider à les mettre en application dans votre quotidien.
                    </p>
                    <CTAButtons />
                </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
