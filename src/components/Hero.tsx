import EmailCapture from './EmailCapture';
import DynamicTerminal from './DynamicTerminal';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
          ctrlz.app
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-100">
          Take control of your productivity
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
          Stop losing focus to endless interruptions. CtrlZ is the privacy-first productivity companion that runs 100% locally on your machine.
        </p>
        
        <p className="text-lg md:text-xl text-blue-300 mb-8 max-w-2xl mx-auto">
          Your data stays yours. Your focus comes back.
        </p>
        
        <DynamicTerminal />
        
        <div className="mb-12">
          <EmailCapture />
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Local First</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
            <span>Privacy Focused</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <span>Developer Friendly</span>
          </div>
        </div>
      </div>
    </section>
  );
}