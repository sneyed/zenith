const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  webpack: (config, options) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty",
    };

    config.module.rules.push({
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

    return config;
  },
});
