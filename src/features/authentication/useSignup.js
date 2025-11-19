import { useMutation } from "@tanstack/react-query";
import { signUp as signUpAPI } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useSignup() {
    const navigate = useNavigate()
  const { isPending, mutate: signup } = useMutation({
    mutationFn: ({ email, password, fullName }) => {
      signUpAPI({ email, password, fullName });
    },
    onSuccess: () => {
      toast.success("Baptism Successful, welcome to the light");
        navigate('/profile')
    },
    onError: ()=> {
        toast.error('something went wrong...')
    }
  });

  return {isPending, signup}
}
