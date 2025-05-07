module.exports = {
    plugins: [
      require('@tailwindcss/postcss')({
        config: './tailwind.config.js', // 必要ならパス指定
      }),
      require('autoprefixer'),
    ],
  };
