module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
    ...(process.env.JEKYLL_ENV === 'production'
      ? [require('cssnano')({ preset: 'default' })]
      : []),
  ],
};
