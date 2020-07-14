import React from "react";

export default ({ text, url, children }) => {
  if (text && children)
    warn({
      component: "DropdownItem",
      message: 'Children will be ignored because "text" parameter is supplied',
    });

  return (
    <>
      {url ? (
        <a href={url} className="dropdownItem">
          {text || children}
        </a>
      ) : (
        <div className="dropdownItem">{text || children}</div>
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
