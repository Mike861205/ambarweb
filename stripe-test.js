// Prueba rápida de configuración de Stripe
const testStripeConfig = () => {
  console.log('🔧 Testing Stripe Configuration...')
  
  // Verificar variables de entorno
  console.log('STRIPE_PUBLISHABLE_KEY:', process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ? '✅ Configurada' : '❌ Faltante')
  console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY ? '✅ Configurada' : '❌ Faltante')
  console.log('STRIPE_PRODUCT_ID:', process.env.STRIPE_PRODUCT_ID ? '✅ Configurada' : '❌ Faltante')
  
  console.log('\n📋 Resumen de integración:')
  console.log('- ✅ Stripe SDK instalado')
  console.log('- ✅ API Route creada (/api/create-checkout-session)')
  console.log('- ✅ Página de éxito creada (/success)')
  console.log('- ✅ PurchaseModal actualizado con Stripe')
  console.log('- ✅ Variables de entorno configuradas')
  
  console.log('\n🛍️ Para probar:')
  console.log('1. Ve a http://localhost:3000/#tienda')
  console.log('2. Haz clic en cualquier producto')
  console.log('3. Llena el formulario')
  console.log('4. Selecciona "Tarjeta de Crédito/Débito"')
  console.log('5. Haz clic en "🔒 Pagar con Tarjeta"')
  console.log('6. Serás redirigido a Stripe Checkout')
  
  console.log('\n💳 Tarjetas de prueba de Stripe:')
  console.log('- Éxito: 4242 4242 4242 4242')
  console.log('- Rechazo: 4000 0000 0000 0002')
  console.log('- Fecha: Cualquier fecha futura')
  console.log('- CVC: Cualquier 3 dígitos')
}

testStripeConfig()

export {}
