import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Teams from '@/components/Teams'
import News from '@/components/News'
import Gallery from '@/components/Gallery'
import Store from '@/components/Store'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import FloatingSportsIcons from '@/components/FloatingSportsIcons'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Iconos flotantes de fútbol en el fondo */}
      <FloatingSportsIcons />
      
      {/* Contenido principal */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Stats />
        <Teams />
        <News />
        <Gallery />
        <Store />
        <Contact />
        <Footer />
      </div>
      
      <WhatsAppFloat />
    </main>
  )
}
