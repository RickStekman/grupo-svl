"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const philosophy = [
  {
    id: "01",
    title: "MISIÓN",
    description: "Nos enfocamos en satisfacer las necesidades logísticas de importación, exportación y transporte terrestre, ofreciendo tecnología innovadora, talento altamente calificado y prácticas eficientes que garantizan seguridad, calidad y sostenibilidad.",
    image: "/Image/banner.webp", 
  },
  {
    id: "02",
    title: "VISIÓN",
    description: "Ser la empresa prestadora de servicios de soporte logístico de aduanas especializado líder en el mercado, reconocida por brindar procesos eficientes y eficaces que conectan mercados globales.",
    image: "/Image/Gallery/foto07.webp",
  },
  {
    id: "03",
    title: "OBJETIVOS",
    description: "Ofrecemos soluciones logísticas especializadas, garantizando gestión integral, estándares eficientes y sincronización con los sistemas de nuestros clientes para ser aliados estratégicos y fortalecer sus cadenas operativas.",
    image: "/Image/Gallery/foto06.webp",
  },
];

const companies = [
  {
    name: "Multiservicios Logisticos S.V.L.",
    description: "Operador Logístico con presencia en las principales aduanas del país.",
    logo: "/Image/logosvl 180x180-01.webp" // Reemplaza con el logo exacto
  },
  {
    name: "SERVICUSTOMS AGENCY",
    description: "Agentes aduanales expertos en la Aduana Marítima de Puerto Cabello.",
    logo: "/Image/servicustoms v3-01.webp" // Reemplaza con la ruta de tu logo
  },
  {
    name: "SERVICE VALUE LOGISTICS, INC",
    description: "Agentes de carga enfocados en la fluidez de la logística internacional.",
    logo: "/Image/LOGO_SCL_INC-removebg-preview.webp" // Reemplaza con la ruta de tu logo
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- PARTE 1: INTRODUCCIÓN Y EMPRESAS CON LOGOS --- */}
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-32">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img 
                src="/Image/Gallery/foto07.webp" 
                alt="Operaciones Grupo SVL" 
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-xl shadow-xl hidden md:block border-white">
                <span className="block text-3xl font-black text-black leading-none">+20 Años</span>
                <span className="text-black/80 font-bold uppercase text-xs tracking-widest">Experiencia Global</span>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -z-0"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h6 className="text-yellow-600 font-bold uppercase tracking-[0.2em] mb-4 text-sm">
              Estructura Corporativa
            </h6>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight uppercase">
              Tres Empresas, <span className="text-yellow-500">Un Solo Objetivo</span>
            </h2>
            <p className="text-slate-600 mb-10 leading-relaxed text-lg text-justify">
              En el <strong>Grupo SVL</strong> nos especializamos en servicios logísticos multimodales, incluyendo manejo
              de carga nacional e internacional, agenciamiento aduanal, almacenaje y transporte terrestre. 
              Nuestra fuerza reside en la integración de nuestras tres unidades de negocio, diseñadas para
              cubrir cada eslabón de la cadena de suministro:
            </p>
            
            {/* Lista de Empresas con LOGOS */}
            <div className="space-y-8 mb-10">
              {companies.map((company, idx) => (
                <div key={idx} className="flex items-center gap-6 group">
                  <div className="bg-slate-900 w-16 h-16 flex-shrink-0 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-slate-100 group-hover:border-yellow-500 transition-colors shadow-sm">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className=" max-w-full max-h-full object-contain transition-all"
                    />
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 uppercase text-base tracking-wide">{company.name}</h5>
                    <p className="text-sm text-slate-500 leading-snug mt-1">{company.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link href="#Contact" className="inline-block px-10 py-4 bg-slate-900 hover:bg-yellow-500 hover:text-black text-white font-bold rounded-lg transition-all shadow-lg text-xs uppercase tracking-widest">
              Ver Más
            </Link>
          </motion.div>
        </div>

        {/* --- PARTE 2: FILOSOFÍA (DISEÑO WORKFLOW CORREGIDO) --- */}
        <div className="relative mt-20 max-w-7xl mx-auto">
            <div className="text-center mb-24">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter">Nuestra <span className="text-yellow-500">Filosofía</span></h2>
                <div className="w-24 h-1.5 bg-yellow-500 mx-auto mt-4 rounded-full"></div>
            </div>

            <div className="relative">
                {/* Línea central vertical */}
                <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-slate-100 hidden md:block z-0"></div>

                <div className="space-y-24 md:space-y-32">
                    {philosophy.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className={`flex flex-col md:flex-row items-center justify-between w-full relative z-10 ${
                                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                            }`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Imagen (45% ancho) */}
                            <div className="w-full md:w-[45%]">
                                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video md:aspect-square lg:aspect-video">
                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                                </div>
                            </div>

                            {/* Círculo Central */}
                            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-14 h-14 bg-white border-4 border-brand rounded-full shadow-xl z-20">
                                <span className="text-lg font-black text-slate-900">{item.id}</span>
                            </div>

                            {/* Texto (45% ancho) */}
                            <div className={`w-full md:w-[45%] mt-8 md:mt-0 ${
                                index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                            }`}>
                                <span className="md:hidden text-yellow-500 font-black text-4xl block mb-2">{item.id}</span>
                                <h3 className="text-3xl font-black text-slate-900 uppercase mb-4 tracking-tight">{item.title}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed text-justify md:text-inherit">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}