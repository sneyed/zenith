import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import "./style.css";

const Prism = ({ code, language = "jsx", fontSize }) => {
  return code ? (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, fontSize }}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  ) : null;
};

export default Prism;
