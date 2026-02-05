export function Rectificacion() {
  const procesos = [
    {
      title: "Encamisado de Cilindros",
      description:
        "Instalación precisa de camisas para restaurar el diámetro original del cilindro y garantizar óptima compresión.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    ),
    },
    {
      title: "Esmerilado y Bruñido",
      description:
        "Acabado de superficie con alta precisión que asegura el perfecto sellado y lubricación del motor.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
    ),
    },
    {
      title: "Cepillado de Plano",
      description:
        "Rectificación de la superficie del block y tapa para garantizar un sellado hermético perfecto.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
    ),
    },
    {
      title: "Asentamiento de Válvulas",
      description:
        "Trabajo de precisión en asientos de válvulas para asegurar estanqueidad y rendimiento óptimo.",
      icon: (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" />
    </svg>
    ),
    },
  ];

  const beneficios = [
    "Reducción de consumo de aceite y combustible",
    "Restauración completa de la potencia del motor",
    "Mayor vida útil del motor rectificado",
    "Garantía en todos nuestros trabajos",
    "Diagnóstico completo y gratuito",
    "Asesoramiento técnico especializado",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1655103954785-d6b81452ee21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Taller de Rectificación"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-4 lg:py-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6 text-sm sm:text-base">
              <span className="uppercase tracking-wider text-xs">
                Planta de Rectificación Profesional
              </span>
            </div>

            <h1 className="text-white mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              Rectificación de Motores y Tapas de Cilindros
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Contamos con una planta de rectificación de motores y tapas de
              cilindros de{" "}
              <span className="text-red-600 font-bold">2000m²</span>, equipada
              con tecnología de última generación y un equipo de profesionales
              altamente capacitados.
            </p>

            <p className="text-xs sm:text-sm text-gray-400 mb-8">
              Más de 30 años de experiencia nos respaldan en la rectificación
              integral de motores, devolviendo a tu vehículo el rendimiento y
              eficiencia que merece.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <div className="bg-red-600/20 border border-red-600 px-6 py-3 rounded-lg flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">2000m²</div>
                <div className="text-sm text-gray-300">Planta Industrial</div>
              </div>
              <div className="bg-red-600/20 border border-red-600 px-6 py-3 rounded-lg flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">30+</div>
                <div className="text-sm text-gray-300">Años de Experiencia</div>
              </div>
              <div className="bg-red-600/20 border border-red-600 px-6 py-3 rounded-lg flex flex-col items-center">
                <div className="text-3xl font-bold text-red-600">100%</div>
                <div className="text-sm text-gray-300">Garantía</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ¿Qué es la Rectificación? */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-black mb-6 text-2xl sm:text-3xl lg:text-4xl">
                ¿Qué es la{" "}
                <span className="text-red-600">Rectificación de Motores</span>?
              </h2>
              <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed">
                La rectificación de motores es un proceso técnico especializado
                que consiste en la restauración de las dimensiones y acabados
                originales de los componentes internos del motor, devolviendo su
                rendimiento óptimo y prolongando significativamente su vida
                útil.
              </p>
              <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed">
                Este procedimiento es necesario cuando el motor presenta
                desgaste en cilindros, cigüeñal, árboles de levas o tapas de
                cilindros, lo que provoca pérdida de compresión, consumo
                excesivo de aceite, humo en el escape y pérdida de potencia.
              </p>
              <div className="bg-gray-50 border-l-4 border-red-600 p-6 rounded-r-lg">
                <p className="text-gray-800 font-semibold mb-2">
                  ¿Cuándo rectificar?
                </p>
                <ul className="text-gray-700 space-y-2">
                  {[
                    "Pérdida de potencia y rendimiento",
                    "Consumo excesivo de aceite o combustible",
                    "Humo en el escape (blanco o azul)",
                    "Ruidos anormales en el motor",
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-black opacity-20 blur-2xl rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1767339736277-980a7d7d1fe5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Tapa de cilindros"
                className="relative rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procesos de Rectificación */}
      <section className="py-16 sm:py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl">
              Nuestros{" "}
              <span className="text-red-600">Procesos Especializados</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-base sm:text-lg">
              Utilizamos tecnología de punta y técnicas profesionales para cada
              etapa del proceso de rectificación.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
            {procesos.map((proceso, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-gray-700 hover:border-red-600 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {proceso.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white mb-3 text-xl sm:text-2xl">
                      {proceso.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      {proceso.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Procesos adicionales */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1759159091728-e2c87b9d9315?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Maquinaria de precisión"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h3 className="text-white mb-6 text-2xl sm:text-3xl">
                Otros Servicios de{" "}
                <span className="text-red-600">Rectificación</span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Rectificado de Cigüeñal",
                    desc: "Restauración de muñones y bancadas con precisión micrométrica",
                  },
                  {
                    title: "Rectificado de Árbol de Levas",
                    desc: "Corrección de perfil y dimensiones de levas y muñones",
                  },
                  {
                    title: "Rectificado de Block",
                    desc: "Recuperación de medidas originales en cilindros y camisas",
                  },
                  {
                    title: "Prueba Hidráulica",
                    desc: "Verificación de fisuras y pérdidas en tapas y blocks",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>


                    <div>
                      <div className="text-white font-semibold mb-1">
                        {item.title}
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-black mb-6 text-2xl sm:text-3xl lg:text-4xl">
                Beneficios de la{" "}
                <span className="text-red-600">Rectificación Profesional</span>
              </h2>
              <p className="text-gray-700 mb-8 text-base sm:text-lg leading-relaxed">
                Una rectificación bien ejecutada no solo restaura el
                rendimiento de tu motor, sino que también representa una
                inversión inteligente que te ahorrará costos a largo plazo y
                extenderá significativamente la vida útil de tu vehículo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-red-600 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-red-900">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>

                    <span className="text-gray-800 text-sm sm:text-base">
                      {beneficio}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1609872209699-3e55dc7d90b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Pistones de motor"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
              <div className="relative mt-8">
                <img
                  src="https://images.unsplash.com/photo-1769779394469-b628a408789f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Componentes de motor"
                  className="rounded-xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-6 text-2xl sm:text-3xl lg:text-4xl">
            ¿Tu Motor Necesita{" "}
            <span className="text-red-600">Rectificación</span>?
          </h2>
          <p className="text-gray-300 mb-8 text-base sm:text-lg max-w-2xl mx-auto">
            Visita nuestra planta de 2000m² y descubre por qué somos líderes en
            rectificación de motores. Diagnóstico gratuito y asesoramiento
            profesional sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
            href="https://wa.me/5491154521992?text=Hola,%20me%20comunico%20desde%20la%20p%C3%A1gina%20web%20de%20JR%20Digital%20Car"
            target="_blank"
            rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg transition-all transform hover:scale-105 inline-block"
            >
              Gestionar Turno
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
