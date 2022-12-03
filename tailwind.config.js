/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
    "/src/pages/privacy-policy.jsx",
    "node_modules/flowbite-react/**/*.js",
    "node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,
        gray: colors.gray,
      },
    },
  },
  plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("flowbite/plugin")
  ],
}
