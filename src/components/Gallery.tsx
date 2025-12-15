'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'Todas', icon: '🏆' },
    { id: 'training', name: 'Entrenamientos', icon: '⚡' },
    { id: 'matches', name: 'Partidos', icon: '⚽' },
    { id: 'celebrations', name: 'Celebraciones', icon: '🎉' },
    { id: 'team', name: 'Equipo', icon: '👥' }
  ]

  const images = [
    { 
      id: 1, 
      category: 'matches', 
      title: 'En acción durante el partido', 
      description: 'Ambar en pleno juego demostrando su técnica',
      src: '/images/WhatsApp Image 2025-07-26 at 3.43.24 PM.jpeg',
      position: 'object-[center_20%]'
    },
    { 
      id: 2, 
      category: 'training', 
      title: 'Entrenamiento técnico', 
      description: 'Perfeccionando la técnica individual',
      src: '/images/WhatsApp Image 2025-07-26 at 3.43.24 PM (1).jpeg',
      position: 'object-[center_15%]'
    },
    { 
      id: 3, 
      category: 'celebrations', 
      title: 'Momento de celebración', 
      description: 'Festejando un logro importante',
      src: '/images/WhatsApp Image 2025-07-26 at 3.44.26 PM.jpeg',
      position: 'object-[center_25%]'
    },
    { 
      id: 4, 
      category: 'team', 
      title: 'Con el equipo', 
      description: 'Junto a sus compañeras del Pachuca',
      src: '/images/WhatsApp Image 2025-07-26 at 3.44.26 PM (1).jpeg',
      position: 'object-[center_20%]'
    },
    { 
      id: 5, 
      category: 'matches', 
      title: 'Concentración total', 
      description: 'Preparándose para la siguiente jugada',
      src: '/images/WhatsApp Image 2025-07-26 at 3.44.27 PM (2).jpeg',
      position: 'object-[center_15%]'
    },
    { 
      id: 6, 
      category: 'training', 
      title: 'Sesión de entrenamiento', 
      description: 'Trabajando en la preparación física',
      src: '/images/ambar1.jpeg',
      position: 'object-[center_20%]'
    },
    { 
      id: 7, 
      category: 'celebrations', 
      title: 'Logro personal', 
      description: 'Celebrando un momento especial',
      src: '/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (1).jpeg',
      position: 'object-[center_25%]'
    },
    { 
      id: 8, 
      category: 'team', 
      title: 'Espíritu de equipo', 
      description: 'Mostrando la unión del grupo',
      src: '/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (2).jpeg',
      position: 'object-[center_15%]'
    },
    { 
      id: 9, 
      category: 'matches', 
      title: 'En el campo de juego', 
      description: 'Dando lo mejor en cada partido',
      src: '/images/WhatsApp Image 2025-07-28 at 9.04.48 PM.jpeg',
      position: 'object-[center_20%]'
    }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section id="galeria" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 border-2 border-pachuca-blue rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 border-2 border-pachuca-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-gray-300 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con estilo deportivo */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pachuca-blue/10 rounded-full mb-4">
            <span className="text-pachuca-gold">📸</span>
            <span className="text-pachuca-blue text-sm font-semibold uppercase tracking-wider">Momentos Destacados</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sport-title font-bold text-neutral-dark mb-6">
            <span className="text-gradient-blue">Galería</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Momentos especiales capturados dentro y fuera del campo
          </p>
        </div>

        {/* Category Filter con diseño moderno */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pachuca-blue to-blue-600 text-white shadow-lg shadow-pachuca-blue/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg border border-gray-200'
              }`}
            >
              <span className={`transition-transform duration-300 ${selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {category.icon}
              </span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid con diseño moderno */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(image.id)}
              role="button"
              tabIndex={0}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              {/* Contenedor de imagen con aspect ratio */}
              <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img 
                  src={image.src}
                  alt={image.title}
                  className={`w-full h-full object-cover ${image.position} group-hover:scale-110 transition-transform duration-700`}
                />
                {/* Overlay gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                {/* Badge de categoría */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-pachuca-blue opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  {categories.find(c => c.id === image.category)?.name}
                </div>

                {/* Icono de expandir */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-pachuca-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
              
              {/* Info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-sm text-white/80">{image.description}</p>
              </div>

              {/* Borde decorativo */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pachuca-gold/50 rounded-3xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => e.key === 'Escape' && setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <img 
                src={images.find(img => img.id === selectedImage)?.src}
                alt=""
                className="w-full h-full object-contain rounded-2xl"
              />
              <button 
                className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Call to Action modernizado */}
        <div className="mt-20">
          <div className="relative bg-gradient-to-br from-pachuca-blue via-blue-600 to-indigo-700 rounded-3xl p-10 text-white overflow-hidden">
            {/* Decoración de fondo */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pachuca-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="animate-pulse">🔴</span>
                <span className="text-sm font-medium">Contenido Exclusivo</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Sígueme en Redes Sociales</h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Para más fotos, videos exclusivos y contenido detrás de cámaras de mi carrera deportiva
              </p>
              <div className="flex justify-center gap-4">
                <button className="group bg-white/20 hover:bg-white hover:text-pachuca-blue p-4 rounded-2xl transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </button>
                <button className="group bg-white/20 hover:bg-white hover:text-pachuca-blue p-4 rounded-2xl transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="group bg-white/20 hover:bg-white hover:text-red-600 p-4 rounded-2xl transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </button>
                <button className="group bg-white/20 hover:bg-white hover:text-blue-600 p-4 rounded-2xl transition-all duration-300 hover:scale-110">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
