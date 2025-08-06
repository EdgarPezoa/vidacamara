import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "../../../../src/atoms/button";
import ButtonProps from "../../../../src/atoms/button/type";
import buttonDefaultProps from "./default";

describe("<Button />", () => {
  const renderComponent = (props?: Partial<ButtonProps>) =>
    render(<Button {...buttonDefaultProps} {...props} />);

  test("should button have text", () => {
    const text = "Test";
    renderComponent({ text });

    screen.getByText(text);
  });

  test("should onClick be triggered ", async () => {
    const onClick = vi.fn();
    renderComponent({ onClick });

    const button = screen.getByRole("button");
    await userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
