import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
