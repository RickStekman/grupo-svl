"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Scale, FileSearch, Gavel, ShieldAlert, 
  ArrowLeft, ArrowRight, ChevronDown, 
  BookOpen, Plane, Ship, Truck, Box,
  AlertCircle, Info,
  BarChart3, SearchCheck, UserCheck, Settings2, ShieldCheck, Globe
} from "lucide-react";

// --- COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function AsesoriaTecnica() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // DATA: Pilares de Asesoría
  const pilaresAsesoria = [
    {
      title: "Análisis Integral",
      desc: "Analizamos aranceles, impuestos, costos logísticos y posibles obstáculos aduaneros.",
      icon: <BarChart3 size={24} />
    },
    {
      title: "Clasificación Arancelaria",
      desc: "Sugerimos la correcta clasificación y valoración aduanera para su mercancía.",
      icon: <SearchCheck size={24} />
    },
    {
      title: "Defensa y Representación",
      desc: "Representamos y solucionamos discrepancias ante las autoridades aduaneras.",
      icon: <UserCheck size={24} />
    },
    {
      title: "Regulación Vigente",
      desc: "Consultoría experta en materia de importación, exportación, tránsito y leyes actuales.",
      icon: <Globe size={24} />
    },
    {
      title: "Regímenes Especiales",
      desc: "Tramitación de regímenes de liberación, suspensión y otros regímenes aduaneros especiales.",
      icon: <Settings2 size={24} />
    },
    {
      title: "Asesoría Profesional",
      desc: "Brindamos soporte técnico especializado en materia de aduana y comercio exterior.",
      icon: <ShieldCheck size={24} />
    }
  ];

  // DATA: Gestiones Técnicas (Incluyendo RL9, 11, 12 y 20)
  const procesosTecnicos = [
    {
      icon: <Gavel className="size-8 text-brand" />,
      title: "Reforma Aduanera G.O.E 6918",
      desc: "Análisis de impacto y recomendaciones estratégicas (Vigente 30/06/25).",
      details: "Asesoramos en la interpretación de los nuevos plazos y procedimientos de la Gaceta 6918 para evitar sanciones. Nuestro enfoque preventivo permite adaptarse a los cambios antes de que la carga llegue a puerto."
    },
    {
      icon: <Scale className="size-8 text-brand" />,
      title: "Exoneración de IVA y Requisitos",
      desc: "Gestión de beneficios fiscales para importación de bienes.",
      details: "Tramitamos exoneraciones bajo lineamientos del SENIAT, asegurando que la descripción arancelaria y documentación técnica cumplan con los estándares para una aprobación sin contratiempos."
    },
    {
      icon: <ShieldAlert className="size-8 text-brand" />,
      title: "Permiso Sanitario RL3 (SALUD)",
      desc: "Control de insumos médicos y descartables.",
      details: "Especialistas en el Registro Sanitario para insumos médicos, validando fichas técnicas y artes para evitar bloqueos en aduana por inconsistencias."
    },
    {
      icon: <ShieldCheck className="size-8 text-brand" />,
      title: "Registros Sanitarios (RL9 y RL11)",
      desc: "Gestión ante MPPS y SENCAMER.",
      details: "Tramitación de Registros Sanitarios para alimentos y cosméticos (RL9) y certificados de calidad SENCAMER (RL11) para cumplimiento de normas COVENIN."
    },
    {
      icon: <FileSearch className="size-8 text-brand" />,
      title: "Certificado de No Producción (RL12)",
      desc: "Trámite indispensable para beneficios arancelarios.",
      details: "Coordinamos la documentación técnica para demostrar la inexistencia de producción nacional y optar a la liberación de gravámenes."
    },
    {
      icon: <Box className="size-8 text-brand" />,
      title: "Bienes de Capital e Informática (BK / BIT)",
      desc: "Incentivos para maquinaria y tecnología.",
      details: "Gestionamos la Clasificación Arancelaria Única para proyectos de inversión industrial o tecnológica, optimizando los costos de importación."
    },
  ];

  const otrosServicios = [
    { title: "Flete Internacional", icon: <Plane size={24} />, desc: "Transporte global aéreo y marítimo.", href: "/servicios/flete-internacional" },
    { title: "Transporte Terrestre", icon: <Truck size={24} />, desc: "Distribución nacional eficiente.", href: "/servicios/transporte-terrestre" },
    { title: "Almacén Logístico", icon: <ShieldCheck size={24} />, desc: "Resguardo y control de inventario.", href: "/servicios/almacen-logistico" },
    { title: "Coordinación Logística", icon: <Ship size={24} />, desc: "Gestión integral de suministros.", href: "/servicios/coordinacion-logistica" },
    { title: "Agenciamiento Aduanal", icon: <Globe size={24} />, desc: "Gestión experta en aduanas.", href: "/servicios/agenciamiento-aduanal" },
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-950 min-h-screen pt-32 overflow-hidden">
        
        {/* HERO */}
        <section className="container mx-auto px-6 mb-24 relative">
          <Link href="/#servicios" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-500 transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver a Servicios
          </Link>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-2/3"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-yellow-500/20 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6">
                <BookOpen className="size-4" /> Inteligencia Normativa
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-tight">
                Asesoría <br /> <span className="text-brand">Técnica Legal</span>
              </h1>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                Blindamos sus operaciones con análisis experto, minimizando riesgos fiscales y garantizando el cumplimiento de la regulación aduanera vigente.
              </p>
            </motion.div>
            
            <div className="lg:w-1/3 grid grid-cols-2 gap-4">
                <div className="h-32 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center text-brand"><Scale size={40} /></div>
                <div className="h-32 bg-brand rounded-3xl flex items-center justify-center text-black"><Gavel size={40} /></div>
                <div className="h-32 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center text-brand"><FileSearch size={40} /></div>
                <div className="h-32 bg-slate-900 rounded-3xl border border-slate-800 flex items-center justify-center text-brand"><ShieldAlert size={40} /></div>
            </div>
          </div>
        </section>

        {/* ALCANCE CONSULTIVO */}
        <section className="container mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white uppercase italic">Nuestro <span className="text-brand">Alcance Consultivo</span></h2>
            <div className="h-1 w-20 rounded-full bg-brand-dark mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pilaresAsesoria.map((pilar, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] hover:border-brand/50 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-all">
                  {pilar.icon}
                </div>
                <h4 className="text-xl font-bold text-white uppercase mb-4">{pilar.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{pilar.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* GESTIONES TÉCNICAS Y REQUISITOS CLAVE */}
        <section className="container mx-auto px-6 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-10 w-2 bg-brand-dark"></div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Gestiones <span className="text-brand">Especializadas</span></h3>
              </div>
              
              <div className="space-y-4">
                {procesosTecnicos.map((item, idx) => {
                  const isExpanded = expandedIndex === idx;
                  return (
                    <div key={idx} className={`rounded-2xl border transition-all duration-300 ${isExpanded ? 'bg-slate-900 border-brand/50' : 'bg-slate-900/50 border-slate-800'}`}>
                      <button onClick={() => toggleBenefit(idx)} className="w-full flex items-center gap-6 p-6 text-left focus:outline-none">
                        <div className={`p-3 rounded-xl transition-all ${isExpanded ? 'bg-slate text-black' : 'bg-slate-800 text-yellow-500'}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white uppercase text-sm tracking-widest">{item.title}</h4>
                          <p className="text-slate-500 text-xs mt-1">{item.desc}</p>
                        </div>
                        <ChevronDown className={`text-brand transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                            <div className="px-6 pb-6 pt-2 md:ml-[72px]">
                              <p className="text-slate-400 text-sm leading-relaxed border-l border-slate-800 pl-6 italic">{item.details}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECCIÓN RESTAURADA: REQUISITOS CLAVE (SEGÚN IMAGEN) */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-10 bg-[#0a0f1d] border border-slate-800 rounded-[2rem] shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="text-brand" size={24} />
                    <h4 className="text-white font-bold uppercase text-xl tracking-tight">REQUISITOS <span className="text-brand">CLAVE</span></h4>
                </div>
                
                <p className="text-slate-400 text-sm italic mb-8">
                  Información requerida para iniciar cualquier trámite de régimen legal:
                </p>

                <ul className="space-y-6 mb-10">
                    {[
                      "Descripción Arancelaria detallada.", 
                      "Aduana de llegada y Fecha estimada de arribo.", 
                      "Factura Comercial y Packing List.", 
                      "Ficha Técnica, COAS y Artes de producto.", 
                      "Documentos de empresa (RIF, Acta, Cédulas).",
                      "Uso y destino final de los bienes (BK/BIT)."
                    ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium leading-relaxed">
                            <span className="h-1.5 w-1.5 rounded-full bg-brand mt-2 shrink-0"></span>
                            {text}
                        </li>
                    ))}
                </ul>

                <div className="p-6 bg-brand/5 border border-yellow-500/20 rounded-xl flex gap-4 items-start">
                    <Info className="text-yellow-500 shrink-0" size={20} />
                    <p className="text-brand/90 text-[11px] font-bold leading-relaxed">
                      Aviso Importante: <span className="text-brand/70 font-medium">Según la Reforma Aduanera G.O.E 6918, el cumplimiento documental previo es obligatorio para evitar retenciones.</span>
                    </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-32">
          <div className="bg-brand rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight">¿Desea una auditoría <br /> técnica de su carga?</h2>
              <p className="text-black/70 mb-10 max-w-2xl mx-auto font-bold text-lg">Revisamos su documentación bajo los nuevos parámetros de la Reforma 6918 de forma inmediata.</p>
              <Link href="#Contact" className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Contactar Especialista <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
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
                  <div className="text-brand font-black text-[10px] uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    Ver más <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACTO */}
        <div id="Contact" className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"> 
          <div className="container mx-auto px-6 text-center">
             <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-4">Inicie su <span className="text-yellow-600">Consulta</span></h2>
             <Contact />
          </div>
        </div>

      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}