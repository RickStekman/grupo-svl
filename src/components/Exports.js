"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  User, FileText, Monitor, Container, Shield, 
  CheckSquare, Stamp, Landmark, Building2, 
  UserCheck, ClipboardCheck, Ship, LandmarkIcon,
  FileBox, Send, Receipt, ArrowDown
} from "lucide-react";

const Exports = () => {
  const [hoveredStep, setHoveredStep] = useState(null);

  const etapas = [
    {
      fase: "01. Gestión Inicial",
      color: "from-yellow-500/20 to-transparent",
      pasos: [
        { id: 1, title: "Ingreso del Equipo Full", icon: <User /> },
        { id: 2, title: "Recepción de Documentos", icon: <FileText /> },
        { id: 3, title: "Manifiesto SIDUNEA World", icon: <Monitor /> },
        { id: 4, title: "Movimiento de Contenedor", icon: <Container /> },
      ]
    },
    {
      fase: "02. Inspección y Seguridad",
      color: "from-blue-500/20 to-transparent",
      pasos: [
        { id: 5, title: "Solicitud GN (Antidroga)", icon: <Shield /> },
        { id: 6, title: "Reconocimiento GN", icon: <CheckSquare /> },
        { id: 7, title: "Recolección Sellos GN", icon: <Stamp /> },
      ]
    },
    {
      fase: "03. Proceso Aduanal",
      color: "from-brand/20 to-transparent",
      pasos: [
        { id: 8, title: "Presentación en Aduana", icon: <Landmark /> },
        { id: 9, title: "Dpto. Confrontación", icon: <Building2 /> },
        { id: 10, title: "Asignación Funcionario", icon: <UserCheck /> },
        { id: 11, title: "Validación DUA", icon: <ClipboardCheck /> },
      ]
    },
    {
      fase: "04. Despacho Marítimo",
      color: "from-emerald-500/20 to-transparent",
      pasos: [
        { id: 12, title: "Recolección Último Sello", icon: <Stamp /> },
        { id: 13, title: "Entrega DUA a la Línea", icon: <FileText /> },
        { id: 14, title: "Confirmación Embarque", icon: <Ship /> },
      ]
    },
    {
      fase: "05. Cierre y Facturación",
      color: "from-purple-500/20 to-transparent",
      pasos: [
        { id: 15, title: "Impuestos Municipales", icon: <LandmarkIcon /> },
        { id: 16, title: "Armado para Facturación", icon: <FileBox /> },
        { id: 17, title: "Documentos al Cliente", icon: <Send /> },
        { id: 18, title: "Entrega a Facturación", icon: <Receipt /> },
      ]
    }
  ];

  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      {/* Luces de fondo */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-brand font-black uppercase tracking-[0.4em] text-xs"
          >
            Logística Profesional
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white uppercase italic mt-4"
          >
            Flujo de <span className="text-brand">Exportación</span>
          </motion.h2>
        </div>

        <div className="max-w-7xl mx-auto">
          {etapas.map((etapa, eIdx) => (
            <div key={eIdx} className="mb-20 last:mb-0">
              {/* Separador de Etapa */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px w-12 bg-brand"></div>
                <h3 className="text-brand font-black uppercase tracking-widest text-sm italic">{etapa.fase}</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-brand/30 to-transparent"></div>
              </motion.div>

              {/* Contenedor Flex para centrado perfecto de elementos impares */}
              <div className="flex flex-wrap justify-center gap-6">
                {etapa.pasos.map((paso, pIdx) => (
                  <motion.div
                    key={paso.id}
                    onMouseEnter={() => setHoveredStep(paso.id)}
                    onMouseLeave={() => setHoveredStep(null)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: pIdx * 0.1 }}
                    className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(25%-1.5rem)] min-w-[260px] relative group"
                  >
                    <div className={`h-full p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800 transition-all duration-500 overflow-hidden relative ${hoveredStep === paso.id ? 'border-brand/60 shadow-[0_0_40px_rgba(234,179,8,0.07)]' : ''}`}>
                      
                      {/* 1. DESTELLO (GLOW) CORREGIDO CON REDONDEO */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${etapa.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2.5rem]`}></div>

                      <div className="relative z-10">
                        {/* Icono Principal */}
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 ${hoveredStep === paso.id ? 'bg-brand text-black scale-110 shadow-lg shadow-brand/20' : 'bg-slate-950 text-brand border border-slate-800'}`}>
                          {React.cloneElement(paso.icon, { size: 28 })}
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <span className="text-[10px] font-black text-slate-600 mt-1">{paso.id.toString().padStart(2, '0')}</span>
                          <h4 className="text-white font-bold uppercase text-sm leading-tight tracking-wide group-hover:text-brand transition-colors">
                            {paso.title}
                          </h4>
                        </div>
                      </div>

                      {/* 2. ICONO DE FONDO CORREGIDO (DENTRO DEL MARCO) */}
                      <div className="absolute -bottom-4 -right-4 text-brand opacity-[0.03] group-hover:opacity-10 transition-all duration-700 pointer-events-none group-hover:scale-125 group-hover:-translate-x-4 group-hover:-translate-y-4">
                         {React.cloneElement(paso.icon, { size: 100 })}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Flecha de conexión entre etapas */}
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
      </div>
    </section>
  );
};

export default Exports;