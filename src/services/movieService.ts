import axios from 'axios';
import type { MovieResponse } from '../types/movie';

const BASE_URL = 'https://api.themoviedb.org/3';
const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

export const fetchMovies = async (
  query: string,
  page: number
): Promise<MovieResponse> => {
  if (!ACCESS_TOKEN) {
    throw new Error('TMDB access token is missing');
  }

  const { data } = await axios.get<MovieResponse>(`${BASE_URL}/search/movie`, {
    params: {
      query,
      page,
      include_adult: false,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });

  return data;
};

