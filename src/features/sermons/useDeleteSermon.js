import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteSermon } from "../../services/apiSermons";
import toast from "react-hot-toast";

export function useDeleteSermon() {
    const queryClient = useQueryClient()
    const {isPending: isDeleting, mutate: deleteSermonAPI} = useMutation({
        mutationFn: (sermonId)=>{
            deleteSermon(sermonId)
        },
        onSuccess: ()=>{
            toast.success('Sermon has been deleted successfully')
            queryClient.invalidateQueries({
                queryKey: ['sermons']
            })
        },
        onError: (error) => {
            toast.error(error.message)
            console.error(error)
        }
    })

    return {isDeleting, deleteSermonAPI}
}