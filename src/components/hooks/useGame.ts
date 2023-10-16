import { useQuery } from "@tanstack/react-query";
import APIClient from "../../api-clients";
import { Game } from "./Game";

const apiClient = new APIClient<Game>('/games');

const useGenre = (slug:string) => useQuery({
    queryKey:['games',slug],
    queryFn:()=>apiClient.get(slug)
})

export default useGenre;