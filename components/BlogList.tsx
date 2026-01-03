"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { BlogPost } from "@/types/blog";
import { BlogCard } from "./BlogCard";
import { CategoryService, Category } from "@/services/categoryService";
import { BlogService } from "@/services/blogService"; // 🔹 Nuevo import
import { AdBanner } from "@/components/ads/AdBanner";

interface BlogListProps {
  initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
  const router = useRouter();

  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(initialPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  // 🔹 Obtener todas las categorías al montar
  useEffect(() => {
    const fetchCategories = async () => {
      const data = await CategoryService.getAll();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  // 🔹 Filtrar o pedir por categoría desde el backend
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        if (selectedCategory === "all") {
          setFilteredPosts(posts);
        } else {
          const category = categories.find((c) => c.name === selectedCategory);
          if (category?.id) {
            const postsByCategory = await BlogService.getPostsByCategoryId(category.id);
            setFilteredPosts(postsByCategory);
          } else {
            setFilteredPosts([]);
          }
        }
      } catch (err) {
        console.error("Error cargando posts por categoría:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [selectedCategory, categories, posts]);

  // 🔹 Filtrado por búsqueda local
  useEffect(() => {
    if (searchTerm.trim() === "") return;

    const filtered = filteredPosts.filter((post) => {
      const tags = Array.isArray(post.tags) ? post.tags.join(" ") : "";
      const excerpt = post.excerpt || "";
      const contentToSearch = `${post.title} ${excerpt} ${tags}`.toLowerCase();
      return contentToSearch.includes(searchTerm.toLowerCase());
    });

    setFilteredPosts(filtered);
  }, [searchTerm]);

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Ad Banner 728x90 || 320x50 */}
        <AdBanner
          desktopImage="/ads/banner(728x90).png"
          mobileImage="/ads/banner(320x50).png"
          alt="Publicidad"
          href="/flotas"
        />

        {/* HEADER */}
        <div className="text-center mb-12">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Blog Técnico
          </div>
          <h2 className="text-black mb-4">Artículos y Consejos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mantente informado con nuestros artículos técnicos, consejos y más.
          </p>
        </div>

        {/* SEARCH + FILTER */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* 🔍 Buscador */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600"
            />
          </div>

          {/* 🏷️ Filtro por categoría */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-10 py-3 border-2 border-gray-300 rounded-lg bg-white"
            >
              <option key="all" value="all">
                Todas las categorías
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* POSTS GRID */}
        {loading ? (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">Cargando artículos...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-gray-400">
            <p className="text-xl">No se encontraron artículos</p>
            <p className="text-sm mt-2">
              Prueba cambiando filtros o términos de búsqueda
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
