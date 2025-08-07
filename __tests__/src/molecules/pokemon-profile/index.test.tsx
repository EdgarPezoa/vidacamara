import { render, screen } from "@testing-library/react";
import PokemonProfile from "@molecules/pokemon-profile";
import PokemonProfileProps from "@molecules/pokemon-profile/type";
import pokemonProfileDefaultProps from "./default";

describe("<PokemonProfile />", () => {
  const renderComponent = (props?: Partial<PokemonProfileProps>) =>
    render(<PokemonProfile {...pokemonProfileDefaultProps} {...props} />);

  test("should have name", () => {
    const name = "Pikachu";
    renderComponent({ name });

    screen.getByText(name);
  });

  test("should have type", () => {
    const type = "Electric";
    renderComponent({ type });

    screen.getByText(type);
  });

  test("should image/scr have image", async () => {
    const name = "Pikachu";
    const image = "/url";
    renderComponent({ name, image });

    const imageElement = screen.getByAltText(name);
    expect(imageElement).toHaveAttribute("src", image);
  });
});
