import React from "react";
import { warn } from "../log";

export default ({ label, url, children }) => {
  if (label && children)
    warn({
      component: "DropdownItem",
      message: 'Children will be ignored because "label" parameter is supplied',
    });

  return (
    <>
      {url ? (
        <a href={url} className="dropdownItem" role="menuitem">
          {label || children || "Item"}
        </a>
      ) : (
        <div className="dropdownItem" role="menuitem">
          {label || children || "Item"}
        </div>
      )}
      <style jsx>{`
        .dropdownItem {
          display: block;
          padding-left: 16px;
          padding-right: 16px;
          padding-top: 8px;
          padding-bottom: 8px;
          background: white;
          font-family: Inter var, system-ui, -apple-system, BlinkMacSystemFont,
            Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
            Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
          cursor: pointer;
          user-select: none;
        }
        a.dropdownItem {
          text-decoration: none;
          color: black;
        }
        .dropdownItem:hover {
          background: #f4f5f7;
        }
      `}</style>
    </>
  );
};
