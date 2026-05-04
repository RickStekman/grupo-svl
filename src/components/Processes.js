"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Ship, Globe, Camera, ArrowUpRight } from "lucide-react";

const Processes = () => {
  const categories = [
    {
      title: "Proceso de Importación",
      desc: "Gestión integral de ingresos al país. Desde la negociación con proveedores internacionales hasta la entrega en su almacén final.",
      link: "/procesos/Imports",
      icon: <Ship size={40} />,
      color: "from-brand/20",
      label: "Entrada de Carga"
    },
    {
      title: "Proceso de Exportación",
      desc: "Impulsamos su producción nacional hacia mercados globales. Cumplimiento normativo y logística de salida de clase mundial.",
      link: "/procesos/Exports",
      icon: <Globe size={40} />,
      color: "from-blue-600/20",
      label: "Salida de Carga"
    }
  ];

  const gallery = [
    { src: "/Image/OpMaritimaPC/foto(1).webp", title: "Carga en Puerto", location: "Puerto Cabello" },
    { src: "/Image/ImpMaritimaGua/foto(2).webp", title: "Inspección de Contenedor", location: "La Guaira" },
    { src: "/Image/ExpMarinaQuim/foto(3).webp", title: "Nacionalización Aérea", location: "Maiquetía" },
    { src: "/Image/ImpMaritimaGua/foto(4).webp", title: "Logística Terrestre", location: "Guaira" },
    { src: "/Image/ImpMaritimaGua/foto(5).webp", title: "Desaduanamiento", location: "Maracaibo" },
  ];

  // Duplicamos el array para el efecto de scroll infinito
  const duplicatedGallery = [...gallery, ...gallery];

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4 block"
          >
            Aprende el paso a paso
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none"
          >
            Nuestros <span className="text-brand">Procesos</span>
          </motion.h2>
        </div>

        {/* CATEGORÍAS PRINCIPALES */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-brand/50 transition-all duration-500 relative overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-brand mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">{item.label}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-4">{item.title}</h3>
                  <p className="text-slate-400 leading-relaxed mb-8 text-base md:text-lg">{item.desc}</p>
                  <div className="mt-auto">
                    <Link href={item.link} className="flex items-center gap-3 text-brand font-black uppercase text-[10px] md:text-xs tracking-widest group/btn">
                      Ver proceso completo 
                      <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SECCIÓN DE GALERÍA CON AUTO-SCROLL */}
        <div className="mt-20">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-brand mb-2">
                <Camera size={20} />
                <span className="font-black uppercase tracking-widest text-xs">Operaciones en Campo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white uppercase">Galería de <span className="text-brand">Fotos Reales</span></h3>
            </div>
            
            <Link href="/procesos">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-brand text-black font-black uppercase text-xs tracking-widest rounded-2xl flex items-center gap-3 shadow-xl shadow-brand/10"
              >
                Ver registro histórico <ArrowUpRight size={18} />
              </motion.button>
            </Link>
          </div>

          {/* CONTENEDOR DEL CARRUSEL INFINITO */}
          <div className="relative w-full overflow-hidden py-10">
            {/* Gradientes laterales para suavizar la entrada/salida en PC */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 hidden md:block" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 hidden md:block" />

            <motion.div 
              className="flex gap-6 w-max"
              animate={{
                x: ["0%", "-50%"]
              }}
              transition={{
                ease: "linear",
                duration: 80, // Ajusta la velocidad aquí (más alto = más lento)
                repeat: Infinity
              }}
              // Pausa la animación al pasar el mouse
              whileHover={{ animationPlayState: "paused" }}
            >
              {duplicatedGallery.map((img, i) => (
                <div
                  key={i}
                  className="w-[300px] md:w-[450px] h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden relative group"
                >
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <span className="text-brand font-black uppercase text-[10px] tracking-widest block mb-1">
                      {img.location}
                    </span>
                    <h4 className="text-white font-bold text-xl uppercase italic leading-tight">
                      {img.title}
                    </h4>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Processes;