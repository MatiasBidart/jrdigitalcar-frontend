// src/config/apiConfig.ts

// 🔹 URL base del backend — solo cambiás esto al pasar de local a producción
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

// 🔹 Helper opcional para concatenar rutas
export const apiEndpoint = (path: string) => `${API_BASE_URL}${path}`;
