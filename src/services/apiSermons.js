import supabase from "./supabase";

// GET SERMONS
export async function getSermons() {
  let { data, error } = await supabase.from("sermons").select("*");
  if (error) {
    console.error(error);
    throw new Error("sermon could not be found");
  }

  return data;
}

// ADD SERMON
export async function createSermon(sermon) {
  const { data, error } = await supabase
    .from("sermons")
    .insert([{ ...sermon }])
    .select();

  if (error) {
    console.error(error);
    throw new Error("sermon could not be created");
  }
  return data;
}

// EDIT SERMON
export async function editSermon(editSermon, editId) {
  const { data, error } = await supabase
    .from("sermons")
    .update({ ...editSermon })
    .eq("id", editId)
    .select();

  if (error) {
    console.error(error);
    throw new Error("sermon could not be created");
  }
  return data;
}

// DELETE SERMONS
export async function deleteSermon(deleteSermon, id) {
const { error } = await supabase
  .from("sermons")
  .delete()
  .eq("id", id);
  if(error){
    console.error(error)
    throw new Error(error)
  }
}
