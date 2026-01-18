// app/components/StructuredData.tsx
import Script from 'next/script';

interface BlogStructuredDataProps {
  blog: {
    title: string;
    content: string;
    excerpt?: string;
    featured_image?: string | null;
    created_at: string;
    updated_at: string;
    author_name: string;
    profile_image: string;
    categories?: string[];
    tags?: string[];
  };
  slug: string;
}

export default function BlogStructuredData({ blog, slug }: BlogStructuredDataProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: blog.title,
    description: blog.excerpt || blog.content.substring(0, 160) + '...',
    image: blog.featured_image ? [blog.featured_image] : [],
    datePublished: blog.created_at,
    dateModified: blog.updated_at,
    author: {
      '@type': 'Person',
      name: blog.author_name,
      image: blog.profile_image,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Savingsathi',
      logo: {
        '@type': 'ImageObject',
        url: 'https://savingsathi.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://savingsathi.com/blogs/${slug}`,
    },
    keywords: blog.tags?.join(', ') || '',
    articleSection: blog.categories?.[0] || 'Finance',
    articleBody: blog.content,
    wordCount: blog.content.split(/\s+/).length,
    inLanguage: 'en-US',
  };

  return (
    <Script
      id="blog-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}