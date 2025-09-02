export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Detect Interruptions",
      description: "CtrlZ automatically detects when you're interrupted - whether it's a notification, meeting, or context switch.",
      placeholder: "🎯 GIF: Screen showing notification detection",
      icon: "🔍"
    },
    {
      number: "02", 
      title: "Capture Your Context",
      description: "Before you switch tasks, CtrlZ captures your current work context - windows, documents, and mental state.",
      placeholder: "📸 GIF: Context being captured and saved",
      icon: "📋"
    },
    {
      number: "03",
      title: "Handle the Interruption", 
      description: "Deal with the interruption knowing your context is safely stored. No more losing track of where you were.",
      placeholder: "⚡ GIF: User handling interruption confidently",
      icon: "🚀"
    },
    {
      number: "04",
      title: "Instant Context Restore",
      description: "When you're ready to resume, CtrlZ instantly restores your workspace and reminds you exactly where you left off.",
      placeholder: "🔄 GIF: Workspace being restored perfectly",
      icon: "⚡"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How CtrlZ Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stop losing productivity to interruptions. CtrlZ automatically saves and restores your work context, 
            so you can handle any interruption without losing your flow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {steps.map((step, index) => (
            <div key={step.number} className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              {/* Step Content */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                      <span>{step.icon}</span>
                      <span>{step.title}</span>
                    </h3>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed pl-16">
                  {step.description}
                </p>

                {/* Benefits for this step */}
                <div className="pl-16">
                  <div className="flex flex-wrap gap-2 mt-4">
                    {index === 0 && (
                      <>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Smart Detection</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">No Manual Setup</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Complete Context</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">100% Local</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Peace of Mind</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">No Stress</span>
                      </>
                    )}
                    {index === 3 && (
                      <>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Instant Resume</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Zero Memory Load</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder areas for GIFs */}
          {steps.map((step, index) => (
            <div key={`gif-${step.number}`} className={`${index % 2 === 0 ? 'lg:order-1' : ''}`}>
              <div className="relative group">
                {/* GIF Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-200 group-hover:border-blue-300 transition-all duration-300">
                  <div className="h-full flex flex-col items-center justify-center text-center p-8 space-y-4">
                    <div className="text-6xl opacity-50">
                      {step.icon}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {step.placeholder}
                    </div>
                    <div className="text-sm text-gray-500 bg-white/70 px-3 py-1 rounded-full">
                      Coming Soon: Interactive Demo
                    </div>
                  </div>
                </div>

                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Take Control of Your Productivity?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers who never lose their context again. 
              CtrlZ runs 100% locally - your data stays on your machine.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                <span>100% Local & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Zero Learning Curve</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                <span>Works with Any App</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}