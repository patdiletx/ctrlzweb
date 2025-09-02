'use client';

import EmailCapture from './EmailCapture';

export default function EarlyAccessOffer() {
  const timeLeft = {
    days: 7,
    hours: 23,
    minutes: 45,
    seconds: 30
  };

  // Simulate countdown (in a real app, this would be calculated from a real end date)
  const benefits = [
    {
      icon: "💰",
      title: "50% Off Lifetime License",
      description: "Save $199 on the full version when CtrlZ launches",
      highlight: "Limited Time"
    },
    {
      icon: "🚀",
      title: "First Access Priority",
      description: "Be among the first 1000 users to experience CtrlZ",
      highlight: "Exclusive"
    },
    {
      icon: "🎯",
      title: "Shape the Product",
      description: "Your feedback directly influences development",
      highlight: "Beta Influence"
    },
    {
      icon: "🏆",
      title: "Founding Member Badge",
      description: "Recognition as an early adopter in the app",
      highlight: "Status Symbol"
    }
  ];

  const testimonials = [
    {
      quote: "Finally, a productivity tool that gets it right. The local-first approach is exactly what I&apos;ve been looking for.",
      author: "Sarah Chen",
      role: "Senior Developer at Microsoft",
      avatar: "👩‍💻"
    },
    {
      quote: "The early preview blew my mind. This is going to change how I handle interruptions forever.",
      author: "Marcus Rodriguez", 
      role: "Tech Lead at Stripe",
      avatar: "👨‍💻"
    },
    {
      quote: "I&apos;ve tried every productivity app out there. CtrlZ is the first one that respects my privacy AND works perfectly.",
      author: "Alex Kim",
      role: "Founder, DevTools Co",
      avatar: "🧑‍💻"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Urgency */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
            <span>⚡ LIMITED EARLY ACCESS OFFER</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Get CtrlZ for{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                50% Off
              </span>
              <div className="absolute -top-4 -right-8 transform rotate-12">
                <span className="bg-yellow-300 text-yellow-800 px-2 py-1 rounded text-sm font-bold">
                  Save $199!
                </span>
              </div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Join the exclusive early access program and secure your lifetime license at launch price. 
            <span className="font-bold text-orange-600"> Only 247 spots remaining</span> out of 1000 total.
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-6 max-w-md mx-auto mb-8 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">⏰ Offer expires in:</h3>
            <div className="grid grid-cols-4 gap-4 text-center">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-3">
                <div className="text-2xl font-bold">{timeLeft.days}</div>
                <div className="text-xs">Days</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-3">
                <div className="text-2xl font-bold">{timeLeft.hours}</div>
                <div className="text-xs">Hours</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-3">
                <div className="text-2xl font-bold">{timeLeft.minutes}</div>
                <div className="text-xs">Minutes</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-xl p-3">
                <div className="text-2xl font-bold">{timeLeft.seconds}</div>
                <div className="text-xs">Seconds</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-2xl p-6 h-full hover:bg-white hover:shadow-xl transition-all duration-300 group-hover:border-orange-300">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="text-3xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {benefit.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            What Early Access Members Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm border border-orange-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            🚀 Secure Your Early Access Now
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Join 753 developers who&apos;ve already claimed their spot. 
            Lock in your 50% discount and be part of the productivity revolution.
          </p>

          {/* Email Capture Form */}
          <div className="max-w-md mx-auto mb-8">
            <EmailCapture className="[&_input]:bg-white/20 [&_input]:border-white/30 [&_input]:text-white [&_input]:placeholder-orange-100 [&_button]:bg-white [&_button]:text-orange-600 [&_button]:hover:bg-gray-100" />
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-orange-100">
            <div className="flex items-center justify-center space-x-2">
              <span>🔒</span>
              <span>No spam, unsubscribe anytime</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>⚡</span>
              <span>Instant access when we launch</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span>💰</span>
              <span>Price locked for life</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-8">
            <div className="flex justify-between text-sm text-orange-200 mb-2">
              <span>Early Access Progress</span>
              <span>753 / 1000 claimed</span>
            </div>
            <div className="bg-white/20 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full h-3 transition-all duration-1000" 
                style={{ width: '75.3%' }}
              ></div>
            </div>
            <p className="text-xs text-orange-200 mt-2">
              Only <span className="font-bold text-white">247 spots</span> remaining at this price
            </p>
          </div>
        </div>

        {/* Risk Reversal */}
        <div className="text-center mt-12">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto">
            <h4 className="text-lg font-bold text-green-800 mb-2">
              🛡️ 100% Risk-Free Guarantee
            </h4>
            <p className="text-green-700">
              If CtrlZ doesn&apos;t revolutionize your productivity within 30 days of launch, 
              we&apos;ll refund every penny. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}