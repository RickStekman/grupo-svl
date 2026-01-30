"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";


// 1. Array con las imágenes de tu diseño original
const backgroundImages = [
  "/Image/pexels-heibbymarvel-5224742.webp",
  "/Image/pexels-pixabay-262353.webp",
  "/Image/banner.webp"
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  // 2. Efecto para cambiar la imagen cada 5 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 5000); 

    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* 3. Slider de Fondo con Transición Suave */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index} // La clave es vital para que Framer sepa que la imagen cambió
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }} // Duración del "fade" (1.5s es suave)
          className="absolute inset-0 z-0"
        >
          {/* Imagen de fondo */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImages[index]}')` }}
          />
          {/* Capa oscura (Overlay) para que el texto se lea bien */}
          <div className="absolute inset-0 bg-black/50"></div>
        </motion.div>
      </AnimatePresence>

      {/* 4. Contenido Principal (Texto estilo original) */}
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
        >
          Operador logístico integral
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-lg md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light"
        >
          Diseñamos tu logística, <strong className="font-bold">CONSTRUIMOS SOLUCIONES.</strong>
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link 
            href="#Contact" 
            className="relative backdrop-blur-sm px-8 py-4 group overflow-hidden rounded-lg border border-white/20 bg-white/5 transition-all duration-300 hover:border-yellow-500/50"
          >
            {/* Efecto de brillo de fondo al hacer hover */}
            <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-300"></div>
            
            <span className="relative z-10 text-white font-bold text-sm uppercase tracking-[0.2em] group-hover:text-brand transition-colors duration-300">
              Contáctanos
            </span>
          </Link>

        </motion.div>
      </div>

      {/* Indicador de Scroll (Opcional) */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}