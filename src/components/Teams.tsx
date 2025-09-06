'use client'

export default function Teams() {
  const teams = [
    {
      name: 'Pachuca Femenil Sub-19',
      period: '2023 - Presente',
      role: 'Mediocampista #10',
      description: 'Equipo actual donde desarrollo mi máximo potencial',
      achievements: ['Semifinalista Liga MX Femenil Sub-19', 'Mejor Jugadora del Mes'],
      logo: '🏆',
      image: '/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (2).jpeg'
    },
    {
      name: 'Fuerzas Básicas Pachuca',
      period: '2021 - 2023',
      role: 'Jugadora en Desarrollo',
      description: 'Formación integral en las categorías menores',
      achievements: ['Campeona Regional Sub-17', 'MVP Torneo Estatal'],
      logo: '⚽',
      image: '/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (3).jpeg'
    },
    {
      name: 'Academia Local',
      period: '2019 - 2021',
      role: 'Iniciación Deportiva',
      description: 'Primeros pasos en el fútbol competitivo',
      achievements: ['Goleadora del Torneo', 'Mejor Jugadora Joven'],
      logo: '🥅',
      image: '/images/WhatsApp Image 2025-07-26 at 4.28.18 PM.jpeg'
    }
  ]

  return (
    <section id="equipos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Mi Trayectoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los equipos que han sido parte de mi crecimiento como futbolista
          </p>
        </div>

        <div className="space-y-8">
          {teams.map((team, index) => (
            <div
              key={team.name}
              className="bg-gradient-to-r from-white to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="grid lg:grid-cols-5 gap-6 items-center">
                <div className="text-center lg:text-left">
                  <div className="w-20 h-20 mx-auto lg:mx-0 mb-4 rounded-full overflow-hidden border-2 border-pachuca-blue">
                    <img 
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-dark mb-2">
                    {team.name}
                  </h3>
                  <p className="text-pachuca-blue font-semibold">{team.period}</p>
                </div>

                <div className="lg:col-span-2">
                  <h4 className="text-lg font-semibold text-pachuca-gold mb-2">
                    {team.role}
                  </h4>
                  <p className="text-gray-600 mb-4">
                    {team.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {team.achievements.map((achievement, achievementIndex) => (
                      <span
                        key={achievementIndex}
                        className="bg-pachuca-blue text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-pachuca-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl font-bold">{index + 1}</span>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">Etapa</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Current Team Highlight */}
        <div className="mt-16 bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Pachuca Femenil Sub-19</h3>
            <p className="text-xl text-blue-100 mb-6">
              Mi hogar deportivo actual donde cada día trabajo para alcanzar mis metas
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-pachuca-gold mb-2">2</div>
                <div className="text-blue-100">Años en el club</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pachuca-gold mb-2">28</div>
                <div className="text-blue-100">Partidos jugados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pachuca-gold mb-2">15</div>
                <div className="text-blue-100">Goles anotados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
