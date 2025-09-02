'use client';

import { useState } from 'react';
import { trackEmailSubscription } from './Analytics';

interface EmailCaptureProps {
  className?: string;
}

export default function EmailCapture({ className = '' }: EmailCaptureProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter your email address');
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setMessage('Please enter a valid email address');
      setIsSuccess(false);
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setMessage('🎉 You\'re on the list! Check your email for next steps.');
      setIsSuccess(true);
      
      // Track successful subscription
      trackEmailSubscription(email);
      
      setEmail('');

      // Optional: Redirect to thanks page after 2 seconds
      setTimeout(() => {
        window.location.href = '/thanks';
      }, 2000);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Something went wrong. Please try again.';
      setMessage(errorMessage);
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`w-full max-w-md mx-auto ${className}`}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-200"
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-full btn-enhanced shadow-lg hover:shadow-xl disabled:hover:scale-100 whitespace-nowrap"
          >
            {isSubmitting ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Joining...</span>
              </div>
            ) : (
              'Get Early Access'
            )}
          </button>
        </div>
        
        {message && (
          <div 
            className={`text-center p-3 rounded-lg transition-all duration-300 ${
              isSuccess 
                ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                : 'bg-red-500/20 text-red-300 border border-red-500/30'
            }`}
          >
            {message}
          </div>
        )}
      </form>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-400">
          🔒 Your email is safe with us. No spam, unsubscribe anytime.
        </p>
        <div className="mt-2 flex justify-center items-center space-x-4 text-xs text-gray-500">
          <span className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-green-400 rounded-full"></div>
            <span>Privacy First</span>
          </span>
          <span className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
            <span>50% Off Launch Price</span>
          </span>
          <span className="flex items-center space-x-1">
            <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            <span>Early Access</span>
          </span>
        </div>
      </div>
    </div>
  );
}