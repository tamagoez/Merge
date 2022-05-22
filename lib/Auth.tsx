import supabase from "../utils/supabaseClient";
export async function AuthLogin(email: any, password: any) {
  try {
    const { error, user } = await supabase.auth.signIn({ email, password });
    // If the user doesn't exist here and an error hasn't been raised yet,
    // that must mean that a confirmation email has been sent.
    // NOTE: Confirming your email address is required by default.
    if (error) {
      alert("Error with auth: " + error.message);
    }
  } catch (error) {
    console.log("error", error);
    alert(error.error_description || error);
  }
}

export async function signInWithDiscord() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "discord"
  });
}

export async function signInWithSlack() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "slack"
  });
}
