"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Truck, Ship, Plane, ClipboardCheck, Globe, 
  ShieldCheck, ArrowRight, Globe2, MapPin, Navigation 
} from "lucide-react";
import Link from "next/link";

// --- Sub-componente para el efecto de conteo ---
function Counter({ target }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    const duration = 2000; // 2 segundos de animación
    const increment = end / (duration / 16); // aproximado a 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
}

export default function Services() {
  const services = [
    {
      title: "Agenciamiento Aduanal",
      desc: "Ofrecemos desaduanamiento para importaciones y exportaciones, coordinando cargas y cumpliendo normativas en el menor tiempo posible.",
      icon: <ClipboardCheck className="size-10" />,
    },
    {
      title: "Flete Internacional",
      desc: "Recolecta de carga en cualquier parte del mundo con entregas en aeropuertos y puertos de Venezuela con asesoría experta.",
      icon: <Plane className="size-10" />,
    },
    {
      title: "Transporte Terrestre",
      desc: "Servicio de retiro de carga suelta y traslados estratégicos a Puerto Cabello o instalaciones del cliente.",
      icon: <Truck className="size-10" />,
    },
    {
      title: "Coordinación Logística",
      desc: "Gestión integral de espacios y contratos de compra-venta para asegurar el flujo de su mercancía.",
      icon: <Ship className="size-10" />,
    },
    {
      title: "Almacén Logístico",
      desc: "Resguardo y manejo eficiente de mercancía en puntos clave para optimizar sus tiempos de entrega.",
      icon: <ShieldCheck className="size-10" />,
    },
    {
      title: "Asesoría Tecnica",
      desc: "Profesionales expertos en aduanas brindan asesoría confiable y segura en cada operación.",
      icon: <Globe className="size-10" />,
    }
  ];

  const aduanasVZLA = [
    "Puerto Cabello", "La Guaira", "Maiquetía", "Valencia", "Maracaibo", "Guaranao", "Y MÁS"
  ];

  return (
    // CONTENEDOR MAESTRO: Aquí unificamos el fondo
    <main className="relative bg-slate-950 overflow-hidden">
      
      {/* --- DECORACIÓN DE FONDO GLOBAL --- */}
      {/* --- DECORACIÓN DE FONDO GLOBAL --- 
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] pointer-events-none opacity-50">
        <div className="absolute inset-0 border border-yellow-500/10 rounded-full animate-[ping_8s_linear_infinite]"></div>
        <div className="absolute inset-40 border border-yellow-500/5 rounded-full animate-[ping_12s_linear_infinite]"></div>
      </div>*/}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/Image/banner01.webp')", // Cambia por el nombre de tu archivo
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Opcional: crea un efecto parallax suave
        }}
      />

      {/* --- SECCIÓN 1: SERVICIOS (Soluciones) --- */}
      <section id="servicios" className="relative z-10 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white uppercase">
              Nuestras <span className="text-brand-dark">Soluciones</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-dark mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              /* CAMBIO: Se añade 'flex flex-col h-full' para manejar el espacio interno */
              className="group p-8 bg-slate-900/50 border border-slate-800 rounded-3xl hover:bg-slate-800/50 hover:border-yellow-500/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="size-16 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-brand mb-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-black transition-all duration-500">
                {s.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{s.title}</h3>
              
              {/* CAMBIO: 'flex-grow' hace que este párrafo ocupe todo el espacio disponible, empujando el botón al fondo */}
              <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                {s.desc}
              </p>

              {/* CAMBIO: 'flex justify-center' y 'w-full' para centrar el botón */}
              <div className="flex justify-center w-full">
                <Link 
                  href="#Contact" 
                  className="inline-flex items-center gap-2 text-brand text-sm font-bold uppercase tracking-widest group-hover:gap-4 transition-all"
                >
                  Consultar <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
        <div className="flex justify-center py-20 pb-1 relative z-10">
          <Link href="/servicios" className="group flex items-center gap-3 px-10 py-4 bg-brand text-black rounded-full font-black uppercase text-xs tracking-widest hover:bg-white transition-all">
            Ver más <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>

      {/* --- SECCIÓN 2: MAP TRACKER --- */}
      <section className="relative z-10 pb-30 border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-yellow-500/20 text-brand text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  <Globe2 className="size-4" /> Presencia Multimodal
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-tight">
                  Desde cualquier puerto del mundo a <span className="text-brand">Venezuela</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Contamos con una red global de agentes que nos permite recolectar su carga en origen y entregarla en cualquier aduana principal o secundaria.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                  {aduanasVZLA.map((aduana, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-300 uppercase tracking-widest">
                      {aduana}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center relative">
            <div className="relative w-full max-w-md aspect-square">
              
              <div className="absolute inset-0 bg-yellow-500/5 rounded-full border border-yellow-500/20 backdrop-blur-xl flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ top: ["-10%", "110%"] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[1px] bg-yellow-500/30 shadow-[0_0_15px_#eab308]"
                />
                <div className="relative z-10 text-center">
                  <Navigation className="size-12 text-yellow-500 mx-auto mb-4 animate-pulse" />
                  
                  {/* AQUÍ ESTÁ EL EFECTO COUNT UP */}
                  <span className="block text-6xl font-black text-white mb-2">
                    <Counter target="100" />%
                  </span>
                  
                  <span className="text-yellow-500 font-bold uppercase text-xs tracking-[0.3em]">
                    Conectividad A nivel mundial
                  </span>
                </div>
              </div>

              {/* Anillos decorativos */}
              <div className="absolute inset-[-10%] border border-white/5 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-[-25%] border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}