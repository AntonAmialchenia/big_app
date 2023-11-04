import { ButtonHTMLAttributes, FC, ReactNode } from "react";

import cls from "./Button.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

export enum ThemeButton {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, theme, className, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={classNames(cls.button, {}, [className, cls[theme]])}>
      {children}
    </button>
  );
};
