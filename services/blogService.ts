import { apiClient } from "@/services/apiClient";
import { BlogPost, BlogFormData } from "@/types/blog";
import { AxiosError } from "axios";
import { TagService } from "@/services/tagService";
import { TagBlogService } from "@/services/tagBlogService";

function getUserIdFromToken(): string | null {
  try {
    const token = localStorage.getItem("token");
    if (!token) return null;
    const payloadBase64 = token.split(".")[1];
    const payload = JSON.parse(atob(payloadBase64));
    return payload?.id || payload?.userId || null;
  } catch (error) {
    console.error("❌ Error leyendo token:", error);
    return null;
  }
}

// 🧩 Normalizador central
function normalizeBlog(raw: any) {
  return {
    id: raw.id,
    title: raw.title,
    slug: raw.slug,
    excerpt: raw.excerpt,
    content: raw.content,
    imageUrl: raw.imgURL,
    author: raw.user?.name || "Anónimo",
    category: raw.category?.name || null,
    tags: raw.tags_blogs?.map((t: any) => t.tag?.name) || [],
    createdAt: raw.createdAt,
    // updatedAt: raw.updatedAt,
  };
}

export class BlogService {
  static async getAllPosts(): Promise<BlogPost[]> {
    try {
      const res = await apiClient.get<BlogPost[]>("/blog");
      return res.data.map(normalizeBlog);
    } catch (error) {
      const err = error as AxiosError;
      console.error("Error al obtener los artículos:", err.message);
      return [];
    }
  }

  static async getPostById(id: string): Promise<BlogPost | null> {
    try {
      const res = await apiClient.get<BlogPost>(`/blog/${id}`);
      return normalizeBlog(res.data);
    } catch (error) {
      return null;
    }
  }

static async getPostsByCategoryId(id: string): Promise<BlogPost[]> {
  try {
    const res = await apiClient.get(`/blog/category/${id}`);
    return Array.isArray(res.data)
      ? res.data.map(normalizeBlog)
      : [normalizeBlog(res.data)];
  } catch (error) {
    console.error("Error al obtener artículos por categoría:", error);
    return [];
  }
}


  static async createPost(formData: BlogFormData): Promise<BlogPost | null> {
    try {
      const userId = getUserIdFromToken();
      if (!userId) throw new Error("No se encontró el ID de usuario en el token.");

      const payload = {
        title: formData.title,
        slug: formData.title.toLowerCase().replace(/\s+/g, "-"),
        excerpt: formData.excerpt,
        content: formData.content,
        imgURL: formData.imageUrl,
        categoryId :formData.categoryId,
        userId,
      };

      const blogRes = await apiClient.post<BlogPost>("/blog", payload);
      let newBlog = blogRes.data;

      if (!newBlog?.id) {
        const all = await apiClient.get<BlogPost[]>("/blog");
        const match = all.data.find((b) => b.title === formData.title);
        newBlog = match || null;
      }

      const tagNames = formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      if (tagNames.length > 0 && newBlog?.id) {
        const allTags = await TagService.getAll();
        const selectedTagIds = allTags
          .filter((t) => tagNames.includes(t.name))
          .map((t) => t.id);

        await Promise.all(
          selectedTagIds.map((tagId) => TagBlogService.create(newBlog.id, tagId))
        );
      }

      return normalizeBlog(newBlog);
    } catch (error) {
      console.error("Error al crear el artículo:", error);
      return null;
    }
  }

  static async updatePost(id: string, formData: BlogFormData): Promise<BlogPost | null> {
    try {
      const payload = {
        ...formData,
        tags: formData.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };

      const res = await apiClient.patch<BlogPost>(`/blog/${id}`, payload);
      const updated = res.data?.id ? res.data : await this.getPostById(id);
      return normalizeBlog(updated);
    } catch {
      return null;
    }
  }

  static async deletePost(id: string): Promise<boolean> {
    try {
      await apiClient.delete(`/blog/${id}`);
      return true;
    } catch {
      return false;
    }
  }
}
