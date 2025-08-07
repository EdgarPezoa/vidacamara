import { useState } from "react";
import useApi from "@hooks/useApi";
import { getPokemon } from "@apis/poke-api";
import { getPokemonMapper } from "@apis/poke-api/map";
import type { PokeApiGetPokemon } from "@apis/poke-api/type";
import SearchPokemon from "@molecules/search-pokemon";
import type StatsProps from "@organisms/stats/type";
import Stats from "@organisms/stats";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const { fetch, data, error, isLoading } = useApi<
    PokeApiGetPokemon,
    StatsProps
  >(() => getPokemon(value), getPokemonMapper);

  return (
    <div className="flex flex-col items-center m-[30px]">
      <div className="flex flex-col p-[20px] border-primary rounded-lg border-[2px] gap-[30px]">
        <h1 className="text-[32px]">VidaCamara - Poke Api</h1>
        <SearchPokemon
          title="Encuentra tú Pokémon"
          value={value}
          onChange={setValue}
          onClick={fetch}
          isLoading={isLoading}
        />
        {error !== null && (
          <p className="text-red-400">Hubo un problema, ¡intente nuevamente!</p>
        )}
        {data && <Stats {...data} />}
      </div>
    </div>
  );
};

export default Home;
