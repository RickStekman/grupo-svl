"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import Link from "next/link";

export default function News() {
  const articles = [
    {
      title: "Nuevas regulaciones aduanales 2026",
      excerpt: "Conozca los cambios principales en la normativa de nacionalización para este primer trimestre.",
      date: "20 Ene, 2026",
      author: "Dpto. Legal",
      image: "/Image/News/news-01.webp", // Asegúrate de tener estas imágenes o usa placeholders
    },
    {
      title: "Optimización de rutas marítimas",
      excerpt: "Cómo la nueva logística multimodal está reduciendo los tiempos de espera en puertos principales.",
      date: "15 Ene, 2026",
      author: "Operaciones",
      image: "/Image/News/news-01.webp",
    },
    {
      title: "El futuro de la carga terrestre",
      excerpt: "Implementación de sistemas de rastreo satelital de última generación en nuestra flota.",
      date: "10 Ene, 2026",
      author: "Logística",
      image: "/Image/News/news-01.webp",
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h6 className="text-yellow-600 font-bold uppercase tracking-[0.2em] mb-3 text-sm">Actualidad y Noticias</h6>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
              Noticias y Artículos de <span className="text-yellow-500">Interés</span>
            </h2>
          </div>
          <Link href="#" className="text-slate-900 font-bold flex items-center gap-2 hover:text-yellow-600 transition-colors border-b-2 border-yellow-500 pb-1">
            Ver todo el blog <ArrowRight size={20} />
          </Link>
        </div>

        {/* Grid de Noticias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((post, index) => (
            <motion.article 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Imagen de la noticia */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase">
                  Logística
                </div>
              </div>

              {/* Meta información */}
              <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                <div className="flex items-center gap-1">
                  <Calendar size={14} /> {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} /> {post.author}
                </div>
              </div>

              {/* Título y extracto */}
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-yellow-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              <span className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                Leer más <ArrowRight size={16} className="text-yellow-500" />
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}