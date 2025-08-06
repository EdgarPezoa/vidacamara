import axios from "axios";
import type { PokeApiGetPokemon } from "./type";

export const getPokemon = async (pokemon: string) => {
  try {
    const response = await axios.get<PokeApiGetPokemon>(`/pokemon/${pokemon}`, {
      baseURL: import.meta.env.VITE_POKE_API_URL,
    });
    // TODO: Implement call map
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
