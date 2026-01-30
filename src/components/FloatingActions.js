"use client";

import { useState, useEffect } from "react";
import { Instagram, MessageCircle, Facebook } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingActions() {
  const [showButtons, setShowButtons] = useState(false);

  // Detectar scroll para mostrar/ocultar botones
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Aparecen después de 300px de scroll
        setShowButtons(true);
      } else {
        setShowButtons(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {showButtons && (
        <>
          {/* LADO IZQUIERDO: Redes Sociales */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="fixed bottom-8 left-8 z-[60] flex flex-col gap-4"
          >
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/multiservicios_svl/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Instagram size={24} />
            </a>

            {/* Facebook */}
            <a 
              href="https://www.facebook.com/svl.logistica" // Reemplaza con tu link real
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#1877F2] text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300"
            >
              <Facebook size={24} />
            </a>
          </motion.div>

          {/* LADO DERECHO: WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="fixed bottom-8 right-8 z-[60]"
          >
            <a 
              href="https://wa.me/584144997279" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative bg-green-500 text-white p-4 rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-all duration-300 group"
            >
              {/* Efecto Pulso */}
              <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75"></span>
              <MessageCircle size={28} className="relative z-10" />
              
              {/* Tooltip */}
              <span className="absolute right-16 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                ¿Necesitas ayuda? Escríbenos
              </span>
            </a>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}