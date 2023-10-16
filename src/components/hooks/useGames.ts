import { useInfiniteQuery } from "@tanstack/react-query";

import APIClient, { FetchResponse } from "../../api-clients";
import { GameQuery } from "../../store";
import { Game } from "./Game";



const useGames = (gameQuery:GameQuery)=>
useInfiniteQuery<FetchResponse<Game>,Error>({
  queryKey: ['games', gameQuery],
  queryFn:({pageParam = 1})=> new APIClient<Game>('/games').getAll({params: {
    genres: gameQuery.genreId,
    parent_platforms: gameQuery.platformId,
    ordering: gameQuery.sortOrder,
    search:gameQuery.searchText,
    page: pageParam
  }}),
  getNextPageParam:(lastPage,allPages)=> {
    return lastPage.next ?  allPages.length+1 : undefined
},
staleTime: Infinity 
  
})

export default useGames;