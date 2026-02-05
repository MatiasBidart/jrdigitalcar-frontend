// app/rectificacion/page.tsx
import { Rectificacion } from "@/components/Rectificacion";

export const metadata = {
  title: "Rectificación de Motores | JR Digital Car",
  description:
    "Servicio profesional de rectificación de motores y tapas de cilindros. Tecnología de precisión, diagnóstico completo y garantía en todos nuestros trabajos.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Rectificacion />
    </main>
  );
}
