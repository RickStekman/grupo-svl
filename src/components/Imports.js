"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Truck, Ship, Factory, Landmark, 
  Warehouse, RefreshCcw, ClipboardList, Gauge
} from "lucide-react";

const Imports = () => {
  // CONFIGURACIÓN DE LOS PASOS (Asegúrate de que las rutas coincidan con tu carpeta public/images)
  const pasosImport = [
    {
      id: "01",
      title: "Proveedor Internacional",
      icon: <Factory size={28} />,
      desc: "Gestión directa con el proveedor en origen para asegurar la correcta documentación y cumplimiento de INCOTERMS.",
      tags: ["Clasificación", "Origen", "INCOTERMS"],
      image: "/Image/Gallery/foto06.webp", 
      align: "left"
    },
    {
      id: "02",
      title: "Embarque en Origen",
      icon: <Ship size={28} />,
      desc: "Coordinación de la logística internacional, reserva de espacio (booking) y carga segura en la unidad de transporte.",
      tags: ["Booking", "BL / AWB", "Estiba"],
      image: "/Image/Gallery/foto06.webp", 
      align: "right"
    },
    {
      id: "03",
      title: "Arribo a Puerto Destino",
      icon: <Warehouse size={28} />,
      desc: "Recepción de la mercancía en zona primaria, trámites de desembarque y traslado a almacenes autorizados.",
      tags: ["Desembarque", "Almacenaje", "Handling"],
      image: "/Image/Gallery/foto06.webp", 
      align: "left"
    },
    {
      id: "04",
      title: "Gestión Aduanal",
      icon: <ClipboardList size={28} />,
      desc: "Presentación ante las autoridades, cálculo de impuestos y preparación exhaustiva de la DUA para evitar retrasos.",
      tags: ["SENIAT", "DUA", "Valoración"],
      image: "/Image/Gallery/foto06.webp", 
      align: "right"
    },
    {
      id: "05",
      title: "Control de Selectividad",
      icon: <Gauge size={28} />,
      desc: "Procesamiento de los canales de aduana. Nuestra precisión documental minimiza riesgos en el Canal Rojo.",
      tags: ["Semáforo", "Reconocimiento", "Fisico"],
      image: "/Image/Gallery/foto06.webp", 
      align: "left"
    },
    {
      id: "06",
      title: "Transporte Nacional",
      icon: <Truck size={28} />,
      desc: "Retiro de carga y traslado terrestre monitoreado hasta su bodega o punto de entrega final.",
      tags: ["Última Milla", "Tracking", "Entrega"],
      image: "/Image/Gallery/foto06.webp", 
      align: "right"
    },
    {
      id: "07",
      title: "Devolución de Equipo",
      icon: <RefreshCcw size={28} />,
      desc: "Inspección final del contenedor vacío y retorno al puerto para cierre del ciclo logístico sin cargos extras.",
      tags: ["Cierre", "EIR", "Devolución"],
      image: "/Image/Gallery/foto06.webp", 
      align: "left"
    }
  ];

  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-28 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-black uppercase tracking-[0.4em] text-xs mb-4 block">End-to-End Import</span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.9]">
              Ciclo de <span className="text-brand">Importación</span>
            </h2>
            <p className="text-slate-500 mt-6 text-lg max-w-xl mx-auto italic font-bold uppercase tracking-widest text-[10px]">
              Eficiencia y Seguridad en cada fase de su carga
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Línea central decorativa */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand/50 via-slate-800/50 to-transparent -translate-x-1/2" />

          <div className="space-y-16 lg:space-y-0">
            {pasosImport.map((paso, index) => {
              const esIzquierda = paso.align === "left";
              
              return (
                <div key={paso.id} className={`flex flex-col ${esIzquierda ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-10 lg:gap-16 lg:mb-28 last:mb-0`}>
                  
                  {/* TEXTO */}
                  <motion.div
                    initial={{ opacity: 0, x: esIzquierda ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[calc(50%-4rem)]"
                  >
                    <div className="group relative">
                      <div className={`p-8 md:p-12 rounded-[3rem] bg-slate-900/40 border border-slate-800 transition-all duration-500 overflow-hidden relative ${esIzquierda ? "lg:text-right" : "lg:text-left"}`}>
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[3rem]" />

                        <div className="relative z-10">
                          <span className="text-7xl font-black text-slate-800/30 group-hover:text-brand/10 transition-colors mb-4 block leading-none tracking-tighter">
                            {paso.id}
                          </span>
                          
                          <div className={`flex items-center gap-4 mb-5 ${esIzquierda ? "lg:justify-end" : "lg:justify-start"}`}>
                            {!esIzquierda && <div className="text-brand">{paso.icon}</div>}
                            <h3 className="text-2xl font-black text-white uppercase group-hover:text-brand transition-colors tracking-tight leading-none">
                              {paso.title}
                            </h3>
                            {esIzquierda && <div className="text-brand">{paso.icon}</div>}
                          </div>
                          
                          <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6">
                            {paso.desc}
                          </p>
                          
                          <div className={`flex flex-wrap gap-2 ${esIzquierda ? "lg:justify-end" : "lg:justify-start"}`}>
                            {paso.tags.map(tag => (
                              <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* NODO CENTRAL (Solo Desktop) */}
                  <div className="hidden lg:flex relative z-20 items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-900 flex items-center justify-center text-brand/30 shadow-[0_0_20px_rgba(234,179,8,0.05)]" />
                  </div>

                  {/* IMAGEN LOCAL */}
                  <motion.div
                    initial={{ opacity: 0, x: esIzquierda ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[calc(50%-4rem)]"
                  >
                    <div className="aspect-[4/3] lg:aspect-[16/10] rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl group relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
                      
                      <Image 
                        src={paso.image} 
                        alt={paso.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                        priority={index < 2} // Carga prioritaria para las primeras dos imágenes
                      />
                      
                      <div className="absolute bottom-6 left-6 z-20">
                          <p className="text-white/70 text-[10px] font-black uppercase tracking-[0.2em] bg-black/50 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
                            {paso.title}
                          </p>
                      </div>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

        {/* BANNER DE CIERRE */}
        {/* BANNER DE CIERRE ACTUALIZADO */}
        <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-32 max-w-5xl mx-auto p-[1px] rounded-[3rem] bg-gradient-to-r from-brand/50 via-blue-600/50 to-transparent"
        >
        <div className="bg-slate-950 rounded-[2.9rem] p-12 text-center relative overflow-hidden group">
            <div className="relative z-10">
            <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic mb-6 leading-tight">
                ¿Su mercancía está <span className="text-brand">en camino?</span>
            </h4>
            <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
                Asegure un proceso de nacionalización sin complicaciones. Nuestro equipo técnico está listo para asesorarle en cada paso.
            </p>

            {/* Envolvemos el botón con un enlace al ID #Contact */}
            <a href="#Contact" className="inline-block">
                <button className="px-12 py-5 bg-brand text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:bg-white hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-brand/20">
                Consultar ahora
                </button>
            </a>
            </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Imports;