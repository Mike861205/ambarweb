import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    console.log('Datos de la orden recibidos:', orderData) // Para debug

    // Usar el mismo formato que funciona en el formulario de contacto
    const emailData = {
      service_id: 'service_3a6b1l3',
      template_id: 'template_0yfm2rx',
      user_id: 'e-2vcoBe2HMMfvt9Y',
      template_params: {
        // Datos del cliente
        customer_name: orderData.customerData.name,
        customer_email: orderData.customerData.email,
        customer_phone: orderData.customerData.phone,
        
        // Datos del producto
        product_name: orderData.productName,
        quantity: orderData.quantity.toString(),
        product_size: orderData.productOptions?.size || 'N/A',
        product_color: orderData.productOptions?.color || 'N/A',
        total_amount: (orderData.productPrice * orderData.quantity).toString(),
        session_id: orderData.sessionId || 'N/A',
        
        // Dirección de envío
        shipping_address: orderData.customerData.address,
        shipping_city: orderData.customerData.city,
        shipping_state: orderData.customerData.state,
        shipping_zipcode: orderData.customerData.zipCode,
        
        // Comentarios
        comments: orderData.customerData.comments || 'Sin comentarios especiales',
        
        // Email de destino (debe coincidir con el To Email en EmailJS)
        to_email: 'miguel.palomera1986@gmail.com',
        to_name: 'Miguel Palomera'
      }
    }

    console.log('Datos para EmailJS:', JSON.stringify(emailData, null, 2)) // Para debug

    // Usar la misma URL que funciona
    const emailResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData)
    })

    const responseText = await emailResponse.text()
    console.log('Respuesta de EmailJS status:', emailResponse.status)
    console.log('Respuesta de EmailJS:', responseText)

    if (!emailResponse.ok) {
      console.error('Error en EmailJS:', responseText)
      throw new Error(`Error de EmailJS (${emailResponse.status}): ${responseText}`)
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado exitosamente',
      debug: {
        status: emailResponse.status,
        response: responseText
      }
    })
  } catch (error) {
    console.error('Error enviando email de confirmación:', error)
    return NextResponse.json(
      { 
        error: 'Error al enviar email de confirmación', 
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}
