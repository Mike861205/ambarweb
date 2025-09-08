'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'

// Inicializar Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

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

interface PurchaseFormData {
  // Datos del cliente
  name: string
  email: string
  phone: string
  
  // Dirección de envío
  address: string
  city: string
  state: string
  zipCode: string
  
  // Detalles del producto
  size?: string
  color?: string
  quantity: number
  
  // Método de pago
  paymentMethod: 'transfer' | 'card'
  
  // Comentarios adicionales
  comments: string
}

interface PurchaseModalProps {
  product: Product
  onClose: () => void
}

export default function PurchaseModal({ product, onClose }: Readonly<PurchaseModalProps>) {
  const [formData, setFormData] = useState<PurchaseFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    size: product.sizes?.[0] || '',
    color: product.colors?.[0] || '',
    quantity: 1,
    paymentMethod: 'transfer',
    comments: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const calculateTotal = () => {
    return product.price * formData.quantity
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (formData.paymentMethod === 'transfer') {
        // Redirigir a WhatsApp con los datos del formulario
        handleTransferPayment()
      } else {
        // Redirigir a Stripe para pago con tarjeta
        handleCardPayment()
      }
    } catch (error) {
      console.error('Error al procesar la compra:', error)
      alert('Hubo un error al procesar tu compra. Por favor, intenta nuevamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleTransferPayment = () => {
    const message = `🛍️ *NUEVA ORDEN - TIENDA AMBAR*

📦 *PRODUCTO:*
${product.name}
Precio: $${product.price} MXN
${formData.size ? `Talla: ${formData.size}` : ''}
${formData.color ? `Color: ${formData.color}` : ''}
Cantidad: ${formData.quantity}

💰 *TOTAL: $${calculateTotal()} MXN*

👤 *DATOS DEL CLIENTE:*
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}

📍 *DIRECCIÓN DE ENVÍO:*
${formData.address}
${formData.city}, ${formData.state}
CP: ${formData.zipCode}

💳 *MÉTODO DE PAGO:* Transferencia Bancaria

${formData.comments ? `📝 *Comentarios:* ${formData.comments}` : ''}

¡Gracias por tu compra! 🙌`

    const encodedMessage = encodeURIComponent(message)
    const whatsappURL = `https://wa.me/526241370820?text=${encodedMessage}`
    window.open(whatsappURL, '_blank')
    
    // Cerrar modal después de un pequeño delay
    setTimeout(() => {
      onClose()
    }, 1000)
  }

  const handleCardPayment = async () => {
    try {
      // Preparar datos de la orden
      const orderData = {
        productName: product.name,
        productPrice: product.price,
        quantity: formData.quantity,
        customerData: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode,
          comments: formData.comments,
        },
        productOptions: {
          size: formData.size,
          color: formData.color,
        },
      }

      // Guardar datos de la orden en sessionStorage para la página de éxito
      sessionStorage.setItem('lastOrderData', JSON.stringify(orderData))

      // Crear sesión de checkout en el backend
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Error al crear la sesión de pago')
      }

      const { url } = await response.json()

      // Redirigir a Stripe Checkout
      if (url) {
        window.location.href = url
      } else {
        throw new Error('No se recibió URL de checkout')
      }
    } catch (error) {
      console.error('Error en el pago:', error)
      alert('Hubo un error al procesar el pago. Por favor, intenta nuevamente.')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b p-6 flex justify-between items-center">
          <h3 className="text-2xl font-bold text-neutral-dark">Finalizar Compra</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Resumen del producto */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="text-lg font-bold mb-4">Resumen del Pedido</h4>
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h5 className="font-semibold">{product.name}</h5>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <p className="text-pachuca-gold font-bold">${product.price} MXN</p>
                  </div>
                </div>

                {/* Opciones del producto */}
                <div className="space-y-4">
                  {product.sizes && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Talla
                      </label>
                      <select
                        name="size"
                        value={formData.size}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      >
                        {product.sizes.map(size => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  {product.colors && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Color
                      </label>
                      <select
                        name="color"
                        value={formData.color}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      >
                        {product.colors.map(color => (
                          <option key={color} value={color}>{color}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Cantidad
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      min="1"
                      max="10"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                      required
                    />
                  </div>
                </div>

                {/* Total */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between items-center text-xl font-bold">
                    <span>Total:</span>
                    <span className="text-pachuca-gold">${calculateTotal()} MXN</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario de compra */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Datos del cliente */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Datos del Cliente</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Dirección de envío */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Dirección de Envío</h4>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Dirección Completa *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="Calle, número, colonia"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ciudad *
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Estado *
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Código Postal *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Método de pago */}
                <div>
                  <h4 className="text-lg font-bold mb-4">Método de Pago</h4>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="transfer"
                        checked={formData.paymentMethod === 'transfer'}
                        onChange={handleChange}
                        className="text-pachuca-blue"
                      />
                      <span>💳 Transferencia Bancaria (WhatsApp)</span>
                    </label>
                    
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                        className="text-pachuca-blue"
                      />
                      <span>🔒 Tarjeta de Crédito/Débito (Stripe)</span>
                    </label>
                  </div>
                </div>

                {/* Comentarios */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Comentarios Adicionales
                  </label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Instrucciones especiales para el envío..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pachuca-blue"
                  />
                </div>

                {/* Botón de envío */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-pachuca-gold hover:bg-yellow-500 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200"
                >
                  {(() => {
                    if (isSubmitting) return 'Procesando...'
                    if (formData.paymentMethod === 'transfer') return '📱 Continuar en WhatsApp'
                    return '🔒 Pagar con Tarjeta'
                  })()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
