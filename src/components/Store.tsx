'use client'

import { useState } from 'react'
import PurchaseModal from './PurchaseModal'

interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  sizes?: string[]
  colors?: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Camiseta Oficial Ambar",
    description: "Camiseta oficial con el nombre y número de Ambar. Material de alta calidad.",
    price: 599,
    image: "/images/WhatsApp Image 2025-07-26 at 3.43.24 PM.jpeg",
    category: "camisetas",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul Pachuca", "Blanco", "Negro"]
  },
  {
    id: 2,
    name: "Playera Casual Ambar",
    description: "Playera casual cómoda para el día a día con logo de Ambar.",
    price: 399,
    image: "/images/WhatsApp Image 2025-07-26 at 3.44.26 PM.jpeg",
    category: "playeras",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blanco", "Negro", "Gris"]
  },
  {
    id: 3,
    name: "Gorra Ambar Pachuca",
    description: "Gorra ajustable con bordado del logo de Ambar y Pachuca.",
    price: 299,
    image: "/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (1).jpeg",
    category: "gorras",
    colors: ["Azul", "Negro", "Blanco"]
  },
  {
    id: 4,
    name: "Sudadera Ambar Team",
    description: "Sudadera con capucha, perfecta para entrenamientos y uso casual.",
    price: 799,
    image: "/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (2).jpeg",
    category: "sudaderas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Azul Pachuca", "Gris", "Negro"]
  },
  {
    id: 5,
    name: "Shorts Deportivos",
    description: "Shorts deportivos oficiales para entrenamiento y competencia.",
    price: 449,
    image: "/images/WhatsApp Image 2025-07-28 at 9.04.48 PM.jpeg",
    category: "shorts",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Azul", "Negro", "Blanco"]
  },
  {
    id: 6,
    name: "Calcetas Ambar Pro",
    description: "Calcetas deportivas profesionales con tecnología anti-humedad.",
    price: 199,
    image: "/images/WhatsApp Image 2025-07-26 at 4.28.18 PM.jpeg",
    category: "accesorios",
    sizes: ["S", "M", "L"],
    colors: ["Azul", "Blanco", "Negro"]
  }
]

export default function Store() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showPurchaseForm, setShowPurchaseForm] = useState(false)

  const categories = [
    { id: 'all', name: 'Todos los productos' },
    { id: 'camisetas', name: 'Camisetas' },
    { id: 'playeras', name: 'Playeras' },
    { id: 'gorras', name: 'Gorras' },
    { id: 'sudaderas', name: 'Sudaderas' },
    { id: 'shorts', name: 'Shorts' },
    { id: 'accesorios', name: 'Accesorios' }
  ]

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory)

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product)
    setShowPurchaseForm(true)
  }

  return (
    <section id="tienda" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            🛍️ Tienda Oficial Ambar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Productos oficiales de Ambar Pachuca. Apoya a tu jugadora favorita con merchandising de calidad.
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
                  ? 'bg-pachuca-gold text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pachuca-gold hover:text-white shadow-md'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <button
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 card-hover cursor-pointer text-left w-full"
              onClick={() => handleProductClick(product)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleProductClick(product)
                }
              }}
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-pachuca-gold">
                    ${product.price} MXN
                  </span>
                  <button className="bg-pachuca-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                    Comprar
                  </button>
                </div>

                {/* Available sizes/colors preview */}
                <div className="mt-4 space-y-2">
                  {product.sizes && (
                    <div className="text-xs text-gray-500">
                      Tallas: {product.sizes.join(", ")}
                    </div>
                  )}
                  {product.colors && (
                    <div className="text-xs text-gray-500">
                      Colores: {product.colors.join(", ")}
                    </div>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">🎯 Envío a Todo México</h3>
            <p className="text-blue-100 mb-6">
              Productos de alta calidad con envío seguro. ¡Apoya a Ambar con style!
            </p>
            <div className="flex justify-center gap-6">
              <div className="bg-white/20 p-4 rounded-lg">
                <span className="text-2xl mb-2 block">🚚</span>
                <span className="text-sm">Envío Express</span>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <span className="text-2xl mb-2 block">🛡️</span>
                <span className="text-sm">Calidad Garantizada</span>
              </div>
              <div className="bg-white/20 p-4 rounded-lg">
                <span className="text-2xl mb-2 block">💳</span>
                <span className="text-sm">Pago Seguro</span>
              </div>
            </div>
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
