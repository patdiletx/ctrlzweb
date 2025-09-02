'use client';

interface StepVisualProps {
  type: 'capture' | 'analyze' | 'restore';
  placeholder: string;
}

export default function StepVisual({ type, placeholder }: StepVisualProps) {
  const renderVisual = () => {
    switch (type) {
      case 'capture':
        return (
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Simulated screenshot capture */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="w-16 h-12 bg-blue-200 rounded border-2 border-blue-300 animate-pulse"></div>
              <div className="w-16 h-12 bg-green-200 rounded border-2 border-green-300 animate-pulse delay-100"></div>
              <div className="w-16 h-12 bg-purple-200 rounded border-2 border-purple-300 animate-pulse delay-200"></div>
              <div className="w-16 h-12 bg-orange-200 rounded border-2 border-orange-300 animate-pulse delay-300"></div>
            </div>
            <div className="text-xs text-gray-500 animate-pulse">📸 Capturing context...</div>
          </div>
        );
      case 'analyze':
        return (
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Data flow visualization */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs">📄</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-2 h-1 bg-blue-400 rounded animate-pulse"></div>
                <div className="w-2 h-1 bg-blue-400 rounded animate-pulse delay-100"></div>
                <div className="w-2 h-1 bg-blue-400 rounded animate-pulse delay-200"></div>
              </div>
              <div className="w-12 h-8 bg-green-200 rounded flex items-center justify-center">
                <span className="text-xs">🧠</span>
              </div>
            </div>
            <div className="text-xs text-gray-500">🔍 Analyzing patterns...</div>
          </div>
        );
      case 'restore':
        return (
          <div className="relative h-full flex flex-col items-center justify-center">
            {/* Terminal-like suggestions */}
            <div className="bg-gray-900 rounded p-3 text-left max-w-48">
              <div className="text-xs text-green-400 font-mono">
                <div className="animate-type">💡 Last task:</div>
                <div className="animate-type delay-500 mt-1 text-gray-300">Refactoring auth.js</div>
                <div className="animate-type delay-1000 mt-1 text-blue-300">Line 84</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 mt-2">⚡ Ready to resume</div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative group">
      {/* Enhanced Visual Container */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-lg overflow-hidden border-2 border-gray-300 group-hover:border-blue-400 transition-all duration-500 group-hover:shadow-xl">
        <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
          {/* Main visual content */}
          {renderVisual()}
          
          {/* Placeholder text */}
          <div className="text-gray-600 font-medium text-sm mt-4">
            {placeholder}
          </div>
          <div className="text-xs text-gray-500 bg-white/70 px-3 py-1 rounded-full">
            Interactive Demo Coming Soon
          </div>
        </div>
      </div>

      {/* Enhanced glow effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
    </div>
  );
}