// Supabase authentication is optional for the public catalog.
// When the public Supabase variables are not configured (for example, on a
// fresh Vercel deployment), public server functions must still be callable.

import { createMiddleware } from "@tanstack/react-start";
import { supabase } from "./client";

function hasSupabaseClientConfig() {
  return Boolean(
    import.meta.env.VITE_SUPABASE_URL &&
      import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
  );
}

export const attachSupabaseAuth = createMiddleware({ type: "function" }).client(
  async ({ next }) => {
    if (!hasSupabaseClientConfig()) {
      return next();
    }

    const { data } = await supabase.auth.getSession();
    const token = data.session?.access_token;

    return next({
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },
);
