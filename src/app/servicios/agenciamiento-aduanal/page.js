"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  FileText, ShieldCheck, 
  ArrowLeft, ArrowRight, Plane, Truck, Ship, 
  Globe, ChevronDown, Zap, MapPin, Monitor,
  Anchor, Navigation
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

  const aduanasPrincipales = [
    { name: "Aduana Principal de Puerto Cabello", icon: <Anchor size={20} />, type: "Marítima" },
    { name: "Aduana Principal de La Guaira", icon: <Anchor size={20} />, type: "Marítima" },
    { name: "Aduana Principal de Maiquetía", icon: <Plane size={20} />, type: "Aérea" },
    { name: "Aduana Principal de Maracaibo", icon: <Navigation size={20} />, type: "Marítima / Aérea" },
    { name: "Aduana Principal de San Antonio del Táchira", icon: <Truck size={20} />, type: "Terrestre" },
  ];

  const beneficios = [
    {
      icon: <Zap className="size-6 md:size-8 text-brand" />,
      title: "Desaduanamiento Ágil",
      desc: "Nacionalización en tiempos récord.",
      details: "Garantizamos el desaduanamiento en un promedio de 5 días para embarques marítimos y 3 días para aéreos. En casos de 'Descargas Directas', logramos la nacionalización en pocas horas."
    },
    {
      icon: <FileText className="size-6 md:size-8 text-brand" />,
      title: "Gestión Documental",
      desc: "Verificación de permisos y manifiestos.",
      details: "Nos encargamos de la recepción y gestión eficiente de documentación en puerto, elaboración precisa de manifiestos de vuelo y preparación de permisos."
    },
    {
      icon: <Monitor className="size-6 md:size-8 text-brand" />,
      title: "Seguimiento",
      desc: "Control total de su carga.",
      details: "Transmisión constante de información sobre el estatus del embarque y el movimiento del documento en las aduanas correspondientes."
    },
    {
      icon: <ShieldCheck className="size-6 md:size-8 text-brand" />,
      title: "Supervisión",
      desc: "Personal especializado en inspecciones.",
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
      <main className="bg-slate-950 min-h-screen pt-24 lg:pt-32 overflow-x-hidden">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-16 lg:mb-24">
          <Link href="/servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand transition-colors mb-6 font-bold text-xs uppercase tracking-widest group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Volver a Servicios
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="w-full lg:w-3/5"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-yellow-500/20 text-brand text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                Aéreas - Marítimas y Terrestres
              </div>
              <h1 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase leading-[1.1]">
                Agenciamiento <br />
                <span className="text-brand-dark">Aduanal</span>
              </h1>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                Operaciones expertas en las principales aduanas de Venezuela, garantizando el cumplimiento normativo y la rapidez que su cadena de suministro exige.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full lg:w-2/5 h-[250px] md:h-[400px] rounded-2xl md:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
            >
              <img src="/Image/Gallery/cede02.webp" alt="Operaciones Aduanales" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </section>

        {/* PRESENCIA NACIONAL */}
        <section className="container mx-auto px-6 mb-20 lg:mb-32">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase italic mb-3">Presencia en <span className="text-brand-dark text-3xl md:text-4xl">Aduanas Principales</span></h2>
              <p className="text-slate-500 text-sm md:text-base">Cubrimos los puntos de entrada y salida más críticos del país: Puerto Cabello, La Guaira y Valencia.</p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-800 mx-10 mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { type: 'Marítima', icon: <Ship />, desc: 'Puerto Cabello, La Guaira y Maracaibo.', time: '~5 DÍAS' },
              { type: 'Aérea', icon: <Plane />, desc: 'Maiquetía y principales terminales.', time: '~3 DÍAS' },
              { type: 'Terrestre', icon: <MapPin />, desc: 'San Antonio del Táchira y fronteras.', time: 'TIEMPO REAL' }
            ].map((item, i) => (
              <div key={i} className="p-8 bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-[2rem] relative overflow-hidden group">
                <div className="p-3 bg-brand/10 rounded-xl text-brand w-fit mb-6">{item.icon}</div>
                <h3 className="text-xl font-black text-white uppercase italic mb-2">{item.type}</h3>
                <p className="text-slate-500 text-xs mb-4">{item.desc}</p>
                <span className="text-brand font-bold text-[10px] tracking-tighter uppercase">{item.time}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {aduanasPrincipales.map((aduana, idx) => (
              <div key={idx} className="p-4 md:p-6 bg-slate-900/50 border border-slate-800 rounded-xl flex flex-col items-center text-center">
                <div className="p-3 bg-slate-950 rounded-lg text-brand mb-3 text-sm">{aduana.icon}</div>
                <h4 className="text-white font-bold text-[10px] md:text-xs uppercase leading-tight mb-1">{aduana.name}</h4>
                <span className="text-[8px] font-black uppercase text-slate-600 tracking-widest">{aduana.type}</span>
              </div>
            ))}
          </div>
        </section>

        {/* GARANTÍA / ACORDEÓN */}
        <section className="container mx-auto px-6 mb-20 lg:mb-32 flex flex-col lg:flex-row gap-10 lg:gap-16">
          <div className="lg:w-1/3">
             <h2 className="text-3xl md:text-4xl font-black text-white uppercase leading-none mb-6">
               Nuestra <br /> <span className="text-brand italic text-4xl md:text-5xl">Garantía</span>
             </h2>
             <p className="text-slate-500 text-sm md:text-base">Más de 20 años optimizando procesos de nacionalización y exportación.</p>
          </div>
          <div className="lg:w-2/3 space-y-3">
            {beneficios.map((item, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={idx} className={`rounded-2xl md:rounded-3xl border transition-all duration-300 ${isExpanded ? 'bg-slate-900 border-brand/50' : 'bg-slate-900/40 border-slate-800'}`}>
                  <button onClick={() => toggleBenefit(idx)} className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-8 text-left focus:outline-none">
                    <div className={`p-2 md:p-3 rounded-xl transition-all ${isExpanded ? 'bg-brand text-black' : 'bg-slate-800 text-brand'}`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm md:text-xl font-bold text-white uppercase">{item.title}</h4>
                      <p className="text-slate-500 text-[10px] md:text-sm">{item.desc}</p>
                    </div>
                    <ChevronDown size={20} className={`text-brand transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                        <div className="px-5 pb-6 md:px-8 md:pb-8 pt-0 md:ml-[84px]">
                          <p className="text-slate-400 text-xs md:text-sm leading-relaxed border-l-2 border-brand pl-4 md:pl-6">{item.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-20 lg:mb-32">
          <div className="bg-gradient-to-br from-brand to-yellow-600 rounded-[2rem] md:rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-6xl font-black text-black uppercase mb-4 md:mb-6 leading-tight">
                ¿Mercancía en <br className="hidden md:block" /> Puerto o Aduana?
              </h2>
              <p className="text-black/70 mb-8 max-w-xl mx-auto font-medium text-sm md:text-lg">
                Evite costos de almacenaje innecesarios. Nuestro equipo técnico agiliza su trámite de inmediato.
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white font-black uppercase text-xs tracking-widest rounded-xl hover:scale-105 transition-all">
                Iniciar Asesoría <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-16 md:py-24 border-y border-slate-900">
          <div className="container mx-auto px-6">
            <h3 className="text-center text-white font-black uppercase tracking-tighter text-xl md:text-2xl mb-10">Soluciones <span className="text-brand">Logísticas</span></h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {otrosServicios.map((s, i) => (
                <Link key={i} href={s.href} className="group p-6 bg-slate-950 border border-slate-800 rounded-xl hover:border-brand/50 transition-all">
                  <div className="text-brand mb-4 bg-brand/10 w-10 h-10 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <h4 className="text-white font-bold uppercase mb-1 text-xs">{s.title}</h4>
                  <p className="text-slate-500 text-[10px] mb-3">{s.desc}</p>
                  <div className="flex items-center gap-2 text-brand/50 text-[9px] font-black uppercase tracking-widest">
                    Saber más <ArrowRight size={10} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <div id="Contact" className="py-20 md:py-32 bg-white rounded-t-[2.5rem] md:rounded-t-[4rem]"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
               <span className="text-yellow-600 font-black uppercase tracking-widest text-[10px]">Atención Técnica</span>
               <h2 className="text-3xl md:text-6xl font-black text-slate-900 uppercase italic mt-2">Inicie su <span className="text-yellow-600">Trámite</span></h2>
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