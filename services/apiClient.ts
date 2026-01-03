import axios, { AxiosError } from "axios";
import { API_BASE_URL } from "@/config/apiConfig";

const baseURL =
  API_BASE_URL && !API_BASE_URL.startsWith("http")
    ? `http://${API_BASE_URL.replace(/\/$/, "")}`
    : (API_BASE_URL);

export const apiClient = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
});

apiClient.interceptors.request.use((config) => {
  if (process.env.NODE_ENV === "development") {
    console.log("📤 Request:", `${config.baseURL}${config.url}`);
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.code === "ECONNABORTED") {
      console.error("⏰ Timeout: El servidor no respondió a tiempo.");
    } else if (error.message === "Network Error") {
      console.error("🌐 Error de red: No se pudo conectar con:", baseURL);
    } else if (error.response) {
      console.error(`❌ Error ${error.response.status} (${error.response.statusText}):`, error.response.data);
    } else {
      console.error("❌ Error desconocido:", error.message);
    }
    return Promise.reject(error);
  }
);
