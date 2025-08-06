import axios from "axios";
import type { PokeApiGetPokemon } from "./type";

export const getPokemon = async (pokemon: string): PokeApiGetPokemon => {
  try {
    const response = await axios.get<PokeApiGetPokemon>(`/pokemon/${pokemon}`, {
      baseURL: import.meta.env.VITE_POKE_API_URL,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};
