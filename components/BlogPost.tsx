"use client";

import { useRouter } from "next/navigation"; 
import { BlogPost as BlogPostType } from "@/types/blog";

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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
          <span className="hidden sm:inline text-sm">Volver</span>
        </button>

        <div className="absolute bottom-8 sm:bottom-16 right-40 sm:right-80">
          <span className="bg-red-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full uppercase tracking-wider text-xs sm:text-sm">
            {post.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <article className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-6 sm:p-8 md:p-12 -mt-12 sm:-mt-20 relative z-10">
          <h1 className="text-black mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b-2 border-gray-200">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar w-4 h-4 sm:w-5 sm:h-5 text-red-600" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path></svg>
              <span>{formatDate(post.date)}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user w-4 h-4 sm:w-5 sm:h-5 text-red-600" aria-hidden="true"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              <span>{post.author}</span>
            </div>

            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share2 lucide-share-2 w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
              <span className="hidden sm:inline">Compartir</span>
            </button>
          </div>
          {/* Excerpt */}
          <div className="bg-red-50 border-l-4 border-red-600 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
            <p className="text-base sm:text-lg text-gray-700 italic">{post.excerpt}</p>
          </div>

          {/* Contenido del artículo */}
          <div className="prose prose-lg max-w-none text-gray-800">
            {post.content.split('\n').map((paragraph, index) => {
              // -----------------------------
              // TITULOS  (## y ###)
              // -----------------------------
              if (paragraph.startsWith('## ')) {
                return (
                  <h2 key={index} className="text-black mt-8 mb-4 font-semibold">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }

              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-black mt-6 mb-3 font-semibold">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }

              // -----------------------------
              // IMÁGENES  ![alt](url)
              // -----------------------------
              const imageRegex = /^!\[(.*?)\]\((.*?)\)$/;
              const imageMatch = paragraph.match(imageRegex);

              if (imageMatch) {
                const [, alt, url] = imageMatch;

                return (
                  <div key={index} className="my-8">
                    <img
                      src={url}
                      alt={alt || 'Imagen del artículo'}
                      className="w-full rounded-lg shadow-lg object-cover"
                    />
                    {alt && (
                      <p className="text-center text-sm text-gray-500 mt-2 italic">
                        {alt}
                      </p>
                    )}
                  </div>
                );
              }

              // -----------------------------
              // LISTAS NUMERADAS
              // -----------------------------
              if (paragraph.match(/^\d+\./)) {
                return (
                  <li key={index} className="text-gray-700 ml-6 mb-2 list-decimal">
                    {paragraph.replace(/^\d+\.\s/, '')}
                  </li>
                );
              }

              // -----------------------------
              // LISTAS CON VIÑETAS
              // -----------------------------
              if (paragraph.startsWith('- ')) {
                return (
                  <li key={index} className="text-gray-700 ml-6 mb-2 list-disc">
                    {paragraph.replace('- ', '')}
                  </li>
                );
              }

              // -----------------------------
              // TEXTO EN NEGRITA  **bold**
              // -----------------------------
              if (paragraph.includes('**')) {
                const parts = paragraph.split('**');

                return (
                  <p key={index} className="text-gray-700 mb-4">
                    {parts.map((part, i) =>
                      i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                    )}
                  </p>
                );
              }

              // -----------------------------
              // PÁRRAFO REGULAR
              // -----------------------------
              if (paragraph.trim()) {
                return (
                  <p key={index} className="text-gray-700 mb-4">
                    {paragraph}
                  </p>
                );
              }

              return null;
            })}
          </div>

          
        {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t-2 border-gray-200">
              <div className="flex flex-wrap gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tag w-5 h-5 text-red-600 mr-2" aria-hidden="true"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
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




        {/* Footer CTA */}
        <div className="mt-12 bg-black text-white rounded-2xl p-8 text-center">
          <h3 className="text-white mb-4">¿Necesitas este servicio?</h3>
          <p className="text-gray-300 mb-6">
            Contáctanos hoy mismo para una evaluación gratuita de tu vehículo
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors">
            Solicitar Cotización
          </button>
        </div>
      </div>
    </div>
  );
}
