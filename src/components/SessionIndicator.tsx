import { MarketSession } from '../lib/types';
import { Globe } from 'lucide-react';

interface SessionIndicatorProps {
  session: MarketSession;
}

export default function SessionIndicator({ session }: SessionIndicatorProps) {
  const getSessionColor = (name: string) => {
    switch (name) {
      case 'Asian':
        return 'from-yellow-500 to-orange-500';
      case 'London':
        return 'from-blue-500 to-indigo-500';
      case 'New York':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className={`rounded-lg p-4 bg-gradient-to-r ${getSessionColor(session.name)} text-white shadow-lg`}>
      <div className="flex items-center gap-3">
        <Globe className="w-6 h-6" />
        <div>
          <p className="text-sm font-medium opacity-90">Active Session</p>
          <p className="text-xl font-bold">{session.name}</p>
        </div>
        <div className="ml-auto">
          <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-white/20">
        <p className="text-xs font-medium opacity-75 mb-1">Active Pairs:</p>
        <div className="flex flex-wrap gap-1">
          {session.pairs.map((pair) => (
            <span key={pair} className="text-xs px-2 py-1 bg-white/20 rounded">
              {pair}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
