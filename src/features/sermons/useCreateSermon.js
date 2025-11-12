import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createSermon } from "../../services/apiSermons";
import toast from "react-hot-toast";

export function useCreateSermon() {
    const queryClient = useQueryClient()
  const {
    isPending,
    error,
    mutate: createSermonAPI,
  } = useMutation({
    mutationFn: (sermon) => createSermon(sermon),
    onSuccess: () => {
      toast.success("Sermon added successfully");
      queryClient.invalidateQueries({
        queryKey: ['sermons']
      })
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  // log

  return { isPending, error, createSermonAPI };
}
