import React, { useState } from "react";
import { Button } from "@sneyed/zenith";
import Prism from "./prism";

const CodeSwitch = ({ snippets }) => {
  const [selected, setSelected] = useState(snippets[0]);
  return (
    <>
      {snippets.map((snippet, index) => {
        return (
          <Button
            key={index}
            label={snippet.name}
            type="tab"
            onClick={() => {
              setSelected(snippet);
            }}
          />
        );
      })}
      <Prism style={{ padding: 16 }} code={selected.code} fontSize={12} />
    </>
  );
};

export default CodeSwitch;
