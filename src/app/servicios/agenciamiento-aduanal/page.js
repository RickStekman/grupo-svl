"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ClipboardCheck, FileText, Clock, ShieldCheck, 
  ArrowLeft, ArrowRight, Plane, Truck, Ship, 
  Globe, ChevronDown, Zap, MapPin, Monitor,
  Building2, Anchor, Navigation
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

  // NUEVA DATA: Ubicaciones Proporcionadas
  const aduanasPrincipales = [
    { name: "Aduana Principal de Puerto Cabello", icon: <Anchor size={20} />, type: "Marítima" },
    { name: "Aduana Principal de La Guaira", icon: <Anchor size={20} />, type: "Marítima" },
    { name: "Aduana Principal de Maiquetía", icon: <Plane size={20} />, type: "Aérea" },
    { name: "Aduana Principal de Maracaibo", icon: <Navigation size={20} />, type: "Marítima / Aérea" },
    { name: "Aduana Principal de San Antonio del Táchira", icon: <Truck size={20} />, type: "Terrestre" },
  ];

  const beneficios = [
    {
      icon: <Zap className="size-8 text-brand" />,
      title: "Desaduanamiento Ágil",
      desc: "Nacionalización en tiempos récord según la modalidad.",
      details: "Garantizamos el desaduanamiento en un promedio de 5 días para embarques marítimos y 3 días para aéreos. En casos de 'Descargas Directas', logramos la nacionalización en pocas horas, siempre que la documentación esté completa."
    },
    {
      icon: <FileText className="size-8 text-brand" />,
      title: "Gestión Documental",
      desc: "Preparación y verificación de permisos y manifiestos.",
      details: "Nos encargamos de la recepción y gestión eficiente de documentación en puerto, elaboración precisa de manifiestos de vuelo y preparación de permisos para pasos fronterizos, asegurando el cumplimiento legal estricto."
    },
    {
      icon: <Monitor className="size-8 text-brand" />,
      title: "Seguimiento en tiempo real",
      desc: "Control total desde la descarga hasta su almacén.",
      details: "Transmisión constante de información sobre el estatus del embarque y el movimiento del documento en las aduanas correspondientes."
    },
    {
      icon: <ShieldCheck className="size-8 text-brand" />,
      title: "Supervisión Operativa",
      desc: "Personal especializado en inspecciones y manejo de carga.",
      details: "Coordinación de inspecciones rápidas con las autoridades para garantizar la fluidez del proceso de liberación en las aduanas principales."
    }
  ];

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
        
        {/* HERO SECTION MEJORADA */}
        <section className="container mx-auto px-6 mb-24">
          <Link href="/#servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver a Servicios
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-yellow-500/20 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6">
                Aéreas - Marítimas y Terrestres
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
                Agenciamiento <br />
                <span className="text-brand-dark">Aduanal</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
                Operaciones expertas en las principales aduanas de Venezuela, garantizando el cumplimiento normativo y la rapidez que su cadena de suministro exige.
                Soluciones integrales de soporte logístico con más de 20 años de experiencia, garantizando procesos eficientes en aduanas aéreas, marítimas y terrestres.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:w-2/5 w-full h-[400px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl shadow-yellow-500/5"
            >
              <img src="/Image/Gallery/foto06.webp" alt="Operaciones Aduanales" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* NUEVA SECCIÓN: PRESENCIA NACIONAL (INFO NUEVA) */}
        <section className="container mx-auto px-6 mb-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black text-white uppercase italic mb-4">Presencia en <span className="text-brand-dark text-4xl">Aduanas Principales</span></h2>
              <p className="text-slate-500">Contamos con personal propio y alianzas estratégicas para cubrir los puntos de entrada y salida más críticos del país.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-800 mx-10 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-10 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Ship size={120} />
              </div>
              <div className="p-4 bg-brand/10 rounded-2xl text-brand w-fit mb-8"><Ship /></div>
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Marítima</h3>
              <p className="text-slate-500 text-sm mb-6">Gestión completa en Puerto Cabello, La Guaira y Maracaibo.</p>
              <div className="py-2 px-4 rounded-lg inline-block">
                <span className="text-brand font-bold text-xs">TIEMPO ESTIMADO: ~5 DÍAS</span>
              </div>
            </div>

            <div className="p-10 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Plane size={120} />
              </div>
              <div className="p-4 bg-brand/10 rounded-2xl text-brand w-fit mb-8"><Plane /></div>
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Aérea</h3>
              <p className="text-slate-500 text-sm mb-6">Operaciones directas en Maiquetía y principales terminales de carga.</p>
              <div className="py-2 px-4 rounded-lg inline-block">
                <span className="text-brand font-bold text-xs">TIEMPO ESTIMADO: ~3 DÍAS</span>
              </div>
            </div>

            <div className="p-10 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <MapPin size={120} />
              </div>
              <div className="p-4 bg-brand/10 rounded-2xl text-brand w-fit mb-8"><MapPin /></div>
              <h3 className="text-2xl font-black text-white uppercase italic mb-4">Terrestre</h3>
              <p className="text-slate-500 text-sm mb-6">Control y desaduanamiento en San Antonio del Táchira y fronteras.</p>
              <div className="py-2 px-4 rounded-lg inline-block">
                <span className="text-brand font-bold text-xs">SEGUIMIENTO EN TIEMPO REAL</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {aduanasPrincipales.map((aduana, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 bg-slate-900/50 border border-slate-800 rounded-2xl flex flex-col items-center text-center group hover:border-brand/50 transition-all"
              >
                <div className="p-4 bg-slate-950 rounded-xl text-brand mb-4 group-hover:scale-110 transition-transform">
                  {aduana.icon}
                </div>
                <h4 className="text-white font-bold text-xs uppercase tracking-tight mb-2 leading-tight">{aduana.name}</h4>
                <span className="text-[10px] font-black uppercase text-slate-600 tracking-widest">{aduana.type}</span>
              </motion.div>
            ))}
          </div>
        </section>


        {/* PROPUESTA DE VALOR (ACORDEÓN MEJORADO) */}
        <section className="container mx-auto px-6 mb-32 flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
             <h2 className="text-4xl font-black text-white uppercase leading-none mb-6">
               Nuestra <br /> <span className="text-brand italic text-5xl">Garantía</span>
             </h2>
             <p className="text-slate-500">Más de 20 años optimizando procesos de nacionalización y exportación.</p>
          </div>
          <div className="lg:w-2/3 space-y-4">
            {beneficios.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className={`rounded-3xl border transition-all duration-300 ${isExpanded ? 'bg-slate-900 border-brand/50 shadow-2xl shadow-brand/5' : 'bg-slate-900/40 border-slate-800'}`}>
                  <button onClick={() => toggleBenefit(idx)} className="w-full flex items-center gap-6 p-8 text-left focus:outline-none">
                    <div className={`p-3 rounded-2xl transition-all duration-500 ${isExpanded ? 'bg-slate text-black' : 'bg-slate-800 text-brand'}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white uppercase">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                    <div className={`text-brand transition-transform duration-500 ${isExpanded ? 'rotate-180' : ''}`}>
                      <ChevronDown size={28} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-8 pb-8 pt-2 md:ml-[92px]">
                          <p className="text-slate-400 leading-relaxed border-l-2 border-brand pl-6">{item.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA REFINADO */}
        <section className="container mx-auto px-6 mb-32">
          <div className="bg-gradient-to-br from-brand to-yellow-600 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight">
                ¿Mercancía en <br /> Puerto o Aduana?
              </h2>
              <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium text-lg">
                Evite costos de almacenaje innecesarios. Nuestro equipo técnico agiliza su trámite de inmediato.
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Iniciar Asesoría <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS (GRID) */}
        <section className="bg-slate-900/50 py-32 border-t border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-white font-black uppercase text-3xl mb-16 tracking-tighter">Soluciones <span className="text-brand">Complementarias</span></h3>
            <div className="flex flex-wrap justify-center gap-8">
              {otrosServicios.map((s, i) => (
                <Link key={i} href={s.href} className="group p-10 bg-slate-950 border border-slate-800 rounded-[2rem] hover:border-brand/50 transition-all hover:-translate-y-2 w-full sm:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] xl:w-[calc(20%-2rem)]">
                  <div className="text-brand mb-8 bg-brand/10 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-brand group-hover:text-black transition-all">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold uppercase mb-4 text-sm tracking-widest">{s.title}</h4>
                  <p className="text-slate-600 text-xs mb-6 leading-relaxed">{s.desc}</p>
                  <div className="text-brand font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity">
                    Ver más
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