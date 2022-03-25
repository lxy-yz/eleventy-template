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
        gray: colors.slate,
        // primary
        primary: colors.indigo,
        // accent
        // https://adevade.github.io/color-scheme-generator/
        ...require("@ky-is/tailwind-color-palette")("tomato", {
          grayscale: false,
          ui: true,
        }),

        boxShadow: {
          "r-lg":
            "10px 0 15px -3px rgb(0 0 0 / 0.1), 4px 0 6px -4px rgb(0 0 0 / 0.1);",
        },

        fontFamily: {
          // https://fonts.google.com/specimen/Josefin+Sans?category=Sans+Serif&sort=popularity&stylecount=10
          display: ["Josefin Sans", "Helvetica", "sans-serif"],
        },
      },
    },
  },
  variants: {},
  plugins: [],
}
