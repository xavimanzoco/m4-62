/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: {
          DEFAULT: '#FB8C00',
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          300: '#FFB74D',
          400: '#FFA726',
          500: '#FB8C00',
          600: '#F57C00',
          700: '#EF6C00',
          800: '#E65100',
          900: '#BF360C',
        },
        secondary: {
          DEFAULT: '#FAF0E6',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FDF7F2',
          500: '#FAF0E6',
          600: '#F0D9C2',
          700: '#E6C29E',
          800: '#DCAB7A',
          900: '#D29456',
        }
      }
      }
    },
  
  plugins: [],
}

