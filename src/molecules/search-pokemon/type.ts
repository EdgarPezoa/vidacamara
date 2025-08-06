type SearchPokemonProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onClick: () => void;
  isLoading?: boolean;
};

export default SearchPokemonProps;
