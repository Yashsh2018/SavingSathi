// app/robots.ts
import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://savingsathi.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        '/private/',
        '/dashboard/',
        '/_next/',
        '/node_modules/',
        '/server-sitemap.xml',
      ],
    },
    sitemap: [
      `${BASE_URL}/sitemap.xml`,
      `${BASE_URL}/server-sitemap.xml`,
    ],
    host: BASE_URL,
  };
}