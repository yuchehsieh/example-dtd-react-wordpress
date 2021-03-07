module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Tailwind can tree-shake unused styles in production builds:
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Adds a new breakpoint in addition to the default breakpoints
      padding: {
        'dtd-padding': '2rem',
      },
      spacing: {
        'dtd-spacing': '2rem',
      },
      colors: {
        'dtd-primary': '#419BD7',
        'dtd-secondary': '#A6E2DF',
        'dtd-general-text-color': '#444444',
        'dtd-caption-text-color': '#626262',
        'dtd-division-color': '#DDDDDD',
        'dtd-submenu-bg': '#F2F2F2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
