import { useQuery } from "@tanstack/react-query";
import APIClient from "../../api-clients";
import ms from 'ms';
import { Genre } from "./Genre";
const useGenres = ()=>  useQuery({
    queryKey: ['genres'],
    queryFn:
     new APIClient<Genre>('/genres').getAll,
    staleTime:ms('24h'),  //24h
})
export default useGenres;
