import { apiClient } from "@/services/apiClient";

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export class CategoryService {
  // 🧠 Obtener todas las categorías con reintento
  static async getAll(): Promise<Category[]> {
    try {
      const res = await apiClient.get<Category[]>("/category");
      if (!res.data || !Array.isArray(res.data)) {
        console.warn("⚠️ Respuesta inesperada del backend:", res.data);
        return [];
      }
      return res.data;
    } catch (error: any) {
      console.error("❌ Error al obtener categorías:", error.message);
      // 🔁 Reintento automático en caso de error temporal
      try {
        console.log("🔁 Reintentando obtener categorías...");
        const retry = await apiClient.get<Category[]>("/category");
        return retry.data || [];
      } catch (retryError) {
        console.error("🚨 Falló también el reintento:", retryError);
        return [];
      }
    }
  }

  static async getById(id: string): Promise<Category | null> {
    try {
      const res = await apiClient.get<Category>(`/category/${id}`);
      return res.data;
    } catch (error) {
      console.error("❌ Error al obtener categoría:", error);
      return null;
    }
  }

  static async create(data: Partial<Category>): Promise<Category | null> {
    try {
      const res = await apiClient.post<Category>("/category", data);
      return res.data;
    } catch (error) {
      console.error("❌ Error al crear categoría:", error);
      return null;
    }
  }

  static async update(id: string, data: Partial<Category>): Promise<Category | null> {
    try {
      const res = await apiClient.patch<Category>(`/category/${id}`, data);
      return res.data;
    } catch (error) {
      console.error("❌ Error al actualizar categoría:", error);
      return null;
    }
  }

  static async delete(id: string): Promise<boolean> {
    try {
      await apiClient.delete(`/category/${id}`);
      return true;
    } catch (error) {
      console.error("❌ Error al eliminar categoría:", error);
      return false;
    }
  }
}
