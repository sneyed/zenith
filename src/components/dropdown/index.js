import React, { useState } from "react";
import Button from "../button";
import DropdownItem from "./item";
import { warn } from "../../lib/log";
import { cssJoin } from "../../lib/util";
import styles from "./dropdown.module.scss";

const Dropdown = ({
  label = "Dropdown",
  button,
  children,
  align = "left",
  items,
  width = "200px",
}) => {
  if (items && children)
    warn({
      component: "Dropdown",
      message: 'Children will be ignored because "items" parameter is supplied',
    });

  const [expanded, setExpanded] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState(null);
  const onClick = () => {
    setExpanded(!expanded);
  };
  const onBlur = () => {
    setBlurTimeout(
      setTimeout(() => {
        setExpanded(false);
      })
    );
  };
  const onFocus = () => {
    clearTimeout(blurTimeout);
  };

  return (
    <div
      aria-expanded={expanded}
      className={styles.container}
      onBlur={onBlur}
      onFocus={onFocus}
    >
      {button ? (
        <button className={styles.button} onClick={onClick}>
          {button}
        </button>
      ) : (
        <Button label={label} onClick={onClick} />
      )}

      {expanded && (
        <div
          className={cssJoin([styles.items, align && styles[`align-${align}`]])}
          style={{ width }}
        >
          {items
            ? items.map((itemProps, index) => (
                <DropdownItem key={index} {...itemProps} />
              ))
            : children}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
