import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Game {
    id: number;
    name: string;
    background_image: string;
}

interface FetchGameRes {
    count: number;
    results: Game[];
}

const Games = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGameRes>("/games", { signal: controller.signal })
            .then((res) => setGames(res.data.results))
            .catch((error) => {
                if (error instanceof CanceledError) return;
                setError(error.message)
            });

        return () => controller.abort();
    }, []);
    return { games, error }
}

export default Games;