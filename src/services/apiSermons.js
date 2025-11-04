import supabase from "./supabase";

// get sermons
export async function getSermons() {
  let { data, error } = await supabase.from("sermons").select("*");
  if (error) {
    console.error(error);
    throw new Error("cabins could not be found");
  }

  return data;
}
