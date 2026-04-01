
/**
 * SSR Polyfill for localStorage and sessionStorage to prevent errors during Next.js pre-rendering.
 * This is injected at the root layout to ensure global availability.
 */
if (typeof window === 'undefined') {
  const noop = () => null;
  const storage = {
    getItem: noop,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    length: 0,
    key: noop,
  };
  (global as any).localStorage = storage;
  (global as any).sessionStorage = storage;
}

import type { Metadata } from 'next';
import './globals.css';
import LayoutClient from '@/components/LayoutClient';

const SEO_TITLE = "Sriharish Eswarathas Portfolio";
const SEO_DESCRIPTION = "Portfolio of Sriharish Eswarathas, a Software Engineer and University of Guelph Computer Science student specializing in React, Next.js, and AI. Explore my projects and research.";
const SEO_URL = "https://sriharisheswarathas.netlify.app";
const SEO_IMAGE = `${SEO_URL}/images/about-light-02.png`; // Absolute URL for OG image

export const metadata: Metadata = {
  title: SEO_TITLE,
  description: SEO_DESCRIPTION,
  keywords: [
    "Sriharish Eswarathas portfolio",
    "Full Stack Developer Canada",
    "Software Engineer",
    "React Next.js developer",
    "AI projects with Google Gemini API",
    "University of Guelph Computer Science student",
    "HCI research assistant",
    "AI Developer",
  ],
  authors: [{ name: "Sriharish Eswarathas", url: SEO_URL }],
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: SEO_URL,
    type: "website",
    images: [
      {
        url: SEO_IMAGE,
        width: 600,
        height: 600,
        alt: "Abstract design representing Sriharish Eswarathas's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [SEO_IMAGE],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Sriharish Eswarathas",
  "url": "https://sriharisheswarathas.netlify.app",
  "sameAs": [
    "https://github.com/harishe182",
    "https://www.linkedin.com/in/sriharish-eswarathas-002023240"
  ],
  "jobTitle": "Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "University of Guelph"
  },
  "email": "harish182@icloud.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Brampton",
    "addressRegion": "ON",
    "addressCountry": "Canada"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "University of Guelph",
    "sameAs": "https://www.uoguelph.ca/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <meta name="google-site-verification" content="4obq7CLbAvDlZ_pg51LdxHehxmQ91uiHadDfQVTyA_k" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased min-h-screen flex flex-col">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
