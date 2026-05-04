"use client";

import { motion } from "framer-motion";
import { 
  Truck, Ship, Plane, ClipboardCheck, Globe, 
  ShieldCheck, ArrowRight, CheckCircle2, Navigation
} from "lucide-react";
import Link from "next/link";

// --- COMPONENTES ---
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Contact from "@/components/Contact";

const detailedServices = [
  {
    title: "Agenciamiento Aduanal",
    icon: <ClipboardCheck className="size-12" />,
    href: "/servicios/agenciamiento-aduanal", // Nueva ruta
    desc: "Expertos en la gestión de trámites ante las autoridades aduaneras para asegurar que su mercancía entre o salga del país sin contratiempos.",
    features: [
      "Clasificación arancelaria de mercancías.",
      "Gestión de permisos y licencias especiales.",
      "Liquidación de impuestos y tributos aduanales.",
      "Asesoría en regímenes liberatorios y suspensivos."
    ],
    color: "from-blue-500/20 to-transparent"
  },
  {
    title: "Flete Internacional",
    icon: <Plane className="size-12" />,
    href: "/servicios/flete-internacional", // Nueva ruta
    desc: "Conectamos su negocio con el mundo a través de alianzas estratégicas con las principales navieras y aerolíneas.",
    features: [
      "Transporte marítimo (FCL/LCL) y aéreo.",
      "Seguimiento de carga en tiempo real.",
      "Consolidación de carga en hubs internacionales.",
      "Manejo de carga sobredimensionada o peligrosa."
    ],
    color: "from-yellow-500/20 to-transparent"
  },
  {
    title: "Transporte Terrestre",
    icon: <Truck className="size-12" />,
    href: "/servicios/transporte-terrestre", // Nueva ruta
    desc: "Movilizamos su carga de manera segura desde puertos y aeropuertos hasta sus instalaciones finales en Venezuela.",
    features: [
      "Flota de vehículos monitoreada por GPS.",
      "Traslados estratégicos a Puerto Cabello y Valencia.",
      "Servicio de carga suelta y contenedores completos.",
      "Protocolos de seguridad y escolta si es requerido."
    ],
    color: "from-green-500/20 to-transparent"
  },
  {
    title: "Coordinación Logística",
    icon: <Ship className="size-12" />,
    href: "/servicios/coordinacion-logistica", // Nueva ruta
    desc: "Optimizamos su cadena de suministro mediante una planificación integral que reduce costos y tiempos.",
    features: [
      "Gestión de contratos de compra-venta internacional.",
      "Optimización de rutas de transporte.",
      "Planificación de inventarios y flujo de caja logístico.",
      "Reportes de estatus constantes."
    ],
    color: "from-purple-500/20 to-transparent"
  },
  {
    title: "Almacén Logístico",
    icon: <ShieldCheck className="size-12" />,
    href: "/servicios/almacen-logistico", // Nueva ruta
    desc: "Ofrecemos soluciones de almacenamiento estratégico con altos estándares de seguridad y control.",
    features: [
      "Control de inventarios digitalizado.",
      "Cross-docking y servicios de valor agregado.",
      "Embalaje y etiquetado de mercancía.",
      "Almacenamiento temporal y de larga duración."
    ],
    color: "from-red-500/20 to-transparent"
  },
  {
    title: "Asesoría Técnica",
    icon: <Globe className="size-12" />,
    href: "/servicios/asesoria-tecnica", // Nueva ruta
    desc: "Consultoría especializada para empresas que buscan profesionalizar sus operaciones de comercio exterior.",
    features: [
      "Auditorías preventivas de expedientes aduanales.",
      "Capacitación en normativas vigentes (INCOTERMS).",
      "Análisis de costos de importación/exportación.",
      "Defensa técnica en procesos administrativos."
    ],
    color: "from-cyan-500/20 to-transparent"
  }
];

export default function ServiciosPage() {
  return (
    <>
    <Navbar />
    <main className="bg-slate-950 min-h-screen text-white pb-20">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Image/banner01.webp')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black uppercase mb-6"
          >
            Nuestros <span className="text-brand-dark">Servicios</span>
          </motion.h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrecemos un ecosistema logístico completo diseñado para simplificar sus operaciones de comercio exterior en Venezuela y el mundo.
          </p>
        </div>
      </section>

      {/* DETALLES DE SERVICIOS */}
      <section className="container mx-auto px-6 space-y-12">
        {detailedServices.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-slate-900/40 border border-slate-800 rounded-[2.5rem] overflow-hidden group hover:border-brand/30 transition-all duration-500`}
          >
            {/* Icono y Título Lateral */}
            <div className={`lg:w-1/3 p-12 flex flex-col justify-center items-center text-center bg-gradient-to-br ${service.color}`}>
              <div className="text-brand mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h2 className="text-3xl font-black uppercase leading-tight">{service.title}</h2>
            </div>

            {/* Información Detallada */}
            <div className="lg:w-2/3 p-8 lg:p-16 flex flex-col justify-center">
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3 text-slate-400">
                    <CheckCircle2 className="size-5 text-brand shrink-0 mt-1" />
                    <span className="text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>

              {/* BOTÓN ACTUALIZADO A "CONSULTAR" */}
              <div className="mt-10">
                <Link 
                  href={service.href} 
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-brand hover:text-black px-8 py-3 rounded-full font-bold transition-all text-sm uppercase tracking-widest"
                >
                  Consultar <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CALL TO ACTION FINAL */}
      <section className="container mx-auto px-6 mt-32 text-center">
        <div className="bg-gradient-to-br from-brand to-yellow-300 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Globe className="size-64 text-black" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6 relative z-10">
            ¿Listo para optimizar su logística?
          </h2>
          <p className="text-black/80 text-lg mb-10 max-w-xl mx-auto font-medium relative z-10">
            Nuestro equipo de expertos está listo para asesorarle en su próxima importación o exportación.
          </p>
          <Link 
            href="#Contact" 
            className="inline-block bg-black text-white px-12 py-5 rounded-full font-black uppercase text-sm tracking-[0.2em] hover:scale-105 transition-transform relative z-10"
          >
            Hablemos hoy
          </Link>
        </div>
      </section>

      {/* SECCIÓN DE CONTACTO */}
      <div id="Contact" className="mt-24 py-24 bg-white rounded-t-[3rem]"> 
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