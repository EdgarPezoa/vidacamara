import type SearchPokemonProps from "./type";
import Input from "@atoms/input";
import Button from "@atoms/button";

const SearchPokemon = ({
  title,
  value,
  onChange,
  onClick,
  isLoading,
}: SearchPokemonProps) => {
  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="searchInput" className="text-base ">
        {title}
      </label>
      <div className="flex flex-row gap-[20px]">
        <Input id="searchInput" value={value} onChange={onChange} />
        <Button text="Buscar" onClick={onClick} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default SearchPokemon;
