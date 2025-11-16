
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

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  component: React.ComponentType;
  imageUrl: string;
}