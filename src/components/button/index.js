import React from "react";
import { styled, css } from "goober";

const Button = ({
  label = "Button",
  url,
  type = "hero",
  right = "200px",
  onClick,
  onBlur,
  selected,
  style,
}) => {
  const Button = styled("button")`
    font-size: 16px;
    font-weight: 500;
    border-radius: 6px;
    cursor: pointer;
    user-select: none;
    border: 0;
    background-color: transparent;
  `;

  const classNames = ({ type }) => {
    const obj = {
      hero: css`
        padding-right: 20px;
        padding-left: 20px;
        padding-top: 12px;
        padding-bottom: 12px;
        color: white;
        background-color: #5850ec;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
          0 1px 2px 0 rgba(0, 0, 0, 0.1);

        &:hover {
          background-color: #6875f5;
        }
        &:focus {
          outline: 0;
          box-shadow: 0 0 0 3px #b7cef4;
        }
      `,
      tab: css`
        padding-right: 12px;
        padding-left: 12px;
        padding-top: 8px;
        padding-bottom: 8px;

        &:hover {
          color: #5145cd;
        }
        &:focus {
          outline: 0;
        }
        &.selected {
          color: #5145cd;
          background-color: #f0f5ff;
        }
      `,
    };

    return obj[type];
  };

  const buttonElement = (
    <Button
      className={classNames({ type })}
      onClick={onClick}
      onBlur={onBlur}
      style={style}
    >
      {label}
    </Button>
  );
  return url ? <a href={url}>{buttonElement}</a> : buttonElement;
};

export default Button;
