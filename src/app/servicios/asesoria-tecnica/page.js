"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  Scale, FileSearch, Gavel, ShieldAlert, 
  ArrowLeft, ArrowRight, ChevronDown, 
  BookOpen, ClipboardCheck, Plane, Ship, Truck, Box,
  FileText, CheckCircle2, AlertCircle, Info
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function AsesoriaTecnica() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleBenefit = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Data técnica extraída RIGUROSAMENTE del PDF
  const procesosTecnicos = [
    {
      icon: <Gavel className="size-8 text-yellow-500" />,
      title: "Reforma Aduanera G.O.E 6918",
      desc: "Análisis de impacto y recomendaciones estratégicas (Vigente 30/06/25).",
      details: "La Gaceta Oficial Extraordinaria 6918 marca un antes y un después en la operativa nacional. Asesoramos en la correcta interpretación de los nuevos plazos y procedimientos para evitar sanciones. Nuestro enfoque preventivo permite a los importadores adaptarse a los cambios antes de que su carga toque puerto venezolano, optimizando la cadena de suministro bajo el nuevo marco legal."
    },
    {
      icon: <Scale className="size-8 text-yellow-500" />,
      title: "Exoneración de IVA y Requisitos",
      desc: "Gestión de beneficios fiscales para importación de bienes.",
      details: "Tramitamos exoneraciones bajo los lineamientos del SENIAT. Los requisitos fundamentales incluyen: Descripción arancelaria exacta, indicación de aduana de llegada y fecha de arribo, Factura Comercial, Packing List, Registro Sanitario vigente y Ficha Técnica (o COAS y Arte en caso de medicamentos). Aseguramos que cada documento cumpla con los estándares para una aprobación sin contratiempos."
    },
    {
      icon: <Box className="size-8 text-yellow-500" />,
      title: "Bienes de Capital, Informática y Telecom (BK/BIT)",
      desc: "Trámites especializados para maquinaria y tecnología.",
      details: "Gestionamos la Clasificación Arancelaria Única para proyectos de inversión. Requerimos: Documentación detallada del uso y destino de los bienes, Carta de Renuncia de Mercancía (si aplica), Acta Constitutiva, RIF y Cédula del representante legal. Este proceso es vital para empresas que buscan renovar su parque tecnológico o industrial aprovechando incentivos arancelarios."
    },
    {
      icon: <ShieldAlert className="size-8 text-yellow-500" />,
      title: "Permiso Sanitario RL3 (Salud)",
      desc: "Registro y control de productos médicos y descartables.",
      details: "Especialistas en el Registro Sanitario de Importación para insumos como Gasas Estériles, Jeringas y otros descartables. Gestionamos el soporte de depósito por artículo (aprox. 60$), validación de Fichas Técnicas y artes, asegurando que la fecha de registro coincida con los cronogramas de arribo para evitar bloqueos en aduana."
    },
    {
      icon: <FileSearch className="size-8 text-yellow-500" />,
      title: "Regímenes Legales RL9 y RL11 (CMEX)",
      desc: "Permisos de Importación/Exportación ante el Comité de Comercio Exterior.",
      details: "Coordinamos trámites ante el CMEX para productos sujetos a controles especiales. Nos encargamos de la consignación de la descripción arancelaria, factura, packing list y ficha técnica ante las autoridades competentes, garantizando que su empresa cuente con la autorización necesaria para el desaduanamiento legal de su mercancía."
    }
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
              <BookOpen className="size-4" /> Inteligencia Normativa
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase leading-tight">
              Asesoría <span className="text-yellow-500">Técnica Legal</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl">
              Desglosamos la complejidad de la <strong>Reforma Aduanera G.O.E 6918</strong> y gestionamos sus regímenes legales con precisión técnica.
            </p>
          </motion.div>
        </section>

        {/* CONTENIDO DESGLOSADO (PDF) */}
        <section className="container mx-auto px-6 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LADO IZQUIERDO: DETALLE TÉCNICO */}
            <div className="lg:col-span-7">
              <h3 className="text-2xl font-black text-white uppercase mb-8 flex items-center gap-3">
                <CheckCircle2 className="text-yellow-500" /> Trámites de <span className="text-yellow-500">Regímenes Legales</span>
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

            {/* LADO DERECHO: CHECKLIST DE REQUISITOS (Basado en el PDF) */}
            <div className="lg:col-span-5">
              <div className="sticky top-32 p-8 bg-slate-900 border border-slate-800 rounded-3xl">
                <div className="flex items-center gap-3 mb-6">
                    <AlertCircle className="text-yellow-500 animate-pulse" />
                    <h4 className="text-white font-black uppercase text-xl">Requisitos <span className="text-yellow-500">Clave</span></h4>
                </div>
                <p className="text-slate-400 text-sm mb-8 italic">Información requerida para iniciar cualquier trámite de régimen legal:</p>
                
                <ul className="space-y-4">
                    {[
                        "Descripción Arancelaria detallada.",
                        "Aduana de llegada y Fecha estimada de arribo.",
                        "Factura Comercial y Packing List.",
                        "Ficha Técnica, COAS y Artes de producto.",
                        "Documentos de empresa (RIF, Acta, Cédulas).",
                        "Uso y destino final de los bienes (BK/BIT)."
                    ].map((text, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0" />
                            {text}
                        </li>
                    ))}
                </ul>

                <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                    <div className="flex gap-3">
                        <Info className="text-yellow-500 shrink-0" size={20} />
                        <p className="text-yellow-500/90 text-xs leading-relaxed font-medium">
                            <strong>Aviso Importante:</strong> Según la Reforma Aduanera G.O.E 6918, el cumplimiento documental previo es obligatorio para evitar retenciones.
                        </p>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-6 mb-24">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase mb-4">
                ¿Desea una auditoría técnica de su carga?
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
                No espere a que su mercancía llegue a puerto. Revisamos su documentación bajo los nuevos parámetros de la Reforma 6918 de forma inmediata.
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-3 px-10 py-4 bg-yellow-500 hover:bg-yellow-600 text-black font-black uppercase text-sm tracking-widest rounded-xl transition-all shadow-lg shadow-yellow-500/20">
                Contactar Especialista <ArrowRight size={18} />
              </Link>
            </div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-12">Portafolio <span className="text-yellow-500">Integral SVL</span></h3>
            <div className="flex flex-wrap justify-center gap-4">
                {["Agenciamiento Aduanal", "Flete Internacional", "Transporte Terrestre", "Coordinación Logística", "Almacenaje"].map((s, i) => (
                    <div key={i} className="px-6 py-3 bg-slate-950 border border-slate-800 rounded-full text-slate-400 text-xs font-bold uppercase hover:border-yellow-500/50 transition-colors cursor-default">
                        {s}
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN DE CONTACTO */}
        <div id="Contact" className="py-24 bg-white"> 
          <div className="container mx-auto px-6">
            <div className="text-center">
               <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase">Consultoría <span className="text-yellow-600">Preventiva</span></h2>
               <p className="text-slate-500 mt-4 max-w-xl mx-auto">Evite sanciones y retrasos. Envíenos su consulta técnica y nos pondremos en contacto con usted.</p>
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