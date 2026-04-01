"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ClipboardCheck, FileText, Clock, ShieldCheck, 
  ArrowLeft, ArrowRight, Plane, Truck, Ship, 
  Globe, ChevronDown 
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function AgenciamientoAduanal() {
  // Estado para el acordeón de beneficios
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Data detallada para los beneficios (Acordeón)
  const beneficios = [
    {
      icon: <FileText className="size-8 text-yellow-500" />,
      title: "Gestión Documental",
      desc: "Tramitación completa de permisos y certificados.",
      details: "Revisamos exhaustivamente facturas comerciales, listas de empaque y certificados de origen. Nos aseguramos de que toda la documentación cumpla con la normativa legal antes de llegar a la aduana para evitar retrasos."
    },
    {
      icon: <Clock className="size-8 text-yellow-500" />,
      title: "Tiempos Optimizados",
      desc: "Procesos ágiles para evitar retrasos en puerto.",
      details: "Mediante un sistema de pre-chequeo aduanal, anticipamos posibles obstáculos. Esto nos permite reducir los tiempos de nacionalización significativamente, ahorrándote costos de almacenaje y demoras de contenedores."
    },
    {
      icon: <ShieldCheck className="size-8 text-yellow-500" />,
      title: "Cumplimiento Legal",
      desc: "Garantizamos el estricto cumplimiento de normativas.",
      details: "Mantenemos una actualización constante sobre la Ley Orgánica de Aduanas. Realizamos clasificaciones arancelarias precisas para garantizar que tu operación esté protegida contra multas o sanciones administrativas."
    }
  ];

  // Lista de los otros 5 servicios para la sección inferior
  const otrosServicios = [
    { title: "Flete Internacional", icon: <Plane size={24} />, desc: "Transporte global aéreo y marítimo.", href: "/servicios/flete-internacional" },
    { title: "Transporte Terrestre", icon: <Truck size={24} />, desc: "Distribución nacional eficiente.", href: "/servicios/transporte-terrestre" },
    { title: "Almacén Logístico", icon: <ShieldCheck size={24} />, desc: "Resguardo y control de inventario.", href: "/servicios/almacen-logistico" },
    { title: "Coordinación Logística", icon: <Ship size={24} />, desc: "Gestión integral de suministros.", href: "/servicios/coordinacion-logistica" },
    { title: "Asesoría Logística", icon: <Globe size={24} />, desc: "Consultoría experta en comercio.", href: "/servicios/asesoria-tecnica" },
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-950 min-h-screen pt-32 overflow-hidden">
        
        {/* HERO DEL SERVICIO */}
        <section className="container mx-auto px-6 mb-16 relative">
          <Link href="/#servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver a Servicios
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <ClipboardCheck className="size-4" /> Servicio Especializado
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Agenciamiento <span className="text-yellow-500">Aduanal</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Ofrecemos desaduanamiento experto para importaciones y exportaciones, coordinando cada detalle para cumplir normativas en tiempo récord.
            </p>
          </motion.div>
        </section>

        {/* CONTENIDO TÉCNICO + ACORDEÓN */}
        <section className="container mx-auto px-6 mb-24">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Imagen Izquierda */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-3xl overflow-hidden border border-slate-800 aspect-video lg:aspect-square">
                <img src="/Image/Gallery/foto06.webp" alt="Aduanas" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Acordeón Derecha */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase mb-8">¿Qué incluye este <span className="text-yellow-500">servicio?</span></h3>
              
              <div className="space-y-4">
                {beneficios.map((item, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div 
                      key={idx} 
                      className={`group overflow-hidden rounded-2xl border transition-all duration-300 ${
                        isExpanded ? 'bg-slate-900 border-yellow-500/50' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <button
                        onClick={() => toggleBenefit(idx)}
                        className="w-full flex items-center gap-5 p-6 text-left focus:outline-none"
                      >
                        <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-white uppercase tracking-tight">{item.title}</h4>
                          <p className="text-slate-500 text-sm">{item.desc}</p>
                        </div>
                        <div className={`text-yellow-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
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
                              <p className="text-slate-400 text-sm leading-relaxed text-justify italic">
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
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                ¿Listo para nacionalizar tu carga?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy mismo y recibe asesoría gratuita sobre los requisitos y aranceles para tu tipo de mercancía.
              </p>
              {/* href="#Contact" para bajar a la sección de abajo en esta misma página */}
              <Link href="#Contact" className="inline-flex items-center gap-3 px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase text-sm tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20">
                Cotizar Servicio <ArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
        </section>

        {/* EXPLORA OTROS SERVICIOS (Grid Dinámico de 5) */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-white font-black uppercase tracking-tighter text-2xl mb-12">Explora otros <span className="text-yellow-500">servicios</span></h3>
            
            <div className="flex flex-wrap justify-center gap-6">
              {otrosServicios.map((s, i) => (
                <Link 
                  key={i} 
                  href={s.href} 
                  className="group p-8 bg-slate-950 border border-slate-800 rounded-2xl hover:border-yellow-500/50 transition-all hover:-translate-y-1 w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(20%-1.5rem)] min-w-[250px]"
                >
                  <div className="text-yellow-500 mb-6 bg-yellow-500/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold uppercase mb-2 text-sm">{s.title}</h4>
                  <p className="text-slate-500 text-xs mb-4">{s.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500/50 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-yellow-500 transition-colors">
                    Saber más <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DE CONTACTO */}
        <div id="Contact" className="bg-white"> 
          <div className="container mx-auto px-6">
            <Contact />
          </div>
        </div>

      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}