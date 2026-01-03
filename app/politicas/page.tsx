// /app/politicas/page.jsx
"use client";

export default function PoliticasPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 lg:px-20 text-gray-800">
      {/* Encabezado */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-red-600 mb-2">
          Política de Privacidad
        </h1>
        <p className="text-gray-600">Última actualización: 31 de diciembre de 2025</p>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto space-y-10 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            1. Introducción
          </h2>
          <p>
            En JR Digital Car SRL respetamos su privacidad y estamos comprometidos a
            proteger sus datos personales. Esta política explica cómo recopilamos,
            usamos y protegemos la información personal que usted nos proporciona a
            través de nuestros servicios, sitio web y plataformas asociadas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            2. Información que recopilamos
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Datos de contacto (nombre, correo electrónico, teléfono).</li>
            <li>Información técnica (dirección IP, navegador, cookies).</li>
            <li>Datos proporcionados voluntariamente en formularios o consultas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            3. Cómo usamos su información
          </h2>
          <p>
            Utilizamos su información personal para ofrecer y mejorar nuestros
            servicios, procesar solicitudes, comunicarnos con usted, cumplir
            obligaciones legales y mantener la seguridad de nuestro sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            4. Compartición de datos
          </h2>
          <p>
            No vendemos ni alquilamos su información personal. Podemos compartirla
            únicamente con proveedores de servicios de confianza o cuando sea
            requerido por ley.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            5. Seguridad de la información
          </h2>
          <p>
            Implementamos medidas técnicas y organizativas adecuadas para proteger su
            información frente a accesos no autorizados, pérdida o alteración.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            6. Sus derechos
          </h2>
          <p>
            Usted tiene derecho a acceder, corregir, eliminar o limitar el uso de sus
            datos personales. Para ejercer estos derechos, puede contactarnos a través
            de los medios indicados en nuestro sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            7. Cambios a esta política
          </h2>
          <p>
            JR Digital Car SRL puede actualizar esta política de privacidad en
            cualquier momento. Le recomendamos revisarla periódicamente para estar
            informado sobre cómo protegemos su información.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-black mb-3">
            8. Contacto
          </h2>
          <p>
            Si tiene preguntas sobre esta política o el tratamiento de sus datos
            personales, contáctenos a:
          </p>
          <p className="mt-2">
            <strong>Email:</strong> contacto@jrdigitalcar.com
            <br />
            <strong>Teléfono:</strong> +54 11 5555-5555
            <br />
            <strong>Dirección:</strong> Av. Siempre Viva 1234, Buenos Aires, Argentina.
          </p>
        </section>
      </main>

      {/* Pie */}
      <footer className="text-center mt-16 text-gray-500 text-sm">
        © {new Date().getFullYear()} JR Digital Car SRL. Todos los derechos reservados.
      </footer>
    </div>
  );
}
