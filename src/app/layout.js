import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop"; // Importante: Asegúrate de que el archivo exista

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.gruposvl.com'), // Ayuda a que las rutas de imágenes sean absolutas
  title: {
    default: "GRUPO S.V.L. | Operador Logístico Integral en Venezuela",
    template: "%s | GRUPO S.V.L." // Esto permite que subpáginas tengan títulos como "Servicios | GRUPO S.V.L."
  },
  description: "Especialistas en servicios logísticos multimodales en Venezuela: agenciamiento aduanal, transporte terrestre nacional e internacional y manejo de carga segura.",
  keywords: ["logística Venezuela", "agente aduanal puerto cabello", "transporte de carga", "aduana la guaira", "operador logístico"],
  
  alternates: {
    canonical: '/',
  },

  icons: {
    icon: "/Image/logosvl 32x32-01.webp",
    apple: "/Image/logosvl 180x180-01.webp",
  },

  openGraph: {
    title: "GRUPO S.V.L. | Conectamos su negocio con el mundo",
    description: "Soluciones integrales de transporte y aduana con cobertura nacional e internacional.",
    url: "https://www.gruposvl.com",
    siteName: "Grupo S.V.L.",
    images: [
      {
        url: "/Image/logosvl 180x180-01.webp", // Recomendado usar una imagen de 1200x630 para mejor visualización
        width: 1200,
        height: 630,
        alt: "Logística Integral Grupo S.V.L.",
      },
    ],
    locale: "es_VE",
    type: "website",
  },
  // 4. Configuración para Twitter
  twitter: {
    card: "summary_large_image",
    title: "GRUPO S.V.L. | Operador Logístico Integral",
    description: "Conectamos tus productos con el mundo de forma segura y eficiente.",
    images: ["/Image/logosvl 180x180-01.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Colocamos ScrollToTop aquí para que se ejecute en cada cambio de ruta.
            Esto garantiza que la página inicie en el tope (0,0) y Framer Motion
            pueda ejecutar las animaciones de entrada correctamente.
        */}
        <ScrollToTop />
        
        {children}
      </body>
    </html>
  );
}