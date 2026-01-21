import { useState } from 'react';
import { MapSection } from './MapSection';
import { trackLinkedIn } from '@/utils/trackLinkedIn';

export function Contact({children}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    
    try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok) {
      alert("✅ Mensaje enviado correctamente");
      setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      });
      trackLinkedIn(25488346)
    } else {
      alert("❌ Error al enviar el mensaje: " + data.message);
    }
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Error de conexión");
  }
  };

  return (
    <div className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Contacto
          </div>
          <h2 className="text-black mb-4">Estamos Aquí Para Ayudarte</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas un presupuesto? Contáctanos y te 
            responderemos lo antes posible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 order-2 lg:order-1">
            {/* Contact Cards */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z" />
                </svg>

                </div>
                <div>
                  <h4 className="text-black mb-2">Teléfono</h4>
                  <p className="text-gray-600 mb-1">+54 11 5452-1992</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                </svg>
                </div>
                <div>
                  <h4 className="text-black mb-2">Email</h4>
                  <p className="text-gray-600 mb-1">jrdigitalsrl@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>

                </div>
                <div>
                  <h4 className="text-black mb-2">Ubicación</h4>
                  <p className="text-gray-600 mb-1">Gral. Hornos 3487</p>
                  <p className="text-gray-800 mb-1 text-sm">Caseros</p>
                  <p className="text-gray-800 text-xs">Tres de Febrero</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-600 p-4 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </div>
                <div>
                  <h4 className="text-black mb-2">Horarios</h4>
                  <div className="space-y-1 text-gray-600">
                    <p>Lunes - Viernes: 08:00 AM - 17:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 order-1 lg:order-2">
            <h3 className="text-black mb-6">Envíanos un Mensaje</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Nombre Completo <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                  required
                />
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Teléfono <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Servicio de Interés <span className="text-red-600">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors bg-white"
                  required
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="rectificacion">Rectificación de Motores</option>
                  <option value="mecanica">Mecánica General</option>
                  <option value="diagnostico">Diagnóstico Computarizado</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="culatas">Reparación de Culatas</option>
                  <option value="emergencia">Servicio de Emergencia</option>
                  <option value="otro">Otro</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 mb-2">
                  Mensaje <span className="text-red-600">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <div id='send' className="w-5 h-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-video bg-gray-200 flex items-center justify-center">
            <div className="text-center text-gray-500 w-full p-4">
              <MapSection/>
              <p className="text-sm mt-2">Mapa de Ubicación</p>
              <p>Gral. Hornos 3487, Caseros, Tres de Febrero.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
