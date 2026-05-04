"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Ship, Globe, ArrowRight, Camera, CheckCircle2, 
  MapPin, Clock, ShieldCheck, ChevronDown, Package, Truck, Activity, 
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

// --- COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function ProcesosPage() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const procesosRealizados = [
    {
      id: "linea-blanca",
      type: "Importación",
      title: "Repuestos Línea Blanca, Gris y Marrón",
      location: "Centro Logístico Nacional",
      desc: "Nacionalización y despacho estratégico de repuestos para los principales fabricantes y distribuidores del país.",
      longDesc: "Gestionamos el ingreso de componentes críticos para la industria de electrodomésticos (línea blanca), electrónica (línea marrón) y equipos de oficina (línea gris). Optimizamos la cadena desde el puerto hasta el fabricante, asegurando que el flujo de producción no se detenga.",
      icon: <Package className="size-10" />,
      color: "from-blue-600/20 to-transparent",
      mainImage: "/Image/ImpMaritimaGua/foto(8).webp",
      features: ["Logística Just-in-Time.", "Atención a fabricantes y productores.", "Despacho a nivel nacional."],
      details: "Se coordinó la clasificación arancelaria de piezas multimarca y la logística de última milla para un distribuidor líder, reduciendo tiempos de entrega en un 20%.",
      gallery: [
        "/Image/ImpMaritimaGua/Foto(10).webp", "/Image/ImpMaritimaGua/Foto(2).webp",
        "/Image/ImpMaritimaGua/Foto(3).webp", "/Image/ImpMaritimaGua/Foto(4).webp",
        "/Image/ImpMaritimaGua/Foto(5).webp", "/Image/ImpMaritimaGua/Foto(9).webp"
      ]
    },
    {
      id: "pharma",
      type: "Importación",
      title: "Logística para Industria Farmacéutica",
      location: "Aduana Marítima de La Guaira",
      desc: "Trámite de regímenes legales especiales y reconocimiento de productos farmacéuticos.",
      longDesc: "Operación de alta complejidad que incluye la gestión ante entes reguladores para el ingreso de medicamentos y materia prima para laboratorios. Cumplimos con los protocolos de reconocimiento en la aduana marítima de La Guaira, priorizando la integridad de la carga.",
      icon: <Activity className="size-10" />,
      color: "from-green-600/20 to-transparent",
      mainImage: "/Image/ImpTraminteFarm/Foto(1).webp",
      features: ["Gestión de Régimen Legal.", "Control sanitario estricto.", "Reconocimiento físico priorizado."],
      details: "Logramos la nacionalización de insumos médicos críticos cumpliendo con toda la permisología sanitaria exigida por la ley venezolana en tiempo récord.",
      gallery: [
        "/Image/ImpTraminteFarm/Foto(5).webp", "/Image/ImpTraminteFarm/Foto(9).webp",
        "/Image/ImpTraminteFarm/Foto(3).webp", "/Image/ImpTraminteFarm/Foto(6).webp",
        "/Image/ImpTraminteFarm/Foto(10).webp", "/Image/ImpTraminteFarm/Foto(7).webp"
      ]
    },
    {
      id: "automotriz",
      type: "Importación",
      title: "Sector Automotriz y Autopartes",
      location: "Aduana de Puerto Cabello",
      desc: "Nacionalización marítima y transporte seguro para el sector automotriz nacional.",
      longDesc: "Desarrollamos la logística integral para distribuidores de repuestos y vehículos. Desde la recepción en Puerto Cabello hasta el despacho final, garantizamos seguridad y agilidad en cada paso del proceso aduanal.",
      icon: <Truck className="size-10" />,
      color: "from-yellow-600/20 to-transparent",
      mainImage: "/Image/OpMaritimaPC/Foto(1).webp",
      features: ["Nacionalización en Puerto Cabello.", "Transporte de carga pesada.", "Seguimiento satelital de despacho."],
      details: "Coordinación de operativos de carga suelta y contenedores para asegurar el abastecimiento de repuestos originales a redes de concesionarios.",
      gallery: [
        "/Image/OpMaritimaPC/Foto(2).webp", "/Image/OpMaritimaPC/Foto(5).webp",
        "/Image/OpMaritimaPC/Foto(3).webp", "/Image/OpMaritimaPC/Foto(6).webp",
        "/Image/OpMaritimaPC/Foto(4).webp", "/Image/OpMaritimaPC/Foto(1).webp"
      ]
    },
    {
      id: "quimico",
      type: "Exportación",
      title: "Exportación de Materia Prima Química",
      location: "Terminal de Exportación Marítima",
      desc: "Gestión de flete internacional y protocolos de seguridad antidrogas para productos químicos.",
      longDesc: "Llevamos la producción nacional de materia prima química a mercados globales. Esta operación incluye la coordinación de inspecciones especiales de unidades antidrogas y la gestión de fletes marítimos competitivos para el productor nacional.",
      icon: <Globe className="size-10" />,
      color: "from-purple-600/20 to-transparent",
      mainImage: "/Image/ExpMarinaQuim/Foto(2).webp",
      features: ["Reconocimiento antidroga.", "Flete marítimo de exportación.", "Soporte a productores locales."],
      details: "Aseguramos el flujo de exportación de productos químicos cumpliendo con los estándares internacionales de seguridad y las regulaciones locales de salida.",
      gallery: [
        "/Image/ExpMarinaQuim/Foto(3).webp", "/Image/ExpMarinaQuim/Foto(13).webp",
        "/Image/ExpMarinaQuim/Foto(1).webp", "/Image/ExpMarinaQuim/Foto(20).webp",
        "/Image/ExpMarinaQuim/Foto(7).webp", "/Image/ExpMarinaQuim/Foto(21).webp"
      ]
    }
  ];

  const galleryGlobal = [
    { src: "/Image/OpMaritimaPC/Foto(1).webp", title: "Carga en Puerto", location: "Puerto Cabello" },
    { src: "/Image/ImpMaritimaGua/Foto(2).webp", title: "Inspección de Contenedor", location: "La Guaira" },
    { src: "/Image/ExpMarinaQuim/Foto(3).webp", title: "Nacionalización Aérea", location: "Maiquetía" },
    { src: "/Image/ImpMaritimaGua/Foto(4).webp", title: "Logística Terrestre", location: "Valencia" },
    { src: "/Image/ImpMaritimaGua/Foto(5).webp", title: "Desaduanamiento", location: "Maracaibo" },
  ];

  return (
    <>
      <Navbar />
      <main className="bg-slate-950 min-h-screen text-white overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/Image/banner01.webp')] bg-cover bg-center opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
          
          <div className="container mx-auto px-6 relative z-10 text-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-brand font-black uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Registro Operativo
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-7xl font-black uppercase mb-6 italic"
            >
              Nuestros <span className="text-brand-dark">Casos de Éxito</span>
            </motion.h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
              Experiencia real en aduanas aéreas, marítimas y terrestres para los sectores más exigentes de Venezuela.
            </p>
          </div>
        </section>

        {/* LISTADO DE OPERACIONES */}
        <section className="container mx-auto px-6 space-y-16 mb-24">
          {procesosRealizados.map((proceso, index) => {
            const isExpanded = expandedId === proceso.id;
            return (
              <motion.div
                key={proceso.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col bg-slate-900/30 border border-slate-800 rounded-[2.5rem] overflow-hidden group hover:border-brand/20 transition-all duration-500"
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* IMAGEN DE LA CARD - AHORA CUADRADA (ASPECT SQUARE) */}
                  <div className="lg:w-2/5 relative aspect-square overflow-hidden">
                    <img 
                      src={proceso.mainImage} 
                      alt={proceso.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent md:hidden" />
                    <div className="absolute top-6 left-6 p-3 bg-brand/90 text-black rounded-xl backdrop-blur-sm">
                      {proceso.icon}
                    </div>
                  </div>

                  {/* INFO DE LA CARD */}
                  <div className="lg:w-3/5 p-8 lg:p-16 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-brand mb-4">
                      <MapPin size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">{proceso.location}</span>
                    </div>
                    <h2 className="text-2xl md:text-4xl font-black uppercase italic mb-4 leading-none">
                      {proceso.title}
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed italic">
                      "{proceso.desc}"
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                      {proceso.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-500 text-sm">
                          <CheckCircle2 className="size-4 text-brand shrink-0" /> {f}
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => toggleDetails(proceso.id)}
                      className="inline-flex items-center gap-4 bg-white/5 hover:bg-brand hover:text-black px-8 py-4 rounded-2xl font-black transition-all text-xs uppercase tracking-widest w-fit"
                    >
                      {isExpanded ? "Cerrar Detalles" : "Ver galería y desglose"} 
                      <ChevronDown className={`size-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* DESGLOSE Y GALERÍA */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-slate-800 bg-slate-950/40"
                    >
                      <div className="p-8 lg:p-16">
                        <div className="grid lg:grid-cols-5 gap-12 mb-16">
                          <div className="lg:col-span-2">
                             <h4 className="text-brand font-black uppercase tracking-widest text-[10px] mb-6">Bitácora Técnica</h4>
                             <p className="text-slate-300 leading-relaxed border-l-2 border-brand pl-6 mb-8 text-sm md:text-base">
                               {proceso.longDesc} <br /><br />
                               {proceso.details}
                             </p>
                             <div className="flex flex-wrap gap-4">
                               <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-500 text-[10px] font-bold">
                                 <Clock size={14} className="text-brand" /> TRÁMITE COMPLETADO
                               </div>
                               <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-lg text-slate-500 text-[10px] font-bold">
                                 <ShieldCheck size={14} className="text-brand" /> RECONOCIMIENTO EXITOSO
                               </div>
                             </div>
                          </div>
                          
                          <div className="lg:col-span-3">
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                              {proceso.gallery.map((img, idx) => (
                                <motion.div 
                                  initial={{ opacity: 0, scale: 0.9 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: idx * 0.05 }}
                                  key={idx} 
                                  className="aspect-square rounded-xl overflow-hidden border border-slate-800 group/img relative"
                                >
                                  <img src={img} alt="Operación" className="w-full h-full object-cover transition-transform group-hover/img:scale-110" />
                                  <div className="absolute inset-0 bg-brand/20 opacity-0 group-hover/img:opacity-100 transition-opacity" />
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </section>

        {/* SECCIÓN: GUÍA DE PROCESOS (METODOLOGÍA) */}
        <section className="container mx-auto px-6 py-20">
          <div className="bg-slate-900/50 border border-slate-800 rounded-[3rem] p-8 md:p-16 text-center shadow-inner">
            <span className="text-brand font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Metodología de Trabajo</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-10">Conozca nuestro <span className="text-brand">Flujo Operativo</span></h2>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Link 
                href="/procesos/Imports" 
                className="group flex items-center justify-between bg-slate-800/40 hover:bg-brand p-6 md:p-8 rounded-[2rem] transition-all duration-500 border border-slate-700 hover:border-brand"
              >
                <div className="text-left">
                  <span className="text-slate-500 group-hover:text-black/60 font-bold text-[10px] uppercase tracking-widest block mb-2">Paso a paso</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase italic group-hover:text-black transition-colors">Proceso de Importación</h3>
                </div>
                <div className="bg-brand group-hover:bg-black p-4 rounded-2xl transition-colors">
                  <ArrowUpRight className="text-black group-hover:text-brand size-6" />
                </div>
              </Link>

              <Link 
                href="/procesos/Exports" 
                className="group flex items-center justify-between bg-slate-800/40 hover:bg-brand p-6 md:p-8 rounded-[2rem] transition-all duration-500 border border-slate-700 hover:border-brand"
              >
                <div className="text-left">
                  <span className="text-slate-500 group-hover:text-black/60 font-bold text-[10px] uppercase tracking-widest block mb-2">Paso a paso</span>
                  <h3 className="text-xl md:text-2xl font-black uppercase italic group-hover:text-black transition-colors">Proceso de Exportación</h3>
                </div>
                <div className="bg-brand group-hover:bg-black p-4 rounded-2xl transition-colors">
                  <ArrowUpRight className="text-black group-hover:text-brand size-6" />
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* GALERÍA GLOBAL INFINITA */}
        <section className="py-24 bg-slate-900/20 border-y border-slate-900">
          <div className="container mx-auto px-6 mb-12">
            <div className="flex items-center gap-3 text-brand mb-2">
              <Camera size={20} />
              <span className="font-black uppercase tracking-widest text-[10px]">Archivo Fotográfico</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic">Galería <span className="text-brand">Global</span></h2>
          </div>

          <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 hidden md:block" />
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 hidden md:block" />
             <motion.div 
               className="flex gap-6 w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 80, repeat: Infinity }}
               whileHover={{ animationPlayState: "paused" }}
             >
               {[...galleryGlobal, ...galleryGlobal].map((img, i) => (
                 <div key={i} className="w-[280px] md:w-[400px] aspect-square lg:h-[350px] rounded-[2rem] overflow-hidden relative group">
                   <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                   <div className="absolute bottom-0 left-0 p-6">
                     <span className="text-brand font-black uppercase text-[10px] tracking-widest block mb-1">{img.location}</span>
                     <h4 className="text-white font-bold text-lg uppercase italic leading-tight">{img.title}</h4>
                   </div>
                 </div>
               ))}
             </motion.div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="container mx-auto px-6 py-32 text-center">
          <div className="bg-gradient-to-br from-brand to-yellow-500 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight">
                ¿Listo para iniciar su <br /> <span className="italic">Próxima Operación?</span>
              </h2>
              <p className="text-black/70 text-sm md:text-lg mb-10 max-w-xl mx-auto font-medium">
                Nuestro equipo técnico especializado en el sector farmacéutico, automotriz e industrial está listo para asistirle.[cite: 5]
              </p>
              <Link href="#Contact" className="inline-block bg-black text-white px-12 py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-2xl">
                Agendar Consultoría Técnica
              </Link>
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <div id="Contact" className="py-24 bg-white rounded-t-[3rem] md:rounded-t-[4rem]"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-[10px]">Contacto Directo</span>
               <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-2">Inicie su <span className="text-yellow-600">Trámite</span></h2>
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