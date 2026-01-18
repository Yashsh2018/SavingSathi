"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Home, CalendarDays, User, Clock } from 'lucide-react';
import Loader from '../../components/Loader';

// Blog post interface
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
}

// Blog list response interface
interface BlogListResponse {
    status: boolean;
    data: BlogPost[];
    message?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.savingsathi.com/api/v1';

// Function to create URL-friendly slug from title
const createSlug = (title: string): string => {
    return title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single
        .trim();
};

function BlogPageContent() {
    const searchParams = useSearchParams();
    // const slug = searchParams.get('slug');

    const [blogs, setBlogs] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Format date
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    // Calculate read time
    const calculateReadTime = (content: string) => {
        const words = content.split(/\s+/).length;
        const minutes = Math.ceil(words / 200);
        return `${minutes} min read`;
    };

    // Fetch blog data
    const fetchBlogData = async () => {
        try {
            setLoading(true);
            setError(null);

            const response = await fetch(`${API_BASE_URL}/extraData/blogs`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                cache: 'no-store'
            });

            if (!response.ok) {
                throw new Error(`Failed to fetch blogs: ${response.status}`);
            }

            const data: BlogListResponse = await response.json();

            if (data.status && data.data) {
                setBlogs(data.data);
                return data.data;
            } else {
                throw new Error(data.message || 'Failed to load blogs');
            }
        } catch (error) {
            console.error('Error fetching blog data:', error);
            setError(error instanceof Error ? error.message : 'An unknown error occurred');
            return [];
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogData();
    }, []);

    // Refetch data
    const refetchData = () => {
        fetchBlogData();
    };

    // Blog card component
    const BlogCard = ({ blog }: { blog: BlogPost }) => {
        const blogSlug = createSlug(blog.title);
        
        return (
            <Link href={`/blogs/${encodeURIComponent(blogSlug)}`}>
                <div className="bg-[#1F2022] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-700 group cursor-pointer h-full">
                    {/* Blog image */}
                    <div className="relative h-48 overflow-hidden">
                        {blog.featured_image || blog.profile_image ? (
                            <img
                                src={blog.featured_image || blog.profile_image}
                                alt={blog.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement!.innerHTML = `
                                        <div class="w-full h-full bg-gradient-to-br from-rose-600 to-cyan-700 flex items-center justify-center">
                                            <div class="text-4xl text-white">📝</div>
                                        </div>
                                    `;
                                }}
                            />
                        ) : (
                            <div className="w-full h-full bg-gradient-to-br from-rose-600 to-cyan-700 flex items-center justify-center">
                                <div className="text-4xl text-white">📝</div>
                            </div>
                        )}
                        <div className="absolute top-4 left-4">
                            <span className="bg-gradient-to-r from-rose-600 to-cyan-700 text-white text-xs font-semibold px-3 py-1 rounded-full">
                                Published
                            </span>
                        </div>
                    </div>

                    {/* Blog content */}
                    <div className="p-6">
                        <div className="flex items-center text-sm text-gray-400 mb-3">
                            
                            {/* <User className="w-4 h-4 mr-1" />
                            <span className="mr-4">{blog.author_name}</span> */}
                            <CalendarDays className="w-4 h-4 mr-1" />
                            <span className="mr-4">{formatDate(blog.created_at)}</span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{calculateReadTime(blog.content)}</span>
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-700 transition-colors line-clamp-2">
                            {blog.title}
                        </h3>

                        <div className="text-gray-300 mb-4 line-clamp-3">
                            <div dangerouslySetInnerHTML={{ __html: blog.content.substring(0, 150) + '...' }} />
                        </div>

                        <div className="flex items-center text-cyan-700 font-semibold mt-4">
                            <span>Read More</span>
                            <ArrowLeft className="w-4 h-4 ml-2 transform rotate-180" />
                        </div>
                    </div>
                </div>
            </Link>
        );
    };

    // Loading state
    if (loading) {
        return <Loader variant='dots' size='sm'/>;
    }

    // Error state
    if (error) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
                <div className="max-w-md text-center">
                    <div className="text-red-500 text-6xl mb-4">⚠️</div>
                    <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
                    <p className="text-gray-300 mb-6">{error}</p>
                    <div className="flex gap-4 justify-center">
                        <button
                            onClick={refetchData}
                            className="bg-gradient-to-r from-rose-600 to-cyan-700 hover:from-rose-700 hover:to-cyan-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                        >
                            Try Again
                        </button>
                        <Link
                            href="/"
                            className="bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center"
                        >
                            <Home className="w-4 h-4 mr-2" />
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    // Blog list page
    if (blogs.length > 0) {
        return (
            <div className="min-h-screen bg-black">
                <main className="container mx-auto px-4 py-12">
                    <div className='md:min-w-[400px] lg:min-w-[420px] flex-1 max-w-lg mx-auto mt-15 mb-10'>
                        <h1 className="text-center text-3xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-4 px-4 uppercase">Our <span className="bg-gradient-to-r from-rose-600 to-cyan-700 bg-clip-text text-transparent uppercase">Blogs</span></h1>
                        <p className="text-gray-400 text-center">
                            Insights, stories, and updates from our team
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-gray-400">
                            Showing <span className="font-bold text-white">{blogs.length}</span> blog posts
                        </div>
                        <div className="flex gap-2">
                            <button className="px-4 py-2 bg-gradient-to-r from-rose-600 to-cyan-700 text-white rounded-lg font-medium">
                                All Posts
                            </button>
                        </div>
                    </div>

                    {/* Blog grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blogItem) => (
                            <BlogCard key={blogItem.id} blog={blogItem} />
                        ))}
                    </div>
                </main>
            </div>
        );
    }

    // Empty state
    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
            <div className="max-w-md text-center">
                <div className="text-6xl mb-4">📝</div>
                <h1 className="text-3xl font-bold text-white mb-4">No Blog Posts Found</h1>
                <p className="text-gray-300 mb-8">There are no blog posts available at the moment.</p>
                <div className="flex gap-4 justify-center">
                    <Link
                        href="/"
                        className="bg-gradient-to-r from-rose-600 to-cyan-700 hover:from-rose-700 hover:to-cyan-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
                    >
                        <Home className="w-5 h-5 mr-2" />
                        Go Home
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default function BlogPage() {
    return (
        <Suspense fallback={<Loader text="Loading blogs..." />}>
            <BlogPageContent />
        </Suspense>
    );
}