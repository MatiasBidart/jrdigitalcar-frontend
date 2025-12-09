import { useState, useEffect } from 'react';
import { BlogPost, BlogFormData } from '@/types/blog';

interface BlogEditorProps {
  post?: BlogPost;
  onSave: (formData: BlogFormData) => void;
  onCancel: () => void;
}

export function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    imageUrl: '',
    category: '',
    tags: '',
  });

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        author: post.author,
        imageUrl: post.imageUrl,
        category: post.category,
        tags: post.tags.join(', '),
      });
    }
  }, [post]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.content || !formData.author) {
      alert('Por favor completa los campos obligatorios');
      return;
    }
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto p-2 sm:p-4">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-4xl my-4 sm:my-8">

        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b-2 border-gray-200">
          <h3 className="text-black text-xl sm:text-2xl md:text-3xl">
            {post ? 'Editar Artículo' : 'Nuevo Artículo'}
          </h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 sm:space-y-6">

          {/* Title */}
          <div>
            <label className="block text-gray-700 mb-2">
              Título <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Título del artículo"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-gray-700 mb-2">
              Extracto <span className="text-red-600">*</span>
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Breve descripción del artículo"
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-700 mb-2">
              Contenido <span className="text-red-600">*</span>
            </label>
            <div className="text-sm text-gray-500 mb-2 space-y-1">
              <div>Puedes usar Markdown:</div>
              <div>• ## para títulos grandes, ### para títulos medianos</div>
              <div>• **negrita** para texto en negrita</div>
              <div>• - para listas con viñetas</div>
              <div>• ![descripción](url-de-imagen) para insertar imágenes</div>
            </div>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Contenido completo del artículo"
              rows={12}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none font-mono text-sm"
              required
            />
          </div>

          {/* Author + Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-gray-700 mb-2">
                Autor <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Nombre del autor"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Categoría <span className="text-red-600">*</span>
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors bg-white"
                required
              >
                <option value="">Seleccionar categoría</option>
                <option value="Mantenimiento">Mantenimiento</option>
                <option value="Rectificación">Rectificación</option>
                <option value="Tecnología">Tecnología</option>
                <option value="Consejos">Consejos</option>
                <option value="Noticias">Noticias</option>
              </select>
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-gray-700 mb-2">
              URL de Imagen <span className="text-red-600">*</span>
            </label>
            <div className="flex gap-2">
              <div className="flex-1 relative">
                
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 absolute left-3 top-1/2 -translate-y-1/2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>


                <input
                  type="url"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleChange}
                  placeholder="https://ejemplo.com/imagen.jpg"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>
            </div>
            <div className="text-sm text-gray-500 mt-1">
              Ingresa una URL de imagen de Unsplash o similar
            </div>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 mb-2">Etiquetas</label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="motor, mantenimiento, reparación (separadas por comas)"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
            />
          </div>

          {/* Actions */}
          <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
            <button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 opacity-90">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
              </svg>
              {post ? 'Actualizar' : 'Publicar'}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
