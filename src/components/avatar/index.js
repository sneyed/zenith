import React from "react";

const Avatar = ({
  name,
  url,
  src = "https://i.imgur.com/niM85vH.png",
  size = 64,
  shape = "circle",
}) => {
  const style = {
    borderRadius: shape === "circle" ? "50%" : 0,
    width: size,
    height: size,
    userSelect: "none",
  };

  const imgElement = (
    <img style={style} src={src} alt={name} role={name ? "img" : "none"} />
  );

  return url ? <a href={url}>{imgElement}</a> : imgElement;
};

export default Avatar;
