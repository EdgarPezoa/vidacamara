import axios, { type AxiosResponse } from "axios";
import type { PokeApiGetPokemon } from "./type";

export const getPokemon = (
  pokemon: string,
): Promise<AxiosResponse<PokeApiGetPokemon, unknown> | undefined> => {
  const response = axios.get<PokeApiGetPokemon>(`/pokemon/${pokemon}`, {
    baseURL: import.meta.env.VITE_POKE_API_URL,
  });

  return response;
};
