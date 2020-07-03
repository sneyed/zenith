import React, { useState } from "react";
import DropdownItem from "../dropdownItem";
import { warn } from "../log";
import { styled } from "linaria/react";

export default ({ button, children, align = "left", items }) => {
  if (items && children)
    warn({
      component: "Dropdown",
      message: 'Children will be ignored because "items" parameter is supplied',
    });
  const [expanded, setExpanded] = useState(false);

  const Dropdown = styled.div`
    position: relative;
    display: inline-block;
  `;

  const DropdownButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  `;

  const DropdownItems = styled.div`
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
    padding-top: 4px;
    padding-bottom: 4px;
    border-radius: 4px;
    width: 200px;
    position: absolute;
    right: ${(props, test) => {
      console.log(props, test);
      return props.align ? "0" : "200px";
    }};
  `;

  return (
    <>
      <Dropdown aria-expanded={expanded}>
        <DropdownButton
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {button}
        </DropdownButton>
        {expanded && (
          <DropdownItems>
            {items
              ? items.map((item, index) => (
                  <DropdownItem key={index} text={item.text} />
                ))
              : children}
          </DropdownItems>
        )}
      </Dropdown>
    </>
  );
};
