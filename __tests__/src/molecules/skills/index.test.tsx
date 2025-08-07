import { render, screen } from "@testing-library/react";
import SkillsProps from "@molecules/skills/type";
import Skills from "@molecules/skills";
import skillsDefaultProps from "./default";

describe("<Skills />", () => {
  const renderComponent = (props?: Partial<SkillsProps>) =>
    render(<Skills {...skillsDefaultProps} {...props} />);

  test("should have title", () => {
    const title = "Test:";
    renderComponent({ title });

    screen.getByText(title);
  });

  test("should have list", async () => {
    const skills = ["Test", "Testtink"];
    renderComponent({ skills });

    const list = screen.getAllByRole("SkillLists");
    list.map((list, index) => {
      expect(list).toHaveTextContent(skills[index]);
    });
  });

  test("should list be limited ", async () => {
    const limit = 3;
    const skills = ["Test", "Testtink", "MoreTest", "ExceedTest"];
    renderComponent({ limit, skills });

    const list = screen.getAllByRole("SkillLists");
    expect(list.length).toBe(limit);
  });
});
