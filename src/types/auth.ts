import type { Session, User } from "@supabase/supabase-js";
import type { Profile } from "../lib/superbase";

export interface AuthContextType {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (
    email: string,
    password: string,
    first_name: string,
    last_name: string,
    middle_name: string
  ) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<Profile>) => Promise<void>;
}
