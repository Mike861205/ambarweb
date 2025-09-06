'use client'

export default function News() {
  const news = [
    {
      id: 1,
      title: 'Ambar lidera la victoria de Pachuca Sub-19',
      date: '15 de Agosto, 2024',
      category: 'Partido',
      excerpt: 'Con dos goles y una asistencia, Ambar fue la figura del partido ante el equipo rival.',
      image: '/images/news1.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Convocada a la Selección Estatal Sub-19',
      date: '8 de Agosto, 2024',
      category: 'Selección',
      excerpt: 'Primera convocatoria oficial a la selección estatal para el próximo torneo nacional.',
      image: '/images/news2.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Mejor Jugadora del Mes de Julio',
      date: '1 de Agosto, 2024',
      category: 'Reconocimiento',
      excerpt: 'Por segundo mes consecutivo, Ambar recibe este importante reconocimiento.',
      image: '/images/news3.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Entrevista: Mis objetivos para la temporada',
      date: '20 de Julio, 2024',
      category: 'Entrevista',
      excerpt: 'En exclusiva, Ambar comparte sus metas y aspiraciones para lo que resta del año.',
      image: '/images/news4.jpg',
      featured: false
    }
  ]

  const featuredNews = news.find(item => item.featured)
  const regularNews = news.filter(item => !item.featured)

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Últimas Noticias
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente al día con las últimas novedades y logros
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News */}
          {featuredNews && (
            <div className="lg:col-span-2">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className="h-64 bg-gradient-to-br from-pachuca-blue to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl">📰</span>
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-pachuca-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredNews.category}
                    </span>
                    <span className="text-gray-500 text-sm ml-4">{featuredNews.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-4">
                    {featuredNews.title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {featuredNews.excerpt}
                  </p>
                  <button className="mt-6 bg-pachuca-gold hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                    Leer más
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Regular News */}
          <div className="space-y-6">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-lg p-6 card-hover"
              >
                <div className="flex items-center mb-3">
                  <span className="bg-sport-green text-white px-2 py-1 rounded text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm ml-3">{item.date}</span>
                </div>
                <h4 className="text-lg font-bold text-neutral-dark mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {item.excerpt}
                </p>
                <button className="mt-4 text-pachuca-blue hover:text-blue-600 font-semibold text-sm">
                  Leer más →
                </button>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Mantente Informado</h3>
          <p className="text-blue-100 mb-6">
            Suscríbete para recibir las últimas noticias y actualizaciones
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-pachuca-gold"
            />
            <button className="bg-pachuca-gold hover:bg-yellow-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
              Suscribirse
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
