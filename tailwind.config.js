/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.handlebars',
    './views/*.handlebars',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
