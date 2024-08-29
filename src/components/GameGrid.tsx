import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGameRes {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGameRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setError(error.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games && games.map((games) => <li key={games.id}>{games.name}</li>)}
      </ul>
    </>
  );
};

export default GameGrid;
