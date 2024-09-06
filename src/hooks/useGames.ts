import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface FetchGameRes {
    count: number;
    results: Game[];
}

const Games = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");

    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient
            .get<FetchGameRes>("/games", { signal: controller.signal })
            .then((res) => { setGames(res.data.results); setLoading(false); })
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
                setLoading(false);
            });

        return () => controller.abort();
    }, []);
    return { games, error, isLoading }
}

export default Games;