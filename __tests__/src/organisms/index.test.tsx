import { vi } from "vitest";
import { render } from "@testing-library/react";
import StatsProps from "@organisms/stats/type";
import Stats from "@organisms/stats";
import skillsDefaultProps from "./default";
import PokemonProfile from "@molecules/pokemon-profile";
import Skills from "@molecules/skills";

vi.mock("@molecules/pokemon-profile", { spy: true });
vi.mock("@molecules/skills", { spy: true });

describe("<Stats />", () => {
  const renderComponent = (props?: Partial<StatsProps>) =>
    render(<Stats {...skillsDefaultProps} {...props} />);

  test("should profile props be right", () => {
    const name = "Test";
    const type = "Test";
    const image = "./url";
    renderComponent({ name, type, image });

    expect(PokemonProfile).toHaveBeenCalledWith(
      { name, type, image },
      undefined,
    );
  });

  test("should Skills props be right", () => {
    const abilities = ["Test", "Testing"];
    const movements = ["Test", "Testing"];
    renderComponent({ abilities, movements });

    expect(Skills).toHaveBeenCalledWith(
      {
        title: "Habilidades:",
        skills: abilities,
      },
      undefined,
    );

    expect(Skills).toHaveBeenCalledWith(
      {
        title: "Movimientos:",
        skills: abilities,
      },
      undefined,
    );
  });
});
