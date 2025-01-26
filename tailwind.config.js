module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '5.4xl': '3.4rem', // Customize this value as needed
      },
      fontFamily: {
        'smooch-sans': ['"Smooch Sans"', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
