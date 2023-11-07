const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: defaultTheme.fontFamily.sans,
      },
      fontSize: {
        10: ['0.625rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        12: ['0.75rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        13: ['0.8125rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        14: ['0.875rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        15: ['0.9375rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        16: ['1rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        17: ['1.0625rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        18: ['1.125rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        19: ['1.1875rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        20: ['1.25rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        24: ['1.5rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        28: ['1.75rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        29: ['1.8125rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        30: ['1.875rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        31: ['1.9375rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
        32: ['2rem', { lineHeight: 1, letterSpacing: '-0.25px' }],
      },

      spacing: {
        px: '1px',
        0: '0',
        0.5: '0.125rem',
        1: '0.25rem',
        1.5: '0.375rem',
        2: '0.5rem',
        2.5: '0.625rem',
        3: '0.75rem',
        3.5: '0.875rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
        11: '2.75rem',
        12: '3rem',
        14: '3.5rem',
        16: '4rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      },

      borderRadius: {
        xs: '0.125rem',
        sm: '0.25rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '4xl': '2rem',
        '8xl': '2.5rem',
      },
    },

    minWidth: {
      mobile: '360px',
    },

    maxWidth: {
      mobile: '428px',
    },

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      main: { default: '#D4F153', disabled: '#C5D2AA' },
      line: { main: '#EAEAEA' },
      error: { main: '#FF4747' },
      success: { main: '#14BC58' },
      bg: { main: '#242424' },

      gray: {
        100: '#DEE2E6',
        200: '#ADB5BD',
        300: '#3F3F3F',
        black: '#121212',
      },

      grayText: {
        100: '#A7A7A7',
        200: '#556029',
      },

      white: '#ffffff',
      black: '#000000',
      transparent: 'transparent',
      current: 'currentColor',
    },
  },
  plugins: [],
};
