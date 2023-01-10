/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
      screens: {
          xxs: '375px',

          xs: '400px',

          xs2: '500px',

          xs3: '550px',

          sm: '640px',

          sm2: '700px',

          md: '768px',

          md2: '900px',

          lg: '1024px',

          lg2: '1200px',

          xl: '1280px',

          '2xl': '1536px',
      },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
