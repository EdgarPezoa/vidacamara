import type ElementStyles from "@utils/element-styles";

type ButtonElements = "button";

export type ButtonStyles = {
  [Element in ButtonElements]: Partial<ElementStyles>;
};

type ButtonProps = {
  text: string;
  onClick: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
};

export default ButtonProps;
