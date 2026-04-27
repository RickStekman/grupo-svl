"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Plane, Ship, Truck, Globe, Globe2, 
  ArrowLeft, ArrowRight, ChevronDown, 
  Anchor, Box, ShieldCheck, ClipboardCheck
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function FleteInternacional() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Data técnica detallada para Flete Internacional
  const procesosTecnicos = [
    {
      icon: <Ship className="size-8 text-brand" />,
      title: "Importaciones (FCL / LCL)",
      desc: "Carga consolidada y contenedores completos desde los principales hubs mundiales.",
      details: "Gestionamos la logística desde origen (China, USA, Europa, Panamá) hacia los principales puertos venezolanos. Ofrecemos contenedores completos (FCL) y carga consolidada (LCL) para optimizar costos en envíos de menor volumen. Supervisamos el Bill of Lading (B/L) y la liberación de guías para un desaduanamiento fluido."
    },
    {
      icon: <Plane className="size-8 text-brand" />,
      title: "Exportaciones No Tradicionales",
      desc: "Posicionamiento de carga venezolana en mercados globales.",
      details: "Apoyamos al exportador venezolano en el cumplimiento de la normativa de Resguardo Nacional y el SENIAT. Coordinamos el booking con las navieras, el posicionamiento del equipo en planta, el llenado del contenedor y la inspección de autoridades hasta la puesta a bordo (FOB/CIF)."
    },
    {
      icon: <Anchor className="size-8 text-brand" />,
      title: "Logística Multimodal y Tránsito",
      desc: "Combinación estratégica de rutas aéreas, marítimas y terrestres.",
      details: "Diseñamos rutas que combinan el transporte marítimo para economía de escala y el transporte aéreo para urgencias. Incluimos el seguimiento en tiempo real de la Air Waybill (AWB) y la coordinación de fletes terrestres internacionales para mercancía que cruza fronteras terrestres colindantes."
    }
  ];

  // Lista de otros servicios (Excluimos Flete Internacional e incluimos Agenciamiento)
  const otrosServicios = [
    { title: "Agenciamiento Aduanal", icon: <ClipboardCheck size={24} />, desc: "Expertos en nacionalización de carga.", href: "/servicios/agenciamiento-aduanal" },
    { title: "Transporte Terrestre", icon: <Truck size={24} />, desc: "Distribución nacional eficiente.", href: "/servicios/transporte-terrestre" },
    { title: "Almacén Logístico", icon: <Box size={24} />, desc: "Resguardo y control de inventario.", href: "/servicios/almacen-logistico" },
    { title: "Coordinación Logística", icon: <Globe2 size={24} />, desc: "Gestión integral de suministros.", href: "/servicios/coordinacion-logistica" },
    { title: "Asesoría Logística", icon: <Globe size={24} />, desc: "Consultoría experta en comercio.", href: "/servicios/asesoria-tecnica" },
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-950 min-h-screen pt-32 overflow-hidden">
        
        {/* HERO */}
        <section className="container mx-auto px-6 mb-16 relative">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver a Servicios
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-yellow-500/20 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Globe2 className="size-4" /> Logística Global
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Flete <span className="text-brand-dark">Internacional</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Conectamos a Venezuela con el mundo a través de alianzas con las principales navieras y aerolíneas, garantizando el movimiento eficiente de su carga bajo cualquier Incoterm.
            </p>
          </motion.div>
        </section>

        {/* SECCIÓN TÉCNICA + ACORDEÓN */}
        <section className="container mx-auto px-6 mb-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Imagen Izquierda */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 aspect-video lg:aspect-square group">
                <img src="/Image/banner.webp" alt="Flete Internacional" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
            </motion.div>

            {/* Acordeón Derecha */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase mb-8">
                Capacidades <span className="text-brand">Operativas</span>
              </h3>
              
              <div className="space-y-4">
                {procesosTecnicos.map((item, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isExpanded ? 'bg-slate-900 border-brand/50' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <button
                        onClick={() => toggleBenefit(idx)}
                        className="w-full flex items-center gap-5 p-6 text-left focus:outline-none"
                      >
                        <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? 'scale-110 text-brand' : 'text-slate-400'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                        <div className={`text-brand transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <ChevronDown size={24} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-2 border-t border-slate-800/50 md:ml-[68px]">
                              <p className="text-slate-400 text-sm leading-relaxed text-justify">
                                {item.details}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA REFINADO */}
        <section className="container mx-auto px-6 mb-32">
          <div className="bg-gradient-to-br from-brand to-yellow-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight">
                ¿Necesita mover carga internacional?
              </h2>
              <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium text-lg">
                Ofrecemos tarifas competitivas y asesoría en la selección de la mejor ruta y modalidad de transporte para su mercancía.
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Solicitar Cotización <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>


        {/* EXPLORA OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-white font-black uppercase tracking-tighter text-2xl mb-12">Nuestras <span className="text-brand-dark">Soluciones</span></h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {otrosServicios.map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  className="group p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-brnad/50 transition-all hover:-translate-y-1 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] min-w-[250px]"
                >
                  <div className="text-brand mb-6 bg-brand/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold uppercase mb-2 text-sm">{s.title}</h4>
                  <p className="text-slate-500 text-xs mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-brand/50 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-brand transition-colors">
                    Saber más <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <div id="Contact" className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-xs">Atención Técnica</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-4">Inicie su <span className="text-yellow-600">Trámite</span></h2>
            </div>
            <Contact />
          </div>
        </div>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}