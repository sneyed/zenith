import React, { useState } from "react";
import DropdownItem from "../dropdownItem";
import { warn } from "../log";

export default ({ button, children, align = "left", items, color = "red" }) => {
  if (items && children)
    warn({
      component: "Dropdown",
      message: 'Children will be ignored because "items" parameter is supplied',
    });
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div aria-expanded={expanded} className="container">
        <div
          className="button"
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {button}
        </div>
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
