import type ButtonProps from "./type";

const Button = ({ text, onClick, isDisabled, isLoading }: ButtonProps) => {
  return (
    <button
      role="button"
      type="button"
      className="bg-primary text-sm text-white rounded-sm px-[8px] py-[8px] hover:opacity-90 active:opacity-70  disabled:opacity-50"
      onClick={onClick}
      disabled={isDisabled || isLoading}
    >
      {/* TODO: Replace with a loader */}
      {isLoading ? "Loading..." : text}
    </button>
  );
};

export default Button;
