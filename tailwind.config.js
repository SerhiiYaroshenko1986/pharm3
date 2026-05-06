/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts,css,scss}',
    './src/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#33E1AA',
          50: '#EDFAF5',
          100: '#C5F0E2',
          200: '#87E5CB',
          300: '#59D9B4',
          400: '#3BD0A9',
          500: '#33E1AA',
          600: '#1CBF8E',
          700: '#14906C',
          800: '#0D624F',
          900: '#061E21',
        },
        neutral: {
          50: '#F9F9FC',
          100: '#F4F4F4',
          200: '#E9E9E9',
          300: '#CFD4D4',
          400: '#A8AFAF',
          500: '#777777',
          600: '#525252',
          700: '#363F3F',
          800: '#272323',
          900: '#061E21',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1.5' }],
        'sm': ['0.875rem', { lineHeight: '1.6' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'lg': ['1.125rem', { lineHeight: '1.6' }],
        'xl': ['1.25rem', { lineHeight: '1.5' }],
        '2xl': ['1.5rem', { lineHeight: '1.4' }],
        '3xl': ['1.875rem', { lineHeight: '1.3' }],
        '4xl': ['2.25rem', { lineHeight: '1.25' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        'card': '6px',
        'button': '6px',
      },
      boxShadow: {
        'soft': '0 0 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 0 15px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 0 20px rgba(0, 0, 0, 0.08)',
        'soft-xl': '5px 12px 30px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: {
        'container': '1280px',
      },
    },
  },
  plugins: [],
}

