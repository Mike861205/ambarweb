'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#inicio', label: 'Inicio', icon: '🏠' },
    { href: '#historia', label: 'Historia', icon: '📖' },
    { href: '#estadisticas', label: 'Estadísticas', icon: '📊' },
    { href: '#equipos', label: 'Equipos', icon: '⚽' },
    { href: '#noticias', label: 'Noticias', icon: '📰' },
    { href: '#galeria', label: 'Galería', icon: '📸' },
    { href: '#tienda', label: 'Tienda', special: true, icon: '🛒' },
    { href: '#contacto', label: 'Contacto', icon: '✉️' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo modernizado */}
          <div className="flex-shrink-0">
            <Link href="#inicio" className="flex items-center space-x-2 md:space-x-3 group">
              {/* Logo SVG con efecto */}
              <div className="relative">
                <div className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
                  scrolled ? 'bg-pachuca-blue' : 'bg-white/20 backdrop-blur-sm'
                } group-hover:scale-110`}>
                  <img 
                    src="/images/ambarlogo.svg" 
                    alt="Ambar Logo" 
                    className="w-8 h-8 md:w-10 md:h-10 object-contain"
                  />
                </div>
                {/* Efecto de brillo */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pachuca-gold/0 via-pachuca-gold/30 to-pachuca-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Texto del logo */}
              <div className="flex flex-col">
                <span className={`text-xl md:text-2xl font-sport-display tracking-wider transition-colors ${
                  scrolled ? 'text-pachuca-blue' : 'text-white'
                }`}>
                  AMBAR
                </span>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest text-pachuca-gold">
                  PACHUCA #56
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                let buttonClass = 'relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 '
                
                if (item.special) {
                  buttonClass += 'bg-gradient-to-r from-pachuca-gold to-yellow-500 text-white hover:shadow-lg hover:shadow-pachuca-gold/30 hover:scale-105'
                } else if (scrolled) {
                  buttonClass += 'text-gray-700 hover:text-pachuca-blue hover:bg-pachuca-blue/10'
                } else {
                  buttonClass += 'text-white/90 hover:text-white hover:bg-white/10'
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={buttonClass}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-300 ${
                scrolled 
                  ? 'text-gray-700 hover:bg-pachuca-blue/10' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu modernizado */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 py-4 bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100">
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  item.special 
                    ? 'bg-gradient-to-r from-pachuca-gold to-yellow-500 text-white shadow-md' 
                    : 'text-gray-700 hover:text-pachuca-blue hover:bg-pachuca-blue/10'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Info adicional en móvil */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
              <span>⚽</span>
              <span>Pachuca Femenil Sub-19</span>
              <span>•</span>
              <span className="text-pachuca-gold font-bold">#56</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
