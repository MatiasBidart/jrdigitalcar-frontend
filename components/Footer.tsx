// import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-red-600 mb-4">JR Digital Car</h3>
            <p className="text-gray-400 mb-4">
              Especialistas en rectificación de motores y mecánica integral automotriz con más de 30 años de experiencia.
            </p>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/JRDIGITALCAR" className="text-gray-400 hover:text-red-600 transition-colors" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook w-5 h-5" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/jrdigitalcarsrl/" className="text-gray-400 hover:text-red-600 transition-colors" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram w-5 h-5" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <div>
                  <div>
                    <a
                      href="https://wa.me/5491154521992?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20JR%20Digital%20Car"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-yellow-400 transition-colors"
                    >
                      +54 9 11 5452-1992
                    </a>
                  </div>
                  <div>
                      <a
                        href="https://wa.me/5491149161992?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20JR%20Digital%20Car"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-yellow-400 transition-colors"
                      >
                        +54 9 11 4916-1992
                      </a>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:jrdigitalsrl@gmail.com?subject=Consulta%20desde%20la%20web&body=Hola,%20me%20comunico%20desde%20la%20web%20de%20JR%20Digital%20Car%20SRL" className="hover:text-yellow-400 transition-colors" target="_blank">jrdigitalsrl@gmail.com</a>
              </div>
              <div className="flex items-start gap-3 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <a href="https://share.google/PPWLgNz4KKLaiYDrl" className="hover:text-yellow-400 transition-colors" target="_blank">Gral. Hornos 3487, Caseros.</a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white mb-4">Horarios</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <div>
                  <div>Lunes - Viernes</div>
                  <a href="https://wa.me/5491154521992?text=Hola,%20encontré%20el%20boton%20magico!">
                  <div className="text-white cursor-pointer">8:00 AM - 5:00 PM</div>
                  </a>
                </div>
              </div>               
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-600 transition-colors cursor-pointer">
                Rectificación de Motores
              </li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">
                Mecánica General
              </li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">
                Diagnóstico Computarizado
              </li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">
                Mantenimiento Preventivo
              </li>
              <li className="hover:text-red-600 transition-colors cursor-pointer">
                Reparación de Culatas
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} JR Digital Car. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}