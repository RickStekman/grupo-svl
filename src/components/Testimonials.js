"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Andrés Mendoza",
      role: "Gerente de Importaciones",
      content: "El servicio de agenciamiento aduanal de Grupo S.V.L. es impecable. Logramos nacionalizar nuestra carga en tiempo récord.",
      rating: 5
    },
    {
      name: "María Fernanda Gil",
      role: "Directora de Logística",
      content: "La seguridad que brindan en el transporte terrestre nos da una tranquilidad que no habíamos encontrado en otros operadores.",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Exportador Independiente",
      content: "Excelente atención y asesoría constante. Se nota la experiencia que tienen en el manejo de carga multimodal.",
      rating: 5
    }
  ];

  // Lista de logos (basada en tu index.html original)
  const logos = [
    "/Image/Clientes/Logo Redvital.webp",
    "/Image/Clientes/logo mazda.webp",
    "/Image/Clientes/logo peugeot.webp",
    "/Image/Clientes/logo cabel.webp",
    "/Image/Clientes/logo glassvenca.webp",
    "/Image/Clientes/logo azufrenca.webp",
    "/Image/Clientes/logo masia.webp",
    "/Image/Clientes/logo cde.webp",
    "/Image/Clientes/logo guarani.webp",
    "/Image/Clientes/logo plasticos.webp",
    "/Image/Clientes/logo unidas.webp",
    "/Image/Clientes/logo lecomp.webp",
    "/Image/Clientes/Logo Produvisa.webp",
    "/Image/Clientes/logo pemco.webp",
    "/Image/Clientes/logo AJEVEN.webp",
    "/Image/Clientes/logo casa fresca.webp",
    "/Image/Clientes/logo astom.webp",
    "/Image/Clientes/logo revinca.webp",
  ];

  return (
    <section id="testimonios" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* === SECCIÓN TESTIMONIOS === */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h6 className="text-yellow-600 font-bold uppercase tracking-widest mb-3">Testimonios</h6>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">
              Confianza que cruza <span className="text-yellow-500">fronteras</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-center relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-500 p-3 rounded-full text-black shadow-lg">
                <Quote size={20} fill="currentColor" />
              </div>
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed text-center">
                "{item.content}"
              </p>
              <div className="mt-auto text-center">
                <h4 className="text-lg font-bold text-slate-900">{item.name}</h4>
                <p className="text-sm text-yellow-600 font-medium">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* === SECCIÓN CARRUSEL DE MARCAS === */}
        <div className="border-t border-slate-200 pt-16">
          <h3 className="text-center text-slate-400 font-bold uppercase tracking-widest mb-10 text-sm">
            Empresas que confían en nosotros
          </h3>
          
          {/* Contenedor del Slider */}
          <div className="relative w-full overflow-hidden mask-gradient">
            {/* Pista Deslizante */}
            <div className="flex w-max animate-scroll gap-12 items-center">
              
              {/* Renderizamos los logos DOS VECES para crear el efecto infinito */}
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 md:w-40 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100 cursor-pointer">
                  <img 
                    src={logo} 
                    alt={`Cliente ${index}`} 
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}