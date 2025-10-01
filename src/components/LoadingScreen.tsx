import { Zap } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center">
      <div className="animate-bounce mb-8">
        <img src="/image.png" alt="BNB Logo" width="120" height="120" />
      </div>

      <div className="animate-pulse mb-8">
        <Zap size={48} className="text-yellow-400" fill="#FACC15" />
      </div>

      <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
        Welcome to BNB Card Generator
      </h1>

      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
}
