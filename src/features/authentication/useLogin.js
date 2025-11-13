import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

export function useLogin() {
  const navigate = useNavigate()
  const {
    isPending,
    error,
    mutate: loginAPI,
  } = useMutation({
    mutationFn: ({ email, password }) => login({ email, password }),
    onSuccess: () => {
        toast.success('Hallelujah 👼🏽')
      navigate('/dashboard')
    },
    onError: (error) => {
      toast.error('Repent from your sins');
      console.error(error)
    },
  });

  return { isPending, error, loginAPI };
}
