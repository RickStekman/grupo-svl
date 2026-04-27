"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Ship, Globe } from "lucide-react";

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

  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Aprende el paso a paso
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white uppercase italic leading-none"
          >
            Conoce el proceso de <span className="text-brand">Importación y Exportación</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className={`h-full p-8 md:p-12 rounded-[3rem] bg-slate-900/40 border border-slate-800 hover:border-brand/50 transition-all duration-500 relative overflow-hidden`}>
                {/* Gradiente de fondo al hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 h-full flex flex-col">
                  <div className="text-brand mb-6 transform group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-2">
                    {item.label}
                  </span>
                  
                  <h3 className="text-3xl font-black text-white uppercase italic mb-4">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                    {item.desc}
                  </p>
                  
                  <div className="mt-auto">
                    <Link href={item.link}>
                      <button className="flex items-center gap-3 text-brand font-black uppercase text-xs tracking-widest group/btn">
                        Ver proceso completo 
                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-2 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Processes;