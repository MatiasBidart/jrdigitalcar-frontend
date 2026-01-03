import { useState, useEffect } from "react";
import { BlogPost, BlogFormData } from "@/types/blog";
import { CategoryService, Category } from "@/services/categoryService";
import { TagService, Tag } from "@/services/tagService";
import { TagBlogService } from "@/services/tagBlogService";

interface BlogEditorProps {
  post?: BlogPost;
  onSave: (formData: BlogFormData) => Promise<BlogPost | null>;
  onCancel: () => void;
}

export function BlogEditor({ post, onSave, onCancel }: BlogEditorProps) {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    excerpt: "",
    content: "",
    imageUrl: "",
    categoryId: "",
    tags: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [availableTags, setAvailableTags] = useState<Tag[]>([]);
  const [selectedTagIds, setSelectedTagIds] = useState<string[]>([]);

  // 🔹 Cargar categorías y tags del backend
  useEffect(() => {
    const fetchData = async () => {
      const [cats, tags] = await Promise.all([
        CategoryService.getAll(),
        TagService.getAll(),
      ]);
      setCategories(cats);
      setAvailableTags(tags);
    };
    fetchData();
  }, []);

  // 🔹 Si se edita un post existente
  useEffect(() => {
    const loadPostData = async () => {
      if (!post) return;

      setFormData({
        title: post.title,
        excerpt: post.excerpt || "",
        content: post.content,
        imageUrl: post.imageUrl || "",
        categoryId: post.categoryId || "",
        tags: post.tags?.join(", ") || "",
      });

      const relations = await TagBlogService.getByBlog(post.id);
      const tagIds = relations.map((r) => r.tagId);
      setSelectedTagIds(tagIds);
    };

    loadPostData();
  }, [post]);

  // 🔹 Inputs
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Tags
  const toggleTag = (tagId: string, tagName: string) => {
    setSelectedTagIds((prev) =>
      prev.includes(tagId)
        ? prev.filter((id) => id !== tagId)
        : [...prev, tagId]
    );

    setFormData((prev) => {
      const tagList = prev.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);
      const updated = tagList.includes(tagName)
        ? tagList.filter((t) => t !== tagName)
        : [...tagList, tagName];
      return { ...prev, tags: updated.join(", ") };
    });
  };

  // 🔹 Guardar
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.categoryId) {
      alert("Por favor completa los campos obligatorios");
      return;
    }

    const savedPost = await onSave(formData);

    if (savedPost?.id) {
      await TagBlogService.syncTagsForBlog(savedPost.id, selectedTagIds);
    }

    alert("✅ Artículo publicado correctamente");
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center overflow-y-auto p-2 sm:p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl my-4 sm:my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-gray-200">
          <h3 className="text-black text-xl sm:text-2xl md:text-3xl">
            {post ? "Editar Artículo" : "Nuevo Artículo"}
          </h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            ✖️
          </button>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Título */}
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
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600"
              required
            />
          </div>

          {/* Extracto */}
          <div>
            <label className="block text-gray-700 mb-2">
              Extracto <span className="text-red-600">*</span>
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 resize-none"
              required
            />
          </div>

          {/* Contenido */}
          <div>
            <label className="block text-gray-700 mb-2">
              Contenido <span className="text-red-600">*</span>
            </label>
            <p className="text-gray-400 text-sm mb-4">Puedes usar Markdown:<br></br>
            • # para títulos grandes, ## para títulos medianos, ### para títulos pequeños.<br></br>
            • **negrita** para texto en negrita<br></br>
            • *cursiva* para texto en cursiva<br></br>
            • - para listas con viñetas.<br></br>
            • ![descripción](url-de-imagen) para insertar imágenes
            </p>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows={10}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 font-mono text-sm resize-none"
              required
            />
          </div>

          {/* Categoría */}
          <div>
            <label className="block text-gray-700 mb-2">
              Categoría <span className="text-red-600">*</span>
            </label>
            <select
              name="categoryId" // ✅ el backend espera este nombre
              value={formData.categoryId}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 bg-white"
              required
            >
              <option value="">Seleccionar categoría</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Imagen */}
          <div>
            <label className="block text-gray-700 mb-2">
              URL de Imagen <span className="text-red-600">*</span>
            </label>
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://ejemplo.com/imagen.jpg"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-gray-700 mb-2">Etiquetas</label>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableTags.map((tag) => {
                const isSelected = selectedTagIds.includes(tag.id);
                return (
                  <span
                    key={tag.id}
                    onClick={() => toggleTag(tag.id, tag.name)}
                    className={`cursor-pointer px-3 py-1 rounded-full text-sm border transition-all ${
                      isSelected
                        ? "bg-red-600 text-white border-red-600"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-red-50"
                    }`}
                  >
                    #{tag.name}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Botones */}
          <div className="flex gap-4 pt-6 border-t-2 border-gray-200">
            <button
              type="submit"
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors cursor-pointer"
            >
              {post ? "Actualizar" : "Publicar"}
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-lg transition-colors cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
