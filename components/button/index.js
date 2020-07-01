import React from "react";

export default ({ url, text }) => {
  const style = {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 8,
    paddingBottom: 8,
  };

  return (
    <a href="#" style={style}>
      {text}
    </a>
  );
};
