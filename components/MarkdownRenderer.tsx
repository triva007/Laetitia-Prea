
import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const createMarkup = (text: string) => {
    // Handle headings
    text = text.replace(/^##\s(.*$)/gim, '<h2 class="text-2xl md:text-3xl font-serif font-semibold text-brand-green mt-8 mb-4">$1</h2>');
    text = text.replace(/^###\s(.*$)/gim, '<h3 class="text-xl md:text-2xl font-serif font-semibold text-brand-dark mt-6 mb-3">$1</h3>');

    // Handle lists
    text = text.replace(/^\*\s(.*$)/gim, '<ul class="list-disc list-inside space-y-2"><li>$1</li></ul>');
    text = text.replace(/^-\s(.*$)/gim, '<ul class="list-disc list-inside space-y-2"><li>$1</li></ul>');
    text = text.replace(/^\d\.\s(.*$)/gim, '<ol class="list-decimal list-inside space-y-2"><li>$1</li></ol>');
    // Clean up list wrappers
    text = text.replace(/<\/ul>\n<ul class="list-disc list-inside space-y-2">/gim, '');
    text = text.replace(/<\/ol>\n<ol class="list-decimal list-inside space-y-2">/gim, '');
    
    // Handle bold and italics
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/__(.*?)__/g, '<strong>$1</strong>');
    text = text.replace(/\*(.*?)\*/g, '<em>$1</em>');
    text = text.replace(/_(.*?)_/g, '<em>$1</em>');

    // Handle paragraphs
    text = text.split('\n').map(p => p.trim() ? p : '').filter(p => p).map(p => {
        if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<ol') || p.startsWith('<li')) {
            return p;
        }
        return `<p>${p}</p>`;
    }).join('\n');
    
    // Clean up paragraph wrappers around other elements
    text = text.replace(/<p><h(.)>/g, '<h$1>').replace(/<\/h(.)><\/p>/g, '</h$1>');
    text = text.replace(/<p><ul/g, '<ul').replace(/<\/ul><\/p>/g, '</ul>');
    text = text.replace(/<p><ol/g, '<ol').replace(/<\/ol><\/p>/g, '</ol>');

    return { __html: text };
  };

  return <div dangerouslySetInnerHTML={createMarkup(content)} />;
};

export default MarkdownRenderer;
