import Image from "next/image";

interface HeroProps {
  onNavigate: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative bg-black text-white overflow-hidden h-[110vh] md:h-[80vh]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src='/IMG_7097.JPG' alt='foto-taller' className="w-full h-full object-cover opacity-80" width={1000} height={1000}/>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 py-8 sm:py-12 lg:py-19">
        <div className="max-w-3xl">
          <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-base flex flex-col">
            <span className="uppercase tracking-wider text-xs">Expertos en Rectificación de Motores y Tapas de Cilindros</span>
          </div>
          
          <h1 className="text-white mb-4 sm:mb-6  text-xl md:text-2xl lg:text-4xl xl:text-5xl">
            Rectificación de Motores y Mecánica Integral Para Empresas
          </h1>
          
          <p className="text-sm md:text-lg text-gray-300 mb-6 sm:mb-8">
            Más de 30 años devolviendo la vida a tu motor. Tecnología de punta, 
            experiencia garantizada y el mejor servicio para tu vehículo.
          </p>

          {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 sm:mb-12">
            <button
              onClick={() => onNavigate('services')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-center"
            >
              Nuestros Servicios
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-center"
            >
              Contactar Ahora
            </button>
          </div> */}

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
              <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
                </svg>
              </div>
              <div>
                <h5 className="text-white mb-1">30+ Años</h5>
                <p className="text-gray-400 text-xs">De experiencia</p>
              </div>
            </div>

            <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
              <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
              </div>
              <div>
                <h5 className="text-white mb-1">Garantía</h5>
                <p className="text-gray-400 text-xs">En todos nuestros trabajos</p>
              </div>
            </div>

            <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
              <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
                </svg>
              </div>
            <div>
                <h5 className="text-white mb-1">Calidad</h5>
                <p className="text-gray-400 text-xs">Certificada y confiable</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}