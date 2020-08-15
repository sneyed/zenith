import React from "react";
import { warn } from "../log";
import { classNames } from "../util";
import styles from "./styles.module.css";

const DropdownItem = ({ label, url, children }) => {
  if (label && children)
    warn({
      component: "DropdownItem",
      message: 'Children will be ignored because "label" parameter is supplied',
    });

  return url ? (
    <a
      href={url}
      className={classNames([styles.item, styles.itemLink])}
      role="menuitem"
    >
      {label || children || "Item"}
    </a>
  ) : (
    <div className={styles.item} role="menuitem">
      {label || children || "Item"}
    </div>
  );
};

export default DropdownItem;
