import React from "react";
import { addDecorator } from "@storybook/react";
import { withA11y } from "@storybook/addon-a11y";
import Wrapper from "./wrapper";

addDecorator(withA11y);
addDecorator((storyFn) => <Wrapper>{storyFn()}</Wrapper>);
