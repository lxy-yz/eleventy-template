const colors = require("tailwindcss/colors")

module.exports = {
  content: ["_site/**/*.html"],

  // Safelisting is a last-resort, and should only be used in situations where it’s impossible to scan certain content for class names.
  // https://tailwindcss.com/docs/content-configuration#safelisting-classes
  safelist: [],

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
