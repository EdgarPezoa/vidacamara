import { useState } from "react";
import type InputProps from "./type";

const Input = ({ value, onChange, id }: InputProps) => {
  const [valueState, setValueState] = useState(value);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValueState(e.target.value);
    onChange(e.target.value);
  };

  return (
    <input
      id={id}
      className="border-2 border-gray rounded-xs p-[5px] text-sm"
      role="input"
      value={valueState}
      onChange={onChangeInput}
    />
  );
};

export default Input;
