module.exports = {
  stories: ["../stories/**/*.stories.(js|mdx)"],
  addons: [
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-a11y/register",
    "@storybook/addon-docs",
  ],
  webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.js$|\.mdx$/,
      use: [
        {
          loader: "linaria/loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    return { ...baseConfig };
  },
};
