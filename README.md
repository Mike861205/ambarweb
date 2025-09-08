# Ambar Web - Página Oficial de Ambar Pachuca Femenil Sub-19

🏆 Página web oficial con tienda e-commerce integrada para Ambar, jugadora del equipo Pachuca Femenil Sub-19.

## 🚀 Características Principales

- ✨ **Página web moderna** con diseño responsivo
- 🛍️ **Tienda e-commerce** completa con 6 productos oficiales
- 💳 **Pagos con Stripe** (tarjetas de crédito/débito)
- 📱 **WhatsApp Business** para transferencias bancarias
- 📧 **EmailJS** para confirmaciones automáticas
- 🎨 **UI/UX profesional** con Tailwind CSS

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático para mejor desarrollo
- **Tailwind CSS** - Framework de estilos utilitarios
- **Stripe** - Procesamiento seguro de pagos
- **EmailJS** - Sistema de emails sin backend
- **Vercel** - Plataforma de despliegue

## 🌐 IMPORTANTE: Configuración para Vercel

### ⚠️ Variables de Entorno Requeridas

**Para evitar errores de compilación en Vercel**, debes configurar estas variables en tu dashboard:

1. Ve a **Settings > Environment Variables** en tu proyecto de Vercel
2. Agrega las siguientes variables:

```bash
# Stripe Configuration (OBLIGATORIAS)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_aqui
STRIPE_SECRET_KEY=sk_test_tu_clave_aqui  
STRIPE_PRODUCT_ID=prod_tu_producto_aqui

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_tu_servicio
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_tu_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_clave_publica
```

### 🔧 Cómo obtener las claves:

**Stripe:**
1. Registro en [stripe.com](https://stripe.com)
2. Ve a **Developers > API Keys**
3. Copia las claves de test o live

**EmailJS:**
1. Registro en [emailjs.com](https://emailjs.com)
2. Crea un servicio y template
3. Ve a **Account > Keys** para obtener claves

## ⚽ Características

### 🎯 Módulos Informativos
- **Historia Personal**: Timeline de su desarrollo deportivo
- **Estadísticas**: Métricas de rendimiento y habilidades técnicas
- **Equipos**: Trayectoria en diferentes clubes
- **Noticias**: Últimas novedades y logros
- **Galería**: Colección de imágenes deportivas
- **Contacto**: Información de contacto y formulario

### 🎨 Diseño Moderno
- **Responsive Design**: Optimizado para todos los dispositivos
- **Animaciones Deportivas**: Transiciones suaves y efectos visuales
- **Colores Corporativos**: Paleta inspirada en Pachuca (azul, dorado)
- **Tipografía Deportiva**: Fuentes modernas y legibles
- **Interfaz Intuitiva**: Navegación fácil y accesible

### ⚡ Tecnologías Utilizadas
- **Frontend**: Next.js 14 con React 18
- **Styling**: Tailwind CSS
- **TypeScript**: Para mayor robustez del código
- **Optimización**: App Router de Next.js para mejor rendimiento

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js 18.x o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd webambar
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📋 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Ejecuta la aplicación en modo producción
- `npm run lint` - Ejecuta el linter para revisar el código

## 🏗️ Estructura del Proyecto

```
webambar/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Navigation.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Stats.tsx
│   │   ├── Teams.tsx
│   │   ├── News.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
├── public/
│   └── images/
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Paleta de Colores

- **Pachuca Blue**: `#1E40AF` - Color principal del club
- **Pachuca Gold**: `#F59E0B` - Color dorado distintivo
- **Sport Green**: `#10B981` - Acentos deportivos
- **Neutral Dark**: `#1F2937` - Textos principales

## 📱 Secciones de la Página

### 1. **Hero Section**
- Presentación principal con animaciones
- Estadísticas destacadas
- Botones de acción

### 2. **Historia Personal**
- Timeline interactivo
- Información personal
- Fortalezas y habilidades

### 3. **Estadísticas**
- Métricas de rendimiento
- Gráficos de habilidades
- Logros y reconocimientos

### 4. **Trayectoria de Equipos**
- Historia en diferentes clubes
- Logros por equipo
- Información actual del Pachuca

### 5. **Noticias**
- Últimas noticias destacadas
- Suscripción a newsletter
- Categorización de contenido

### 6. **Galería**
- Filtros por categoría
- Vista responsive
- Efectos hover interactivos

### 7. **Contacto**
- Formulario de contacto
- Información de representante
- Enlaces a redes sociales

## 🔄 Próximas Mejoras

- [ ] Integración con CMS para gestión de contenido
- [ ] Sistema de administración de noticias
- [ ] Galería con carga dinámica de imágenes
- [ ] Integración con APIs de estadísticas deportivas
- [ ] Modo oscuro
- [ ] Múltiples idiomas (ES/EN)
- [ ] Blog personal
- [ ] Calendario de partidos

## 📸 Imágenes y Media

> **Nota**: Las imágenes actuales son placeholders. Para la versión final, se deberán reemplazar con:
> - Fotos profesionales de Ambar
> - Imágenes de partidos y entrenamientos
> - Logotipos oficiales del club
> - Videos destacados

## 🤝 Contribuciones

Este proyecto es específico para la jugadora Ambar del Pachuca Femenil Sub-19. Para sugerencias o mejoras:

1. Contactar al equipo de desarrollo
2. Crear issues para reportar problemas
3. Proponer nuevas funcionalidades

## 📄 Licencia

© 2024 Ambar Pachuca. Todos los derechos reservados.

## 📞 Contacto del Proyecto

- **Representante**: +52 55 1234 5678
- **Email**: ambar@representante.com
- **Club**: Pachuca Femenil Sub-19

---

**Desarrollado con ❤️ para el fútbol mexicano femenil**
