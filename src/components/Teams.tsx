'use client'

export default function Teams() {
  const teams = [
    {
      name: 'Pachuca Femenil Sub-19',
      period: '2025 - Presente',
      role: 'Mediocampista #56',
      description: 'Equipo actual donde desarrollo mi máximo potencial',
      achievements: ['Liga MX Femenil Sub-19', 'Ya debutó en la Jornada 3 vs Querétaro'],
      logo: '🏆',
      image: '/images/ambar1.jpeg',
      imagePosition: 'object-[center_20%]',
      current: true
    },
    {
      name: 'Fuerzas Básicas Pachuca Sub-15',
      period: '2024 - 2025',
      role: 'Jugadora en Desarrollo',
      description: 'Formación integral en las categorías menores',
      achievements: ['Campeona Regional Sub-15', 'Toluca, FMF, Torneo Sub15 con gol en la final'],
      logo: '⚽',
      image: '/images/WhatsApp Image 2025-07-26 at 4.03.00 PM (3).jpeg',
      imagePosition: 'object-[center_15%]',
      current: false
    },
    {
      name: 'La Joya FC',
      period: '2018 - 2024',
      role: 'Iniciación Deportiva',
      description: 'Primeros pasos en el fútbol competitivo',
      achievements: ['Goleadora del Torneo', 'Mejor Jugadora Joven'],
      logo: '🥅',
      image: '/images/WhatsApp Image 2025-07-26 at 4.28.18 PM.jpeg',
      imagePosition: 'object-[center_25%]',
      current: false
    }
  ]

  return (
    <section id="equipos" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-pachuca-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pachuca-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pachuca-blue/10 rounded-full mb-4">
            <span>⚽</span>
            <span className="text-pachuca-blue text-sm font-semibold uppercase tracking-wider">Carrera Deportiva</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sport-title font-bold text-neutral-dark mb-6">
            Mi <span className="text-gradient-blue">Trayectoria</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Los equipos que han sido parte de mi crecimiento como futbolista
          </p>
        </div>

        {/* Teams Timeline */}
        <div className="space-y-8">
          {teams.map((team, index) => (
            <div
              key={team.name}
              className={`group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 card-hover ${
                team.current ? 'ring-2 ring-pachuca-gold ring-offset-4' : ''
              }`}
            >
              {/* Badge de equipo actual */}
              {team.current && (
                <div className="absolute top-4 right-4 z-20 px-4 py-2 bg-gradient-to-r from-pachuca-gold to-yellow-400 rounded-full text-white text-sm font-bold shadow-lg animate-glow">
                  ★ EQUIPO ACTUAL
                </div>
              )}

              <div className="grid lg:grid-cols-5 gap-6 p-6 md:p-8 items-center">
                {/* Imagen del equipo */}
                <div className="lg:col-span-1">
                  <div className="relative w-28 h-28 md:w-32 md:h-32 mx-auto rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300">
                    <img 
                      src={team.image}
                      alt={team.name}
                      className={`w-full h-full object-cover ${team.imagePosition} group-hover:scale-110 transition-transform duration-500`}
                    />
                    {/* Overlay con número de etapa */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-2">
                      <span className="text-white font-bold text-lg">Etapa {index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Info del equipo */}
                <div className="lg:col-span-3 text-center lg:text-left">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-3">
                    <h3 className="text-2xl md:text-3xl font-bold text-neutral-dark">
                      {team.name}
                    </h3>
                    <span className="inline-flex items-center justify-center lg:justify-start">
                      <span className="px-3 py-1 bg-pachuca-blue/10 text-pachuca-blue rounded-full text-sm font-semibold">
                        {team.period}
                      </span>
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-lg font-semibold text-pachuca-gold">{team.role}</span>
                    <p className="text-gray-600 mt-1">{team.description}</p>
                  </div>

                  {/* Logros */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                    {team.achievements.map((achievement) => (
                      <span
                        key={achievement}
                        className="inline-flex items-center gap-1 px-4 py-2 bg-gradient-to-r from-pachuca-blue to-blue-600 text-white rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Indicador visual */}
                <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-center">
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl ${
                    team.current 
                      ? 'bg-gradient-to-br from-pachuca-gold to-yellow-400 shadow-lg shadow-pachuca-gold/30' 
                      : 'bg-gradient-to-br from-pachuca-blue to-blue-600'
                  }`}>
                    {team.logo}
                  </div>
                </div>
              </div>

              {/* Línea decorativa inferior */}
              <div className={`h-1 w-full bg-gradient-to-r ${
                team.current 
                  ? 'from-pachuca-gold via-yellow-400 to-pachuca-gold' 
                  : 'from-pachuca-blue via-blue-400 to-pachuca-blue'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Current Team Highlight modernizado */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-pachuca-blue/20 via-pachuca-gold/20 to-pachuca-blue/20 rounded-3xl blur-xl"></div>
          <div className="relative bg-gradient-to-br from-pachuca-blue via-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white overflow-hidden">
            {/* Patrón decorativo */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-pachuca-gold rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Número decorativo */}
            <div className="absolute top-4 right-4 font-sport-display text-[10rem] text-white/5 leading-none pointer-events-none">
              56
            </div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                  <span className="animate-pulse">🔴</span>
                  <span className="text-sm font-medium">Temporada 2024-2025</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-sport-display tracking-wide mb-4">
                  PACHUCA FEMENIL SUB-19
                </h3>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                  Mi hogar deportivo actual donde cada día trabajo para alcanzar mis metas
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { value: '1', label: 'Año en el club', icon: '📅' },
                  { value: '3', label: 'Jornadas jugadas', icon: '⚽' },
                  { value: '56', label: 'Número de camiseta', icon: '👕' },
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-4xl md:text-5xl font-bold text-pachuca-gold mb-2">{stat.value}</div>
                    <div className="text-blue-100 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
