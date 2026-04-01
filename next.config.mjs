/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Permite que GitHub Pages sirva el sitio como estático
  reactCompiler: true,
  images: {
    unoptimized: true, // Requerido porque GitHub Pages no soporta la optimización de imágenes de Next.js
  },
  // ESTA ES LA PARTE QUE SOLUCIONA EL SCROLL
  experimental: {
    scrollRestoration: false, 
  },
};

export default nextConfig;