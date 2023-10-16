import { useQuery } from "@tanstack/react-query";
import APIClient from "../../api-clients";
import { Trailer } from "./Trailer";

const useTrailers = (gameId : number) =>{
const apiClient  = new APIClient<Trailer>(`/games/${gameId}/movies`)

   return  useQuery({
    queryKey:['trailers',gameId],
    queryFn: apiClient.getAll
})
} 

export default useTrailers;