export default {
  theme: {
    extend: {
      fontFamily: {
        sans: `IBM Plex Sans, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '4rem',
       },
       colors: {
        'dad-blue': '#101DAD',
        'dad-blue-dark': '#0B1475',
        'dad-yellow': '#DAD101',
        'dad-yellow-dark': '#B0A904',
      }
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     }
  },
};
