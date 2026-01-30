"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <Image 
              src="/Image/GrupoS.V.L.fuLLwhite01.webp" 
              alt="Logo SVL" 
              width={180} 
              height={50} 
              className="mb-6"
            />
            <p className="text-slate-400 leading-relaxed">
              Líderes en soluciones logísticas integrales. Conectamos tus productos con el mundo de forma segura, eficiente y puntual.
            </p>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-dark pl-3">Navegación</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#about" className="hover:text-brand-dark transition-colors">Nosotros</Link></li>
              <li><Link href="#servicios" className="hover:text-brand-dark transition-colors">Servicios</Link></li>
              <li><Link href="#news" className="hover:text-brand-dark transition-colors">Noticias</Link></li>
              <li><Link href="#Contact" className="hover:text-brand-dark transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-l-4 border-brand-dark pl-3">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-dark" /> +58 414-4997279
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-dark" /> contacto@gruposvl.com
              </li>
              <li className="flex items-center gap-4 pt-4">
                <Link href="https://www.instagram.com/multiservicios_svl/" className="p-2 bg-slate-900 rounded-full hover:bg-brand-dark hover:text-black transition-all">
                  <Instagram size={20} />
                </Link>
                <Link href="https://www.facebook.com/svl.logistica" className="p-2 bg-slate-900 rounded-full hover:bg-brand-dark hover:text-black transition-all">
                  <Facebook size={20} />
                </Link>
                <Link href="https://wa.me/584144997279" className="p-2 bg-slate-900 rounded-full hover:bg-brand-dark hover:text-black transition-all">
                  <Phone size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Multiservicios Logisticos S.V.L. SERVICUSTOMS AGENCY & SERVICE VALUE LOGISTICS INC | Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}