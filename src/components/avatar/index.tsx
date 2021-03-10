import React from "react";
import { cssJoin } from "../../lib/util";
import styles from "./avatar.module.scss";

interface IAvatar {
  name?: string;
  url?: string;
  src?: string;
  size?: string;
  shape?: string;
  className?: string;
}

export default function Avatar({
  name,
  url,
  src = "https://i.imgur.com/niM85vH.png",
  // size = "64px",
  // shape = "circle",
  className,
}: IAvatar) {
  const imgElement = (
    <img
      className={cssJoin([styles.avatar, className])}
      src={src}
      alt={name}
      role={name ? "img" : "none"}
    />
  );

  return url ? <a href={url}>{imgElement}</a> : imgElement;
}

//style={{ "--shape": shape === "circle" ? "50%" : 0, "--size": size }}
