module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      boxShadow: {
        pink: '0px 4px 14px rgba(255, 109, 214, 0.3);',
      },
      colors: {
        primary: '#131518',
        pink: '#FF6DD6',
        gray: '#A4A4A4',
      },
      backgroundImage: (_) => ({
        'black-gradient': 'linear-gradient(90deg, #15161C 0%, #0D1015 100%);',
      }),
    },
    fontFamily: {
      sans: ['Poppins'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
