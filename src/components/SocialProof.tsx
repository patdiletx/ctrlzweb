export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Built for developers, by a developer
        </h2>
        
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-lg border border-gray-200">
          {/* Quote */}
          <div className="relative">
            <div className="text-6xl text-blue-400 opacity-30 absolute -top-4 -left-4">
              &ldquo;
            </div>
            <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic mb-8 relative z-10">
              Pasaba horas cada semana intentando recordar dónde me había quedado. Creé CtrlZ para que fuera el copiloto de mi memoria, un ctrl+z para mi propio flujo de pensamiento. Es la herramienta que siempre quise: privada, rápida y que simplemente funciona.
            </blockquote>
            <div className="text-6xl text-blue-400 opacity-30 absolute -bottom-8 -right-4">
              &rdquo;
            </div>
          </div>

          {/* Author info */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            {/* Avatar placeholder - can be replaced with actual image */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              👨‍💻
            </div>
            
            <div className="text-left">
              <div className="font-bold text-gray-900 text-lg">
                Founder
              </div>
              <div className="text-gray-600">
                ctrlz.app
              </div>
            </div>
          </div>

          {/* Stats or credibility indicators */}
          <div className="mt-12 pt-8 border-t border-gray-300">
            <div className="flex justify-center space-x-8 text-center">
              <div className="space-y-1">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">Years Dev Experience</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-purple-600">100%</div>
                <div className="text-sm text-gray-600">Privacy First</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold text-green-600">0</div>
                <div className="text-sm text-gray-600">Data Collection</div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional context */}
        <p className="text-lg text-gray-600 mt-8 max-w-2xl mx-auto">
          CtrlZ was born from the frustration of losing context after every meeting, notification, or interruption. 
          It&apos;s designed by a developer who understands the real pain of context switching.
        </p>
      </div>
    </section>
  );
}