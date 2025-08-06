import type ButtonProps from "./type";

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <button
      role="button"
      className="bg-primary text-sm text-white rounded-sm px-[8px] py-[8px] hover:opacity-90 active:opacity-70"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
