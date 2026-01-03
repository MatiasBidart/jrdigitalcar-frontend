"use client";

import { useRouter } from "next/navigation";
import { BlogPost as BlogPostType } from "@/types/blog";
import { AdBanner } from "@/components/ads/AdBanner";
import { SidebarAd } from "@/components/ads/SidebarAd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

interface BlogPostProps {
  post: BlogPostType;
}

export function BlogPost({ post }: BlogPostProps) {
  const router = useRouter();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Enlace copiado al portapapeles");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Imagen principal */}
      <div className="relative h-64 sm:h-80 md:h-96 bg-black">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* Botón volver */}
        <button
          onClick={() => router.back()}
          className="absolute top-4 sm:top-8 left-4 sm:left-8 flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-white/20 transition-colors text-sm sm:text-base"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="m12 19-7-7 7-7"></path>
            <path d="M19 12H5"></path>
          </svg>
          <span className="hidden sm:inline text-sm">Volver</span>
        </button>

        {/* Categoría */}
        {post.category && (
          <div className="absolute bottom-8 sm:bottom-16 right-40 sm:right-100">
            <span className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider text-xs sm:text-sm">
              {post.category}
            </span>
          </div>
        )}
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div
        className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8"
        >
          {/* ARTÍCULO */}
          <article className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 -mt-12 sm:-mt-20 relative z-10">
            <h1 className="text-black mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
                >
                  <path d="M8 2v4"></path>
                  <path d="M16 2v4"></path>
                  <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                  <path d="M3 10h18"></path>
                </svg>
                <span>{formatDate(post.createdAt)}</span>
              </div>

              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-red-600"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <span>{post.author}</span>
              </div>

              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                  <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                </svg>
                <span className="hidden sm:inline">Compartir</span>
              </button>
            </div>

            {/* Excerpt */}
            <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <p className="text-base sm:text-lg text-gray-700 italic">
                {post.excerpt}
              </p>
            </div>

            {/* 
            <AdBanner
              desktopImage="/ads/banner(728x90).png"
              mobileImage="/ads/banner(320x50).png"
              href="/"
            /> */}

            {/* CONTENIDO (Markdown personalizado sin Tailwind Typography) */}
            <div
              className="text-gray-800 leading-relaxed"
              style={{
                lineHeight: "1.7",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold text-black mt-6 mb-3" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-semibold text-red-600 mt-5 mb-2" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p className="text-gray-700 leading-relaxed" {...props} />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="list-disc list-inside space-y-2 pl-4" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="list-decimal list-inside space-y-2 pl-4" {...props} />
                  ),
                  li: ({ node, ...props }) => <li className="ml-2" {...props} />,
                  a: ({ node, ...props }) => (
                    <a
                      className="text-red-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      {...props}
                    />
                  ),
                  img: ({ node, ...props }) => (
                    <img
                      className="rounded-lg my-4 shadow-md max-w-full h-auto"
                      {...props}
                      alt={props.alt || ""}
                    />
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-gray-100 text-red-600 px-2 py-1 rounded text-sm font-mono" {...props} />
                  ),
                  blockquote: ({ node, ...props }) => (
                    <blockquote
                      className="border-l-4 border-red-600 pl-4 italic text-gray-700 my-4"
                      {...props}
                    />
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {Array.isArray(post.tags) && post.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t-2 border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-red-600 hover:text-white transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* SIDEBAR */}
          <aside className="space-y-8">
            <SidebarAd
              desktopImage="/ads/diagnostico(300x600).png"
              mobileImage="/ads/diagnostico(300x250).png"
              alt="Publicidad"
              href="https://wa.me/5491154521992?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20JR%20Digital%20Car"
            />
          </aside>
        </div>
      </div>

      {/* Banner final */}
      {/* <AdBanner
        desktopImage="/ads/inundados(728x90).png"
        mobileImage="/ads/inundados(320x50).png"
        alt="Publicidad"
        href="/blog"
      /> */}
    </div>
  );
}

