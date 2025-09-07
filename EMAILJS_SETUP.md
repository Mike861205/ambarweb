# Configuración de EmailJS para Envío Directo de Correos

## 🚀 Pasos para Configurar EmailJS (Servicio Gratuito)

### 1. Crear Cuenta en EmailJS
1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Verifica tu email

### 2. Configurar el Servicio de Email
1. En el dashboard, ve a **"Email Services"**
2. Haz clic en **"Add New Service"**
3. Selecciona **"Gmail"**
4. Conecta tu cuenta de Gmail (miguel.palomera1986@gmail.com)
5. Anota el **Service ID** (algo como `service_xxxxxxx`)

### 3. Crear Template de Email
1. Ve a **"Email Templates"**
2. Haz clic en **"Create New Template"**
3. Configura el template así:

**Template Settings:**
- Template Name: `Contacto Web Ambar`
- Template ID: `template_ambar_contact`

**Subject:** `{{subject}} - Contacto desde AmbarWeb`

**Content (HTML):**
```html
<h2>Nuevo Mensaje desde la Web de Ambar</h2>

<p><strong>Nombre:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Asunto:</strong> {{subject}}</p>

<h3>Mensaje:</h3>
<p>{{message}}</p>

<hr>
<p><em>Este mensaje fue enviado desde la página web oficial de Ambar Pachuca.</em></p>
```

4. Haz clic en **"Save"**

### 4. Obtener la Public Key
1. Ve a **"Account"** > **"General"**
2. Copia tu **Public Key** (algo como `user_xxxxxxxxxxxxxxx`)

### 5. Actualizar el Código
Reemplaza en `src/components/Contact.tsx`:

```typescript
// Línea ~35-37, reemplaza estas variables:
const serviceID = 'service_xxxxxxx'  // Tu Service ID real
const templateID = 'template_ambar_contact'  // Debe coincidir con el que creaste
const publicKey = 'user_xxxxxxxxxxxxxxx'  // Tu Public Key real
```

### 6. Habilitar EmailJS en el Código
Una vez que tengas las claves, reemplaza esta línea:

```typescript
// Comentar esta línea de simulación:
// await new Promise(resolve => setTimeout(resolve, 2000))

// Y descomentar esta línea real:
await emailjs.send(serviceID, templateID, templateParams, publicKey)
```

## 📧 Resultado Final
Una vez configurado, cuando alguien envíe el formulario:
1. El mensaje llegará directamente a `miguel.palomera1986@gmail.com`
2. Se mostrará un modal de confirmación
3. El formulario se limpiará automáticamente
4. No dependerá del cliente de correo local del usuario

## 🆓 Límites del Plan Gratuito
- 200 emails por mes
- Perfecto para una página personal
- Si necesitas más, EmailJS tiene planes económicos

## 🔧 Troubleshooting
- Verifica que el Service ID y Template ID sean correctos
- Asegúrate de que Gmail esté conectado correctamente
- Revisa la consola del navegador para errores
- EmailJS puede tardar unos minutos en sincronizar cambios
