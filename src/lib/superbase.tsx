import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase environment variables");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Profile = {
  id: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};
