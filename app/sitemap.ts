// app/sitemap.ts
import { MetadataRoute } from 'next';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.savingsathi.com/api/v1';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://savingsathi.com';

interface BlogPost {
  id: number;
  title: string;
  updated_at: string;
}

interface BlogListResponse {
  status: boolean;
  data: BlogPost[];
}

// Function to create URL-friendly slug from title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Fetch all blogs for sitemap
async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/extraData/blogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Remove next.revalidate for static export
      cache: 'no-store' // Force fresh data on each build
    });

    if (!response.ok) {
      console.error('Failed to fetch all blogs');
      return [];
    }

    const data: BlogListResponse = await response.json();
    return data.status && data.data ? data.data : [];
  } catch (error) {
    console.error('Error fetching all blogs:', error);
    return [];
  }
}

// Generate sitemap at build time
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
        url: 'https://savingsathi.com/faq',
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
      },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ];

  // Dynamic blog pages - fetched at build time
  const blogs = await getAllBlogs();
  const blogPages = blogs.map((blog) => ({
    url: `${BASE_URL}/blogs/${createSlug(blog.title)}`,
    lastModified: new Date(blog.updated_at),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}

// Configure for static export
export const dynamic = 'force-static';
export const revalidate = false; // No revalidation needed for static export