"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Truck, Ship, Factory, Warehouse, RefreshCcw, 
  ClipboardList, Gauge, ArrowLeft, ArrowRight, 
  Zap, ChevronDown, ShieldCheck, Globe, Anchor, FileText,
  Plane, Box, Gavel, FileSearch, ClipboardCheck, Camera, ArrowUpRight
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function ImportsPage() {
  const [activeStep, setActiveStep] = useState(null);

  const pasosImport = [
    {
      id: "01",
      title: "Proveedor Internacional",
      icon: <Factory size={28} />,
      desc: "Gestión directa con el proveedor en origen para asegurar la correcta documentación y cumplimiento de INCOTERMS.",
      tags: ["Clasificación", "Origen", "INCOTERMS"],
      image: "/Image/Gallery/foto09.webp", 
      align: "left"
    },
    {
      id: "02",
      title: "Embarque en Origen",
      icon: <Ship size={28} />,
      desc: "Coordinación de la logística internacional, reserva de espacio (booking) y carga segura en la unidad de transporte.",
      tags: ["Booking", "BL / AWB", "Estiba"],
      image: "/Image/Gallery/foto10.webp", 
      align: "right"
    },
    {
      id: "03",
      title: "Arribo a Puerto Destino",
      icon: <Anchor size={28} />,
      desc: "Recepción de la unidad en puerto venezolano y gestión de tasas portuarias para el inicio del proceso de nacionalización.",
      tags: ["Puerto", "Tasas", "Desconocilación"],
      image: "/Image/Gallery/IMG-1.webp", 
      align: "left"
    },
    {
      id: "04",
      title: "Proceso Aduanal",
      icon: <FileText size={28} />,
      desc: "Presentación de documentos ante el SENIAT, reconocimiento de mercancía y liquidación de impuestos correspondientes.",
      tags: ["SENIAT", "DUA", "Reconocimiento"],
      image: "/Image/Gallery/foto11.webp", 
      align: "right"
    },
    {
      id: "05",
      title: "Entrega Final",
      icon: <Truck size={28} />,
      desc: "Transporte terrestre desde la zona primaria hasta el almacén o planta del cliente con monitoreo constante.",
      tags: ["Transporte", "Seguridad", "Última Milla"],
      image: "/Image/Gallery/foto06.webp", 
      align: "left"
    }
  ];

  const otrosServicios = [
    { title: "Agenciamiento Aduanal", icon: <Gavel size={24} />, desc: "Expertos en trámites ante el SENIAT.", href: "/servicios/agenciamiento-aduanal" },
    { title: "Flete Internacional", icon: <Plane size={24} />, desc: "Transporte global aéreo y marítimo.", href: "/servicios/flete-internacional" },
    { title: "Transporte Terrestre", icon: <Truck size={24} />, desc: "Distribución nacional monitoreada.", href: "/servicios/transporte-terrestre" },
    { title: "Almacén Logístico", icon: <Warehouse size={24} />, desc: "Custodia segura de su mercancía.", href: "/servicios/almacenaje" },
    { title: "Coordinación Logística", icon: <Zap size={24} />, desc: "Logística inteligente 360°.", href: "/servicios/coordinacion-logistica" },
    { title: "Asesoría Técnica", icon: <FileSearch size={24} />, desc: "Consultoría normativa de alto nivel.", href: "/servicios/asesoria-tecnica" },
  ];

  const galleryGlobal = [
    { src: "/Image/OpMaritimaPC/foto(1).webp", title: "Carga en Puerto", location: "Puerto Cabello" },
    { src: "/Image/ImpMaritimaGua/foto(2).webp", title: "Inspección de Contenedor", location: "La Guaira" },
    { src: "/Image/ExpMarinaQuim/foto(3).webp", title: "Nacionalización Aérea", location: "Maiquetía" },
    { src: "/Image/ImpMaritimaGua/foto(4).webp", title: "Logística Terrestre", location: "Valencia" },
    { src: "/Image/ImpMaritimaGua/foto(5).webp", title: "Desaduanamiento", location: "Maracaibo" },
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-slate-950 min-h-screen pt-32 overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 mb-24 relative">
          <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-brand transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
          </Link>
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-black uppercase tracking-[0.2em] mb-6"
            >
              <Globe className="size-4" /> Importaciones Globales
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 uppercase leading-[0.9] italic">
              Proceso de <span className="text-brand">Importación</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl italic">
              Gestionamos el ingreso de su carga al territorio nacional con precisión técnica, garantizando el cumplimiento de la normativa aduanera venezolana.[cite: 5]
            </p>
          </div>
        </section>

        {/* CONTENIDO DE PASOS */}
        <section className="container mx-auto px-6 mb-32">
          <div className="space-y-4">
            {pasosImport.map((paso, idx) => (
              <motion.div 
                key={paso.id}
                initial={{ opacity: 0, x: paso.align === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col ${paso.align === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}
              >
                {/* Info Card */}
                <div className="flex-1">
                  <div 
                    onClick={() => setActiveStep(activeStep === idx ? null : idx)}
                    className={`h-full p-8 rounded-[2.5rem] border transition-all duration-500 cursor-pointer group ${
                      activeStep === idx 
                      ? "bg-brand border-brand" 
                      : "bg-slate-900/50 border-slate-800 hover:border-brand/50"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className={`text-4xl font-black italic ${activeStep === idx ? "text-black/20" : "text-brand/20"}`}>
                        {paso.id}
                      </span>
                      <div className={`p-3 rounded-2xl ${activeStep === idx ? "bg-black text-brand" : "bg-brand text-black"}`}>
                        {paso.icon}
                      </div>
                    </div>
                    
                    <h3 className={`text-2xl font-black uppercase italic mb-4 ${activeStep === idx ? "text-black" : "text-white"}`}>
                      {paso.title}
                    </h3>
                    
                    <p className={`text-sm leading-relaxed mb-6 ${activeStep === idx ? "text-black/80" : "text-slate-400"}`}>
                      {paso.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {paso.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${
                          activeStep === idx ? "bg-black/10 text-black" : "bg-slate-800 text-slate-400"
                        }`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image Card */}
                <div className="flex-1 hidden md:block">
                  <div className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-800">
                    <Image 
                      src={paso.image} 
                      alt={paso.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SECCIÓN PUENTE A EXPORTACIÓN */}
        <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-brand/20 to-transparent rounded-[2rem]">
                <div className="bg-slate-900/50 backdrop-blur-md p-8 md:p-10 rounded-[1.9rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black uppercase italic text-xl mb-2">¿Su empresa también exporta productos?</h4>
                        <p className="text-slate-400 text-sm italic">Conozca nuestro flujo especializado para salidas internacionales.[cite: 5]</p>
                    </div>
                    <Link href="/procesos/Export">
                        <button className="group flex items-center gap-3 px-8 py-4 bg-slate-950 border border-brand/50 text-brand font-black uppercase text-xs tracking-widest rounded-xl hover:bg-brand hover:text-black transition-all">
                            Ver proceso de Exportación <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>

        {/* CTA BANNER */}
        <section className="container mx-auto px-6 mb-32 text-center">
          <div className="bg-gradient-to-br from-brand to-brand-dark rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight italic">
                ¿Mercancía en camino?
              </h2>
              <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium text-lg italic">
                Asegure un proceso de nacionalización sin complicaciones con nuestro equipo de expertos aduanales.[cite: 5]
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Solicitar Asesoría <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-12 italic">Soluciones <span className="text-brand-dark">Integrales</span></h3>
            <div className="flex flex-wrap justify-center gap-6">
              {otrosServicios.map((s, i) => (
                <Link key={i} href={s.href} className="group p-8 bg-slate-950 border border-slate-800 rounded-3xl hover:border-brand/50 transition-all hover:-translate-y-1 w-full md:w-80 text-left">
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

        {/* NUEVA SECCIÓN: GALERÍA GLOBAL INFINITA */}
        <section className="py-24 bg-slate-950 relative overflow-hidden">
          <div className="container mx-auto px-6 mb-12">
            <div className="flex items-center gap-3 text-brand mb-2">
              <Camera size={20} />
              <span className="font-black uppercase tracking-widest text-[10px]">Evidencia en Campo</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white">Galería de <span className="text-brand">Operaciones</span></h2>
          </div>

          <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 hidden md:block" />
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 hidden md:block" />
             
             <motion.div 
               className="flex gap-6 w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 60, repeat: Infinity }}
               whileHover={{ animationPlayState: "paused" }}
             >
               {[...galleryGlobal, ...galleryGlobal].map((img, i) => (
                 <div key={i} className="w-[280px] md:w-[350px] aspect-square rounded-[2rem] overflow-hidden relative group border border-slate-800">
                   <img src={img.src} alt={img.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
                   <div className="absolute bottom-0 left-0 p-6">
                     <span className="text-brand font-black uppercase text-[10px] tracking-widest block mb-1">{img.location}</span>
                     <h4 className="text-white font-bold text-lg uppercase italic leading-tight">{img.title}</h4>
                   </div>
                 </div>
               ))}
             </motion.div>
          </div>

          {/* BOTÓN AL REGISTRO OPERATIVO */}
          <div className="container mx-auto px-6 mt-16 flex justify-center">
             <Link href="/procesos/" className="group flex items-center gap-6 bg-slate-900/50 border border-slate-800 p-2 pl-8 rounded-full hover:border-brand transition-all">
                <span className="text-white font-black uppercase text-[10px] tracking-[0.2em]">Ver todos los casos de éxito</span>
                <div className="bg-brand p-4 rounded-full group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="text-black size-5" />
                </div>
             </Link>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <div id="Contact" className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-xs">Asesoría Técnica de Importación</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-4">Inicie su <span className="text-yellow-600">Importación</span></h2>
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