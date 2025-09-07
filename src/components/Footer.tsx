'use client'

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-white">AMBAR</span>
              <span className="ml-2 text-pachuca-gold text-lg font-semibold">PACHUCA</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Futbolista profesional del Pachuca Femenil Sub-19. Dedicada a la excelencia 
              deportiva y al crecimiento continuo en el fútbol mexicano.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <span className="text-xl">📱</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <span className="text-xl">📷</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <span className="text-xl">🎥</span>
              </button>
              <button className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors duration-200">
                <span className="text-xl">📘</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#historia" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Mi Historia
                </a>
              </li>
              <li>
                <a href="#estadisticas" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Estadísticas
                </a>
              </li>
              <li>
                <a href="#equipos" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Equipos
                </a>
              </li>
              <li>
                <a href="#noticias" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-pachuca-gold transition-colors duration-200">
                  Galería
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-3">
              <div className="text-gray-300">
                <span className="block font-medium">Representante</span>
                <span className="text-sm">+52 624 137 0820</span>
              </div>
              <div className="text-gray-300">
                <span className="block font-medium">Email</span>
                <span className="text-sm">miguel.palomera1986@gmail.com</span>
              </div>
              <div className="text-gray-300">
                <span className="block font-medium">Club</span>
                <span className="text-sm">Pachuca Femenil Sub-19</span>
              </div>
              <div className="text-gray-300">
                <span className="block font-medium">Ubicación</span>
                <span className="text-sm">Pachuca, Hidalgo</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ambar Palomera Club Pachuca. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-pachuca-gold transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-pachuca-gold transition-colors duration-200">
                Términos de Uso
              </a>
              <a href="#contacto" className="text-gray-400 hover:text-pachuca-gold transition-colors duration-200">
                Contacto
              </a>
            </div>
          </div>
        </div>

        {/* Pachuca Logo/Credit */}
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <div className="text-gray-400 text-sm">
            Orgullosamente parte de la familia 
            <span className="text-pachuca-blue font-semibold ml-1">Pachuca</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
