import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thank You - CtrlZ Early Access",
  description: "Welcome to CtrlZ early access program! You've secured your 50% discount and will be among the first to experience our privacy-first productivity tool.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          🎉 You&apos;re All Set!
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Welcome to the CtrlZ early access program! We&apos;ve sent you a confirmation email with all the details.
        </p>

        {/* Benefits Card */}
        <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-6">What happens next?</h2>
          
          <div className="grid gap-4 text-left">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-xs text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Check Your Email</h3>
                <p className="text-gray-400 text-sm">We&apos;ve sent you a welcome email with your early access details.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-xs text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">50% Discount Secured</h3>
                <p className="text-gray-400 text-sm">Your early access price of $199 (instead of $399) is locked in.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-xs text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Stay Updated</h3>
                <p className="text-gray-400 text-sm">Get exclusive updates on development progress and launch timeline.</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mt-1">
                <span className="text-xs text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Q2 2025 Launch</h3>
                <p className="text-gray-400 text-sm">Be among the first to experience CtrlZ when we launch.</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            ← Back to Homepage
          </Link>
          
          <a 
            href="https://github.com/patdiletx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Follow Development
          </a>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Questions? Reply to the welcome email or reach out at{' '}
            <a href="mailto:hello@ctrlz.app" className="text-blue-400 hover:text-blue-300">
              hello@ctrlz.app
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}