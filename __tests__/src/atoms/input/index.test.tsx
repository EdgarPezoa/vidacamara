import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputProps from "../../../../src/atoms/input/type";
import Input from "../../../../src/atoms/input";
import inputDefaultProps from "./default";

describe("<Input />", () => {
  const renderComponent = (props?: Partial<InputProps>) =>
    render(<Input {...inputDefaultProps} {...props} />);

  test("should render with text", () => {
    const value = "Test";
    renderComponent({ value });

    const input = screen.getByRole("input");
    expect(input).toHaveValue(value);
  });

  test("should change value by user interaction", async () => {
    const value = "Test";
    renderComponent();

    const input = screen.getByRole("input");
    await userEvent.type(input, value);

    expect(input).toHaveValue(value);
  });

  test("should onChange return value", async () => {
    const value = "Test";
    const onChange = vi.fn();
    renderComponent({ onChange });

    const input = screen.getByRole("input");
    await userEvent.type(input, value);

    expect(onChange).toHaveBeenCalledWith(value);
  });
});
