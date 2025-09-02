'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const faqItems: FAQItem[] = [
    {
      category: 'general',
      question: 'What exactly is CtrlZ?',
      answer: 'CtrlZ is a privacy-first productivity companion that automatically detects interruptions, captures your work context, and instantly restores your workspace when you\'re ready to resume. It runs 100% locally on your machine, ensuring your data stays completely private.'
    },
    {
      category: 'platforms',
      question: 'Which platforms does CtrlZ support?',
      answer: 'CtrlZ will be available for Windows, macOS, and Linux. We\'re starting with Windows and macOS for the initial release, with Linux support coming shortly after. All platforms will have feature parity.'
    },
    {
      category: 'platforms',
      question: 'Does CtrlZ work with my favorite apps?',
      answer: 'Yes! CtrlZ is designed to work with any application on your system. It captures context from browsers, IDEs, text editors, design tools, and more. No configuration required - it works out of the box.'
    },
    {
      category: 'pricing',
      question: 'How much will CtrlZ cost?',
      answer: 'The regular price will be $399 for a lifetime license. However, early access members get 50% off, paying only $199. This includes all future updates and features with no subscription fees ever.'
    },
    {
      category: 'pricing',
      question: 'Is there a subscription model?',
      answer: 'No subscriptions, ever! CtrlZ is a one-time purchase with lifetime access. We believe productivity tools should be owned, not rented. Your license includes all future updates and new features.'
    },
    {
      category: 'timeline',
      question: 'When will CtrlZ be available?',
      answer: 'We\'re targeting Q2 2025 for the initial release to early access members. Beta testing will begin in Q1 2025. Early access members get priority access to beta and the full release.'
    },
    {
      category: 'timeline',
      question: 'How long is the early access offer valid?',
      answer: 'The 50% early access discount is limited to the first 1000 members and expires in 7 days. After that, the price goes to the regular $399 lifetime license.'
    },
    {
      category: 'privacy',
      question: 'How is my data protected?',
      answer: 'Everything runs 100% locally on your machine. We never see your data, don\'t track your usage, and don\'t collect telemetry. Your context snapshots are encrypted with AES-256. We can\'t access your data even if we wanted to.'
    },
    {
      category: 'privacy',
      question: 'Do I need an internet connection?',
      answer: 'No! CtrlZ works completely offline. Since everything is processed locally, you don\'t need internet access for any functionality. This also means instant response times and zero latency.'
    },
    {
      category: 'technical',
      question: 'What are the system requirements?',
      answer: 'CtrlZ has minimal system requirements: 4GB RAM, 500MB storage, and a modern operating system (Windows 10+, macOS 10.15+, or Linux). It\'s optimized to run efficiently in the background without impacting performance.'
    },
    {
      category: 'technical',
      question: 'Can I try CtrlZ before buying?',
      answer: 'Yes! Early access members get a 30-day money-back guarantee. If CtrlZ doesn\'t revolutionize your productivity, we\'ll refund every penny, no questions asked.'
    },
    {
      category: 'general',
      question: 'What makes CtrlZ different from other productivity tools?',
      answer: 'CtrlZ is the first tool that automatically handles interruption recovery. Unlike task managers or focus apps, we capture your entire work context and restore it instantly. Plus, we\'re 100% local-first - your data never leaves your machine.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Questions', icon: '📋' },
    { id: 'general', name: 'General', icon: '❓' },
    { id: 'platforms', name: 'Platforms', icon: '💻' },
    { id: 'pricing', name: 'Pricing', icon: '💰' },
    { id: 'timeline', name: 'Timeline', icon: '📅' },
    { id: 'privacy', name: 'Privacy', icon: '🔒' },
    { id: 'technical', name: 'Technical', icon: '⚙️' }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>❓</span>
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Got Questions? We&apos;ve Got{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Answers
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about CtrlZ, from features and pricing to privacy and availability.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              {category.id !== 'all' && (
                <span className="bg-white/20 text-xs px-2 py-0.5 rounded-full">
                  {faqItems.filter(item => item.category === category.id).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 rounded-xl transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Join our early access program and get direct access to 
              our founders for any questions or feedback.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center space-x-2">
                  <span>💬</span>
                  <span>Direct founder access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>⚡</span>
                  <span>Priority support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span>🎯</span>
                  <span>Feature requests</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">Q2 2025</div>
            <div className="text-gray-600">Expected Launch</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">3 Platforms</div>
            <div className="text-gray-600">Windows, macOS, Linux</div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="text-3xl mb-2">🛡️</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">100% Local</div>
            <div className="text-gray-600">Privacy Guaranteed</div>
          </div>
        </div>
      </div>
    </section>
  );
}