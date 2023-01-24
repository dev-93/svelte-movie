const sp = require("svelte-preprocess");
const auto = require("autoprefixer");

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
        }),
      },
    ],
  ],
};
