'use client'

import { useState } from 'react'
import PurchaseModal from './PurchaseModal'

interface Product {
  id: number
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  category: string
  sizes?: string[]
  colors?: string[]
  badge?: string
  rating?: number
}

const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Oficial Ambar #56",
    description: "Camiseta oficial con el nombre y número de Ambar. Material de alta calidad deportiva.",
    price: 599,
    originalPrice: 799,
    image: "/images/WhatsApp Image 2025-07-26 at 3.43.24 PM.jpeg",
    category: "camisetas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul Pachuca", "Blanco", "Negro"],
    badge: "🔥 Más Vendido",
    rating: 5
  },
  {
    id: 2,
    name: "Playera Casual Fan",
    description: "Playera casual cómoda para el día a día con logo de Ambar bordado.",
    price: 399,
    image: "/images/WhatsApp Image 2025-07-26 at 3.44.26 PM.jpeg",
    category: "playeras",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"],
    rating: 4
  },
  {
    id: 3,
    name: "Gorra Pachuca Edición Ambar",
    description: "Gorra ajustable con bordado premium del logo de Ambar y Pachuca.",
    price: 299,
    image: "/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (1).jpeg",
    category: "gorras",
    colors: ["Azul", "Negro", "Blanco"],
    badge: "⭐ Nuevo",
    rating: 5
  },
  {
    id: 4,
    name: "Sudadera Team Ambar",
    description: "Sudadera con capucha premium, perfecta para entrenamientos y uso casual.",
    price: 799,
    originalPrice: 999,
    image: "/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (2).jpeg",
    category: "sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Azul Pachuca", "Gris", "Negro"],
    badge: "💎 Premium",
    rating: 5
  },
  {
    id: 5,
    name: "Shorts Deportivos Pro",
    description: "Shorts deportivos oficiales para entrenamiento y competencia de alto rendimiento.",
    price: 449,
    image: "/images/WhatsApp Image 2025-07-28 at 9.04.48 PM.jpeg",
    category: "shorts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul", "Negro", "Blanco"],
    rating: 4
  },
  {
    id: 6,
    name: "Kit Calcetas Pro Ambar",
    description: "Pack de 3 calcetas deportivas profesionales con tecnología anti-humedad.",
    price: 199,
    image: "/images/WhatsApp Image 2025-07-26 at 4.28.18 PM.jpeg",
    category: "accesorios",
    sizes: ["S", "M", "L"],
    colors: ["Azul", "Blanco", "Negro"],
    rating: 4
  }
]

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showPurchaseForm, setShowPurchaseForm] = useState(false)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const categories = [
    { id: 'all', name: 'Todos', icon: '🛍️' },
    { id: 'camisetas', name: 'Camisetas', icon: '👕' },
    { id: 'playeras', name: 'Playeras', icon: '👚' },
    { id: 'gorras', name: 'Gorras', icon: '🧢' },
    { id: 'sudaderas', name: 'Sudaderas', icon: '🧥' },
    { id: 'shorts', name: 'Shorts', icon: '🩳' },
    { id: 'accesorios', name: 'Accesorios', icon: '🎒' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setShowPurchaseForm(true)
  }

  return (
    <section id="tienda" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pachuca-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pachuca-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-pachuca-gold/5 to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con estilo premium */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pachuca-gold/20 to-yellow-400/20 rounded-full mb-6 border border-pachuca-gold/30">
            <span className="text-2xl">🛒</span>
            <span className="text-pachuca-gold font-bold uppercase tracking-wider text-sm">Tienda Oficial</span>
            <span className="px-2 py-0.5 bg-pachuca-gold text-white text-xs font-bold rounded-full animate-pulse">NEW</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sport-title font-bold text-neutral-dark mb-6">
            Colección <span className="text-gradient-gold">AMBAR</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos oficiales exclusivos. Apoya a tu jugadora favorita con merchandising de calidad premium.
          </p>
          
          {/* Stats de la tienda */}
          <div className="flex justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-pachuca-blue">500+</div>
              <div className="text-xs text-gray-500 uppercase">Fans Felices</div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-pachuca-gold">⭐ 4.9</div>
              <div className="text-xs text-gray-500 uppercase">Calificación</div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-500">24h</div>
              <div className="text-xs text-gray-500 uppercase">Envío Express</div>
            </div>
          </div>
        </div>

        {/* Category Filter moderno */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`group relative px-5 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-pachuca-gold to-yellow-500 text-white shadow-lg shadow-pachuca-gold/30 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'
              }`}
            >
              <span className={`text-lg transition-transform duration-300 ${selectedCategory === category.id ? 'scale-110' : 'group-hover:scale-110'}`}>
                {category.icon}
              </span>
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full shadow-md"></span>
              )}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-20 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold shadow-lg">
                  {product.badge}
                </div>
              )}

              {/* Descuento badge */}
              {product.originalPrice && (
                <div className="absolute top-4 right-4 z-20 px-3 py-1.5 bg-red-500 text-white rounded-full text-sm font-bold shadow-lg">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </div>
              )}

              {/* Product Image con overlay */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay con botón de compra */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end justify-center pb-6 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <button
                    onClick={() => handleProductClick(product)}
                    className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 bg-gradient-to-r from-pachuca-gold to-yellow-500 hover:from-yellow-500 hover:to-pachuca-gold text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-pachuca-gold/50 flex items-center gap-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Comprar Ahora
                  </button>
                </div>

                {/* Quick view icon */}
                <button
                  onClick={() => handleProductClick(product)}
                  className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl transition-all duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`}
                >
                  <svg className="w-6 h-6 text-pachuca-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                {/* Rating */}
                {product.rating && (
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={`star-${product.id}-${i}`}
                        className={`w-4 h-4 ${i < product.rating! ? 'text-pachuca-gold' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-xs text-gray-500 ml-1">({product.rating}.0)</span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-neutral-dark mb-2 group-hover:text-pachuca-blue transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 mb-4 text-sm line-clamp-2">{product.description}</p>
                
                {/* Price section */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold text-pachuca-gold">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-lg text-gray-400 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                  <span className="text-sm text-gray-500">MXN</span>
                </div>

                {/* Sizes preview */}
                {product.sizes && (
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gray-500">Tallas:</span>
                    <div className="flex gap-1">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span key={size} className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="px-2 py-0.5 bg-gray-100 rounded text-xs font-medium text-gray-600">
                          +{product.sizes.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Colors preview */}
                {product.colors && (
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Colores:</span>
                    <div className="flex gap-1">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-5 h-5 rounded-full border-2 border-white shadow-md"
                          style={{
                            backgroundColor: 
                              color === 'Azul Pachuca' ? '#1E40AF' :
                              color === 'Azul' ? '#3B82F6' :
                              color === 'Negro' ? '#1F2937' :
                              color === 'Blanco' ? '#F9FAFB' :
                              color === 'Gris' ? '#9CA3AF' :
                              '#E5E7EB'
                          }}
                          title={color}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <button
                  onClick={() => handleProductClick(product)}
                  className="w-full py-4 bg-gradient-to-r from-pachuca-blue to-blue-600 hover:from-blue-600 hover:to-pachuca-blue text-white font-bold rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:shadow-pachuca-blue/30 group/btn"
                >
                  <svg className="w-5 h-5 transition-transform group-hover/btn:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Agregar al Carrito</span>
                  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-pachuca-gold/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-6">
          {[
            { icon: '🚚', title: 'Envío Gratis', desc: 'En compras +$500', color: 'from-blue-500 to-cyan-500' },
            { icon: '🛡️', title: 'Garantía', desc: '30 días de garantía', color: 'from-green-500 to-emerald-500' },
            { icon: '💳', title: 'Pago Seguro', desc: 'SSL encriptado', color: 'from-purple-500 to-indigo-500' },
            { icon: '📞', title: 'Soporte 24/7', desc: 'Siempre disponibles', color: 'from-pachuca-gold to-yellow-500' },
          ].map((feature) => (
            <div 
              key={feature.title}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 card-hover text-center border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} text-white text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>
              <h4 className="font-bold text-neutral-dark mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Banner promocional */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-pachuca-gold/20 via-pachuca-blue/20 to-pachuca-gold/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-pachuca-blue via-blue-600 to-indigo-700 rounded-3xl p-10 md:p-14 text-white overflow-hidden">
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pachuca-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Número decorativo */}
            <div className="absolute top-0 right-0 font-sport-display text-[15rem] text-white/5 leading-none pointer-events-none">
              56
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <span className="animate-pulse">🎁</span>
                  <span className="text-sm font-medium">Oferta Especial de Temporada</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-sport-display tracking-wide mb-4">
                  15% DESCUENTO
                </h3>
                <p className="text-blue-100 text-lg max-w-lg">
                  En tu primera compra usando el código <span className="font-bold text-pachuca-gold">AMBAR56</span>
                </p>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="text-center">
                  <div className="text-5xl font-bold text-pachuca-gold mb-2">AMBAR56</div>
                  <div className="text-sm text-blue-200">Copia el código</div>
                </div>
                <button 
                  className="bg-gradient-to-r from-pachuca-gold to-yellow-400 hover:from-yellow-400 hover:to-pachuca-gold text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-pachuca-gold/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  onClick={() => navigator.clipboard.writeText('AMBAR56')}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  Copiar Código
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials mini */}
        <div className="mt-16 text-center">
          <h4 className="text-lg font-bold text-gray-700 mb-6">Lo que dicen nuestros fans</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { text: '"¡Excelente calidad! Me encantó mi camiseta"', author: 'María G.' },
              { text: '"Envío súper rápido, llegó en 2 días"', author: 'Carlos R.' },
              { text: '"Los mejores productos de Ambar 💙"', author: 'Ana L.' },
            ].map((testimonial) => (
              <div key={testimonial.author} className="bg-white rounded-2xl p-4 shadow-md max-w-xs">
                <div className="flex text-pachuca-gold mb-2">
                  {'⭐'.repeat(5)}
                </div>
                <p className="text-gray-600 text-sm italic mb-2">{testimonial.text}</p>
                <p className="text-xs font-semibold text-gray-500">— {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Purchase Form Modal */}
      {showPurchaseForm && selectedProduct && (
        <PurchaseModal 
          product={selectedProduct}
          onClose={() => {
            setShowPurchaseForm(false)
            setSelectedProduct(null)
          }}
        />
      )}
    </section>
  )
}
