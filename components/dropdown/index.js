import React, { useState } from "react";

export default ({ button }) => {
  const containerStyle = {
    position: "absolute",
    right: 0,
    marginTop: 8,
    width: 48,
  };
  const buttonStyle = {};
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <button
        style={buttonStyle}
        aria-expanded={expanded}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {button}
      </button>

      <div style={containerStyle}>
        <div
          class="py-1 rounded-md bg-white shadow-xs"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu"
        >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Your Profile
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Settings
          </a>
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            role="menuitem"
          >
            Sign out
          </a>
        </div>
      </div>
    </>
  );
};
