'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

function SuccessContent() {
  const searchParams = useSearchParams()
  const sessionId = searchParams?.get('session_id')
  const [isLoading, setIsLoading] = useState(true)
  const [emailSent, setEmailSent] = useState(false)

  useEffect(() => {
    if (sessionId) {
      // Enviar email de confirmación usando EmailJS directamente desde el browser
      const sendConfirmationEmail = async () => {
        try {
          // Obtener datos de la sesión desde sessionStorage
          const orderDataString = sessionStorage.getItem('lastOrderData')
          if (orderDataString) {
            const orderData = JSON.parse(orderDataString)
            
            // Preparar template params para EmailJS (simplificado)
            const templateParams = {
              // Datos básicos que sabemos que funcionan
              customer_name: orderData.customerData.name,
              customer_email: orderData.customerData.email,
              customer_phone: orderData.customerData.phone,
              product_name: orderData.productName,
              quantity: orderData.quantity.toString(),
              total_amount: (orderData.productPrice * orderData.quantity).toString(),
              session_id: sessionId,
              
              // Dirección simplificada
              shipping_address: `${orderData.customerData.address}, ${orderData.customerData.city}, ${orderData.customerData.state} ${orderData.customerData.zipCode}`,
              
              // Opcionales con valores por defecto
              product_size: orderData.productOptions?.size || '',
              product_color: orderData.productOptions?.color || '',
              comments: orderData.customerData.comments || ''
            }

            console.log('Enviando email con datos:', templateParams)

            // Inicializar EmailJS
            emailjs.init('e-2vcoBe2HMMfvt9Y')

            // Enviar email usando EmailJS desde el browser
            const result = await emailjs.send(
              'service_3a6b1l3',           // Service ID
              'template_0yfm2rx',          // Template ID  
              templateParams               // Template parameters
            )

            console.log('Email enviado exitosamente:', result)
            setEmailSent(true)
            
            // Limpiar datos después de enviar el email
            sessionStorage.removeItem('lastOrderData')
          }
        } catch (error: any) {
          console.error('Error enviando email de confirmación:', error)
          console.error('Detalles del error:', {
            name: error?.name,
            message: error?.message,
            status: error?.status,
            text: error?.text
          })
        } finally {
          setIsLoading(false)
        }
      }

      sendConfirmationEmail()
    } else {
      setIsLoading(false)
    }
  }, [sessionId])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pachuca-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Procesando tu compra...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Icono de éxito */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Mensaje de éxito */}
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            ¡Compra Exitosa! 🎉
          </h1>
          
          <p className="text-gray-600 mb-6">
            Gracias por tu compra. Tu pedido ha sido procesado exitosamente.
            {emailSent && (
              <span className="block mt-2 text-green-600 font-medium">
                ✅ Email de confirmación enviado
              </span>
            )}
          </p>

          {sessionId && (
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-500">ID de Sesión:</p>
              <p className="text-xs font-mono text-gray-700 break-all">{sessionId}</p>
            </div>
          )}

          {/* Información adicional */}
          <div className="text-left bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-blue-800 mb-2">📦 Próximos Pasos:</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Recibirás un email de confirmación</li>
              <li>• Te contactaremos para coordinar el envío</li>
              <li>• El tiempo de entrega es de 3-5 días hábiles</li>
            </ul>
          </div>

          {/* Botones de acción */}
          <div className="space-y-3">
            <Link 
              href="/#tienda"
              className="block w-full bg-pachuca-gold hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              🛍️ Seguir Comprando
            </Link>
            
            <Link 
              href="/"
              className="block w-full border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              🏠 Ir al Inicio
            </Link>
          </div>

          {/* Contacto para dudas */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-2">¿Dudas sobre tu pedido?</p>
            <a 
              href="https://wa.me/526241370820" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
            >
              <span className="mr-2">📱</span>
              Contáctanos por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pachuca-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  )
}
