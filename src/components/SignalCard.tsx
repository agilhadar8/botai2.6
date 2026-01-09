import { TradingSignal } from '../lib/types';
import { TrendingUp, TrendingDown, Target, Clock } from 'lucide-react';

interface SignalCardProps {
  signal: TradingSignal;
}

export default function SignalCard({ signal }: SignalCardProps) {
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes} EAT`;
  };

  const isBuy = signal.action === 'BUY';

  return (
    <div className={`rounded-lg p-6 shadow-lg border-2 ${
      isBuy
        ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-400'
        : 'bg-gradient-to-br from-red-50 to-rose-50 border-red-400'
    }`}>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium text-sm">📊 Pair:</span>
          <span className="text-2xl font-bold text-gray-800">{signal.pair}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-600 font-medium text-sm">Action:</span>
          <div className="flex items-center gap-2">
            {isBuy ? (
              <TrendingUp className="w-5 h-5 text-green-600" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-600" />
            )}
            <span className={`text-xl font-bold ${
              isBuy ? 'text-green-600' : 'text-red-600'
            }`}>
              {signal.action}/{isBuy ? 'CALL' : 'PUT'} {isBuy ? '📈' : '📉'}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-orange-500" />
            <span className="text-gray-600 font-medium text-sm">🎯 Confidence:</span>
          </div>
          <span className="text-xl font-bold text-orange-600">{signal.confidence}% 🔥</span>
        </div>

        <div className="pt-3 border-t border-gray-200 space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="text-gray-600 font-medium text-sm">⏰ Start Time:</span>
            </div>
            <span className="text-lg font-semibold text-blue-600">
              {formatTime(signal.start_time)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium text-sm pl-6">🏁 End Time:</span>
            <span className="text-lg font-semibold text-purple-600">
              {formatTime(signal.end_time)}
            </span>
          </div>
        </div>

        <div className="pt-2">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
            {signal.session} Session
          </span>
        </div>
      </div>
    </div>
  );
}
