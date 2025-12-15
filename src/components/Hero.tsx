'use client'

import { useState, useEffect } from 'react'

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)
  
  const heroImages = [
    '/images/WhatsApp Image 2025-07-26 at 3.43.24 PM.jpeg',
    '/images/WhatsApp Image 2025-07-26 at 3.44.26 PM.jpeg',
    '/images/WhatsApp Image 2025-07-28 at 9.04.48 PM.jpeg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con efecto moderno */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 transition-all duration-1000">
          <img 
            src={heroImages[currentImage]}
            alt="Ambar en acción"
            className="w-full h-full hero-image"
            style={{
              filter: 'brightness(0.7) contrast(1.2) saturate(1.1)'
            }}
          />
        </div>
        {/* Gradiente moderno con efecto de profundidad */}
        <div className="absolute inset-0 bg-gradient-to-br from-pachuca-blue/80 via-transparent to-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
        
        {/* Patrón decorativo diagonal */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pachuca-gold/30 to-transparent transform skew-x-12"></div>
        </div>
      </div>
      
      {/* Elementos decorativos animados - Balones de fútbol */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 opacity-20 floating-icon">
          <svg viewBox="0 0 24 24" className="w-full h-full text-white">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
            <polygon points="12,6 15,10 15,14 12,18 9,14 9,10" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>
        <div className="absolute top-40 right-20 w-12 h-12 opacity-15 floating-icon-reverse">
          <svg viewBox="0 0 24 24" className="w-full h-full text-pachuca-gold">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 opacity-20 floating-icon" style={{ animationDelay: '2s' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-white">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-1/3 right-10 w-14 h-14 opacity-10 floating-icon-reverse" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 24 24" className="w-full h-full text-pachuca-gold">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
          </svg>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          {/* Badge de estrella */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6">
            <span className="text-pachuca-gold animate-star-pulse">★</span>
            <span className="text-white/90 text-sm font-medium tracking-wider uppercase">Estrella en Ascenso</span>
            <span className="text-pachuca-gold animate-star-pulse">★</span>
          </div>

          {/* Nombre principal con estilo deportivo */}
          <h1 className="font-sport-display tracking-wider">
            <span className="block text-7xl md:text-9xl font-bold text-white drop-shadow-2xl" style={{ textShadow: '4px 4px 0 rgba(245, 158, 11, 0.3)' }}>
              AMBAR
            </span>
            <span className="block text-2xl md:text-4xl font-sport-title text-pachuca-gold mt-4 tracking-widest">
              PACHUCA FEMENIL SUB-19
            </span>
          </h1>
          
          {/* Número de jugadora destacado */}
          <div className="mt-6 flex justify-center items-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-pachuca-gold"></div>
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-sm uppercase tracking-widest">Dorsal</span>
              <span className="font-sport-display text-5xl md:text-6xl text-pachuca-gold animate-glow" style={{ textShadow: '0 0 30px rgba(245, 158, 11, 0.5)' }}>
                56
              </span>
            </div>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-pachuca-gold"></div>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mt-8 mb-10 font-light tracking-wide">
            <span className="text-pachuca-gold font-semibold">Mediocampista</span> • Pasión, Dedicación y Excelencia
          </p>
          
          {/* Botones modernos */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative overflow-hidden bg-gradient-to-r from-pachuca-gold to-yellow-500 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-pachuca-gold/50">
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Conoce Mi Historia
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            <button className="group border-2 border-white/50 text-white hover:bg-white hover:text-pachuca-blue font-bold py-4 px-10 rounded-full transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Ver Estadísticas
              </span>
            </button>
          </div>
        </div>
        
        {/* Stats preview con diseño de tarjetas modernas */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 animate-slideInRight">
          {[
            { value: '2', label: 'Años en Pachuca', color: 'from-blue-500 to-pachuca-blue' },
            { value: '15', label: 'Goles Anotados', color: 'from-pachuca-gold to-yellow-500' },
            { value: '8', label: 'Asistencias', color: 'from-green-500 to-emerald-600' },
            { value: '90%', label: 'Pases Efectivos', color: 'from-purple-500 to-indigo-600' },
          ].map((stat, index) => (
            <div 
              key={index}
              className="group relative glass-effect rounded-2xl p-4 md:p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/70 text-xs md:text-sm font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator moderno */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-pachuca-gold rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Image carousel indicators */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => (
          <button
            key={`hero-indicator-${index}`}
            onClick={() => setCurrentImage(index)}
            className={`transition-all duration-300 ${
              currentImage === index 
                ? 'w-8 h-2 bg-pachuca-gold rounded-full' 
                : 'w-2 h-2 bg-white/40 rounded-full hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Número gigante decorativo */}
      <div className="absolute bottom-10 right-10 font-sport-display text-[12rem] md:text-[20rem] text-white/5 leading-none pointer-events-none select-none hidden lg:block">
        56
      </div>
    </section>
  )
}
