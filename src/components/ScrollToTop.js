"use client";

import { useEffect, useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Usamos useLayoutEffect porque se ejecuta de forma síncrona 
  // ANTES de que el navegador pinte la pantalla
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Importante: "instant" para que no haya transición
    });
  }, [pathname]);

  return null;
}