/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/layouts/main.handlebars',
    './js/logout.js',
    './views/login.handlebars',
    './js/login.js',

  ],
  theme: {
    colors: {
  
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),],
}
