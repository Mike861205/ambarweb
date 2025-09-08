import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-08-27.basil',
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { 
      productName, 
      productPrice, 
      quantity, 
      customerData,
      productOptions 
    } = body

    // Crear sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'mxn',
            product_data: {
              name: productName,
              description: [
                productOptions?.size ? `Talla: ${productOptions.size}` : '',
                productOptions?.color ? `Color: ${productOptions.color}` : ''
              ].filter(Boolean).join(' - '),
              metadata: {
                product_id: process.env.STRIPE_PRODUCT_ID!,
              },
            },
            unit_amount: productPrice * 100, // Stripe maneja centavos
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get('origin')}/#tienda`,
      customer_email: customerData.email,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['MX'],
      },
      metadata: {
        customer_name: customerData.name,
        customer_phone: customerData.phone,
        shipping_address: customerData.address,
        shipping_city: customerData.city,
        shipping_state: customerData.state,
        shipping_zip: customerData.zipCode,
        product_size: productOptions?.size || '',
        product_color: productOptions?.color || '',
        comments: customerData.comments || '',
      },
    })

    // Guardar datos de la orden temporalmente (en un caso real, usarías una base de datos)
    // Por ahora, vamos a enviar el email de confirmación directamente
    
    return NextResponse.json({ 
      url: session.url,
      sessionId: session.id,
      orderData: {
        productName,
        productPrice,
        quantity,
        customerData,
        productOptions
      }
    })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error al crear la sesión de pago' },
      { status: 500 }
    )
  }
}
