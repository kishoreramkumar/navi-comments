import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { noop } from "../../../utils";
import { InputLabel, InputWrapper, InputTag } from "./style";

interface InputProps {
  name: string;
  label?: string;
  value?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  as?: any;
  [key: string]: any;
}

function Input({
  name,
  label,
  value,
  type,
  onChange,
  as,
  ...rest
}: InputProps) {
  return (
    <InputWrapper {...rest}>
      {label && <InputLabel htmlFor={name}>{label}</InputLabel>}
      <InputTag
        id={name}
        type={type}
        value={value}
        onChange={onChange}
        as={as}
        {...rest}
      ></InputTag>
    </InputWrapper>
  );
}

Input.defaultProps = {
  type: "text",
  onChange: noop,
  name: "",
};

export default Input;
