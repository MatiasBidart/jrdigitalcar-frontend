// src/services/tagBlogService.ts
import { apiClient } from "@/services/apiClient";

export interface TagBlogLink {
  id: string;
  blogId: string;
  tagId: string;
}

export class TagBlogService {
  // Obtener todas las relaciones
  static async getAll(): Promise<TagBlogLink[]> {
    try {
      const res = await apiClient.get<TagBlogLink[]>("/tags_blogs");
      return res.data;
    } catch (error) {
      console.error("Error al obtener vínculos tag-blog:", error);
      return [];
    }
  }

  // Crear relación entre un blog y una tag
  static async create(blogId: string, tagId: string): Promise<TagBlogLink | null> {
    try {
      const res = await apiClient.post<TagBlogLink>("/tags_blogs", { blogId, tagId });
      return res.data;
    } catch (error) {
      console.error("Error al crear vínculo tag-blog:", error);
      return null;
    }
  }

  // Eliminar una relación específica
  static async delete(id: string): Promise<boolean> {
    try {
      await apiClient.delete(`/tags_blogs/${id}`);
      return true;
    } catch (error) {
      console.error("Error al eliminar vínculo tag-blog:", error);
      return false;
    }
  }

  // Obtener todas las relaciones de un blog
  static async getByBlog(blogId: string): Promise<TagBlogLink[]> {
    try {
      const res = await apiClient.get<TagBlogLink[]>(`/tags_blogs/blog/${blogId}`);
      return res.data;
    } catch (error) {
      console.error("Error al obtener tags de un blog:", error);
      return [];
    }
  }

  // ✅ Sincronizar relaciones: elimina las viejas y crea las nuevas
  static async syncTagsForBlog(blogId: string, tagIds: string[]): Promise<void> {
    try {
      // 1️⃣ Obtener las relaciones actuales
      const currentRelations = await this.getByBlog(blogId);
      const currentTagIds = currentRelations.map((r) => r.tagId);

      // 2️⃣ Eliminar relaciones que ya no estén seleccionadas
      const toDelete = currentRelations.filter((r) => !tagIds.includes(r.tagId));
      await Promise.all(toDelete.map((r) => this.delete(r.id)));

      // 3️⃣ Crear relaciones nuevas
      const toAdd = tagIds.filter((id) => !currentTagIds.includes(id));
      await Promise.all(toAdd.map((id) => this.create(blogId, id)));

      console.log(`🔁 Relaciones de tags sincronizadas para blog ${blogId}`);
    } catch (error) {
      console.error("Error al sincronizar tags del blog:", error);
    }
  }
}
