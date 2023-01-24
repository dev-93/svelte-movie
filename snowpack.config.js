const sp = require("svelte-preprocess");
const auto = require("autoprefixer");
const isPrd = process.env.NODE_ENV === "production";

const babelOptions = () => {
  return {
    plugins: isPrd ? ["transform-remove-console"] : [],
  };
};

module.exports = {
  mount: {
    public: "/",
    src: "/_dist_",
  },
  plugins: [
    [
      "@snowpack/plugin-svelte",
      {
        preprocess: sp({
          scss: {
            prependData: "@import './src/scss/main.scss'",
          },
          postcss: {
            plugins: [auto()],
          },
          babel: babelOptions(),
        }),
      },
    ],
    [
      "@snowpack/plugin-babel",
      {
        transformOptions: babelOptions(),
      },
      "@snowpack/plugin-dotenv",
    ],
  ],
};
