import { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ children, onClick, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

export default Button;
