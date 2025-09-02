import StepVisual from './StepVisual';

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Capture",
      description: "CtrlZ automatically captures your work context - files, browser tabs, terminal sessions, and your current mental state. Everything is stored locally and securely.",
      placeholder: "📸 Visual: Screenshots and data being captured in real-time",
      icon: "📸",
      visual: "capture"
    },
    {
      number: "02", 
      title: "Analyze",
      description: "Our AI analyzes your captured context to understand what you were working on, creating intelligent summaries and identifying key patterns.",
      placeholder: "🧠 Visual: Data flowing through analysis pipeline",
      icon: "🧠",
      visual: "analyze"
    },
    {
      number: "03",
      title: "Restore",
      description: "When you're ready to resume, CtrlZ instantly suggests exactly where you left off with intelligent context restoration and smart recommendations.",
      placeholder: "⚡ Visual: Terminal showing suggestions appearing",
      icon: "⚡",
      visual: "restore"
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
                    <h3 className="text-3xl font-bold text-gray-900 flex items-center space-x-3">
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
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Automatic</span>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">100% Local</span>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Secure</span>
                      </>
                    )}
                    {index === 1 && (
                      <>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">AI-Powered</span>
                        <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Smart Insights</span>
                        <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Pattern Recognition</span>
                      </>
                    )}
                    {index === 2 && (
                      <>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Instant Resume</span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Zero Memory Load</span>
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Context-Aware</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Enhanced Visual Areas */}
          {steps.map((step, index) => (
            <div key={`visual-${step.number}`} className={`${index % 2 === 0 ? 'lg:order-1' : ''}`}>
              <StepVisual 
                type={step.visual as 'capture' | 'analyze' | 'restore'}
                placeholder={step.placeholder}
              />
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