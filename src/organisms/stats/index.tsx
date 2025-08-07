import type StatsProps from "./type";
import PokemonProfile from "@molecules/pokemon-profile";
import Skills from "@molecules/skills";

const Stats = ({ name, type, image, abilities, movements }: StatsProps) => {
  return (
    <div className="flex flex-col items-center gap-[10px]">
      <PokemonProfile name={name} type={type} image={image} />
      <div className="flex gap-[10px]">
        <Skills title={"Habilidades:"} skills={abilities} />
        <Skills title={"Movimientos:"} skills={movements} />
      </div>
    </div>
  );
};

export default Stats;
