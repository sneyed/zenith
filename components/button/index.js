import React from "react";

export default ({ url, label = "Button" }) => {
  const style = {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  };

  const buttonElement = <button style={style}>{label}</button>;

  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
};
