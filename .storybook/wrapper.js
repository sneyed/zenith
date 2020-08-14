import React from "react";

export default ({ children }) => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  };
  return <div style={style}>{children}</div>;
};
