import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ambar Pachuca - Futbolista Profesional',
  description: 'Página oficial de Ambar, jugadora del Pachuca Femenil Sub-19. Conoce su historia, estadísticas, equipos y noticias.',
  keywords: 'Ambar, Pachuca, Futbol, Femenil, Sub-19, Jugadora, Mexico',
  authors: [{ name: 'Team WebAmbar' }],
  icons: {
    icon: [
      {
        url: '/images/ambarlogo.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon.ico',
        sizes: '32x32',
      },
    ],
    apple: [
      {
        url: '/images/ambarlogo.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  },
  openGraph: {
    title: 'Ambar Pachuca - Futbolista Profesional',
    description: 'Página oficial de Ambar, jugadora del Pachuca Femenil Sub-19',
    type: 'website',
    locale: 'es_MX',
    images: [
      {
        url: '/images/ambarlogo.svg',
        width: 1200,
        height: 630,
        alt: 'Ambar Pachuca Logo',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-E64BX8HDTF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-E64BX8HDTF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </div>
      </body>
    </html>
  )
}
