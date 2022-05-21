import supabase from "../utils/supabaseClient";
export async function AuthLogin(email: any, password: any) {
  const { user, session, error } = await supabase.auth.signIn({
    email: email,
    password: password
  });
  return null;
}

export async function signInWithDiscord() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "discord"
  });
}
