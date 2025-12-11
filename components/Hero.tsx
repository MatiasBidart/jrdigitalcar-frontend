"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";

const duration = 5000; // <--- 🔥 Cambiás esto y cambia todo

interface HeroProps {
  onNavigate: (page: string) => void;
}

interface HeroSlide {
  badge: string;
  title: string;
  description: string;
  image: string;
  feature: {           // 🔥 Solo una feature ahora
    title: string;
    description: string;
    img: string;
  };
}

const slides: HeroSlide[] = [
  {
    badge: "Expertos en Rectificación de Motores y Tapas de Cilindros",
    title: "Rectificación de Motores y Mecánica Integral Para Empresas",
    description:
    "Especialistas en rectificación de alta precisión. Devolvemos el rendimiento original a tu motor con las mejores técnicas del mercado.",
    image:
      "https://cdn.pixabay.com/photo/2017/03/19/18/51/tuning-2157354_1280.jpg",
    feature: { title: "20+ Años", description: "De experiencia", img: "https://static.vecteezy.com/system/resources/thumbnails/045/912/728/small/complex-black-and-blue-engine-cut-out-stock-png.png" }
  },
  {
    badge: "Rodamientos",
    title: "Alineación & Balanceo",
    description:
      "En nuestra planta de 2000 m², ofrecemos todos los servicios necesarios para tu automóvil o tu flota. ",
    image:
      "https://images.pexels.com/photos/21694/pexels-photo.jpg",
    feature: { title: "Equipamiento", description: "Tecnología avanzada", img: "https://i.postimg.cc/MGdnpfGd/wheel.png" }
  },
  {
    badge: "Tecnología de Punta",
    title: "Diagnóstico Computarizado para Flotas",
    description:
    "Utilizamos equipos de última generación para diagnosticar y reparar tu motor. Precisión, eficiencia y resultados garantizados en cada trabajo.",
    image:
      "https://i.postimg.cc/3xLFvVyt/Chat-GPT-Image-10-dec-2025-19-21-16.png",
    feature: { title: "Experiencia", description: "Años de trayectoria", img: "https://i.postimg.cc/nL0Xh9L3/launch.png" }
  },
  {
    badge: "Mantenimiento de Flotas Vehículares",
    title: "Servicio Personalizado a Empresas",
    description:
    "Más de 30 años ofreciendo mantenimiento a flotas vehiculares. Atención personalizada, conocemos tus necesidades.",
    image:
      "https://images.pexels.com/photos/515674/pexels-photo-515674.jpeg",
    feature: { title: "Garantía Total", description: "En cada servicio", img: "https://i.postimg.cc/660BJxyC/car.png" }
  }
];

export function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(1);
  const [autoplay, setAutoplay] = useState(true);
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setAutoplay(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
      setProgress(0);
    }, duration);
    return () => clearInterval(interval);
  }, [autoplay]);

  useEffect(() => {
    if (!autoplay) return;
    setProgress(0);
    const start = Date.now();

    const anim = () => {
      if (!autoplay) return;
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(anim);
    };

    requestAnimationFrame(anim);
  }, [currentSlide, autoplay]);

  useEffect(() => {
    const handleScroll = () => {
      const el = heroRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = rect.height;
      setFade(Math.max(0, Math.min(1, rect.bottom / h)));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div ref={heroRef} className="relative bg-black text-white overflow-hidden max-h-[130vh] md:h-[90vh]">

      <div className="fixed left-0 right-0 h-1 bg-gray-800 z-[60]" style={{ top: "80px", opacity: fade, transition: "opacity 0.25s linear" }}>
        <motion.div className="h-full bg-red-600" style={{ width: `${progress}%` }} transition={{ ease: "linear" }} />
      </div>

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <img src={slide.image} alt="Engine" className="w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-20 lg:py-22">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-6 text-sm sm:text-base">
                <span className="uppercase tracking-wider text-xs">{slide.badge}</span>
              </div>

              <h1 className="text-white mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">{slide.title}</h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8">{slide.description}</p>

              {/* 🔥 FEATURE DINÁMICA */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ type: "spring", stiffness: 200, damping: 18 }}
                className="relative ml-10 w-full w-sm bg-black/10 backdrop-blur-sm 
                  p-2 pl-18 rounded-4xl cursor-pointer
                  transition-colors duration-300 hover:bg-white/20"
              >
                <motion.img
                  src={slide.feature.img}
                  alt="Decorative"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: "spring", stiffness: 250, damping: 14 }}
                  className="absolute left-0 top-1/2 -translate-y-1/2
                    h-[120%] w-auto object-contain
                    -translate-x-1/3 pointer-events-none"
                />
                <div className="relative z-10">
                  <h3 className="text-white text-md font-semibold mb-1">{slide.feature.title}</h3>
                  <p className="text-gray-300 text-xs">{slide.feature.description}</p>
                </div>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}






// import Image from "next/image";

// interface HeroProps {
//   onNavigate: (page: string) => void;
// }

// export function Hero({ onNavigate }: HeroProps) {
//   return (
//     <div className="relative bg-black text-white overflow-hidden max-h-[110vh] md:h-[80vh]">
//       {/* Background Image with Overlay */}
//       <div className="absolute inset-0 z-0">
//         <Image src='/IMG_7097.JPG' alt='foto-taller' className="w-full h-full object-cover opacity-80" width={1000} height={1000}/>
//         <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-5 lg:px-7 py-8 sm:py-12 lg:py-19">
//         <div className="max-w-3xl">
//           <div className="inline-block bg-red-600 px-4 py-2 rounded-full mb-4 sm:mb-6 text-xs sm:text-base flex flex-col">
//             <span className="uppercase tracking-wider text-xs">Expertos en Rectificación de Motores y Tapas de Cilindros</span>
//           </div>
          
//           <h1 className="text-white mb-4 sm:mb-6  text-xl md:text-2xl lg:text-4xl xl:text-5xl">
//             Rectificación de Motores y Mecánica Integral Para Empresas
//           </h1>
          
//           <p className="text-sm md:text-lg text-gray-300 mb-6 sm:mb-8">
//             Más de 30 años devolviendo la vida a tu motor. Tecnología de punta, 
//             experiencia garantizada y el mejor servicio para tu vehículo.
//           </p>

//           {/* <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 sm:mb-12">
//             <button
//               onClick={() => onNavigate('services')}
//               className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-center"
//             >
//               Nuestros Servicios
//             </button>
//             <button
//               onClick={() => onNavigate('contact')}
//               className="bg-white hover:bg-gray-100 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all transform hover:scale-105 text-center"
//             >
//               Contactar Ahora
//             </button>
//           </div> */}

//           {/* Features */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
//             <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
//               <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" />
//                 </svg>
//               </div>
//               <div>
//                 <h5 className="text-white mb-1">30+ Años</h5>
//                 <p className="text-gray-400 text-xs">De experiencia</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
//               <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
//                 </svg>
//               </div>
//               <div>
//                 <h5 className="text-white mb-1">Garantía</h5>
//                 <p className="text-gray-400 text-xs">En todos nuestros trabajos</p>
//               </div>
//             </div>

//             <div className="flex items-start gap-3 cursor-pointer hover:bg-white/40 transition-colors p-2 rounded-xl">
//               <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M4.867 19.125h.008v.008h-.008v-.008Z" />
//                 </svg>
//               </div>
//             <div>
//                 <h5 className="text-white mb-1">Calidad</h5>
//                 <p className="text-gray-400 text-xs">Certificada y confiable</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }