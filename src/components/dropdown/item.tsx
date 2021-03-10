import React from "react";
import { warn } from "../../lib/log";
import { cssJoin } from "../../lib/util";
import styles from "./dropdown.module.scss";

export interface IDropdownItem {
  label?: string;
  url?: string;
  children?: any;
}

const DropdownItem = ({ label, url, children }: IDropdownItem) => {
  if (label && children)
    warn({
      component: "DropdownItem",
      message: 'Children will be ignored because "label" parameter is supplied',
    });

  return url ? (
    <a
      href={url}
      className={cssJoin([styles.item, styles.itemLink])}
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
