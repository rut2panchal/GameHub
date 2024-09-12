// import { useState, useEffect } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";

import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenre";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

// interface FetchGameRes {
//     count: number;
//     results: Game[];
// }

const useGames = (gameQuery: GameQuery) => useData<Game>('/games',
    {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    },
    [gameQuery]);
//     {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");

//     const [isLoading, setLoading] = useState(false);
//     useEffect(() => {
//         const controller = new AbortController();
//         setLoading(true);
//         apiClient
//             .get<FetchGameRes>("/games", { signal: controller.signal })
//             .then((res) => { setGames(res.data.results); setLoading(false); })
//             .catch((error) => {
//                 if (error instanceof CanceledError) return;
//                 setError(error.message)
//                 setLoading(false);
//             });

//         return () => controller.abort();
//     }, []);
//     return { games, error, isLoading }
// }

export default useGames;