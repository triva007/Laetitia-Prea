
import React, { useState, useEffect } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import type { BlogPost } from '../types';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Helper function to create a slug from a title
const createSlug = (title: string) => {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .trim()
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
};


const AdminPage = () => {
    const [apiKey, setApiKey] = useState('');
    const [ai, setAi] = useState<GoogleGenAI | null>(null);

    const [ideas, setIdeas] = useState<string[]>([]);
    const [selectedIdea, setSelectedIdea] = useState<string | null>(null);
    const [generatedArticle, setGeneratedArticle] = useState<Omit<BlogPost, 'imageUrl' | 'date'> | null>(null);
    const [loading, setLoading] = useState<'idle' | 'ideas' | 'article'>('idle');
    const [error, setError] = useState<string | null>(null);

    const [allPosts, setAllPosts] = useState<BlogPost[]>([]);
    const [jsonOutput, setJsonOutput] = useState<string | null>(null);


    useEffect(() => {
        if(process.env.API_KEY) {
            setAi(new GoogleGenAI({ apiKey: process.env.API_KEY }));
        }
        
        // Fetch existing posts to be able to append the new one
        fetch('/blog/posts.json')
            .then(res => res.json())
            .then(data => setAllPosts(data))
            .catch(err => setError("Impossible de charger les articles existants."));
    }, []);

    const handleGenerateIdeas = async () => {
        if (!ai) {
            setError("L'API n'est pas initialisée. Assurez-vous d'avoir configuré votre clé API.");
            return;
        }
        setLoading('ideas');
        setError(null);
        setIdeas([]);
        setSelectedIdea(null);
        setGeneratedArticle(null);
        setJsonOutput(null);

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: "Génère 5 titres d'articles de blog percutants et optimisés pour le SEO pour une nutrithérapeute à Saint-Cloud et Boulogne. Les sujets doivent tourner autour de la nutrition, la micronutrition, le bien-être, la gestion du poids, et l'alimentation saine. Les titres doivent être en français.",
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            ideas: {
                                type: Type.ARRAY,
                                items: { type: Type.STRING }
                            }
                        }
                    }
                }
            });
            const result = JSON.parse(response.text);
            setIdeas(result.ideas);
        } catch (e) {
            console.error(e);
            setError("Une erreur est survenue lors de la génération des idées.");
        } finally {
            setLoading('idle');
        }
    };

    const handleWriteArticle = async () => {
        if (!ai || !selectedIdea) return;
        setLoading('article');
        setError(null);
        setGeneratedArticle(null);
        setJsonOutput(null);

        const prompt = `
            Tu es un expert en nutrithérapie et rédacteur web SEO. Rédige un article de blog complet et informatif sur le sujet suivant : "${selectedIdea}".
            - Le style doit être bienveillant, professionnel et très accessible pour le grand public.
            - L'article doit faire environ 400-500 mots.
            - Structure l'article avec des titres et des paragraphes clairs. Utilise le format Markdown (titres avec ## et ###, listes avec - ou *, et gras avec **).
            - Inclus une brève introduction et une conclusion qui encourage le lecteur à prendre contact.

            En plus de l'article, fournis les éléments suivants :
            - metaTitle: Un titre pour le SEO, de 60 caractères maximum.
            - metaDescription: Une méta-description pour le SEO, de 160 caractères maximum.
            - description: Une description courte (1 phrase) pour l'aperçu sur la page du blog.
            - slug: un slug pour l'URL (minuscules, tirets, pas d'accents).
        `;

        try {
            const response = await ai.models.generateContent({
                model: "gemini-2.5-pro",
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            content: { type: Type.STRING },
                            metaTitle: { type: Type.STRING },
                            metaDescription: { type: Type.STRING },
                            description: { type: Type.STRING },
                            slug: { type: Type.STRING }
                        }
                    }
                }
            });
            const article = JSON.parse(response.text);
            setGeneratedArticle(article);

        } catch (e) {
            console.error(e);
            setError("Une erreur est survenue lors de la rédaction de l'article.");
        } finally {
            setLoading('idle');
        }
    };

    const handlePublish = () => {
        if(!generatedArticle) return;
        const newPost: BlogPost = {
            ...generatedArticle,
            imageUrl: `https://source.unsplash.com/800x600/?nutrition,food,${generatedArticle.slug.split('-')[0]}`,
            date: new Date().toISOString().split('T')[0] // YYYY-MM-DD
        }

        const updatedPosts = [newPost, ...allPosts];
        setJsonOutput(JSON.stringify(updatedPosts, null, 2));
    };

    const renderStep = (step: number, title: string, children: React.ReactNode, condition = true) => (
        condition && (
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                <h2 className="text-2xl font-serif font-semibold text-brand-dark mb-4">
                    <span className="bg-brand-green text-white rounded-full h-8 w-8 inline-flex items-center justify-center mr-3">{step}</span>
                    {title}
                </h2>
                {children}
            </div>
        )
    );

    return (
        <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif text-brand-dark">Générateur d'articles de blog</h1>
                <p className="mt-4 text-base md:text-lg max-w-3xl mx-auto text-gray-600">
                    Générez et publiez de nouveaux articles pour votre blog en quelques clics.
                </p>
            </div>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-6" role="alert">{error}</div>}
            
            <div className="space-y-8 max-w-4xl mx-auto">
                {renderStep(1, "Trouver l'inspiration", (
                    <button onClick={handleGenerateIdeas} disabled={loading === 'ideas'} className="bg-brand-green text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-dark transition-all duration-300 disabled:bg-gray-400">
                        {loading === 'ideas' ? 'Génération en cours...' : "Générer 5 idées d'articles"}
                    </button>
                ))}

                {renderStep(2, "Choisir un sujet", (
                    <div className="flex flex-col space-y-3">
                        {ideas.map((idea, index) => (
                            <button key={index} onClick={() => setSelectedIdea(idea)} className={`text-left p-3 rounded-lg border-2 transition-colors ${selectedIdea === idea ? 'bg-brand-light-green/50 border-brand-green' : 'bg-gray-50 border-gray-200 hover:border-brand-green'}`}>
                                {idea}
                            </button>
                        ))}
                    </div>
                ), ideas.length > 0)}

                {renderStep(3, "Rédiger l'article", (
                     <button onClick={handleWriteArticle} disabled={loading === 'article'} className="bg-brand-green text-white font-semibold py-2 px-6 rounded-full hover:bg-brand-dark transition-all duration-300 disabled:bg-gray-400">
                        {loading === 'article' ? 'Rédaction en cours...' : `Rédiger sur "${selectedIdea}"`}
                    </button>
                ), selectedIdea !== null)}
                
                {renderStep(4, "Aperçu et Publication", (
                    <div>
                        <div className="border rounded-lg p-6 bg-gray-50 prose prose-lg max-w-none prose-h2:text-brand-green prose-h3:text-brand-dark prose-a:text-brand-accent">
                           <h1 className="text-3xl font-bold font-serif text-brand-dark">{generatedArticle.title}</h1>
                           <MarkdownRenderer content={generatedArticle.content} />
                        </div>
                        <button onClick={handlePublish} className="mt-6 bg-brand-accent text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-opacity">
                            Préparer la publication
                        </button>
                    </div>
                ), generatedArticle !== null)}

                {renderStep(5, "Mise à jour finale", (
                    <div>
                        <p className="mb-4 text-gray-700">
                            <strong>Action requise :</strong> Pour publier votre nouvel article, copiez l'intégralité du texte ci-dessous et remplacez le contenu du fichier <code className="bg-gray-200 p-1 rounded text-sm">/blog/posts.json</code> de votre projet.
                        </p>
                        <textarea readOnly value={jsonOutput} className="w-full h-96 font-mono text-sm p-4 border rounded-md bg-gray-900 text-gray-200" />
                    </div>
                ), jsonOutput !== null)}
            </div>
        </div>
    );
};

export default AdminPage;
