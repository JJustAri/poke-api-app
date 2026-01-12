// Configuration PostCSS
// Ce fichier active les plugins utilisés pour la transformation CSS
// (Tailwind et autoprefixer)
module.exports = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('autoprefixer'),
  ],
};

