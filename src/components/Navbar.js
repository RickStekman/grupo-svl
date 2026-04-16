"use client";

import { useState, useEffect } from "react"; // Añadimos useEffect
import { MenuIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para el scroll

  // Función para detectar el movimiento del scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navlinks = [
    { href: "/#about", text: "Nosotros" },
    { href: "/servicios", text: "Servicios" },
    { href: "/#news", text: "Noticias" },
    { href: "/#testimonios", text: "Testimonios" },
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 z-50 flex items-center justify-between w-full h-20 px-6 md:px-16 lg:px-24 transition-all duration-300 ${
          isScrolled 
            ? "backdrop-blur-md bg-black/80 border-b border-white/10" // Fondo cuando hay scroll
            : "bg-transparent border-transparent" // Completamente transparente en el Hero
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image 
            src="/Image/GrupoS.V.L.fuLLwhite01.webp" 
            alt="Logo SVL" 
            width={150} 
            height={42} 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-10">
          {navlinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className="text-sm font-bold text-white/90 hover:text-yellow-500 transition-colors uppercase tracking-widest"
            >
              {link.text}
            </Link>
          ))}
          <Link href="#Contact">
            <button className="px-8 py-3 bg-brand hover:bg-dark-brand text-black font-black text-xs uppercase tracking-widest rounded-xl transition-all active:scale-95 shadow-lg shadow-yellow-500/20">
              CONTACTO
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="lg:hidden text-white p-2"
        >
          {isMenuOpen ? <XIcon className="size-7" /> : <MenuIcon className="size-7" /> ? <MenuIcon className="size-7" /> : <MenuIcon className="size-7" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-[40] bg-black flex flex-col items-center justify-center gap-8 lg:hidden"
          >
            {navlinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl text-white font-light hover:text-yellow-500 transition-colors"
              >
                {link.text}
              </Link>
            ))}
            <Link href="#Contact" onClick={() => setIsMenuOpen(false)}>
              <button className="px-10 py-4 bg-brand hover:bg-brand-dark text-black font-bold uppercase tracking-widest rounded-xl">
                CONTACTO
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}