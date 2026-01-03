import { apiClient } from "@/services/apiClient";

export interface Tag {
  id: string;
  name: string;
  description?: string;
}

export class TagService {
  // Obtener todos los tags
  static async getAll(): Promise<Tag[]> {
    try {
      const res = await apiClient.get<Tag[]>("/tag");
      return res.data;
    } catch (error) {
      console.error("❌ Error al obtener tags:", error);
      return [];
    }
  }

  // Obtener tag por ID
  static async getById(id: string): Promise<Tag | null> {
    try {
      const res = await apiClient.get<Tag>(`/tag/${id}`);
      return res.data;
    } catch (error) {
      console.error("❌ Error al obtener tag:", error);
      return null;
    }
  }

  // Crear nuevo tag
  static async create(data: Partial<Tag>): Promise<Tag | null> {
    try {
      const res = await apiClient.post<Tag>("/tag", data);
      return res.data;
    } catch (error) {
      console.error("❌ Error al crear tag:", error);
      return null;
    }
  }

  // Actualizar tag
  static async update(id: string, data: Partial<Tag>): Promise<Tag | null> {
    try {
      const res = await apiClient.patch<Tag>(`/tag/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("❌ Error al actualizar tag:", error);
      return null;
    }
  }

  // Eliminar tag
  static async delete(id: string): Promise<boolean> {
    try {
      await apiClient.delete(`/tag/${id}`);
      return true;
    } catch (error) {
      console.error("❌ Error al eliminar tag:", error);
      return false;
    }
  }
}
