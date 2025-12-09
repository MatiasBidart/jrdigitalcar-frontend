"use client";

import { useState, useEffect } from "react";
import { BlogPost, BlogFormData } from "@/types/blog";
import { BlogService } from "@/services/blogService";
import { BlogEditor } from "./BlogEdit";

export function AdminPanel() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | undefined>();
  const [previewPost, setPreviewPost] = useState<BlogPost | null>(null);



  const loadPosts = () => {
    setPosts(BlogService.getAllPosts());
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

  const handleDeletePost = (id: string) => {
    if (window.confirm("¿Eliminar este artículo?")) {
      BlogService.deletePost(id);
      loadPosts();
    }
  };

  const handleSavePost = (formData: BlogFormData) => {
    if (editingPost) {
      BlogService.updatePost(editingPost.id, formData);
    } else {
      BlogService.createPost(formData);
    }

    loadPosts();
    setIsEditorOpen(false);
    setEditingPost(undefined);
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
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plus w-5 h-5" aria-hidden="true"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
              Nuevo Artículo
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
              {new Set(posts.map((p) => p.category)).size}
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <div className="text-gray-600 mb-2">Último Publicado</div>
            <div className="text-black">
              {posts.length > 0 ? formatDate(posts[0].date) : "N/A"}
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b-2 border-gray-200">
            <h3 className="text-black">Artículos Publicados</h3>
          </div>

          {posts.length > 0 ? (
            <>
              {/* Desktop */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-gray-700">
                        Título
                      </th>
                      <th className="px-6 py-4 text-left text-gray-700">
                        Categoría
                      </th>
                      <th className="px-6 py-4 text-left text-gray-700 hidden lg:table-cell">
                        Autor
                      </th>
                      <th className="px-6 py-4 text-left text-gray-700">
                        Fecha
                      </th>
                      <th className="px-6 py-4 text-right text-gray-700">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {posts.map((post) => (
                      <tr key={post.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 max-w-xs">
                          <div className="text-gray-900 truncate">
                            {post.title}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                            {post.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-600 hidden lg:table-cell">
                          {post.author}
                        </td>
                        <td className="px-6 py-4 text-gray-600">
                          {formatDate(post.date)}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setPreviewPost(post)}
                              className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleEditPost(post)}
                              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDeletePost(post.id)}
                              className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile */}
              <div className="md:hidden divide-y divide-gray-200">
                {posts.map((post) => (
                  <div key={post.id} className="p-4 hover:bg-gray-50">
                    <div className="mb-3">
                      <h4 className="text-black text-base mb-1">
                        {post.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="inline-block bg-red-100 text-red-800 px-2 py-0.5 rounded-full text-xs">
                          {post.category}
                        </span>
                        <span>•</span>
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="text-sm text-gray-500 mt-1">
                        {post.author}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setPreviewPost(post)}
                        className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleEditPost(post)}
                        className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                        </svg>
                      </button>

                      <button
                        onClick={() => handleDeletePost(post.id)}
                        className="flex-1 flex items-center justify-center gap-2 p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg text-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="p-12 text-center text-gray-500">
              <p className="mb-4">No hay artículos publicados</p>
              <button
                onClick={handleCreatePost}
                className="text-red-600 hover:text-red-700"
              >
                Crear tu primer artículo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Editor Modal */}
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

      {/* Preview Modal */}
      {previewPost && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-8"
          onClick={() => setPreviewPost(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-black mb-4">{previewPost.title}</h2>
            <p className="text-gray-600 mb-6">{previewPost.content}</p>
            <button
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg"
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
