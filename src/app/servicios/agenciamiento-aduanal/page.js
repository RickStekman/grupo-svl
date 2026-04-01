"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ClipboardCheck, FileText, Clock, ShieldCheck, 
  ArrowLeft, ArrowRight, Plane, Truck, Ship, 
  Globe, ChevronDown,Zap, MapPin, Monitor
} from "lucide-react";

// --- COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function AgenciamientoAduanal() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Data extraída del Brochure Técnico
  const beneficios = [
    {
      icon: <Zap className="size-8 text-yellow-500" />,
      title: "Desaduanamiento Ágil",
      desc: "Nacionalización en tiempos récord según la modalidad.",
      details: "Garantizamos el desaduanamiento en un promedio de 5 días para embarques marítimos y 3 días para aéreos. En casos de 'Descargas Directas', logramos la nacionalización en pocas horas, siempre que la documentación esté completa."
    },
    {
      icon: <FileText className="size-8 text-yellow-500" />,
      title: "Gestión Documental y Trámites",
      desc: "Preparación y verificación de permisos y manifiestos.",
      details: "Nos encargamos de la recepción y gestión eficiente de documentación en puerto, elaboración precisa de manifiestos de vuelo y preparación de permisos para pasos fronterizos, asegurando el cumplimiento legal estricto."
    },
    {
      icon: <Monitor className="size-8 text-yellow-500" />,
      title: "Seguimiento en Tiempo Real",
      desc: "Control total desde la descarga hasta su almacén.",
      details: "Implementamos una transmisión constante de información sobre el estatus del embarque y el movimiento del documento en las aduanas, informando el tiempo exacto de despacho y entrega final."
    },
    {
      icon: <ShieldCheck className="size-8 text-yellow-500" />,
      title: "Supervisión Operativa",
      desc: "Personal especializado en inspecciones y manejo de carga.",
      details: "Contamos con supervisores operativos para tramitar operaciones ante las aduanas del país, coordinando inspecciones rápidas con las autoridades para garantizar la fluidez del proceso de liberación."
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
        
        {/* HERO */}
        <section className="container mx-auto px-6 mb-16 relative">
          <Link href="/#servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver
          </Link>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <ShieldCheck className="size-4" /> Servicios Aduaneros Especializados
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Agenciamiento <span className="text-yellow-500">Aduanal</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Soluciones integrales de soporte logístico con más de 20 años de experiencia, garantizando procesos eficientes en aduanas aéreas, marítimas y terrestres.
            </p>
          </motion.div>
          <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <div className="mt-12 relative rounded-3xl overflow-hidden border border-slate-800 aspect-video lg:aspect-square">
                <img src="/Image/Gallery/foto06.webp" alt="Aduanas" className="w-full h-full object-cover" />
              </div>
            </motion.div>
        </section>

        {/* MODALIDADES Y TIEMPOS (NUEVA SECCIÓN DEL PDF) */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 group-hover:scale-110 transition-transform"><Ship /></div>
                <h3 className="text-white font-bold uppercase italic">Aduana Marítima</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Gestión en Puerto</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Inspecciones Rápidas</li>
                <li className="flex items-center gap-2 font-bold text-yellow-500/80 italic">Plazo: ~5 Días</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 group-hover:scale-110 transition-transform"><Plane /></div>
                <h3 className="text-white font-bold uppercase italic">Aduana Aérea</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Carga Express (Prioridad)</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Bodegas Zona Primaria</li>
                <li className="flex items-center gap-2 font-bold text-yellow-500/80 italic">Plazo: ~3 Días</li>
              </ul>
            </div>

            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl hover:border-yellow-500/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-yellow-500/10 rounded-xl text-yellow-500 group-hover:scale-110 transition-transform"><MapPin /></div>
                <h3 className="text-white font-bold uppercase italic">Pasos Fronterizos</h3>
              </div>
              <ul className="space-y-3 text-slate-400 text-sm">
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Gestión en Fronteras</li>
                <li className="flex items-center gap-2"><div className="size-1.5 bg-yellow-500 rounded-full" /> Verificación de Permisos</li>
                <li className="flex items-center gap-2 font-bold text-yellow-500/80 italic">Seguimiento Real-Time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ACORDEÓN DE PROCESOS */}
        <section className="container mx-auto px-6 mb-24">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black text-white uppercase mb-8 italic underline decoration-yellow-500 decoration-4 underline-offset-8">Propuesta de Valor</h2>
            <div className="space-y-4">
              {beneficios.map((item, idx) => {
                const isExpanded = expandedIndex === idx;
                return (
                  <div key={idx} className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isExpanded ? 'bg-slate-900 border-yellow-500/50 shadow-lg shadow-yellow-500/5' : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'}`}>
                    <button onClick={() => toggleBenefit(idx)} className="w-full flex items-center gap-5 p-6 text-left focus:outline-none">
                      <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? 'scale-110 text-yellow-500' : 'text-slate-400'}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-white uppercase">{item.title}</h4>
                        <p className="text-slate-500 text-sm">{item.desc}</p>
                      </div>
                      <div className={`text-yellow-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={24} />
                      </div>
                    </button>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }}>
                          <div className="px-6 pb-6 pt-2 border-t border-slate-800/50 md:ml-[68px]">
                            <p className="text-slate-400 text-sm leading-relaxed">{item.details}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
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

        {/* CONTACTO */}
        <div id="Contact" className="py-24 bg-white rounded-t-[3rem]"> 
          <div className="container mx-auto px-6">
            <div className="text-center">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic">Inicie su <span className="text-yellow-600">Trámite</span></h2>
               <p className="text-slate-500 mt-4 max-w-xl mx-auto">Nuestro equipo de profesionales técnicos está preparado para dar la más alta asistencia personalizada.</p>
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