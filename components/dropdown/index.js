import React, { useState } from "react";
import Button from "../button";
import DropdownItem from "./item";
import { warn } from "../log";

const Dropdown = ({
  label = "Dropdown",
  button,
  children,
  align = "left",
  items,
}) => {
  if (items && children)
    warn({
      component: "Dropdown",
      message: 'Children will be ignored because "items" parameter is supplied',
    });

  const [expanded, setExpanded] = useState(false);
  const [blurTimeout, setBlurTimeout] = useState(null);
  const onClick = () => {
    setExpanded(!expanded);
  };
  const onBlur = () => {
    setBlurTimeout(
      setTimeout(() => {
        setExpanded(false);
      })
    );
  };
  const onFocus = () => {
    clearTimeout(blurTimeout);
  };

  return (
    <>
      <div
        aria-expanded={expanded}
        className="container"
        onBlur={onBlur}
        onFocus={onFocus}
      >
        {button ? (
          <button className="button" onClick={onClick}>
            {button}
          </button>
        ) : (
          <Button label={label} onClick={onClick} />
        )}

        {expanded && (
          <div className="items">
            {items
              ? items.map((itemProps, index) => (
                  <DropdownItem key={index} {...itemProps} />
                ))
              : children}
          </div>
        )}
      </div>
      <style jsx>{`
        .container {
          position: relative;
          display: inline-block;
        }

        .button {
          background: transparent;
          border: none;
          outline: none;
          padding: 0;
          cursor: pointer;
        }

        .items {
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
          padding-top: 4px;
          padding-bottom: 4px;
          border-radius: 4px;
          width: 200px;
          position: absolute;
          right: ${align === "right" ? "0px" : "auto"};
        }
      `}</style>
    </>
  );
};

export default Dropdown;
