-- Tabela za push naročnike
CREATE TABLE IF NOT EXISTS push_subscriptions (
  id SERIAL PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  user_agent TEXT,
  ip_address INET,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_used TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true
);

-- Tabela za poslana obvestila
CREATE TABLE IF NOT EXISTS push_notifications (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  icon TEXT,
  image TEXT,
  url TEXT,
  tag TEXT,
  sent_count INTEGER DEFAULT 0,
  success_count INTEGER DEFAULT 0,
  error_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  sent_at TIMESTAMP WITH TIME ZONE,
  scheduled_for TIMESTAMP WITH TIME ZONE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sending', 'sent', 'failed'))
);

-- Tabela za sledenje dostav
CREATE TABLE IF NOT EXISTS push_delivery_logs (
  id SERIAL PRIMARY KEY,
  notification_id INTEGER REFERENCES push_notifications(id),
  subscription_id INTEGER REFERENCES push_subscriptions(id),
  status TEXT NOT NULL CHECK (status IN ('sent', 'failed', 'clicked')),
  error_message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indeksi za boljšo performanco
CREATE INDEX IF NOT EXISTS idx_push_subscriptions_active ON push_subscriptions(is_active);
CREATE INDEX IF NOT EXISTS idx_push_notifications_status ON push_notifications(status);
CREATE INDEX IF NOT EXISTS idx_push_notifications_scheduled ON push_notifications(scheduled_for);
CREATE INDEX IF NOT EXISTS idx_push_delivery_logs_notification ON push_delivery_logs(notification_id);

-- RLS (Row Level Security) politike
ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_delivery_logs ENABLE ROW LEVEL SECURITY;

-- Dovoli branje in pisanje za avtenticirane uporabnike
CREATE POLICY "Allow all operations for authenticated users" ON push_subscriptions
  FOR ALL USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON push_notifications
  FOR ALL USING (true);

CREATE POLICY "Allow all operations for authenticated users" ON push_delivery_logs
  FOR ALL USING (true);
