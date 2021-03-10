import "@sneyed/zenith/dist/zenith.css";
import theme from "./theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: { theme },
  options: {
    storySort: {
      order: ["Docs", ["Intro", "Getting Started"], "Components"],
    },
  },
};
