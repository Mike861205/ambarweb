/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  // Mejorar el manejo de variables de entorno
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Configuración específica para Vercel
  experimental: {
    serverComponentsExternalPackages: ['stripe'],
  },
}

module.exports = nextConfig
