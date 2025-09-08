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

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <WhatsAppFloat />
    </main>
  )
}
