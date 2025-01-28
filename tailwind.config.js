module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        '5.4xl': '3.4rem', // Customize this value as needed
      },
      fontFamily: {
        'smooch': ['"Smooch Sans"', 'serif'],
        'press-start': ['"Press Start 2P"', 'serif'],
      },
    },
  },
  plugins: [require('daisyui')],
}
