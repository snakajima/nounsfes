module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'londrina': ['Londrina Solid'],
        'pt-root': ['PT Root UI', 'sans-serif']
      },
    },
  },
  plugins: [],
}
