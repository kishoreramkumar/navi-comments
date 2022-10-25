import { ReactNode } from "react";
import { noop } from "../../../utils";
import { ButtonWrapper } from "./style";

interface ButtonPropType {
  type: string;
  category: string;
  children: ReactNode;
  className?: string;
  onClick: () => void;
  disabled?: boolean | undefined;
}

export const BUTTON_TYPES = {
  normal: "normal",
  outline: "outline",
};

export const BUTTON_CATEGORY = {
  primary: "primary",
  secondary: "secondary",
  error: "error",
};

export default function Button({
  type,
  category,
  children,
  onClick,
  disabled,
  className,
  ...rest
}: ButtonPropType) {
  return (
    <ButtonWrapper
      onClick={disabled ? noop : onClick}
      disabled={disabled}
      className={`${className} ${type} ${category}`}
      {...rest}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  category: "primary",
  type: "normal",
  className: "",
  onClick: noop,
  disabled: false,
};
