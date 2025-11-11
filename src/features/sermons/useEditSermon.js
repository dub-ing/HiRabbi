import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editSermon } from "../../services/apiSermons";
import toast from "react-hot-toast";

export function useEditSermon() {
    const queryClient = useQueryClient()
    const {isPending: isEditing, mutate: editSermonAPI} = useMutation({
        mutationFn: ({editedSermon, id})=>{
            editSermon(editedSermon, id)
        },
        onSuccess: ()=>{
            toast.success('Changes have been added')
            queryClient.invalidateQueries({
                queryKey: ['sermons']
            })
        },
        onError: (error)=>{
            toast.error(error.message)
            console.error(error)
        }

    })

    return {isEditing, editSermonAPI}
}