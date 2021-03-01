import React from "react";
import { cssJoin } from "../../lib/util";
import styles from "./avatar.module.scss";

export default function Avatar({
  name,
  url,
  src = "https://i.imgur.com/niM85vH.png",
  size = "64px",
  shape = "circle",
  className,
}) {
  const imgElement = (
    <img
      className={cssJoin([styles.avatar, className])}
      src={src}
      alt={name}
      role={name ? "img" : "none"}
      style={{ "--shape": shape === "circle" ? "50%" : 0, "--size": size }}
    />
  );

  return url ? <a href={url}>{imgElement}</a> : imgElement;
}
