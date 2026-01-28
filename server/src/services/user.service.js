import supabase from "../config/supabase.js";

export async function getOrCreateUser(firebaseuid, email) {
  const { data: existinguser, error: fetchError } = await supabase
    .from("users")
    .select("*")
    .eq("firebase_uid", firebaseuid)
    .single();

  if (existinguser) {
    return existinguser;
  }

  if (fetchError && fetchError.code !== "PGRST116") {
    throw new Error("Failed to fetch user");
  }

  const { data: newuser, error: insertError } = await supabase
    .from("users")
    .insert([{ firebase_uid: firebaseuid, email }])
    .select()
    .single();
  
  if(insertError) {
    throw new Error("Failed to create user");
  }
  return newuser;
}
