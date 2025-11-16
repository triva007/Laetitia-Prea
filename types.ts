
import React from 'react';

export interface NavLink {
  label: string;
  path: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  content: string; // Markdown content of the blog post
  imageUrl: string;
}
