import React from "react";

export default ({
  label = "Button",
  url,
  style = "hero",
  onClick,
  onBlur,
  selected,
  backgroundColor = "#5850EC",
  labelColor = "white",
  shadowColor = "rgba(0, 0, 0, 0.1)",
}) => {
  const buttonElement = (
    <>
      <button
        className={`button ${style}${selected ? " selected" : ""}`}
        onClick={onClick}
        onBlur={onBlur}
      >
        {label}
      </button>
      <style jsx>{`
        .button {
          font-size: 16px;
          font-weight: 500;
          border-radius: 6px;
          cursor: pointer;
          user-select: none;
          border: 0;
          background-color: transparent;
        }
        .button.hero {
          padding-right: 20px;
          padding-left: 20px;
          padding-top: 12px;
          padding-bottom: 12px;
          color: ${labelColor};
          background-color: ${backgroundColor};
          box-shadow: 0 1px 3px 0 ${shadowColor}, 0 1px 2px 0 ${shadowColor};
        }
        .button.hero:hover {
          background-color: #6875f5;
        }
        .button.hero:focus {
          outline: 0;
          box-shadow: 0 0 0 3px #b7cef4;
        }
        .button.tab {
          padding-right: 12px;
          padding-left: 12px;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .button.tab:hover {
          color: #5145cd;
        }
        .button.tab.selected {
          color: #5145cd;
          background-color: #f0f5ff;
        }
        .button.tab:focus {
          outline: 0;
        }
      `}</style>
    </>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
};
