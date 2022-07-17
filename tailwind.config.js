/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    './views/**/*.handlebars',
    './views/*.handlebars',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
