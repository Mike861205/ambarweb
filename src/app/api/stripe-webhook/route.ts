import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

// Validar que las variables de entorno estén configuradas
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not configured')
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2025-08-27.basil',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const sig = request.headers.get('stripe-signature')

    let event: Stripe.Event

    try {
      // En producción, necesitarías configurar el webhook secret
      // Por ahora, parseamos el evento directamente
      event = JSON.parse(body)
    } catch (err) {
      console.error('Error parsing webhook body:', err)
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Manejar el evento
    switch (event.type) {
      case 'checkout.session.completed':
        const session = event.data.object as Stripe.Checkout.Session

        // Obtener los metadatos del pago
        const metadata = session.metadata
        
        if (metadata && session.customer_email) {
          // Preparar datos para el email
          const orderData = {
            productName: metadata.product_name || 'Producto de Ambar',
            productPrice: (session.amount_total || 0) / 100, // Convertir de centavos
            quantity: 1,
            sessionId: session.id,
            customerData: {
              name: metadata.customer_name || '',
              email: session.customer_email,
              phone: metadata.customer_phone || '',
              address: metadata.shipping_address || '',
              city: metadata.shipping_city || '',
              state: metadata.shipping_state || '',
              zipCode: metadata.shipping_zipcode || '',
              comments: metadata.comments || ''
            },
            productOptions: {
              size: metadata.product_size || '',
              color: metadata.product_color || ''
            }
          }

          // Enviar email de confirmación
          try {
            await fetch(`${request.headers.get('origin')}/api/send-order-email`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(orderData)
            })
            console.log('Email de confirmación enviado para sesión:', session.id)
          } catch (emailError) {
            console.error('Error enviando email de confirmación:', emailError)
          }
        }
        break
      
      default:
        console.log(`Evento no manejado: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error('Error en webhook de Stripe:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
