import { useQuery } from "@tanstack/react-query"
import { getSermons } from "../../services/apiSermons"

export function useSermons () {
const {isPending, error, data} = useQuery({
    queryKey: ['sermons'],
    queryFn: getSermons
})

return {isPending, error, data}
}