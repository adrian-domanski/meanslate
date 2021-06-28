module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 7px 14px 0px rgba(0,0,0,0.16)',
      },
      colors: {
        theme: '#f8b131',
        themeDarker: '#f4882d',
        themeDarkest: '#e5761a',
        black: '#2b2b2b',
        lightGray: '#dbd8d8',
        textColor: '#222629',
      },
      letterSpacing: {
        huge: '0.2em',
      },
      zIndex: {
        '-10': '-10',
      },
      screens: {
        '3xl': '1600px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwindcss-textshadow')],
};
