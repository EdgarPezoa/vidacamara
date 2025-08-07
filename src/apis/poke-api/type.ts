export type PokeApiGetPokemon = {
  name: string;
  types: [
    {
      type: {
        name: string;
      };
    },
  ];
  abilities: [
    {
      ability: {
        name: string;
      };
    },
  ];
  moves: [
    {
      move: {
        name: "mega-punch";
      };
    },
  ];
  sprites: {
    front_default: string;
  };
};
