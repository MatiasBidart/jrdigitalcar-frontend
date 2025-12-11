"use client";
import Image from "next/image";
import { motion, easeOut } from "motion/react";

export default function ParallaxSection() {
  // Variants para animación
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } },
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{ height: "50vh", minHeight: "400px" }}
    >
      {/* Fixed Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://i.postimg.cc/4yFzjhzv/IMG-4942.jpg)',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="text-center max-w-3xl"
          variants={containerVariants}
        >
          {/* Icon */}
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            variants={itemVariants}
          >
            <Image src="/grua.png" alt="icono-grua" width={200} height={200} />
          </motion.div>

          {/* Title */}
          <motion.h2
            className="text-white mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold"
            variants={itemVariants}
          >
            Contamos con Servicio de Grúa Propio
          </motion.h2>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl mx-auto"
            variants={itemVariants}
          >
            ¿Se te detuvo un auto? Nosotros te lo retiramos de la vía pública o de tu depósito con nuestro servicio de grúa. Para que no tengas que preocuparte por nada más que tu eficiencia.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

