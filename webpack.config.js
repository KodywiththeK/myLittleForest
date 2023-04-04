module.exports = {
  test: /\.(gif|png|jpe?g|svg)$/i,
  use: [
    {
      loader: 'file-loader',
      options: {
        outputPath: 'images',
        name: '[name].[ext]',
      },
    },
    {
      loader: 'image-webpack-loader',
      options: {
        mozjpeg: {
          progressive: true,
          quality: 65,
        },
        optipng: { enabled: false },
        pngquant: { quality: [0.65, 0.9], speed: 4 },
        gifsicle: { interlaced: false },
        webp: { quality: 75 },
        fallback: 'file-loader',
      },
    },
  ],
};
