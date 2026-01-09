export interface TradingSignal {
  id: string;
  pair: string;
  action: 'BUY' | 'SELL';
  confidence: number;
  start_time: string;
  end_time: string;
  session: 'Asian' | 'London' | 'New York';
  created_at: string;
}

export interface MarketSession {
  name: 'Asian' | 'London' | 'New York';
  active: boolean;
  pairs: string[];
}
