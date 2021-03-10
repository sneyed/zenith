import React from "react";
import { useTheme } from "../../themes";
import styles from "./button.module.scss";

interface IButton {
  label?: string;
  url?: string;
  type?: string;
  onClick?: () => void;
  onBlur?: () => void;
  selected?: boolean;
}

export default function Button({
  label = "Button",
  url,
  type = "hero",
  onClick,
  onBlur,
  selected,
}: IButton) {
  const buttonElement = (
    <button
      className={useTheme({
        styles,
        classNames: ["button", type, selected && "selected"],
      })}
      onClick={onClick}
      onBlur={onBlur}
    >
      {label}
    </button>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
}
