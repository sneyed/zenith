import React, { useState } from "react";
import styles from "./styles.module.css";
import { classNames } from "../util";

const Button = ({
  label = "Button",
  url,
  type = "hero",
  onClick,
  onBlur,
  selected,
  style,
}) => {
  const [test, setTest] = useState("hi");
  console.log(test);
  const buttonElement = (
    <button
      className={classNames([
        styles.button,
        styles[type],
        selected && styles[`${type}-selected`],
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
