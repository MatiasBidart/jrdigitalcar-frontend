"use client";

import { useRouter } from "next/navigation";
import { BlogPost } from "@/types/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "/placeholder.jpg";
  };

  const handleClick = () => {
    router.push(`/blog/${post.id}`);
  };

  return (
    <article
      onClick={handleClick}
      className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Imagen */}
      <div className="relative h-56 overflow-hidden bg-gray-900">
        <img
          src={post.imageUrl}
          alt={post.title}
          onError={handleImgError}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Categoría */}
        {post.category && (
          <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm uppercase tracking-wider">
            {post.category}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-3">
          {/* Fecha */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M8 2v4"></path>
              <path d="M16 2v4"></path>
              <rect width="18" height="18" x="3" y="4" rx="2"></rect>
              <path d="M3 10h18"></path>
            </svg>
            <span>{formatDate(post.createdAt)}</span>
          </div>

          {/* Autor */}
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
            <span>{post.author || "Anónimo"}</span>
          </div>
        </div>

        {/* Título */}
        <h3 className="text-black mb-3 group-hover:text-red-600 transition-colors line-clamp-2">
          {post.title}
        </h3>

        {/* Extracto */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* Tags */}
        {Array.isArray(post.tags) && post.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path>
                  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle>
                </svg>
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <div className="mb-4 text-gray-400 text-xs italic">Sin etiquetas</div>
        )}

        {/* Leer más */}
        <div className="text-red-600 group-hover:text-red-700 inline-flex items-center gap-2">
          Leer más
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </div>
      </div>
    </article>
  );
}
