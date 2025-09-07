"use client";

export default function Stats() {
  const stats = [
    { label: "Partidos Jugados", value: "28", icon: "⚽" },
    { label: "Goles Anotados", value: "15", icon: "🥅" },
    { label: "Asistencias", value: "8", icon: "🎯" },
    { label: "Pases Efectivos", value: "90%", icon: "📊" },
    { label: "Minutos Jugados", value: "2,340", icon: "⏱️" },
    { label: "Tarjetas Amarillas", value: "2", icon: "🟨" },
  ];

  const achievements = [
    "Mejor Jugadora del Mes - Marzo 2024",
    "Top 3 Goleadoras Sub-19 - 2024",
    "Capitana del Equipo - 2024",
    "MVP Torneo Regional - 2023",
  ];

  return (
    <section
      id="estadisticas"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Estadísticas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Números que reflejan mi desempeño y compromiso en el campo
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 card-hover"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <div className="text-2xl md:text-3xl font-bold text-pachuca-blue mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Performance Chart */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Performance Radar */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-neutral-dark mb-6 text-center">
              Habilidades Técnicas
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Velocidad</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-pachuca-blue h-3 rounded-full"
                    style={{ width: "85%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-pachuca-blue">85%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Pases</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-sport-green h-3 rounded-full"
                    style={{ width: "92%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-sport-green">92%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Finalización</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-pachuca-gold h-3 rounded-full"
                    style={{ width: "78%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-pachuca-gold">78%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Defensa</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-red-500 h-3 rounded-full"
                    style={{ width: "70%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-red-500">70%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Físico</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-purple-500 h-3 rounded-full"
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-purple-500">88%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Mental</span>
                <div className="flex-1 mx-4 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-indigo-500 h-3 rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-indigo-500">94%</span>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center"> Logros y Reconocimientos</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-pachuca-gold rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div>
                  <span className="font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-blue-400">
              <h4 className="font-semibold mb-4 text-center">Temporada 2024-2025</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-pachuca-gold">10</div>
                  <div className="text-sm text-blue-100">Goles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-pachuca-gold">8</div>
                  <div className="text-sm text-blue-100">Asistencias</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
