import type StatsProps from "../../molecules/stats/type";
import type { PokeApiGetPokemon } from "./type";

export const getPokemonMapper = (rawData: PokeApiGetPokemon): StatsProps => {
  return {
    name: rawData.name,
    type: rawData.types.map((type) => type.type.name)[0] || "Normal",
    image: rawData.sprites.front_default,
    abilities: rawData.abilities.map((ability) => ability.ability.name),
    movements: rawData.moves.map((move) => move.move.name),
  };
};
