/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/vecteezy_judge-gavel2.jpg')",
        'hero-pattern2': "url('/judge1.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      fontWeight: {
        'lightText': "font-extralight"
      }
    },
  },
  plugins: [],
}

