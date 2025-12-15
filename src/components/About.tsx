'use client'

export default function About() {
  return (
    <section id="historia" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Decoración de fondo - Campo de fútbol estilizado */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] border-2 border-pachuca-blue rounded-lg"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-pachuca-blue rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pachuca-blue rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header con estilo moderno */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pachuca-gold/10 rounded-full mb-4">
            <span className="text-pachuca-gold animate-star-pulse">★</span>
            <span className="text-pachuca-blue text-sm font-semibold uppercase tracking-wider">Mi Trayectoria</span>
            <span className="text-pachuca-gold animate-star-pulse">★</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sport-title font-bold text-neutral-dark mb-6">
            Mi <span className="text-gradient-gold">Historia</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce el camino que me ha llevado a convertirme en jugadora del Pachuca Femenil Sub-19
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline moderno */}
          <div className="space-y-8">
            {[
              {
                year: '2017',
                title: 'Inicios en el Fútbol',
                description: 'Comencé mi pasión por el fútbol a temprana edad, entrenando en las categorías menores mixtas con el Club La Joya y desarrollando mis habilidades fundamentales en el campo.',
                color: 'from-blue-500 to-pachuca-blue',
                icon: '⚽'
              },
              {
                year: '2024',
                title: 'Desarrollo en Fuerzas Básicas',
                description: 'Ingresé a las fuerzas básicas en 2024 donde perfeccioné mi técnica, velocidad y visión de juego. Aquí aprendí los valores de un Club Profesional que se caracteriza del trabajo en equipo y la disciplina.',
                color: 'from-pachuca-gold to-yellow-500',
                icon: '🏆'
              },
              {
                year: '2025',
                title: 'Pachuca Femenil Sub-19',
                description: 'En mi primer año jugué en las FB sub-15 donde quedamos campeonas y actualmente he subido a la categoría Pachuca Femenil Sub-19, donde continúo desarrollando mi potencial y contribuyendo al éxito del equipo.',
                color: 'from-green-500 to-emerald-600',
                icon: '🌟'
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative flex gap-6 items-start"
              >
                {/* Línea conectora */}
                {index < 2 && (
                  <div className="absolute left-6 top-16 w-0.5 h-24 bg-gradient-to-b from-gray-300 to-transparent"></div>
                )}
                
                {/* Círculo del año */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                
                {/* Contenido */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-gray-100 card-hover">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-bold text-white bg-gradient-to-r ${item.color}`}>
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-dark">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Profile Card modernizada - Estilo de tarjeta de futbolista */}
          <div className="relative">
            {/* Efecto de brillo */}
            <div className="absolute -inset-4 bg-gradient-to-r from-pachuca-gold/20 via-pachuca-blue/20 to-pachuca-gold/20 rounded-3xl blur-xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-pachuca-blue via-blue-600 to-indigo-700 rounded-3xl overflow-hidden shadow-2xl">
              {/* Patrón decorativo */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]"></div>
              </div>
              
              {/* Número de dorsal grande */}
              <div className="absolute top-4 right-4 font-sport-display text-8xl text-white/10 leading-none">
                56
              </div>

              <div className="relative p-8 text-white">
                {/* Foto y nombre */}
                <div className="text-center mb-8">
                  <div className="relative inline-block">
                    <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-pachuca-gold/50 shadow-xl">
                      <img 
                        src="/images/90.webp" 
                        alt="Ambar Pachuca"
                        className="w-full h-full object-cover object-[center_15%]"
                      />
                    </div>
                    {/* Badge de estrella */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-pachuca-gold to-yellow-400 rounded-full text-xs font-bold text-white shadow-lg">
                      ★ ESTRELLA ★
                    </div>
                  </div>
                  <h3 className="text-3xl font-sport-display tracking-wide mt-4 mb-1">AMBAR</h3>
                  <p className="text-blue-200 font-medium">Mediocampista Ofensiva</p>
                </div>

                {/* Stats en formato de tarjeta de fútbol */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { label: 'Edad', value: '14 años' },
                    { label: 'Posición', value: 'Mediocampista' },
                    { label: 'Número', value: '#56' },
                    { label: 'Pie', value: 'Derecho' },
                  ].map((stat, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center">
                      <span className="text-xs text-blue-200 uppercase tracking-wider">{stat.label}</span>
                      <div className="text-lg font-bold">{stat.value}</div>
                    </div>
                  ))}
                </div>

                {/* Equipo actual */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center mb-6">
                  <span className="text-xs text-blue-200 uppercase tracking-wider">Equipo Actual</span>
                  <div className="text-xl font-bold text-pachuca-gold">Pachuca Femenil Sub-19</div>
                </div>

                {/* Fortalezas con estilo de badges */}
                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-sm font-semibold mb-4 text-center uppercase tracking-wider text-blue-200">
                    Fortalezas
                  </h4>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Visión de Juego', 'Pases Precisos', 'Velocidad', 'Gambeteo', 'Drible', 'Ambición', 'Equipo', 'Disciplina'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1.5 bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/30 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote con estilo moderno */}
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-pachuca-blue/5 via-pachuca-gold/5 to-pachuca-blue/5 rounded-3xl"></div>
          <div className="relative text-center py-12 px-8">
            <div className="text-6xl text-pachuca-gold/30 mb-4">"</div>
            <blockquote className="text-2xl md:text-4xl font-medium text-neutral-dark italic max-w-4xl mx-auto leading-relaxed">
              El fútbol no es solo un deporte, es una pasión que me impulsa a ser mejor cada día
            </blockquote>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-pachuca-gold"></div>
              <cite className="text-pachuca-gold font-bold text-xl not-italic">Ambar</cite>
              <div className="h-px w-12 bg-pachuca-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
