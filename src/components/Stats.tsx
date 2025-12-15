"use client";

export default function Stats() {
  const stats = [
    { label: "Partidos Jugados", value: "28", icon: "⚽", color: "from-blue-500 to-pachuca-blue" },
    { label: "Goles Anotados", value: "15", icon: "🥅", color: "from-pachuca-gold to-yellow-500" },
    { label: "Asistencias", value: "8", icon: "🎯", color: "from-green-500 to-emerald-600" },
    { label: "Pases Efectivos", value: "90%", icon: "📊", color: "from-purple-500 to-indigo-600" },
    { label: "Minutos Jugados", value: "2,340", icon: "⏱️", color: "from-red-500 to-rose-600" },
    { label: "Tarjetas Amarillas", value: "2", icon: "🟨", color: "from-amber-500 to-orange-500" },
  ];

  const achievements = [
    { text: "Mejor Jugadora del Mes - Marzo 2024", icon: "🏅" },
    { text: "Top 3 Goleadoras a nivel estatal en Los Cabos - 2023", icon: "⚽" },
    { text: "Capitana del Equipo en la Selección de Los Cabos - 2023", icon: "👑" },
    { text: "Campeona Nacional en León en Enero - 2024 con el Club La Joya", icon: "🏆" },
  ];

  const skills = [
    { name: "Velocidad", value: 85, color: "bg-pachuca-blue" },
    { name: "Pases", value: 92, color: "bg-sport-green" },
    { name: "Finalización", value: 78, color: "bg-pachuca-gold" },
    { name: "Defensa", value: 70, color: "bg-red-500" },
    { name: "Físico", value: 88, color: "bg-purple-500" },
    { name: "Mental", value: 94, color: "bg-indigo-500" },
  ];

  return (
    <section
      id="estadisticas"
      className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
    >
      {/* Decoración de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pachuca-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pachuca-gold/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-pachuca-gold/10 rounded-full mb-4">
            <span>📊</span>
            <span className="text-pachuca-blue text-sm font-semibold uppercase tracking-wider">Rendimiento</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sport-title font-bold text-neutral-dark mb-6">
            <span className="text-gradient-gold">Estadísticas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números que reflejan mi desempeño y compromiso en el campo
          </p>
        </div>

        {/* Stats Grid moderno */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-500 card-hover overflow-hidden"
            >
              {/* Fondo gradiente en hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Icono con animación */}
              <div className="relative">
                <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
              
              {/* Línea decorativa inferior */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Performance y Achievements */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Performance Radar modernizado */}
          <div className="bg-white rounded-3xl p-8 shadow-xl overflow-hidden relative">
            {/* Decoración */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-pachuca-blue/5 rounded-full blur-2xl"></div>
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-xl flex items-center justify-center text-white text-xl">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-neutral-dark">
                  Habilidades Técnicas
                </h3>
              </div>
              
              <div className="space-y-5">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-700 group-hover:text-pachuca-blue transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-sm font-bold ${skill.color.replace('bg-', 'text-')}`}>
                        {skill.value}%
                      </span>
                    </div>
                    <div className="relative h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute inset-y-0 left-0 ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.value}%` }}
                      >
                        {/* Efecto de brillo */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent shimmer-effect"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements modernizado */}
          <div className="relative bg-gradient-to-br from-pachuca-blue via-blue-600 to-indigo-700 rounded-3xl p-8 text-white overflow-hidden">
            {/* Decoraciones */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-pachuca-gold/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            
            {/* Número decorativo */}
            <div className="absolute top-4 right-4 font-sport-display text-8xl text-white/5 leading-none">
              #1
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pachuca-gold to-yellow-400 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  🏆
                </div>
                <h3 className="text-2xl font-bold">Logros y Reconocimientos</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pachuca-gold to-yellow-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">{achievement.icon}</span>
                    </div>
                    <span className="font-medium leading-tight">{achievement.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats de temporada */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="animate-pulse text-red-400">●</span>
                  <h4 className="font-semibold text-center uppercase tracking-wider text-sm">
                    Temporada 2024-2025
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-pachuca-gold">10</div>
                    <div className="text-sm text-blue-100">Goles</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-pachuca-gold">8</div>
                    <div className="text-sm text-blue-100">Asistencias</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
