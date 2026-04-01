"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Truck, MapPin, ShieldCheck, Clock, 
  ArrowLeft, ArrowRight, ChevronDown, 
  Navigation, Weight, ClipboardCheck, Plane, Ship
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function TransporteTerrestre() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Data técnica para Transporte Terrestre en Venezuela
  const procesosTecnicos = [
    {
      icon: <MapPin className="size-8 text-yellow-500" />,
      title: "Rutas Puerto - Planta",
      desc: "Conexión directa desde las principales aduanas hacia su almacén.",
      details: "Coordinamos el retiro de contenedores y carga suelta desde Puerto Cabello, La Guaira y Guanta. Gestionamos el posicionamiento de equipos (chutos y bateas) de manera sincronizada con la liberación aduanal para evitar costos de almacenaje extraordinarios y optimizar la cadena de suministro nacional."
    },
    {
      icon: <ShieldCheck className="size-8 text-yellow-500" />,
      title: "Seguridad y Custodia",
      desc: "Monitoreo constante y protocolos de protección de mercancía.",
      details: "Entendemos los riesgos del territorio nacional. Por ello, ofrecemos servicios de custodia armada y civil, junto con rastreo satelital (GPS) en tiempo real. Contamos con protocolos de comunicación estricta durante todo el trayecto para garantizar que su carga llegue íntegra a su destino final."
    },
    {
      icon: <Weight className="size-8 text-yellow-500" />,
      title: "Flota Especializada",
      desc: "Equipos diversos para todo tipo de requerimiento logístico.",
      details: "Disponemos de una flota versátil que incluye camiones 350, NPR, Low-boys para maquinaria pesada, y plataformas (bateas) de 12 metros. Realizamos transporte de carga sobredimensionada y refrigerada, asegurando que cada vehículo cumpla con las revisiones mecánicas y permisos de ley (SADA, RAC, entre otros)."
    }
  ];

  const otrosServicios = [
    { title: "Agenciamiento Aduanal", icon: <ClipboardCheck size={24} />, desc: "Expertos en nacionalización de carga.", href: "/servicios/agenciamiento-aduanal" },
    { title: "Flete Internacional", icon: <Plane size={24} />, desc: "Transporte global aéreo y marítimo.", href: "/servicios/flete-internacional" },
    { title: "Almacén Logístico", icon: <ShieldCheck size={24} />, desc: "Resguardo y control de inventario.", href: "/servicios/almacen-logistico" },
    { title: "Coordinación Logística", icon: <Navigation size={24} />, desc: "Gestión integral de suministros.", href: "/servicios/coordinacion-logistica" },
    { title: "Asesoría Logística", icon: <Ship size={24} />, desc: "Consultoría experta en comercio.", href: "/servicios/asesoria-tecnica" },
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-950 min-h-screen pt-32 overflow-hidden">
        
        {/* HERO */}
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
              <Truck className="size-4" /> Distribución Nacional
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Transporte <span className="text-yellow-500">Terrestre</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Movilizamos su carga por todo el territorio nacional con eficiencia, seguridad y cumplimiento puntual de los tiempos de entrega.
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
                <img src="/Image/Gallery/foto09.webp" alt="Transporte Terrestre SVL" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              </div>
            </motion.div>

            {/* Acordeón Derecha */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl font-black text-white uppercase mb-8">
                Gestión de <span className="text-yellow-500">Operaciones</span>
              </h3>
              
              <div className="space-y-4">
                {procesosTecnicos.map((item, idx) => {
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
                        <div className={`shrink-0 transition-transform duration-300 ${isExpanded ? 'scale-110 text-yellow-500' : 'text-slate-400'}`}>
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

        {/* CTA */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                ¿Necesita mover carga a nivel nacional?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                Solicite un presupuesto adaptado al tipo de carga y ruta requerida. Contamos con disponibilidad inmediata de equipos.
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-3 px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase text-sm tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20">
                Contactar Logística <ArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-white font-black uppercase tracking-tighter text-2xl mb-12">Portafolio de <span className="text-yellow-500">Servicios</span></h3>
            
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

        <div id="contact" className="bg-white"> 
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