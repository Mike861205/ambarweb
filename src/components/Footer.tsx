'use client'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-neutral-dark to-black text-white py-16 overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pachuca-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-pachuca-gold/5 rounded-full blur-3xl"></div>
      </div>

      {/* Número decorativo */}
      <div className="absolute bottom-0 right-0 font-sport-display text-[20rem] text-white/[0.02] leading-none pointer-events-none select-none hidden lg:block">
        56
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-2xl">⚽</span>
              </div>
              <div>
                <span className="text-3xl font-sport-display tracking-wider text-white">AMBAR</span>
                <span className="ml-2 text-pachuca-gold text-lg font-semibold">#56</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Futbolista profesional del Pachuca Femenil Sub-19. Dedicada a la excelencia 
              deportiva y al crecimiento continuo en el fútbol mexicano.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="group bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="group bg-white/10 hover:bg-blue-500 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="group bg-white/10 hover:bg-red-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="group bg-white/10 hover:bg-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-pachuca-gold rounded-full"></span>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {[
                { href: '#inicio', label: 'Inicio' },
                { href: '#historia', label: 'Mi Historia' },
                { href: '#estadisticas', label: 'Estadísticas' },
                { href: '#equipos', label: 'Equipos' },
                { href: '#noticias', label: 'Noticias' },
                { href: '#galeria', label: 'Galería' },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-pachuca-gold transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-pachuca-gold group-hover:w-4 transition-all duration-200"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-pachuca-gold rounded-full"></span>
              Contacto
            </h3>
            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Representante', value: '+52 624 137 0820' },
                { icon: '✉️', label: 'Email', value: 'miguel.palomera1986@gmail.com' },
                { icon: '⚽', label: 'Club', value: 'Pachuca Femenil Sub-19' },
                { icon: '📍', label: 'Ubicación', value: 'Pachuca, Hidalgo' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 text-gray-400 group hover:text-white transition-colors">
                  <span className="text-lg">{item.icon}</span>
                  <div>
                    <span className="block text-xs uppercase tracking-wider text-gray-500">{item.label}</span>
                    <span className="text-sm">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider con stats */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-pachuca-gold">56</div>
                <div className="text-gray-500 text-xs uppercase">Dorsal</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">14</div>
                <div className="text-gray-500 text-xs uppercase">Años</div>
              </div>
              <div className="h-8 w-px bg-white/10"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">MED</div>
                <div className="text-gray-500 text-xs uppercase">Posición</div>
              </div>
            </div>
            
            <div className="text-gray-400 text-sm text-center md:text-right">
              © 2024 Ambar Palomera · Pachuca Femenil
              <div className="text-xs text-gray-600 mt-1">Todos los derechos reservados</div>
            </div>
          </div>
        </div>

        {/* Pachuca Credit */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-sm text-gray-500">
            <span>Orgullosamente parte de la familia</span>
            <span className="text-pachuca-blue font-bold">Pachuca</span>
            <span className="text-pachuca-gold">⚽</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
