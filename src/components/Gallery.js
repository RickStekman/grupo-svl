"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Lista de imágenes (Asegúrate de tener estas fotos en tu carpeta public/Image/Galeria)
const galleryImages = [
  "/Image/Gallery/IMG-1.webp", 
  "/Image/Gallery/IMG-2.webp",
  "/Image/Gallery/IMG-3.webp",
  "/Image/Gallery/IMG-8.webp",
  "/Image/Gallery/IMG-5.webp",
  "/Image/Gallery/IMG-6.webp",
  "/Image/Gallery/IMG-7.webp",
  "/Image/Gallery/foto09.webp",
];

export default function Gallery() {
  return (
    <section className="py-20 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
          Nuestras Operaciones <span className="text-brand">en Acción</span>
        </h2>
        <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
          Infraestructura y tecnología desplegada para garantizar el éxito de tu logística.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Fila 1: Mueve a la Izquierda */}
        <ParallaxRow images={galleryImages} direction="left" speed={150} />
        
        {/* Fila 2: Mueve a la Derecha */}
        <ParallaxRow images={galleryImages} direction="right" speed={150} />
      </div>
    </section>
  );
}

// Subcomponente para cada fila animada
function ParallaxRow({ images, direction, speed }) {
  return (
    <div className="relative flex w-full overflow-hidden mask-gradient-sides">
      <motion.div
        className="flex gap-6 min-w-max"
        initial={{ x: direction === "left" ? 0 : "-50%" }}
        animate={{ x: direction === "left" ? "-50%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Renderizamos la lista 4 veces para asegurar que cubra pantallas ultra anchas sin cortes */}
        {[...images, ...images, ...images, ...images].map((src, index) => (
          <div
            key={index}
            className="relative h-64 w-96 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <Image
              src={src}
              alt={`Galería SVL ${index}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            {/* Overlay amarillo al pasar el mouse */}
            <div className="absolute inset-0 bg-yellow-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}