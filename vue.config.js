const ps = require('process');
const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        ANCHORE_URL: ps.env.ANCHORE_URL,
      }),
    ],
  },
};
