"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  ArrowLeft, ArrowRight, MapPin, Building2, 
  Users2, History, Globe2, Award, CheckCircle2,
  Anchor, Plane, Truck, ClipboardCheck
} from "lucide-react";

// --- COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

export default function AboutPage() {
  const [activeCede, setActiveCede] = useState(0);

  const stats = [
    { label: "Años de Experiencia", value: "+20", icon: <History className="size-5" /> },
    { label: "Expertos Calificados", value: "+50", icon: <Users2 className="size-5" /> },
    { label: "Países Conectados", value: "+100", icon: <Globe2 className="size-5" /> },
    { label: "Operaciones Exitosas", value: "+15k", icon: <Award className="size-5" /> },
  ];

  const companiesDetailed = [
    {
      name: "Multiservicios Logísticos S.V.L.",
      role: "Operador Logístico Integral",
      desc: "Nuestra unidad principal encargada de la sincronización de la cadena de suministro. Gestionamos la logística desde el punto de origen hasta el destino final.",
      features: ["Transporte Multimodal", "Almacenaje Seguro", "Distribución Nacional"],
      logo: "/Image/logosvl 180x180-01.webp"
    },
    {
      name: "Servicustoms Agency",
      role: "Agenciamiento Aduanal",
      desc: "Especialistas en la normativa legal y técnica del SENIAT. Con base en Puerto Cabello, facilitamos la nacionalización y exportación.",
      features: ["Clasificación Arancelaria", "Valoración Aduanera", "Regímenes Especiales"],
      logo: "/Image/servicustoms v3-01.webp"
    },
    {
      name: "Service Value Logistics, Inc",
      role: "Agente de Carga Internacional",
      desc: "Nuestra ventana al mundo. Enfocada en la consolidación de carga, fletamento internacional y la gestión de alianzas globales.",
      features: ["Booking Internacional", "Consolidación LCL/FCL", "Seguro de Carga"],
      logo: "/Image/LOGO_SCL_INC-removebg-preview.webp"
    }
  ];

  const cedes = [
    {
      city: "Puerto Cabello",
      state: "Edo. Carabobo",
      desc: "Nuestra sede principal y centro de operaciones aduanales. Ubicada estratégicamente cerca del puerto más importante de Venezuela.",
      address: "Calle Municipio, Edif. S.V.L., Puerto Cabello.",
      image: "/Image/Gallery/cede01.webp",
      icon: <Anchor size={32} />
    },
    {
      city: "La Guaira",
      state: "Edo. La Guaira",
      desc: "Punto clave para nuestras operaciones marítimas y aéreas en la capital. Gestionamos con agilidad el flujo por Maiquetía y el Puerto.",
      address: "Centro Empresarial, Ofic. S.V.L., La Guaira.",
      image: "/Image/Gallery/cede03.webp",
      icon: <Plane size={32} />
    },
    {
      city: "Valencia",
      state: "Edo. Carabobo",
      desc: "Centro administrativo y de coordinación de transporte terrestre. Desde la capital industrial, monitoreamos nuestra flota nacional.",
      address: "Av. Bolívar Norte, Torre Empresarial, Valencia.",
      image: "/Image/Gallery/cede02.webp",
      icon: <Truck size={32} />
    }
  ];

  return (
    <>
      <Navbar />
      
      <main className="bg-white min-h-screen pt-32 overflow-hidden">
        
        {/* HERO SECTION CON ANIMACIONES PROFESIONALES */}
        <section className="container mx-auto px-6 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-yellow-600 transition-colors mb-8 font-bold text-sm uppercase tracking-widest group">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-yellow-600 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
              >
                Trayectoria y Solidez
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-black text-slate-900 mb-8 uppercase leading-[0.9] italic"
              >
                La Fuerza del <br /> <span className="text-yellow-500">Grupo S.V.L.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-slate-600 text-lg md:text-xl leading-relaxed mb-10 text-justify"
              >
                Somos una corporación venezolana nacida con la misión de transformar la logística en una ventaja competitiva. Hemos integrado servicios de aduana, transporte y carga internacional para ofrecer <strong>Logística sin fronteras.</strong>
              </motion.p>

              {/* Contenedor de stats con stagger effect */}
              <motion.div 
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.5 }
                  }
                }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div 
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      show: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ y: -5, borderColor: "#EAB308" }} // Efecto hover profesional
                    className="p-6 bg-slate-50 rounded-2xl border border-slate-100 transition-colors duration-300 group cursor-default shadow-sm hover:shadow-md"
                  >
                    <div className="text-yellow-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                    </div>
                    <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group border border-slate-100">
                <img 
                  src="/Image/Gallery/foto07.webp" 
                  alt="Equipo SVL" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECCIÓN EMPRESAS DETALLADAS - LOGOS OPTIMIZADOS */}
        <section className="bg-slate-900 py-32 rounded-t-[4rem]">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic">
                Nuestras <span className="text-brand">Unidades de Negocio</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {companiesDetailed.map((company, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-950/50 border border-slate-800 p-10 rounded-[3rem] hover:border-brand/50 transition-all group flex flex-col items-center text-center"
                >
                  <div className="w-32 h-32 mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500 relative">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="max-w-full max-h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.05)]" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-black text-white uppercase mb-2 italic">{company.name}</h3>
                  <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-6 block">{company.role}</span>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {company.desc}
                  </p>
                  <ul className="space-y-3 w-full">
                    {company.features.map((feat, j) => (
                      <li key={j} className="flex items-center justify-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-wide">
                        <CheckCircle2 size={14} className="text-brand shrink-0" /> {feat}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN INTERACTIVA DE SEDES (OSCURA) */}
        <section className="py-32 bg-slate-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic mb-12">
                  Infraestructura <br /> <span className="text-brand">Estratégica</span>
                </h2>
                
                <div className="space-y-4">
                  {cedes.map((cede, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveCede(i)}
                      className={`w-full flex items-center gap-6 p-6 rounded-[2rem] border transition-all duration-500 text-left ${
                        activeCede === i 
                        ? "border-brand bg-brand/10" 
                        : "border-slate-800 bg-slate-900/30 hover:border-slate-700"
                      }`}
                    >
                      <div className={`shrink-0 p-4 rounded-2xl transition-colors ${activeCede === i ? "bg-brand text-black" : "bg-slate-800 text-slate-500"}`}>
                        {React.cloneElement(cede.icon, { size: 24 })}
                      </div>
                      <div>
                        <h4 className={`text-xl font-black uppercase italic leading-none mb-1 ${activeCede === i ? "text-white" : "text-slate-400"}`}>
                          {cede.city}
                        </h4>
                        <span className={`text-xs font-bold uppercase tracking-widest ${activeCede === i ? "text-brand" : "text-slate-600"}`}>
                          {cede.state}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCede}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6 }}
                      className="w-full h-full relative"
                    >
                      <img 
                        src={cedes[activeCede].image} 
                        alt={cedes[activeCede].city} 
                        className="w-full h-full object-cover grayscale-[0.3]" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-10">
                        <p className="text-white text-lg leading-relaxed mb-6 italic font-medium">
                          "{cedes[activeCede].desc}"
                        </p>
                        <div className="flex items-center gap-3 py-3 px-5 bg-brand rounded-xl w-fit">
                          <MapPin size={18} className="text-black" />
                          <span className="text-black text-[11px] font-black uppercase tracking-widest">
                            {cedes[activeCede].address}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="bg-white py-32">
          <div className="container mx-auto px-6">
            <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] group-hover:bg-brand/10 transition-all duration-700"></div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-6xl font-black text-white uppercase italic leading-[1.1] mb-8">
                  Impulse su negocio <br /> con <span className="text-brand text-glow">Expertos.</span>
                </h2>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <a href="#Contact" className="px-12 py-5 bg-brand text-black font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl">
                    Agendar Consultoría
                  </a>
                  <Link href="/servicios" className="text-white font-black uppercase text-xs tracking-widest hover:text-brand transition-colors flex items-center gap-2 group">
                    Explorar Servicios <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <div id="Contact" className="py-32 bg-slate-50"> 
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="text-yellow-600 font-black uppercase tracking-[0.3em] text-xs">Atención al Cliente</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic mt-4">Estamos donde nos <span className="text-yellow-600">Necesite</span></h2>
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