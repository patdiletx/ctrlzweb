export default function PrivacyFirst() {
  const privacyFeatures = [
    {
      icon: "🏠",
      title: "100% Local Processing",
      description: "All your data stays on your machine. No cloud uploads, no external servers, no exceptions.",
      highlight: "Zero Cloud Dependency"
    },
    {
      icon: "🔒",
      title: "Military-Grade Encryption",
      description: "Your context snapshots are encrypted with AES-256. Even on your own machine, your data is protected.",
      highlight: "Bank-Level Security"
    },
    {
      icon: "🚫",
      title: "No Tracking, No Analytics",
      description: "We don't track your usage, collect telemetry, or analyze your behavior. Your productivity is private.",
      highlight: "Complete Anonymity"
    },
    {
      icon: "⚡",
      title: "Instant & Offline",
      description: "Works without internet. Your context restoration happens instantly because everything is local.",
      highlight: "Lightning Fast"
    }
  ];

  const comparisons = [
    {
      category: "Data Location",
      ctrlz: "100% on your machine",
      others: "Cloud servers (US, EU, Asia)",
      advantage: true
    },
    {
      category: "Internet Required",
      ctrlz: "Never required",
      others: "Always connected",
      advantage: true
    },
    {
      category: "Data Analysis",
      ctrlz: "Zero analytics",
      others: "Usage tracking & profiling",
      advantage: true
    },
    {
      category: "Speed",
      ctrlz: "Instant (local)",
      others: "Network dependent",
      advantage: true
    },
    {
      category: "Privacy Policy",
      ctrlz: "Not needed - no data collection",
      others: "Pages of legal text",
      advantage: true
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Privacy-First Architecture</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Your Data Stays{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
              Yours
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In a world where every app wants your data, CtrlZ takes the opposite approach. 
            <span className="text-green-300 font-semibold"> Everything runs locally on your machine</span> - 
            no cloud, no tracking, no compromises.
          </p>
        </div>

        {/* Privacy Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {privacyFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 group-hover:border-green-400/30">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="text-4xl">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <span className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                      {feature.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            CtrlZ vs. Cloud-Based Solutions
          </h3>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-6 text-gray-300 font-semibold">Feature</th>
                    <th className="text-center p-6 text-green-300 font-bold">
                      <div className="flex items-center justify-center space-x-2">
                        <span>🔒</span>
                        <span>CtrlZ</span>
                      </div>
                    </th>
                    <th className="text-center p-6 text-gray-400 font-semibold">
                      <div className="flex items-center justify-center space-x-2">
                        <span>☁️</span>
                        <span>Others</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map((row, index) => (
                    <tr key={index} className="border-t border-white/10">
                      <td className="p-6 font-medium text-white">{row.category}</td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center space-x-2 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-medium">
                          <span>✓</span>
                          <span>{row.ctrlz}</span>
                        </span>
                      </td>
                      <td className="p-6 text-center">
                        <span className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 px-3 py-1 rounded-full text-sm">
                          <span>✗</span>
                          <span>{row.others}</span>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 rounded-2xl p-8 border border-green-400/30">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Built for Developers, by Developers
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              We understand the value of data sovereignty. That&apos;s why CtrlZ is designed 
              with privacy as the foundation, not an afterthought.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-3xl">🔓</div>
              <h4 className="font-bold text-white">Open Architecture</h4>
              <p className="text-sm text-gray-400">
                Transparent design. You can verify exactly what runs on your machine.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl">⚖️</div>
              <h4 className="font-bold text-white">GDPR Compliant by Design</h4>
              <p className="text-sm text-gray-400">
                No data collection means no compliance headaches. Ever.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="text-3xl">🛡️</div>
              <h4 className="font-bold text-white">Enterprise-Ready Security</h4>
              <p className="text-sm text-gray-400">
                Your sensitive work contexts never leave your secure environment.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-green-300 font-semibold">
              &ldquo;Finally, a productivity tool that respects my data sovereignty.&rdquo; 
              <span className="text-gray-400">— Senior Software Engineer, Fortune 500</span>
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Keep Your Data Where It Belongs?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of privacy-conscious developers who chose local-first productivity.
          </p>
          <div className="flex justify-center space-x-8 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>No Sign-up Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Works Offline</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}