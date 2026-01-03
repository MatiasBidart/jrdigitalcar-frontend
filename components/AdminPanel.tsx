"use client";

import { useState, useEffect } from "react";
import { BlogPost, BlogFormData } from "@/types/blog";
import { BlogService } from "@/services/blogService";
import { BlogEditor } from "./BlogEdit";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export function AdminPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | undefined>();
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);

  const loadPosts = async () => {
    const data = await BlogService.getAllPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleCreatePost = () => {
    setEditingPost(undefined);
    setIsEditorOpen(true);
  };

  const handleEditPost = (post: BlogPost) => {
    setEditingPost(post);
    setIsEditorOpen(true);
  };

  const handleDeletePost = async (id: string) => {
    if (window.confirm("¿Eliminar este artículo?")) {
      const success = await BlogService.deletePost(id);
      if (success) loadPosts();
    }
  };

  const handleSavePost = async (formData: BlogFormData) => {
    const savedPost = editingPost
      ? await BlogService.updatePost(editingPost.id, formData)
      : await BlogService.createPost(formData);

    await loadPosts();
    setIsEditorOpen(false);
    setEditingPost(undefined);
    return savedPost;
  };

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-black mb-2">Panel de Administración</h2>
              <p className="text-gray-600">Gestiona los artículos de tu blog</p>
            </div>
            <button
              onClick={handleCreatePost}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
            >
              ➕ Nuevo Artículo
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-gray-600 mb-2">Total de Artículos</div>
            <div className="text-black">{posts.length}</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-gray-600 mb-2">Categorías</div>
            <div className="text-black">
              {new Set(posts.map((p) => p.category).filter(Boolean)).size}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-gray-600 mb-2">Último Publicado</div>
            <div className="text-black">
              {posts.length > 0 ? formatDate(posts[0].createdAt) : "N/A"}
            </div>
          </div>
        </div>

        {/* Tabla */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b-2 border-gray-200">
            <h3 className="text-black">Artículos Publicados</h3>
          </div>

          {posts.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700">Título</th>
                    <th className="px-6 py-4 text-left text-gray-700">Categoría</th>
                    <th className="px-6 py-4 text-left text-gray-700">Fecha</th>
                    <th className="px-6 py-4 text-right text-gray-700">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 max-w-xs truncate">{post.title}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                          {post.category || "—"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        {formatDate(post.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => setPreviewPost(post)}
                          className="mr-2 p-2 hover:bg-blue-50 rounded-lg cursor-pointer"
                        >
                          👁️
                        </button>
                        <button
                          onClick={() => handleEditPost(post)}
                          className="mr-2 p-2 hover:bg-green-50 rounded-lg cursor-pointer"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-2 hover:bg-red-50 rounded-lg cursor-pointer"
                        >
                          🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <p>No hay artículos publicados</p>
              <button
                onClick={handleCreatePost}
                className="text-red-600 hover:text-red-700 mt-2 cursor-pointer"
              >
                Crear tu primer artículo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Editor */}
      {isEditorOpen && (
        <BlogEditor
          post={editingPost}
          onSave={handleSavePost}
          onCancel={() => {
            setIsEditorOpen(false);
            setEditingPost(undefined);
          }}
        />
      )}

      {/* Preview con soporte Markdown */}
      {previewPost && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-8 top-20"
          onClick={() => setPreviewPost(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-black mb-4 text-2xl font-bold">
              {previewPost.title}
            </h2>

            <div className="text-gray-700 leading-relaxed space-y-4">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-2xl font-bold text-black mt-6 mb-3" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-xl font-semibold text-red-600 mt-5 mb-2" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-lg font-semibold text-gray-800 mt-4 mb-2" {...props} />
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
                {previewPost.content}
              </ReactMarkdown>
            </div>

            <button
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg cursor-pointer hover:bg-red-700 transition"
              onClick={() => setPreviewPost(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
