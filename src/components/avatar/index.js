import { cssJoin } from "../../lib/util";
import styles from "./avatar.module.scss";

export default function Avatar({
  name,
  url,
  src = "https://i.imgur.com/niM85vH.png",
  size = "64px",
  borderRadius = "50%",
  className,
}) {
  const imgElement = (
    <img
      className={cssJoin([styles.avatar, className])}
      src={src}
      alt={name}
      role={name ? "img" : "none"}
      style={{
        "--borderRadius": borderRadius,
        "--size": size,
      }}
    />
  );

  return url ? <a href={url}>{imgElement}</a> : imgElement;
}
