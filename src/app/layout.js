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
  // 1. Título e información para Google (SEO)
  title: "GRUPO S.V.L. | Operador Logístico Integral – Servicios Logísticos Multimodales",
  description: "GRUPO S.V.L. se especializa en servicios logísticos multimodales: manejo de carga nacional e internacional, agenciamiento aduanal, transporte terrestre y soluciones de cadena de suministro. Conectamos su negocio con el mundo.",
  keywords: ["logística", "transporte multimodal", "aduana", "Venezuela", "carga internacional"],

  // 2. Iconos de la web (Favicon)
  icons: {
    icon: "/Image/logosvl 32x32-01.webp",
    apple: "/Image/logosvl 180x180-01.webp",
  },

  // 3. Imágenes para compartir (Open Graph)
  openGraph: {
    title: "GRUPO S.V.L. | Operador Logístico Integral",
    description: "Soluciones logísticas integrales y transporte multimodal.",
    url: "https://www.gruposvl.com",
    siteName: "Grupo S.V.L.",
    images: [
      {
        url: "/Image/logosvl 180x180-01.webp",
        width: 800,
        height: 600,
        alt: "Logo Grupo S.V.L.",
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