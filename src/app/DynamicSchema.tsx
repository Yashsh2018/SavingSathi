// components/DynamicSchema.tsx
'use client';

import { usePathname } from 'next/navigation';
import Script from 'next/script';

interface BlogSchema {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  author: string;
  category: string;
  url: string;
  imageUrl?: string;
}

interface WebsiteSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
}

interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
}

export default function DynamicSchema() {
  const pathname = usePathname();
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://savingsathi.com';

  // Website Schema (applicable to all pages)
  const websiteSchema: WebsiteSchema = {
    name: 'Savingsathi',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Your financial companion for smart savings and investments',
  };

  // Organization Schema
  const organizationSchema: OrganizationSchema = {
    name: 'Savingsathi',
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description: 'Financial advisory and savings platform',
    contactPoint: {
      telephone: '+91-7296890879',
      contactType: 'customer service',
      email: 'info@savingsathi.com',
    },
  };

  // Generate schema based on current page
  const generateSchema = () => {
    const schemas: any[] = [];

    // Always include Website and Organization schema
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: websiteSchema.name,
      url: websiteSchema.url,
      description: websiteSchema.description,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${BASE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: organizationSchema.name,
      url: organizationSchema.url,
      logo: organizationSchema.logo,
      description: organizationSchema.description,
      contactPoint: organizationSchema.contactPoint,
      sameAs: [
        'https://www.facebook.com/profile.php?id=61584385346591',
        'https://x.com/SavingSathi',
        'https://www.linkedin.com/company/savingsathi/posts/?feedView=all',
        'https://www.instagram.com/savingsathi/',
      ],
    });

    // Homepage specific schema
    if (pathname === '/') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'FinancialService',
              name: 'Savings Calculator',
              url: `${BASE_URL}/tools/savings-calculator`,
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'FinancialService',
              name: 'Investment Guide',
              url: `${BASE_URL}/guides/investment`,
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'FinancialService',
              name: 'Tax Planning',
              url: `${BASE_URL}/guides/tax-planning`,
            },
          },
        ],
      });
    }

    // Blog page schema
    if (pathname.startsWith('/blogs')) {
      // You can fetch blog data here or pass as prop
      // For now, adding general Blog schema
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Blog',
        name: 'Savingsathi Blog',
        description: 'Financial tips, investment guides, and money-saving advice',
        url: `${BASE_URL}/blogs`,
        publisher: {
          '@type': 'Organization',
          name: 'Savingsathi',
          logo: organizationSchema.logo,
        },
      });
    }

    // Contact page schema
    if (pathname === '/contact') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact Savingsathi',
        description: 'Get in touch with our financial experts',
        url: `${BASE_URL}/contact`,
      });
    }

    // About page schema
    if (pathname === '/about') {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Savingsathi',
        description: 'Learn about our mission to help people save and invest wisely',
        url: `${BASE_URL}/about`,
      });
    }


      // About page schema
      if (pathname === '/faq') {
        schemas.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          name: 'Faq Savingsathi',
          description: 'Get more about us',
          url: `${BASE_URL}/faq`,
        });
      }

    return schemas;
  };

  const schemas = generateSchema();

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema, null, 2),
          }}
        />
      ))}
    </>
  );
}