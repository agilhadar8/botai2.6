/*
  # Create Trading Signals Table

  1. New Tables
    - `trading_signals`
      - `id` (uuid, primary key)
      - `pair` (text) - Currency pair like AUD/JPY
      - `action` (text) - BUY or SELL
      - `confidence` (integer) - Confidence percentage
      - `start_time` (timestamptz) - Signal start time
      - `end_time` (timestamptz) - Signal end time
      - `session` (text) - Trading session (Asian, London, NY)
      - `created_at` (timestamptz) - Record creation time
      
  2. Security
    - Enable RLS on `trading_signals` table
    - Add policy for public read access (for demo purposes)
    - Add policy for authenticated insert access
*/

CREATE TABLE IF NOT EXISTS trading_signals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  pair text NOT NULL,
  action text NOT NULL,
  confidence integer NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  session text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE trading_signals ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read trading signals"
  ON trading_signals
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can insert trading signals"
  ON trading_signals
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can delete trading signals"
  ON trading_signals
  FOR DELETE
  TO anon, authenticated
  USING (true);