"use client";

import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { BlogPost } from '@/types/blog';
import { BlogService } from '@/services/blogService';
import { BlogCard } from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
}

export function BlogList() {
  const router = useRouter();

  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const allPosts = BlogService.getAllPosts();
    setPosts(allPosts);
  }, []);

  useEffect(() => {
    let filtered = [...posts];

    if (searchTerm) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(filtered);
  }, [posts, searchTerm, selectedCategory]);

  const categories = ['all', ...Array.from(new Set(posts.map((post) => post.category)))];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Blog Técnico
          </div>
          <h2 className="text-black mb-4">Artículos y Consejos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado con nuestros artículos técnicos, consejos de mantenimiento 
            y las últimas novedades del mundo automotriz.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">

          {/* Search */}
          <div className="flex-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute left-4 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 absolute left-4 top-1/2 -translate-y-1/2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none pl-12 pr-10 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors bg-white cursor-pointer min-w-[200px]"
            >
              <option value="all">Todas las categorías</option>
              {categories
                .filter((cat) => cat !== 'all')
                .map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard
                key={post.id}
                post={post}
                onClick={() => router.push(`/blog/${post.id}`)}  // ✅ NAVEGACIÓN CORRECTA
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <div className="w-16 h-16 mx-auto mb-4 bg-white border border-gray-300 rounded-md" />
            <p className="text-xl">No se encontraron artículos</p>
            <p className="text-sm mt-2">
              Intenta con diferentes términos de búsqueda o filtros
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
