import React from "react";
import { useTheme } from "../../themes";
import styles from "./button.module.scss";

export default function Button({
  label = "Button",
  url,
  type = "hero",
  onClick,
  onBlur,
  selected,
  dark,
}) {
  const buttonElement = (
    <button
      className={useTheme({
        styles,
        classNames: ["button", type, selected && "selected", dark && "dark"],
      })}
      onClick={onClick}
      onBlur={onBlur}
    >
      {label}
    </button>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
}
