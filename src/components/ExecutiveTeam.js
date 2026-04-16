"use client";
import { motion } from "framer-motion";

export default function ExecutiveTeam() {
  const team = [
    { 
      id: 1, 
      name: "LCD. OMAR E. VILLANUEVA", 
      role: "Director Ejecutivo", 
      img: "/Image/Tren1.webp"
    },
    { 
      id: 2, 
      name: "LCDO. ARNOLD J. CARDENAS", 
      role: "Director Ejecutivo", 
      img: "/Image/Tren2.webp"
    },
    { 
      id: 3, 
      name: "LCDO. MIGUEL E. ARMAS", 
      role: "Gerente de Aduanas", 
      img: "/Image/Tren3.webp"
    }
  ];

  return (
    <section id="executive" className="bg-slate-950 text-white pb-20">
      <div className="container mx-auto px-6">
        
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black uppercase tracking-tight"
          >
            Nuestro Tren <span className="text-brand">Ejecutivo</span>
          </motion.h2>
          <div className="w-16 h-1 bg-brand mx-auto mt-4"></div>
          <div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Descubre el recorrido de líderes que impulsan al Grupo S.V.L.
            </p>
          </div>
        </div>

        {/* Grid de Tarjetas Ajustado */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-[280px] lg:w-[320px]" // Tamaño de la card más controlado
            >
              <div className="bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 transition-colors duration-300 hover:border-brand-dark">
                
                {/* Contenedor de Imagen con tamaño controlado */}
                <div className="relative aspect-square overflow-hidden bg-slate-800">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover" // Imagen siempre a color y sin zoom exagerado
                  />
                </div>

                {/* Info Textual - Limpia y sin iconos */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand text-xs font-bold uppercase tracking-widest">
                    {member.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}