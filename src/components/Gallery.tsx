'use client'

import { useState } from 'react'

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Todas' },
    { id: 'training', name: 'Entrenamientos' },
    { id: 'matches', name: 'Partidos' },
    { id: 'celebrations', name: 'Celebraciones' },
    { id: 'team', name: 'Equipo' }
  ]

  const images = [
    { id: 1, category: 'matches', title: 'Gol decisivo', description: 'Celebrando el gol de la victoria' },
    { id: 2, category: 'training', title: 'Entrenamiento técnico', description: 'Perfeccionando la técnica individual' },
    { id: 3, category: 'celebrations', title: 'Campeona del mes', description: 'Recibiendo el reconocimiento mensual' },
    { id: 4, category: 'team', title: 'Con mis compañeras', description: 'Foto oficial del equipo Sub-19' },
    { id: 5, category: 'matches', title: 'En acción', description: 'Durante el partido vs Atlas' },
    { id: 6, category: 'training', title: 'Preparación física', description: 'Sesión de entrenamiento físico' },
    { id: 7, category: 'celebrations', title: 'MVP del partido', description: 'Mejor jugadora del encuentro' },
    { id: 8, category: 'team', title: 'Capitana', description: 'Con la cinta de capitana' },
    { id: 9, category: 'matches', title: 'Tiro libre', description: 'Ejecutando un tiro libre' }
  ]

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Galería
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Momentos especiales capturados dentro y fuera del campo
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                selectedCategory === category.id
                  ? 'bg-pachuca-blue text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-gradient-to-br from-pachuca-blue to-blue-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              {/* Placeholder for image */}
              <div className="aspect-square bg-gradient-to-br from-pachuca-blue to-blue-500 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">📸</div>
                  <div className="text-sm opacity-75">Imagen próximamente</div>
                </div>
              </div>
              
              {/* Image overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-end">
                <div className="p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Sígueme en Redes Sociales</h3>
            <p className="text-blue-100 mb-6">
              Para más fotos y videos exclusivos de mi carrera deportiva
            </p>
            <div className="flex justify-center gap-6">
              <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-200">
                <span className="text-2xl">📱</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-200">
                <span className="text-2xl">📷</span>
              </button>
              <button className="bg-white/20 hover:bg-white/30 p-4 rounded-full transition-colors duration-200">
                <span className="text-2xl">🎥</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
