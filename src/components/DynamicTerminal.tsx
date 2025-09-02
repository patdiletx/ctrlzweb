'use client';
import { TypeAnimation } from 'react-type-animation';

export default function DynamicTerminal() {
  return (
    <div className="relative max-w-4xl mx-auto mt-8 mb-12">
      {/* Terminal Window */}
      <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
        {/* Terminal Header */}
        <div className="bg-gray-800 px-4 py-3 flex items-center space-x-2 border-b border-gray-700">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <span className="text-gray-400 text-sm font-mono">ctrlz-terminal</span>
          </div>
        </div>
        
        {/* Terminal Content */}
        <div className="p-6 h-80 font-mono text-sm leading-relaxed overflow-hidden">
          <TypeAnimation
            sequence={[
              // Cycle 1: Suggest
              '$ ', 500,
              '$ ctrlz suggest', 1000,
              '\n💡 You were refactoring the authentication service to use JWT with refresh tokens.\n\n', 2000,
              
              // Clear and start cycle 2: Search
              '', 500,
              '$ ', 500,
              '$ ctrlz search "cors error in login endpoint"', 1200,
              '\n✅ Found. 2 hours ago in api/auth.rs, line 84.\nYou were checking a Stack Overflow post about Access-Control-Allow-Origin headers.\n\n', 2500,
              
              // Clear and start cycle 3: Replay
              '', 500,
              '$ ', 500,
              '$ ctrlz replay --since=3pm', 1000,
              '\n📋 Session timeline:\n15:02 - 📝 Editing UserService.ts\n15:15 - 🐞 Debugging in Chrome DevTools  \n15:28 - 💬 Slack: Sync meeting\n15:45 - ⚡ Resolving merge conflict in auth.rs\n\n', 3000,
              
              // Loop back
              '', 1000,
            ]}
            wrapper="div"
            repeat={Infinity}
            className="text-green-400"
            style={{ 
              whiteSpace: 'pre-line',
              display: 'block',
              minHeight: '200px'
            }}
            speed={75}
          />
          
          {/* Blinking cursor */}
          <span className="animate-pulse text-green-400">▌</span>
        </div>
      </div>
      
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur-xl -z-10 animate-pulse"></div>
    </div>
  );
}