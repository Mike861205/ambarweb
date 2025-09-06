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
      {/* Background with gradient overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 transition-all duration-1000">
          <img 
            src={heroImages[currentImage]}
            alt="Ambar en acción"
            className="w-full h-full hero-image"
            style={{
              filter: 'brightness(0.85) contrast(1.1) saturate(1.1)'
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pachuca-gold/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/15 rounded-full animate-pulse delay-300"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="block">AMBAR</span>
            <span className="block text-pachuca-gold text-3xl md:text-5xl font-semibold mt-2">
              Pachuca Femenil Sub-19
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-medium">
            Pasión, Dedicación y Excelencia en el Fútbol
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-pachuca-gold hover:bg-yellow-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Conoce Mi Historia
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-pachuca-blue font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg">
              Ver Estadísticas
            </button>
          </div>
        </div>
        
        {/* Stats preview */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slideInRight">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">2</div>
            <div className="text-white/80 font-medium">Años en Pachuca</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pachuca-gold">15</div>
            <div className="text-white/80 font-medium">Goles Anotados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white">8</div>
            <div className="text-white/80 font-medium">Asistencias</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pachuca-gold">90%</div>
            <div className="text-white/80 font-medium">Pases Efectivos</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Image carousel indicators */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroImages.map((image, index) => (
          <button
            key={`hero-indicator-${index}`}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index 
                ? 'bg-pachuca-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
