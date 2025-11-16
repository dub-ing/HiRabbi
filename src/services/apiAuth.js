import supabase from "./supabase";
// Login Function
export async function login({ email, password }) {

  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}

// Get current User
export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);
  
  return data?.user;
}

// Sign Up Function
export async function signUp({email, password, fullName}) {
  
let { data, error } = await supabase.auth.signUp({
  email,
  password,
  options: {
    data: {
      fullName,
      avatar: ''
    }
  }
});
if(error) {
  console.error(error)
  throw new Error
}
console.log(data);
return data
}
