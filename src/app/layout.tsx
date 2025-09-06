import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ambar Pachuca - Futbolista Profesional',
  description: 'Página oficial de Ambar, jugadora del Pachuca Femenil Sub-19. Conoce su historia, estadísticas, equipos y noticias.',
  keywords: 'Ambar, Pachuca, Futbol, Femenil, Sub-19, Jugadora, Mexico',
  authors: [{ name: 'Team WebAmbar' }],
  openGraph: {
    title: 'Ambar Pachuca - Futbolista Profesional',
    description: 'Página oficial de Ambar, jugadora del Pachuca Femenil Sub-19',
    type: 'website',
    locale: 'es_MX',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
}
