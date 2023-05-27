/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    gradients: {
      gradient: ['30deg', 'rgba(0, 255, 149, 1)', 'rgba(107, 255, 218, 1)']
    },
    extend: {
      backgroundImage: () => ({
        gradient: 'linear-gradient(to left, #00ff95, #6bffda)'
      }),
      gradients: {
        gradient: ['30deg', 'rgba(0, 255, 149, 1)', 'rgba(107, 255, 218, 1)']
      },
      variants: {
        gradients: ['responsive', 'hover']
      },
      extend: {}
    }
  }
}
