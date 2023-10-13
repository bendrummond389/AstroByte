import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        text: {
          50: '#fefbe6',
          100: '#fef6cd',
          200: '#fcee9c',
          300: '#fbe56a',
          400: '#fadd38',
          500: '#f9d406',
          600: '#c7aa05',
          700: '#957f04',
          800: '#635503',
          900: '#322a01',
          950: '#191501',
        },
        background: {
          50: '#f1e5ff',
          100: '#e4ccff',
          200: '#c999ff',
          300: '#ad66ff',
          400: '#9233ff',
          500: '#7700ff',
          600: '#5f00cc',
          700: '#470099',
          800: '#300066',
          900: '#180033',
          950: '#0c001a',
        },
        primary: {
          50: '#ebecf9',
          100: '#d7d8f4',
          200: '#b0b2e8',
          300: '#888bdd',
          400: '#6165d1',
          500: '#393ec6',
          600: '#2e329e',
          700: '#222577',
          800: '#17194f',
          900: '#0b0c28',
          950: '#060614',
        },
        secondary: {
          50: '#eafbf2',
          100: '#d4f7e4',
          200: '#aaeeca',
          300: '#7fe6af',
          400: '#55dd94',
          500: '#2ad57a',
          600: '#22aa61',
          700: '#198049',
          800: '#115531',
          900: '#082b18',
          950: '#04150c',
        },
        accent: {
          50: '#f3fbea',
          100: '#e7f7d4',
          200: '#ceeeaa',
          300: '#b6e67f',
          400: '#9edd55',
          500: '#85d52a',
          600: '#6baa22',
          700: '#508019',
          800: '#355511',
          900: '#1b2b08',
          950: '#0d1504',
        },
        custom: {
          100: '#17000D',
          200: '#EF5B61',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
export default config
