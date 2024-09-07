// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from './useData';

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}

// interface FetchGenreRes {
//   count: number;
//   results: Genre[];
// }

const useGenre = () => useData<Genre>('/genres')
//  { 
// const [genres, setGenres] = useState<Genre[]>([]);
// const [error, setError] = useState("");
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
//   const controller = new AbortController();

//   apiClient.get<FetchGenreRes>('/genres', { signal: controller.signal }).then((response) => {
//     setGenres(response.data.results);
//   }).catch((error) => {
//     if (error instanceof CanceledError) return;
//     setError(error.message)
//   }).finally(() => {

//     setLoading(false);
//   });
//   return () => controller.abort();

// }, [])

// return { genres, error, isLoading };
// }

export default useGenre;