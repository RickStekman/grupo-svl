"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
  FileText, Monitor, Container, Shield, 
  CheckSquare, Stamp, Landmark, Building2, 
  UserCheck, ClipboardCheck, Ship, LandmarkIcon,
  FileBox, Send, Receipt, ArrowLeft, ArrowRight, ArrowDown,
  Globe, ShieldAlert, Truck, Gavel, Warehouse, Zap, FileSearch,
  Plane, ShieldCheck, Box, Camera, ArrowUpRight
} from "lucide-react";

// --- IMPORTA TUS COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function ExportPage() {
  const etapas = [
    {
      fase: "01. Gestión Inicial",
      color: "from-brand/20 to-transparent",
      borderColor: "border-brand/30",
      accent: "text-brand",
      pasos: [
        { id: 1, title: "Ingreso del Equipo Full", icon: <Container /> },
        { id: 2, title: "Recepción de Documentos", icon: <FileText /> },
        { id: 3, title: "Manifiesto SIDUNEA World", icon: <Monitor /> },
        { id: 4, title: "Movimiento de Contenedor", icon: <Ship /> },
      ]
    },
    {
      fase: "02. Inspección y Seguridad",
      color: "from-brand/20 to-transparent",
      borderColor: "border-brand/30",
      accent: "text-brand",
      pasos: [
        { id: 5, title: "Solicitud GN (Antidroga)", icon: <Shield /> },
        { id: 6, title: "Reconocimiento GN", icon: <CheckSquare /> },
        { id: 7, title: "Recolección Sellos GN", icon: <Stamp /> },
      ]
    },
    {
      fase: "03. Proceso Aduanal",
      color: "from-brand/20 to-transparent",
      borderColor: "border-brand/30",
      accent: "text-brand",
      pasos: [
        { id: 8, title: "Presentación en Aduana", icon: <Landmark /> },
        { id: 9, title: "Dpto. Confrontación", icon: <Building2 /> },
        { id: 10, title: "Asignación Funcionario", icon: <UserCheck /> },
        { id: 11, title: "Validación DUA", icon: <ClipboardCheck /> },
      ]
    },
    {
      fase: "04. Despacho Marítimo",
      color: "from-brand/20 to-transparent",
      borderColor: "border-brand/30",
      accent: "text-brand",
      pasos: [
        { id: 12, title: "Recolección Último Sello", icon: <Stamp /> },
        { id: 13, title: "Entrega DUA a la Línea", icon: <FileText /> },
        { id: 14, title: "Confirmación Embarque", icon: <Ship /> },
      ]
    },
    {
      fase: "05. Cierre y Facturación",
      color: "from-brand/20 to-transparent",
      borderColor: "border-brand/30",
      accent: "text-brand",
      pasos: [
        { id: 15, title: "Impuestos Municipales", icon: <LandmarkIcon /> },
        { id: 16, title: "Armado para Facturación", icon: <FileBox /> },
        { id: 17, title: "Documentos al Cliente", icon: <Send /> },
        { id: 18, title: "Entrega a Facturación", icon: <Receipt /> },
      ]
    }
  ];

  const otrosServicios = [
    { title: "Agenciamiento Aduanal", icon: <ClipboardCheck size={24} />, desc: "Expertos en nacionalización de carga.", href: "/servicios/agenciamiento-aduanal" },
    { title: "Flete Internacional", icon: <Plane size={24} />, desc: "Transporte global aéreo y marítimo.", href: "/servicios/flete-internacional" },
    { title: "Transporte Terrestre", icon: <Truck size={24} />, desc: "Distribución nacional eficiente.", href: "/servicios/transporte-terrestre" },
    { title: "Almacén Logístico", icon: <ShieldCheck size={24} />, desc: "Resguardo y control de inventario.", href: "/servicios/almacen-logistico" },
    { title: "Coordinación Logística", icon: <ShieldCheck size={24} />, desc: "Gestión integral de suministros.", href: "/servicios/coordinacion-logistica" },
    { title: "Asesoría Logística", icon: <Box size={24} />, desc: "Consultoría experta en comercio.", href: "/servicios/asesoria-tecnica" },
  ];

  const galleryGlobal = [
    { src: "/Image/ExpMarinaQuim/foto(2).webp", title: "Carga de Químicos", location: "Puerto Cabello" },
    { src: "/Image/ExpMarinaQuim/foto(3).webp", title: "Inspección de Exportación", location: "La Guaira" },
    { src: "/Image/OpMaritimaPC/foto(5).webp", title: "Embarque Internacional", location: "Puerto Cabello" },
    { src: "/Image/ExpMarinaQuim/foto(7).webp", title: "Verificación de Sellos", location: "Valencia" },
    { src: "/Image/ExpMarinaQuim/foto(13).webp", title: "Logística de Salida", location: "Maiquetía" },
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-yellow-500/20 text-brand font-bold uppercase tracking-[0.2em] mb-6">
              <Globe className="size-4" /> Mercados Internacionales
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase leading-[0.9] italic">
              Ciclo de <span className="text-brand-dark">Exportación</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl italic">
              Potenciamos la salida de sus productos nacionales mediante un flujo operativo robusto y blindado ante las exigencias de seguridad global.[cite: 5]
            </p>
          </motion.div>
        </section>

        {/* VALOR AGREGADO: REQUISITOS */}
        <section className="container mx-auto px-6 mb-32">
          <div className="bg-slate-900/40 border border-slate-800 rounded-[3rem] p-8 md:p-16">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/3 text-center lg:text-left">
                <div className="bg-brand/20 w-16 h-16 rounded-2xl flex items-center justify-center text-brand mb-6 mx-auto lg:mx-0">
                  <ShieldAlert size={32} />
                </div>
                <h2 className="text-3xl font-black text-white uppercase italic leading-none mb-4">
                  Seguridad y <span className="text-brand-dark">Control</span>
                </h2>
                <p className="text-slate-500 text-sm uppercase tracking-widest font-bold">Resguardo Antidrogas y Normativa</p>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Registro de Exportadores",
                  "Certificado de Origen (VUCE)",
                  "Inspección Antinarcóticos",
                  "Póliza de Seguro de Salida",
                  "Factura de Exportación",
                  "Permisos de Exportación"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-slate-950/50 border border-slate-800 rounded-xl text-slate-300 text-sm font-medium hover:border-brand/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-brand" />
                    {doc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ESTRUCTURA DE FASES */}
        <section className="container mx-auto px-6 mb-32">
          <div className="space-y-12">
            {etapas.map((etapa, eIdx) => (
              <div key={eIdx}>
                <div className="flex items-center gap-6 mb-8">
                  <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent`} />
                  <h3 className={`text-2xl font-black uppercase italic tracking-tighter ${etapa.accent}`}>
                    {etapa.fase}
                  </h3>
                  <div className={`h-px flex-1 bg-gradient-to-r from-transparent via-slate-800 to-transparent`} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {etapa.pasos.map((paso, pIdx) => (
                    <motion.div
                      key={paso.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: pIdx * 0.1 }}
                      className="group relative"
                    >
                      <div className={`h-full bg-slate-900/80 backdrop-blur-sm border ${etapa.borderColor} p-8 rounded-[2rem] hover:bg-slate-900 transition-all duration-500 overflow-hidden`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${etapa.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        <div className="relative z-10">
                          <div className="flex justify-between items-start mb-6">
                            <span className={`text-xs font-black uppercase tracking-[0.3em] opacity-40 ${etapa.accent}`}>
                              Paso {paso.id.toString().padStart(2, '0')}
                            </span>
                          </div>
                          <h4 className="text-white font-bold uppercase text-sm leading-tight tracking-wide group-hover:text-brand transition-colors mb-4">
                            {paso.title}
                          </h4>
                        </div>
                        <div className={`absolute -bottom-4 -right-4 ${etapa.accent} opacity-[0.05] group-hover:opacity-20 transition-all duration-700 pointer-events-none group-hover:scale-125 group-hover:-translate-x-4`}>
                          {React.cloneElement(paso.icon, { size: 100 })}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {eIdx < etapas.length - 1 && (
                  <div className="flex justify-center my-12">
                    <motion.div 
                      animate={{ y: [0, 8, 0] }}
                      transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                      className="text-slate-800"
                    >
                      <ArrowDown size={32} strokeWidth={1} />
                    </motion.div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SECCIÓN PUENTE A IMPORTACIÓN */}
        <section className="container mx-auto px-6 mb-12">
            <div className="max-w-4xl mx-auto p-1 bg-gradient-to-r from-transparent via-brand/20 to-transparent rounded-[2rem]">
                <div className="bg-slate-900/50 backdrop-blur-md p-8 md:p-10 rounded-[1.9rem] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h4 className="text-white font-black uppercase italic text-xl mb-2">¿Su logística requiere importación?</h4>
                        <p className="text-slate-400 text-sm italic">Conozca nuestro flujo especializado para el ingreso seguro de mercancía.[cite: 5]</p>
                    </div>
                    <Link href="/procesos/Imports">
                        <div className="group flex items-center gap-3 px-8 py-4 bg-slate-950 border border-brand/50 text-brand font-black uppercase text-xs tracking-widest rounded-xl hover:bg-brand hover:text-black transition-all cursor-pointer">
                            Ver Ciclo de Importación <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>

        {/* CTA BANNER */}
        <section className="container mx-auto px-6 mb-32 text-center">
          <div className="bg-gradient-to-br from-brand to-yellow-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight italic">
                ¿Listo para Exportar?
              </h2>
              <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium text-lg italic">
                Garantizamos que su producción nacional cumpla con todos los estándares internacionales para un despacho exitoso.[cite: 5]
              </p>
              <Link href="#Contact" className="inline-flex items-center gap-4 px-12 py-5 bg-black text-white font-black uppercase text-sm tracking-[0.2em] rounded-2xl hover:scale-105 transition-all shadow-2xl">
                Consultar Despacho <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </section>

        {/* OTROS SERVICIOS */}
        <section className="bg-slate-900/30 py-24 border-y border-slate-900">
          <div className="container mx-auto px-6 text-center">
            <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-12 italic">Soluciones <span className="text-brand">Complementarias</span></h3>
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
              <span className="font-black uppercase tracking-widest text-[10px]">Registro de Despachos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black uppercase italic text-white">Galería de <span className="text-brand">Exportaciones</span></h2>
          </div>

          <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-20 hidden md:block" />
             <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-20 hidden md:block" />
             
             <motion.div 
               className="flex gap-6 w-max"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ ease: "linear", duration: 70, repeat: Infinity }}
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
             <Link href="/procesos/" className="group flex items-center gap-6 bg-slate-900/50 border border-slate-800 p-2 pl-8 rounded-full hover:border-brand transition-all shadow-xl">
                <span className="text-white font-black uppercase text-[10px] tracking-[0.2em]">Ver todos los casos de éxito</span>
                <div className="bg-brand p-4 rounded-full group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="text-black size-5" />
                </div>
             </Link>
          </div>
        </section>

        {/* CONTACTO */}
        <div id="Contact" className="py-32 bg-white rounded-t-[4rem] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-xs">Aduana de Exportación</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-4">Inicie su <span className="text-yellow-600">Exportación</span></h2>
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