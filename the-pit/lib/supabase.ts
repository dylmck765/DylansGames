import { createClient } from "@supabase/supabase-js";

// The publishable (anon) key is safe to ship in client code — Row Level
// Security policies on the Supabase side control what it can do.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://qqjxffrbglbnyvwgxqxv.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_1tjHMogha1yiYlYeN6jN6g_ZID-IODS";

export const supabase = createClient(url, key);

export interface LBRow {
  handle: string;
  xp: number;
  season_xp: number;
  rank_name: string;
  streak: number;
  badge_count: number;
  episodes_done: number;
  updated_at: string;
}

export interface MessageRow {
  id: number;
  handle: string;
  text: string;
  created_at: string;
}

export interface DuelRunRow {
  id: number;
  handle: string;
  questions_key: string;
  correct: number;
  time_ms: number;
  created_at: string;
}

export interface PostRow {
  id: string;
  handle: string;
  ticker: string;
  direction: "bullish" | "bearish";
  title: string;
  catalyst: string;
  thesis: string;
  max_loss: string;
  upvotes: number;
  created_at: string;
}
