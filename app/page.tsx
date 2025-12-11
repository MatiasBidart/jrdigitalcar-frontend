"use client";

import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { useRouter } from "next/navigation";
import { LogoBanner } from "@/components/LogoBanner";
import BannerPromo from "@/components/BannerPromo";
import ParallaxSection from "@/components/ParallaxSection";
import { MapSection } from "@/components/MapSection";
import { FleetSolutions } from "@/components/FleetSolutions";
export default function HomePage() {
  const router = useRouter();

  const handleNavigate = (page: string) => {
    router.push(`/${page === "home" ? "" : page}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Hero onNavigate={handleNavigate} />
      <div className="w-full bg-red-700 h-5"></div>
      <LogoBanner/>
      <div className="hidden md:block">
        <BannerPromo />
      </div>
      <Services/>
      <ParallaxSection/>
      <MapSection/>
    
      

      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
            <div className="p-4 sm:p-6">
              <div className="text-red-600 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">30+</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Años de Experiencia</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Más de dos décadas sirviendo a nuestros clientes con excelencia
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-red-600 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">5000+</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Clientes Satisfechos</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Miles de vehículos reparados con garantía de calidad
              </p>
            </div>
            <div className="p-4 sm:p-6">
              <div className="text-red-600 mb-3 sm:mb-4 text-3xl sm:text-4xl lg:text-5xl">100%</div>
              <h4 className="text-white mb-2 text-lg sm:text-xl">Garantía</h4>
              <p className="text-gray-400 text-sm sm:text-base">
                Todos nuestros trabajos están respaldados por garantía
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
