/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      scale: {
        '200': '2',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    require('flowbite/plugin'),
  ],
};
