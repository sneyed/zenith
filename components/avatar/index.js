import React from "react";

export default ({
  name,
  url,
  src = "https://i.imgur.com/niM85vH.png",
  size = 64,
  appearance = "circle",
}) => {
  const style = {
    borderRadius: appearance === "circle" ? "50%" : 0,
    width: size,
    height: size,
    userSelect: "none",
  };
  return (
    <img style={style} src={src} alt={name} role={name ? "img" : "none"} />
  );
};
