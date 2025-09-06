'use client'

export default function About() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Mi Historia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce el camino que me ha llevado a convertirme en jugadora del Pachuca Femenil Sub-19
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-pachuca-blue rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  Inicios en el Fútbol (2020)
                </h3>
                <p className="text-gray-600">
                  Comencé mi pasión por el fútbol a temprana edad, entrenando en las categorías menores 
                  y desarrollando mis habilidades fundamentales en el campo.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-pachuca-gold rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  Desarrollo en Fuerzas Básicas (2021-2022)
                </h3>
                <p className="text-gray-600">
                  Ingresé a las fuerzas básicas donde perfeccioné mi técnica, velocidad y visión de juego. 
                  Aquí aprendí los valores del trabajo en equipo y la disciplina.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-4 h-4 bg-sport-green rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-semibold text-neutral-dark mb-2">
                  Pachuca Femenil Sub-19 (2023-Presente)
                </h3>
                <p className="text-gray-600">
                  Me uní al prestigioso club Pachuca Femenil Sub-19, donde continúo desarrollando 
                  mi potencial y contribuyendo al éxito del equipo con dedicación y pasión.
                </p>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="bg-gradient-to-br from-pachuca-blue to-blue-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold">A</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Ambar</h3>
              <p className="text-blue-100">Mediocampista Ofensiva</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="font-medium">Edad:</span>
                <span>17 años</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Posición:</span>
                <span>Mediocampista</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Número:</span>
                <span>#10</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Pie Dominante:</span>
                <span>Derecho</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Equipo:</span>
                <span>Pachuca Femenil Sub-19</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-blue-400">
              <h4 className="font-semibold mb-3">Fortalezas</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Visión de Juego</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Pases Precisos</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Velocidad</span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Liderazgo</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-16 text-center">
          <blockquote className="text-2xl md:text-3xl font-medium text-neutral-dark italic">
            "El fútbol no es solo un deporte, es una pasión que me impulsa a ser mejor cada día"
          </blockquote>
          <cite className="block mt-4 text-pachuca-gold font-semibold">- Ambar</cite>
        </div>
      </div>
    </section>
  )
}
