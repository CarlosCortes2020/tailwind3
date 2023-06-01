/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.*", "./public/*.*"],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('../tailwind3/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('../tailwind3/public/img/sanFranciscoDesktop.jpg')",
        'bali': "url('../tailwind3/public/img/bali.jpg')",
        'chicago': "url('../tailwind3/public/img/chicago.jpg')",
        'europe': "url('../tailwind3/public/img/europe.jpg')",
        'iceland': "url('../tailwind3/public/img/iceland.jpg')",
        'LA': "url('../tailwind3/public/img/LA.jpg')",
        'miami': "url('../tailwind3/public/img/miami.jpg')",
        'new_york': "url('../tailwind3/public/img/new_york.jpg')",
        'norway': "url('../tailwind3/public/img/norway.jpg')",
        'seattle': "url('../tailwind3/public/img/seattle.jpg')",
        'switzerland': "url('../tailwind3/public/img/switzerland.jpg')",
        'sydney': "url('../tailwind3/public/img/sydney.jpg')",
        'yosemite': "url('../tailwind3/public/img/yosemite.jpg')",
      },
    },
  },
  plugins: [],
}

