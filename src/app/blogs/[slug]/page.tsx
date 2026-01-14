// app/blogs/[slug]/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  Home, 
  CalendarDays, 
  User, 
  Clock, 
  ArrowLeft
} from 'lucide-react';
import BlogClientContent from './BlogClientContent';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.savingsathi.com/api/v1';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author_id: number;
  featured_image?: string | null;
  status: string;
  created_at: string;
  updated_at: string;
  author_name: string;
  profile_image: string;
  categories?: string[];
  tags?: string[];
  excerpt?: string;
}

interface BlogListResponse {
  status: boolean;
  data: BlogPost[];
  message?: string;
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

// Fetch blog data
async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/extraData/blogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache'
    });

    if (!response.ok) {
      console.error('Failed to fetch blogs');
      return null;
    }

    const data: BlogListResponse = await response.json();

    if (data.status && data.data) {
      const foundBlog = data.data.find(blog => 
        createSlug(blog.title) === slug
      );
      return foundBlog || null;
    }
    return null;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

// Fetch all blogs for static generation
async function getAllBlogs(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/extraData/blogs`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'force-cache'
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

// Generate static params - REQUIRED for static exports
export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  
  return blogs.map((blog) => ({
    slug: createSlug(blog.title),
  }));
}

// Generate metadata - Fixed to handle Promise params
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  // Await the params promise
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    return {
      title: 'Blog Not Found | Savingsathi',
      description: 'The requested blog post was not found.',
    };
  }

  return {
    title: `${blog.title} | Savingsathi Blogs`,
    description: blog.excerpt || blog.content.substring(0, 160) + '...',
    keywords: blog.tags?.join(', ') || `savings, finance, ${blog.title}`,
    openGraph: {
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160) + '...',
      images: blog.featured_image ? [blog.featured_image] : [],
      type: 'article',
      publishedTime: blog.created_at,
      authors: [blog.author_name],
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.title,
      description: blog.excerpt || blog.content.substring(0, 160) + '...',
      images: blog.featured_image ? [blog.featured_image] : [],
    },
    alternates: {
      canonical: `https://savingsathi.com/blogs/${resolvedParams.slug}`,
    },
  };
}

// Main page component - Fixed to handle Promise params
export default async function BlogDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await the params promise
  const resolvedParams = await params;
  const blog = await getBlogBySlug(resolvedParams.slug);

  if (!blog) {
    // For static exports, return a 404 component
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-gray-600 mb-4">Blog post not found</p>
          <a href="/blogs" className="text-blue-600 hover:text-blue-800">
            ← Back to Blogs
          </a>
        </div>
      </div>
    );
  }

  const readTime = Math.ceil(blog.content.split(/\s+/).length / 200);

  return <BlogClientContent blog={blog} readTime={readTime} />;
}