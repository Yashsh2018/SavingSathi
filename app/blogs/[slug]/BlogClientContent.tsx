"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Home, 
  CalendarDays, 
  User, 
  Clock, 
  ArrowLeft,
  Share2,
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check
} from 'lucide-react';

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

interface BlogClientContentProps {
  blog: BlogPost;
  readTime: number;
}

export default function BlogClientContent({ blog, readTime }: BlogClientContentProps) {
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Copy to clipboard
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Share functions
  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(blog.title);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`
    };
    
    window.open(shareUrls[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Back button */}
      <div className="container mx-auto px-4 py-6 pt-25">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span className="font-medium text-white">{blog.author_name}</span>
            </div>
            <div className="flex items-center">
              <CalendarDays className="w-5 h-5 mr-2" />
              <span>{formatDate(blog.created_at)}</span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>{readTime} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {blog.featured_image && (
            <div className="mb-10 rounded-2xl overflow-hidden">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-[400px] md:h-[500px] object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.innerHTML = `
                    <div class="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-rose-600 to-cyan-700 flex items-center justify-center rounded-2xl">
                      <div class="text-6xl text-white">📝</div>
                    </div>
                  `;
                }}
              />
            </div>
          )}

          {/* Share Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 p-4 bg-gray-900 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-gray-400">Share:</span>
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Share on Facebook"
              >
                <Facebook className="w-5 h-5 text-blue-500" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Share on Twitter"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-blue-600" />
              </button>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleCopyLink}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    <span className="text-green-500">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
                aria-label={isBookmarked ? "Remove bookmark" : "Bookmark"}
              >
                <Bookmark 
                  className={`w-5 h-5 ${isBookmarked ? 'text-yellow-500 fill-yellow-500' : 'text-gray-400'}`} 
                />
              </button>
            </div>
          </div>

          {/* Blog Content */}
          <article className="prose prose-lg prose-invert max-w-none mb-16">
            <div 
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </article>

          {/* Author Bio */}
          <div className="bg-gray-900 rounded-2xl p-8 mb-16">
            <div className="flex items-start gap-6">
              {blog.profile_image ? (
                <img
                  src={blog.profile_image}
                  alt={blog.author_name}
                  className="w-20 h-20 rounded-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-20 h-20 rounded-full bg-gradient-to-r from-rose-600 to-cyan-700 flex items-center justify-center">
                        <User class="w-10 h-10 text-white" />
                      </div>
                    `;
                  }}
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-rose-600 to-cyan-700 flex items-center justify-center">
                  <User className="w-10 h-10 text-white" />
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold mb-2">{blog.author_name}</h3>
                <p className="text-gray-400 mb-4">
                  Author at Savingsathi. Sharing insights about finance, technology, and personal development.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center py-12 border-t border-gray-800">
            <h2 className="text-3xl font-bold mb-4">Enjoyed this article?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Explore more insightful content about finance, technology, and personal development.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/blogs"
                className="bg-gradient-to-r from-rose-600 to-cyan-700 hover:from-rose-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Explore More Blogs
              </Link>
              <Link
                href="/"
                className="border border-gray-700 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors flex items-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}