import type PokemonProfileProps from "./type";

const PokemonProfile = ({ name, type, image }: PokemonProfileProps) => {
  return (
    <div className="flex flex-row gap-[10px] items-center">
      <div className="flex flex-col gap-[10px]">
        <div className="flex flex-row gap-[4px]">
          <p>Nombre:</p>
          <p className="font-bold">{name}</p>
        </div>
        <div className="flex flex-row gap-[4px]">
          <p>Tipo:</p>
          <p>{type}</p>
        </div>
      </div>
      <img className="w-[64px] h-[64px]" src={image} alt={name} />
    </div>
  );
};

export default PokemonProfile;
