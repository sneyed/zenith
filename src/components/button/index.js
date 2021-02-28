import React from "react";
import styles from "./button.module.scss";
import { classNames } from "../util";

const Button = ({
  label = "Button",
  url,
  type = "hero",
  onClick,
  onBlur,
  selected,
  dark,
  style,
}) => {
  const buttonElement = (
    <button
      className={classNames([
        styles.button,
        styles[type],
        selected && styles.selected,
        dark && styles.dark,
      ])}
      onClick={onClick}
      onBlur={onBlur}
      style={style}
    >
      {label}
    </button>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
};

export default Button;
