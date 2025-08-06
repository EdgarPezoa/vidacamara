import { render, screen } from "@testing-library/react";
import SearchPokemonProps from "../../../../src/molecules/search-pokemon/type";
import SearchPokemon from "../../../../src/molecules/search-pokemon";
import searchPokemonDefaultProps from "./default";

describe("<SearchPokemon />", () => {
  const renderComponent = (props?: Partial<SearchPokemonProps>) =>
    render(<SearchPokemon {...searchPokemonDefaultProps} {...props} />);

  test("should SearchPokemon have title", () => {
    const title = "Busta tus pokemons";
    renderComponent({ title });

    screen.getByText(title);
  });

  test("should input and button be rendered", async () => {
    renderComponent();

    screen.getByRole("input");
    screen.getByRole("button");
  });
});
