import React from "react";

export default ({
  label = "Button",
  url,
  style = "hero",
  backgroundColor = "#5850EC",
  labelColor = "white",
  shadowColor = "#d2d6dc",
}) => {
  const buttonElement = (
    <>
      <button className={`button ${style}`}>{label}</button>
      <style jsx>{`
        .button {
          border: 0 solid ${shadowColor};
          font-size: 16px;
          font-weight: 500;
          border-radius: 6px;
          cursor: pointer;
          color: ${labelColor};
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
        }
        .button:focus {
          outline: 0;
          box-shadow: 0 0 0 3px #b7cef4;
        }
        .hero {
          padding-right: 20px;
          padding-left: 20px;
          padding-top: 12px;
          padding-bottom: 12px;
          background-color: ${backgroundColor};
        }
        .nav {
          padding-right: 16px;
          padding-left: 16px;
          padding-top: 8px;
          padding-bottom: 8px;
        }
      `}</style>
    </>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
};
