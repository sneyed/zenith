import React from "react";
import { addDecorator } from "@storybook/react";
import Wrapper from "./wrapper";
import "@sneyed/zenith/dist/index.css";

addDecorator(storyFn => <Wrapper>{storyFn()}</Wrapper>);

const prefix = (phrase, prefix) => value => {
  const index = value.indexOf(phrase);
  return index > -1
    ? value.substr(0, index) + prefix + value.substr(index)
    : value;
};
const pipe = (...fns) => value => fns.reduce((result, fn) => fn(result), value);

export const parameters = {
  a11y: {
    element: "#root",
    config: {},
    options: {},
    manual: true,
  },
  options: {
    storySort: (a, b) => {
      console.log("a", a, "b", b);
      const prefixFn = pipe(
        prefix("welcome-", "0"),
        prefix("components-", "1"),
        prefix("demos-", "2")
      );

      const left = prefixFn(a[0]);
      const right = prefixFn(b[0]);

      return left === right ? 0 : left.localeCompare(right);
    },
  },
};
