// app/components/Services.tsx
// import Image from "next/image";
import { FleetSolutions } from "./FleetSolutions";

const services = [
  {
    id: 1,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
    title: 'Rectificación de Motores',
    description: 'Proceso completo de rectificación con tecnología de precisión CNC. Devolvemos a tu motor las especificaciones de fábrica.',
    features: [
      'Rectificado de cilindros',
      'Rectificado de cigüeñal',
      'Rectificación de tapas de cilindros',
      'Reemplazo de componentes',
    ],
    image: 'https://i.postimg.cc/wMK9xZbH/tapa.png',
  },
  {
    id: 2,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    title: 'Mecánica General',
    description: 'Servicio completo de mecánica automotriz para todas las marcas y modelos. Diagnóstico y reparación profesional.',
    features: [
      'Reparación de transmisiones',
      'Sistema de frenos',
      'Suspensión y dirección',
      'Sistema eléctrico',
    ],
    image: 'https://i.postimg.cc/rsg521Q6/JR_BROCHURE_IG_2_1.png',
  },
  {
    id: 3,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
      </svg>
    ),
    title: 'Diagnóstico Computarizado',
    description: 'Tecnología de punta para el diagnóstico preciso de fallas. Escáneres especializados para todas las marcas.',
    features: [
      'Lectura de códigos OBD-II',
      'Análisis de sensores',
      'Pruebas en tiempo real',
      'Reportes detallados',
    ],
    image: 'https://i.postimg.cc/NGrhGNcd/IMG-0130.jpg',
  },
  {
    id: 4,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
    title: 'Mantenimiento Preventivo',
    description: 'Programas de mantenimiento para prolongar la vida útil de tu vehículo y prevenir averías costosas.',
    features: [
      'Cambio de aceite y filtros',
      'Revisión de sistemas',
      'Afinación de motor',
      'Inspección completa',
    ],
    image: 'https://i.postimg.cc/PfMWDHTk/IMG_7103.jpg',
  },
  {
    id: 5,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    title: 'Reparación de Tapas de Cilindros',
    description: 'Especialistas en reparación y rectificación de tapas de cilindros. Pruebas de presión y hermeticidad garantizadas.',
    features: [
      'Rectificado de superficie',
      'Cambio de válvulas',
      'Pruebas de presión',
      'Ajuste de especificaciones',
    ],
    image: 'https://st.depositphotos.com/1806334/3136/i/450/depositphotos_31368513-stock-photo-engine-head.jpg',
  },
  {
    id: 6,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
    title: 'Servicio de Emergencia',
    description: 'Atención rápida para emergencias. Diagnóstico express y soluciones inmediatas para que vuelvas al camino.',
    features: [
      'Servicio de grúas propias',
      'Diagnóstico rápido',
      'Reparaciones urgentes',
      'Disponibilidad inmediata',
      'Atención prioritaria',
    ],
    image: 'https://i.postimg.cc/VsFqtw13/DEB96888_1B07_4788_B528_8555D6CC1D01.jpg',
  },
];


export function Services() {
  return (
    <div className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full mb-4 uppercase tracking-wider">
            Nuestros Servicios
          </div>
          <h2 className="text-black mb-4">Soluciones Completas para Tu Vehículo</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Ofrecemos servicios integrales de mecánica automotriz con la más alta calidad y garantía. 
            Tecnología de punta y experiencia comprobada.
          </p>
        </div>
        <FleetSolutions/>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-80"
                />

                {/* Reemplazo del ícono original */}
                <div className="absolute top-4 right-4 p-3 rounded-lg bg-red-600">
                  {/* <div className="w-6 h-6 bg-white rounded-sm">
                  </div> */}
                  {service.icon}
                </div>
              </div>

              <div className="p-6">
                <h4 className="text-black mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      {/* Reemplazo del CheckCircle */}
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-black text-white rounded-2xl p-8 md:p-12 text-center">
       {/* className="mt-16 bg-black text-white rounded-2xl p-8 md:p-12 text-center grid grid-rows-[80%_20%] md:grid-rows-none md:grid-cols-[80%_20%]"> */}
          {/* <section> */}
          <h3 className="text-white mb-4 text-2xl"><b>¿Sos Dueño De Una Flota y Necesitas un Servicio Especializado?</b></h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte. Contáctanos hoy mismo 
            para evaluar tu consulta.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              // href="tel:+5491154521992"
              href="https://wa.me/5491154521992?text=Hola,%20me%20comunico%20desde%20la%20pagina%20de%20JR%20Digital%20Car"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Llamar Ahora
            </a>
            {/* <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-lg transition-colors">
              Solicitar Cotización
            </button> */}
          </div>            
          {/* </section> */}
          {/* <section>
            <Image src='/flota-vehiculos.png' alt='flota' width={900} height={900}/>
          </section> */}

        </div>

      </div>
    </div>
  );
}
