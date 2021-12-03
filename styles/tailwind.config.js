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
      colors: {
        primary: colors.indigo,
        secondary: colors.amber,
        accent: colors.pink,
      },
    },
  },
  variants: {},
  plugins: [],
}
