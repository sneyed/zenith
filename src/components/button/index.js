import React, { useContext } from "react";
import ThemeContext from "../../theme";
import { classNames } from "../util";
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
  const theme = useContext(ThemeContext);
  const buttonElement = (
    <button
      className={classNames([
        styles.zenith,
        styles.button,
        styles[type],
        selected && styles.selected,
        dark && styles.dark,
      ])}
      onClick={onClick}
      onBlur={onBlur}
      style={{ "--theme": "dark" }}
    >
      {label}
    </button>
  );
  return JSON.stringify({ theme }, null, 2);
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
}
