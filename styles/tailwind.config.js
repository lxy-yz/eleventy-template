const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      // https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js#L13-L41
      colors: {
        // greys
        gray: colors.blueGray,
        // primary
        primary: colors.indigo,
        // accent
        // https://adevade.github.io/color-scheme-generator/
        ...require("@ky-is/tailwind-color-palette")("tomato", {
          grayscale: false,
          ui: true,
        }),
      },
    },
  },
  variants: {},
  plugins: [],
}
